import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertStationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  app.use("/api", (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });

  // Get all railway stations
  app.get("/api/stations", async (req, res) => {
    try {
      const stations = await storage.getAllStations();
      res.status(200).json(stations);
    } catch (error) {
      res.status(500).json({ message: "Error fetching stations", error: (error as Error).message });
    }
  });

  // Get a single railway station by ID
  app.get("/api/stations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid station ID" });
      }

      const station = await storage.getStation(id);
      if (!station) {
        return res.status(404).json({ message: "Station not found" });
      }

      res.status(200).json(station);
    } catch (error) {
      res.status(500).json({ message: "Error fetching station", error: (error as Error).message });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid form data", errors: error.errors });
      }
      res.status(500).json({ message: "Error submitting contact form", error: (error as Error).message });
    }
  });

  // Get financial simulator settings
  app.get("/api/financial-settings", async (req, res) => {
    try {
      const settings = await storage.getFinancialSettings();
      res.status(200).json(settings);
    } catch (error) {
      res.status(500).json({ message: "Error fetching financial settings", error: (error as Error).message });
    }
  });

  // Calculate financial projection
  app.post("/api/financial-projection", async (req, res) => {
    try {
      const { terrenos, ufValue, superficie, vanRate } = req.body;
      
      if (!terrenos || !ufValue || !superficie || !vanRate) {
        return res.status(400).json({ message: "Missing required parameters" });
      }

      // UF value in CLP (Chilean Pesos)
      const ufToCLP = 35000; // Approximate value

      // Calculate monthly income based on inputs
      const monthlyIncomePerM2 = parseFloat(ufValue) * ufToCLP;
      const totalArea = parseInt(terrenos) * parseInt(superficie);
      const monthlyGross = totalArea * monthlyIncomePerM2;
      
      // Calculate profits
      const monthlyInversionesProfit = monthlyGross * 0.2; // 20% of gross
      const monthlyInvestorProfit = monthlyInversionesProfit * 0.1; // 10% of Inversiones profit
      const monthlyNetFlow = monthlyInversionesProfit - monthlyInvestorProfit;

      // Calculate VAN (NPV)
      const initialInvestment = 960000000; // Base investment for 100 terrenos
      const scaleFactor = parseInt(terrenos) / 100;
      const adjustedInvestment = initialInvestment * scaleFactor;
      
      // Simplified NPV calculation
      const monthlyNetCashFlow = monthlyNetFlow;
      const months = 60; // 5 years
      const monthlyRate = parseInt(vanRate) / 100 / 12;
      
      let npvSum = 0;
      for (let i = 1; i <= months; i++) {
        npvSum += monthlyNetCashFlow / Math.pow(1 + monthlyRate, i);
      }
      
      const van = npvSum - adjustedInvestment;
      
      // Calculate TIR (IRR) - simplified approximation
      let tir = 0;
      switch (parseInt(terrenos)) {
        case 100:
          tir = 40 + Math.round((parseFloat(ufValue) - 0.01) * 500);
          break;
        case 200:
          tir = 50 + Math.round((parseFloat(ufValue) - 0.01) * 500);
          break;
        case 300:
          tir = 60 + Math.round((parseFloat(ufValue) - 0.01) * 500);
          break;
        case 400:
          tir = 65 + Math.round((parseFloat(ufValue) - 0.01) * 500);
          break;
        default:
          tir = 40;
      }
      
      // Calculate payback period (in months)
      const payback = Math.ceil(adjustedInvestment / monthlyNetFlow);

      res.status(200).json({
        van: Math.round(van / 1000000), // in millions
        tir,
        payback,
        monthlyGross,
        monthlyInversionesProfit,
        monthlyInvestorProfit,
        monthlyNetFlow,
      });
    } catch (error) {
      res.status(500).json({ message: "Error calculating financial projection", error: (error as Error).message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
