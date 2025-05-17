import { 
  users, type User, type InsertUser,
  contactSubmissions, type Contact, type InsertContact,
  railwayStations, type Station, type InsertStation,
  financialSettings, type FinancialSettings, type InsertFinancialSettings
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  // Station methods
  getStation(id: number): Promise<Station | undefined>;
  getAllStations(): Promise<Station[]>;
  createStation(station: InsertStation): Promise<Station>;
  updateStationStatus(id: number, status: string): Promise<Station | undefined>;
  
  // Financial settings methods
  getFinancialSettings(): Promise<FinancialSettings[]>;
  createFinancialSettings(settings: InsertFinancialSettings): Promise<FinancialSettings>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private stations: Map<number, Station>;
  private financialSettings: Map<number, FinancialSettings>;
  private userId: number;
  private contactId: number;
  private stationId: number;
  private settingsId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.stations = new Map();
    this.financialSettings = new Map();
    this.userId = 1;
    this.contactId = 1;
    this.stationId = 1;
    this.settingsId = 1;
    
    // Populate with sample railway stations
    this.initSampleStations();
    this.initSampleFinancialSettings();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  // Station methods
  async getStation(id: number): Promise<Station | undefined> {
    return this.stations.get(id);
  }
  
  async getAllStations(): Promise<Station[]> {
    return Array.from(this.stations.values());
  }
  
  async createStation(insertStation: InsertStation): Promise<Station> {
    const id = this.stationId++;
    const station: Station = { ...insertStation, id };
    this.stations.set(id, station);
    return station;
  }
  
  async updateStationStatus(id: number, status: string): Promise<Station | undefined> {
    const station = this.stations.get(id);
    if (!station) return undefined;
    
    const updatedStation = { ...station, status };
    this.stations.set(id, updatedStation);
    return updatedStation;
  }
  
  // Financial settings methods
  async getFinancialSettings(): Promise<FinancialSettings[]> {
    return Array.from(this.financialSettings.values());
  }
  
  async createFinancialSettings(insertSettings: InsertFinancialSettings): Promise<FinancialSettings> {
    const id = this.settingsId++;
    const settings: FinancialSettings = { ...insertSettings, id };
    this.financialSettings.set(id, settings);
    return settings;
  }
  
  // Initialize sample stations data
  private initSampleStations() {
    const sampleStations: InsertStation[] = [
      { name: "La Calera", lat: "-32.787", lng: "-71.206", area: 15000, status: "available", description: "Strategic location with railway access" },
      { name: "Llay Llay", lat: "-32.841", lng: "-70.966", area: 12000, status: "available", description: "Industrial zone with multiple connection points" },
      { name: "Los Andes", lat: "-32.833", lng: "-70.597", area: 8500, status: "available", description: "Border location with Argentina access" },
      { name: "San Felipe", lat: "-32.751", lng: "-70.725", area: 10200, status: "available", description: "Agricultural hub with logistic potential" },
      { name: "Cabildo", lat: "-32.419", lng: "-71.076", area: 9800, status: "available", description: "Mining support infrastructure" },
      { name: "Illapel", lat: "-31.636", lng: "-71.166", area: 18500, status: "available", description: "Central location with expansion potential" },
      { name: "Ovalle", lat: "-30.601", lng: "-71.199", area: 22000, status: "available", description: "Agricultural and mining connection point" },
      { name: "La Serena", lat: "-29.907", lng: "-71.252", area: 30000, status: "rented", description: "Tourist and commercial hub" },
      { name: "Vallenar", lat: "-28.576", lng: "-70.759", area: 25000, status: "available", description: "Mining industry support" },
      { name: "Copiapó", lat: "-27.366", lng: "-70.332", area: 35000, status: "available", description: "Major mining center with railway connections" },
      { name: "Chañaral", lat: "-26.345", lng: "-70.620", area: 16000, status: "available", description: "Coastal access with port proximity" },
      { name: "Antofagasta", lat: "-23.650", lng: "-70.400", area: 40000, status: "available", description: "Major industrial center with port" },
      { name: "Tocopilla", lat: "-22.092", lng: "-70.193", area: 18000, status: "available", description: "Energy hub with industrial potential" },
      { name: "Iquique", lat: "-20.213", lng: "-70.152", area: 50000, status: "available", description: "Northern commercial center with ZOFRI free zone" },
    ];
    
    sampleStations.forEach(station => {
      const id = this.stationId++;
      this.stations.set(id, { ...station, id });
    });
  }
  
  // Initialize sample financial settings
  private initSampleFinancialSettings() {
    const scenarios = [
      { terrenosCount: 100, ufValue: "0.01", superficieAvg: 10000, vanRate: 15, van: 8542, tir: 40, payback: 18 },
      { terrenosCount: 200, ufValue: "0.01", superficieAvg: 10000, vanRate: 15, van: 17084, tir: 50, payback: 14 },
      { terrenosCount: 300, ufValue: "0.01", superficieAvg: 10000, vanRate: 15, van: 25626, tir: 60, payback: 12 },
      { terrenosCount: 400, ufValue: "0.01", superficieAvg: 10000, vanRate: 15, van: 34168, tir: 65, payback: 10 },
    ];
    
    scenarios.forEach(scenario => {
      const id = this.settingsId++;
      this.financialSettings.set(id, { ...scenario, id });
    });
  }
}

export const storage = new MemStorage();
