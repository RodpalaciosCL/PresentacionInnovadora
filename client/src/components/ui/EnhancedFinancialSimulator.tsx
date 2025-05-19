import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeIn } from "@/lib/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define types for station areas
interface StationArea {
  id: number;
  m2: number;
  lease: number;
  leasePeriod: number;
  monthlyValue: number;
  additionalInfo?: string;
}

// Define station area data
const stationAreas: StationArea[] = [
  { id: 1, m2: 3000, lease: 5850, leasePeriod: 240, monthlyValue: 2633 },
  { id: 2, m2: 5000, lease: 9750, leasePeriod: 240, monthlyValue: 5850 },
  { id: 3, m2: 10000, lease: 19500, leasePeriod: 240, monthlyValue: 11700 },
  { id: 4, m2: 20000, lease: 39000, leasePeriod: 240, monthlyValue: 11700 },
  { id: 5, m2: 30000, lease: 58500, leasePeriod: 240, monthlyValue: 26325 },
  { id: 6, m2: 40000, lease: 97500, leasePeriod: 240, monthlyValue: 29250, additionalInfo: "PARTICIPACIÓN" },
  { id: 7, m2: 50000, lease: 136500, leasePeriod: 240, monthlyValue: 40950, additionalInfo: "PARTICIPACIÓN" }
];

// Define investment structure types
interface InvestmentStructure {
  id: string;
  name: string;
  value: number;
  description: string;
}

// Define investment data
const investmentStructure: InvestmentStructure[] = [
  { id: "capex", name: "CAPEX", value: 100000, description: "PAGO INICIAL" },
  { id: "opex", name: "OPEX", value: 619300, description: "12 MESES, INYECCIÓN MENSUAL USD 51,608" },
  { id: "total", name: "TOTAL INVERSIÓN", value: 719300, description: "1 AÑO PERÍODO" }
];

// Phase structure for investment phases
interface PhaseStructure {
  id: number;
  name: string;
  paybackMonths: number;
  description: string;
  monthlyProfit: number;
  annualProfit: number;
  profit10Years: number;
  profit20Years: number;
}

const phaseStructure: PhaseStructure[] = [
  { 
    id: 1, 
    name: "Fase 1", 
    paybackMonths: 6.25, 
    description: "Desde el sexto mes en adelante (10 años mínimo)",
    monthlyProfit: 115110,
    annualProfit: 1381320,
    profit10Years: 13813200,
    profit20Years: 27626400
  },
  { 
    id: 2, 
    name: "Fase 2", 
    paybackMonths: 28, 
    description: "Desde el primer mes (Se promedian las 100 estaciones arrendadas en 28 meses)",
    monthlyProfit: 128408,
    annualProfit: 1540890,
    profit10Years: 15408900,
    profit20Years: 30817800
  },
  { 
    id: 3, 
    name: "Fase 1 + 2", 
    paybackMonths: 28, 
    description: "Suma: Fase 1 + Fase 2",
    monthlyProfit: 243518,
    annualProfit: 2922210,
    profit10Years: 29222100,
    profit20Years: 58444200
  }
];

interface UseCase {
  id: number;
  name: string;
  leasePeriod: number;
  monthlyLease: number;
  annualTotal: number;
  total10Years: number;
  total20Years: number;
}

const useCases: UseCase[] = [
  { id: 1, name: "Hotel Minero", leasePeriod: 240, monthlyLease: 1500000, annualTotal: 18000000, total10Years: 180000000, total20Years: 360000000 },
  { id: 2, name: "Estación de Servicio", leasePeriod: 240, monthlyLease: 70000, annualTotal: 840000, total10Years: 8400000, total20Years: 16800000 },
  { id: 3, name: "Centro Logístico", leasePeriod: 240, monthlyLease: 40000, annualTotal: 480000, total10Years: 4800000, total20Years: 9600000 },
  { id: 4, name: "Supermercado", leasePeriod: 240, monthlyLease: 50000, annualTotal: 600000, total10Years: 6000000, total20Years: 12000000 },
  { id: 5, name: "Data Center", leasePeriod: 240, monthlyLease: 1500000, annualTotal: 18000000, total10Years: 180000000, total20Years: 360000000 },
  { id: 6, name: "Energía Solar", leasePeriod: 240, monthlyLease: 500000, annualTotal: 6000000, total10Years: 60000000, total20Years: 120000000 },
  { id: 7, name: "Desarrollo Comercial", leasePeriod: 240, monthlyLease: 35000, annualTotal: 420000, total10Years: 4200000, total20Years: 8400000 }
];

