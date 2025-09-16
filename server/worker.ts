/**
 * Cloudflare Workers entry point
 * Este archivo es específico para deployment en Cloudflare Workers
 */

import { httpServerHandler } from 'cloudflare:node';
import { createServer } from 'node:http';
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

async function createApp() {
  const app = express();

  // Middleware básico para Workers
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Logger simplificado para Workers
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
        console.log(logLine);
      }
    });

    next();
  });

  // Registrar rutas API
  await registerRoutes(app);

  // Manejador de errores
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    console.error(`Error ${status}: ${message}`, err);
  });

  // Note: Static assets are served by Wrangler [assets], not Express middleware
  console.log('🚀 App configurada para Cloudflare Workers');
  return app;
}

// Crear servidor HTTP y exportar handler para Cloudflare Workers
const app = await createApp();
const server = createServer(app);
export default httpServerHandler(server);