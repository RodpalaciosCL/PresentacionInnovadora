import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// --- Middleware: redirige www.invenor.group → invenor.group + fuerza HTTPS ---
app.use((req, res, next) => {
  const host = req.headers.host ?? "";
  const isProd = app.get("env") === "production";
  const isWWW = host.startsWith("www.");
  const isHTTP = req.protocol === "http";

  if (isProd) {
    // si viene con www
    if (isWWW) {
      const newHost = host.replace(/^www\./, "");
      return res.redirect(301, `https://${newHost}${req.url}`);
    }
    // si viene por HTTP
    if (isHTTP) {
      return res.redirect(301, `https://${host}${req.url}`);
    }
  }

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Logger de endpoints API ---
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  // Registrar todas tus rutas bajo /api, etc.
  const server = await registerRoutes(app);

  // Manejador de errores
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Vite en desarrollo / Static en producción
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Siempre puerto 5000 para deployment tradicional
  const port = 5000;
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`🚀 App servida en puerto ${port}`);
    }
  );
})();