export const EnhancedFinancialSimulator: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });
  
  const [activeTab, setActiveTab] = useState<string>("stations");
  const [selectedArea, setSelectedArea] = useState<number>(3);
  const [selectedUseCase, setSelectedUseCase] = useState<number>(1);
  const [selectedPhase, setSelectedPhase] = useState<number>(1);
  const [stationCount, setStationCount] = useState<number>(15);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0);
  const [annualRevenue, setAnnualRevenue] = useState<number>(0);
  const [years10Revenue, setYears10Revenue] = useState<number>(0);
  const [years20Revenue, setYears20Revenue] = useState<number>(0);
  
  // Calculate revenues when parameters change
  useEffect(() => {
    const area = stationAreas.find(area => area.id === selectedArea);
    if (area) {
      const monthly = area.monthlyValue * stationCount;
      setMonthlyRevenue(monthly);
      setAnnualRevenue(monthly * 12);
      setYears10Revenue(monthly * 12 * 10);
      setYears20Revenue(monthly * 12 * 20);
    }
  }, [selectedArea, stationCount]);

  const handleAreaChange = (value: string) => {
    setSelectedArea(parseInt(value));
  };
  
  const handleUseCaseChange = (value: string) => {
    setSelectedUseCase(parseInt(value));
  };
  
  const handlePhaseChange = (value: string) => {
    setSelectedPhase(parseInt(value));
  };
  
  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  };

  return (
    <motion.div 
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      className="bg-white rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-6 border-b border-neutral-200">
        <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">
          Simulador Financiero Avanzado
        </h3>
        <p className="text-neutral-600 mb-6">
          Explore diferentes escenarios y combinaciones para evaluar el potencial de inversión en las estaciones ferroviarias.
        </p>
        
        <Tabs defaultValue="stations" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="stations">Estaciones</TabsTrigger>
            <TabsTrigger value="investment">Inversión</TabsTrigger>
            <TabsTrigger value="phases">Fases</TabsTrigger>
          </TabsList>
          
          <TabsContent value="stations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="area-select">Superficie (m²)</Label>
                <Select 
                  defaultValue={selectedArea.toString()} 
                  onValueChange={handleAreaChange}
                >
                  <SelectTrigger id="area-select">
                    <SelectValue placeholder="Seleccionar superficie" />
                  </SelectTrigger>
                  <SelectContent>
                    {stationAreas.map(area => (
                      <SelectItem key={area.id} value={area.id.toString()}>
                        {area.m2.toLocaleString()} m²
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="station-count">Cantidad de terrenos</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="station-count"
                    min={5}
                    max={100}
                    step={5}
                    value={[stationCount]}
                    onValueChange={(vals) => setStationCount(vals[0])}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-mono">{stationCount}</span>
                </div>
              </div>
              
              <div>
                <Label htmlFor="use-case">Caso de uso principal</Label>
                <Select 
                  defaultValue={selectedUseCase.toString()} 
                  onValueChange={handleUseCaseChange}
                >
                  <SelectTrigger id="use-case">
                    <SelectValue placeholder="Seleccionar uso" />
                  </SelectTrigger>
                  <SelectContent>
                    {useCases.map(useCase => (
                      <SelectItem key={useCase.id} value={useCase.id.toString()}>
                        {useCase.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detalles del terreno seleccionado</CardTitle>
                  <CardDescription>
                    Información sobre superficie de {stationAreas.find(a => a.id === selectedArea)?.m2.toLocaleString()} m²
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Superficie</TableHead>
                        <TableHead>Valor Arriendo</TableHead>
                        <TableHead>Plazo Contrato</TableHead>
                        <TableHead>Valor Mensual</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stationAreas
                        .filter(area => area.id === selectedArea)
                        .map(area => (
                        <TableRow key={area.id}>
                          <TableCell className="font-medium">{area.m2.toLocaleString()} m²</TableCell>
                          <TableCell>{formatCurrency(area.lease)}</TableCell>
                          <TableCell>{area.leasePeriod} meses</TableCell>
                          <TableCell>{formatCurrency(area.monthlyValue)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  {stationAreas.find(a => a.id === selectedArea)?.additionalInfo && (
                    <div className="mt-4 p-3 bg-secondary/10 rounded-md text-sm">
                      <strong>Nota:</strong> {stationAreas.find(a => a.id === selectedArea)?.additionalInfo}
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ingresos proyectados</CardTitle>
                  <CardDescription>
                    Para {stationCount} terrenos de {stationAreas.find(a => a.id === selectedArea)?.m2.toLocaleString()} m²
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-sm text-neutral-500 mb-1">Ingreso Mensual</div>
                      <div className="text-2xl font-mono font-bold text-primary">{formatCurrency(monthlyRevenue)}</div>
                    </div>
                    
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-sm text-neutral-500 mb-1">Ingreso Anual</div>
                      <div className="text-2xl font-mono font-bold text-primary">{formatCurrency(annualRevenue)}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <div className="text-sm text-neutral-500 mb-1">10 Años</div>
                        <div className="text-xl font-mono font-bold text-primary">{formatCurrency(years10Revenue)}</div>
                      </div>
                      
                      <div className="p-4 bg-neutral-50 rounded-lg">
                        <div className="text-sm text-neutral-500 mb-1">20 Años</div>
                        <div className="text-xl font-mono font-bold text-primary">{formatCurrency(years20Revenue)}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="investment" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Estructura de inversión</CardTitle>
                  <CardDescription>
                    Desglose de la inversión inicial requerida
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Concepto</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Distribución</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {investmentStructure.map(item => (
                        <TableRow key={item.id} className={item.id === "total" ? "bg-neutral-50 font-medium" : ""}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{formatCurrency(item.value)}</TableCell>
                          <TableCell>{item.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Casos de uso - Ingresos</CardTitle>
                  <CardDescription>
                    Ingresos por tipo de uso de terreno en USD
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select 
                    defaultValue={selectedUseCase.toString()} 
                    onValueChange={handleUseCaseChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar uso" />
                    </SelectTrigger>
                    <SelectContent>
                      {useCases.map(useCase => (
                        <SelectItem key={useCase.id} value={useCase.id.toString()}>
                          {useCase.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="mt-6">
                    {useCases
                      .filter(useCase => useCase.id === selectedUseCase)
                      .map(useCase => (
                        <div key={useCase.id} className="space-y-4">
                          <div className="p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-500 mb-1">Arriendo Mensual</div>
                            <div className="text-2xl font-mono font-bold text-primary">{formatCurrency(useCase.monthlyLease)}</div>
                          </div>
                          
                          <div className="p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-500 mb-1">Total Anual</div>
                            <div className="text-2xl font-mono font-bold text-primary">{formatCurrency(useCase.annualTotal)}</div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-neutral-50 rounded-lg">
                              <div className="text-sm text-neutral-500 mb-1">Total 10 Años</div>
                              <div className="text-xl font-mono font-bold text-primary">{formatCurrency(useCase.total10Years)}</div>
                            </div>
                            
                            <div className="p-4 bg-neutral-50 rounded-lg">
                              <div className="text-sm text-neutral-500 mb-1">Total 20 Años</div>
                              <div className="text-xl font-mono font-bold text-primary">{formatCurrency(useCase.total20Years)}</div>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-secondary/10 rounded-md text-sm">
                            <strong>Duración del contrato:</strong> {useCase.leasePeriod} meses
                          </div>
                        </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="phases" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fases de inversión</CardTitle>
                  <CardDescription>
                    Seleccione una fase para ver sus detalles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select 
                    defaultValue={selectedPhase.toString()} 
                    onValueChange={handlePhaseChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar fase" />
                    </SelectTrigger>
                    <SelectContent>
                      {phaseStructure.map(phase => (
                        <SelectItem key={phase.id} value={phase.id.toString()}>
                          {phase.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="mt-6">
                    {phaseStructure
                      .filter(phase => phase.id === selectedPhase)
                      .map(phase => (
                        <div key={phase.id} className="space-y-4">
                          <div className="p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-500 mb-1">Payback (meses)</div>
                            <div className="text-2xl font-mono font-bold text-primary">{phase.paybackMonths}</div>
                          </div>
                          
                          <div className="p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-500 mb-1">Descripción</div>
                            <div className="font-medium">{phase.description}</div>
                          </div>
                        </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Utilidad proyectada</CardTitle>
                  <CardDescription>
                    {phaseStructure.find(p => p.id === selectedPhase)?.name || "Fase 1"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {phaseStructure
                    .filter(phase => phase.id === selectedPhase)
                    .map(phase => (
                      <div key={phase.id} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-500 mb-1">Utilidad Mensual</div>
                            <div className="text-xl font-mono font-bold text-primary">{formatCurrency(phase.monthlyProfit)}</div>
                          </div>
                          
                          <div className="p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-500 mb-1">Utilidad Anual</div>
                            <div className="text-xl font-mono font-bold text-primary">{formatCurrency(phase.annualProfit)}</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-500 mb-1">Utilidad 10 Años</div>
                            <div className="text-xl font-mono font-bold text-primary">{formatCurrency(phase.profit10Years)}</div>
                          </div>
                          
                          <div className="p-4 bg-neutral-50 rounded-lg">
                            <div className="text-sm text-neutral-500 mb-1">Utilidad 20 Años</div>
                            <div className="text-xl font-mono font-bold text-primary">{formatCurrency(phase.profit20Years)}</div>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-secondary/10 rounded-md text-sm">
                          <strong>Nota sobre {phase.name}:</strong><br/>
                          {phase.id === 3 
                            ? "Esta proyección combina los resultados de las fases 1 y 2 para mostrar el impacto total del proyecto."
                            : `Payback estimado en ${phase.paybackMonths} meses con una utilidad mensual de ${formatCurrency(phase.monthlyProfit)}.`
                          }
                        </div>
                      </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default EnhancedFinancialSimulator;