import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table for authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull(),
  consent: boolean("consent").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Railway stations data
export const railwayStations = pgTable("railway_stations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  lat: text("lat").notNull(),
  lng: text("lng").notNull(),
  area: integer("area").notNull(), // in square meters
  status: text("status").notNull().default("available"), // available, rented
  description: text("description"),
});

// Financial simulator settings
export const financialSettings = pgTable("financial_settings", {
  id: serial("id").primaryKey(),
  terrenosCount: integer("terrenos_count").notNull(),
  ufValue: text("uf_value").notNull(),
  superficieAvg: integer("superficie_avg").notNull(),
  vanRate: integer("van_rate").notNull(),
  van: integer("van").notNull(),
  tir: integer("tir").notNull(),
  payback: integer("payback").notNull(),
});

// Schemas for data validation
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  company: true,
  message: true,
  consent: true,
});

export const insertStationSchema = createInsertSchema(railwayStations).pick({
  name: true,
  lat: true,
  lng: true,
  area: true,
  status: true,
  description: true,
});

export const insertFinancialSettingsSchema = createInsertSchema(financialSettings).pick({
  terrenosCount: true,
  ufValue: true,
  superficieAvg: true,
  vanRate: true,
  van: true,
  tir: true,
  payback: true,
});

// Types for TypeScript
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactSubmissions.$inferSelect;

export type InsertStation = z.infer<typeof insertStationSchema>;
export type Station = typeof railwayStations.$inferSelect;

export type InsertFinancialSettings = z.infer<typeof insertFinancialSettingsSchema>;
export type FinancialSettings = typeof financialSettings.$inferSelect;
