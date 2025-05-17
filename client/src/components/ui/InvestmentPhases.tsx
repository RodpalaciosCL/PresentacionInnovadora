import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PhaseData {
  id: number;
  name: string;
  paybackMonths: number;
  utilityMonthly: number;
  utilityAnnual: number;
  utility10Years: number;
  utility20Years: number;
  description: string;
}

const phaseData: PhaseData[] = [
  {
    id: 1, 
    name: "Fase 1", 
    paybackMonths: 6.25, 
    utilityMonthly: 115110, 
    utilityAnnual: 1381320, 
    utility10Years: 13813200, 
    utility20Years: 27626400,
    description: "Desde el sexto mes en adelante (10 años mínimo)"
  },
  {
    id: 2, 
    name: "Fase 2", 
    paybackMonths: 28, 
    utilityMonthly: 128408, 
    utilityAnnual: 1540890, 
    utility10Years: 15408900, 
    utility20Years: 30817800,
    description: "Desde el primer mes (Se promedian las 100 estaciones arrendadas en 28 meses)"
  },
  {
    id: 3, 
    name: "Fase 3", 
    paybackMonths: 28, 
    utilityMonthly: 243518, 
    utilityAnnual: 2922210, 
    utility10Years: 29222100, 
    utility20Years: 58444200,
    description: "Suma: Fase 1 + Fase 2"
  }
];

interface InvestmentDetails {
  capex: number;
  opex: number;
  totalInvestment: number;
  paybackMonths: number;
  tir: string;
  van: string;
}

const investmentDetails: InvestmentDetails = {
  capex: 100000,
  opex: 619300,
  totalInvestment: 719300,
  paybackMonths: 6.25,
  tir: "+484%",
  van: "USD 15.2 millones"
};

interface InvestmentPhasesProps {
  className?: string;
}

export const InvestmentPhases: React.FC<InvestmentPhasesProps> = ({ className }) => {
  const { t } = useLanguage();
  const [activePhase, setActivePhase] = useState<number>(1);
  
  const handlePhaseChange = (value: string) => {
    setActivePhase(parseInt(value));
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={`${className}`}
    >
      <motion.div variants={fadeIn} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Fases de Inversión</h3>
        <p className="text-neutral-600 mb-6">
          El proyecto está estructurado en fases que optimizan la inversión y maximizan el retorno. Cada fase incluye un conjunto específico de estaciones con diferentes características.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={fadeIn} className="order-2 lg:order-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Detalles Financieros</CardTitle>
              <CardDescription>Inversión y retorno proyectado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Inversión Total: USD {investmentDetails.totalInvestment.toLocaleString()}</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">CAPEX</p>
                    <p className="font-medium">USD {investmentDetails.capex.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">OPEX (12 meses)</p>
                    <p className="font-medium">USD {investmentDetails.opex.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Indicadores Financieros</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Payback</p>
                    <p className="font-medium">{investmentDetails.paybackMonths} meses</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">TIR (Anual)</p>
                    <p className="font-medium text-primary">{investmentDetails.tir}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">VAN</p>
                    <p className="font-medium text-primary">{investmentDetails.van}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Proyección 20 años</h4>
                <div className="space-y-3">
                  {phaseData.map((phase) => (
                    <div key={phase.id} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs">{phase.name}</span>
                        <span className="text-xs font-mono">USD {phase.utility20Years.toLocaleString()}</span>
                      </div>
                      <Progress value={phase.utility20Years / 60000000 * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeIn} className="order-1 lg:order-2">
          <Tabs defaultValue="1" className="w-full" onValueChange={handlePhaseChange}>
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="1">Fase 1</TabsTrigger>
              <TabsTrigger value="2">Fase 2</TabsTrigger>
              <TabsTrigger value="3">Fase 1+2</TabsTrigger>
            </TabsList>
            
            {phaseData.map((phase) => (
              <TabsContent key={phase.id} value={phase.id.toString()} className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>{phase.name}</CardTitle>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium mb-3">Período de Retorno</h4>
                        <p className="text-3xl font-mono font-bold text-primary">{phase.paybackMonths} <span className="text-lg">meses</span></p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-3">Utilidad Mensual</h4>
                        <p className="text-3xl font-mono font-bold text-secondary">USD {phase.utilityMonthly.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Utilidad Anual</span>
                          <span className="text-sm font-medium">USD {phase.utilityAnnual.toLocaleString()}</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Utilidad 10 Años</span>
                          <span className="text-sm font-medium">USD {phase.utility10Years.toLocaleString()}</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Utilidad 20 Años</span>
                          <span className="text-sm font-medium">USD {phase.utility20Years.toLocaleString()}</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-neutral-500">
                      {activePhase === 3 
                        ? "Fase combinada que muestra el impacto total del despliegue completo."
                        : `La ${phase.name} ofrece un retorno acelerado de ${phase.paybackMonths} meses con una utilidad mensual de USD ${phase.utilityMonthly.toLocaleString()}.`
                      }
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InvestmentPhases;