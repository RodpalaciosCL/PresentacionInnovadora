import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFinancialCalculator } from "@/hooks/use-financial-calculator";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { chartBar, fadeIn, staggerContainer } from "@/lib/animations";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-CL").format(value);
};

export const FinancialSimulator: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true, threshold: 0.3 });
  
  const financial = useFinancialCalculator({
    terrenos: 100,
    ufValue: 0.01,
    superficie: 10000,
    vanRate: 15,
  });
  
  const handleTerrenosChange = (value: string) => {
    financial.updateInputs({ terrenos: parseInt(value) });
  };
  
  const handleUfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    financial.updateInputs({ ufValue: parseFloat(e.target.value) });
  };
  
  const handleSuperficieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    financial.updateInputs({ superficie: parseInt(e.target.value) });
  };
  
  const handleVanRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    financial.updateInputs({ vanRate: parseInt(e.target.value) });
  };
  
  const scenarios = [
    { id: "A", terrenos: 100, van: t("financial.simulator.positive"), tir: "+40%", payback: "~18–20 meses" },
    { id: "B", terrenos: 200, van: t("financial.simulator.higher"), tir: "+50%", payback: "~14 meses" },
    { id: "C", terrenos: 300, van: t("financial.simulator.high"), tir: "+60%", payback: "< 12 meses" },
    { id: "D", terrenos: 400, van: t("financial.simulator.optimal"), tir: "+65%+", payback: "~10 meses" },
  ];

  const chartHeights = {
    100: 30,
    200: 60,
    300: 80,
    400: 90,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <Label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="terrenos-select">
              {t("financial.simulator.lands")}
            </Label>
            <Select 
              defaultValue={financial.inputs.terrenos.toString()} 
              onValueChange={handleTerrenosChange}
            >
              <SelectTrigger id="terrenos-select" className="w-full">
                <SelectValue placeholder={`${financial.inputs.terrenos} terrenos`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100">100 terrenos</SelectItem>
                <SelectItem value="200">200 terrenos</SelectItem>
                <SelectItem value="300">300 terrenos</SelectItem>
                <SelectItem value="400">400 terrenos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="uf-value">
              {t("financial.simulator.uf")}
            </Label>
            <Input
              id="uf-value"
              type="number"
              min="0.001"
              max="0.5"
              step="0.001"
              value={financial.inputs.ufValue}
              onChange={handleUfChange}
              className="w-full"
            />
          </div>
          
          <div>
            <Label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="superficie-value">
              {t("financial.simulator.area")}
            </Label>
            <Input
              id="superficie-value"
              type="number"
              min="3000"
              max="50000"
              step="1000"
              value={financial.inputs.superficie}
              onChange={handleSuperficieChange}
              className="w-full"
            />
          </div>
          
          <div>
            <Label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="van-rate">
              {t("financial.simulator.rate")}
            </Label>
            <Input
              id="van-rate"
              type="number"
              min="5"
              max="30"
              step="1"
              value={financial.inputs.vanRate}
              onChange={handleVanRateChange}
              className="w-full"
            />
            <span className="text-xs text-neutral-500">%</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h4 className="font-medium text-lg mb-4">{t("financial.simulator.projection")}</h4>
            <div className="h-64 relative">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                className="absolute inset-0 flex items-end justify-around"
              >
                {[100, 200, 300, 400].map((terrenoCount) => (
                  <motion.div
                    key={terrenoCount}
                    variants={chartBar}
                    className={`w-[15%] rounded-t-md relative ${
                      terrenoCount === financial.inputs.terrenos
                        ? terrenoCount === 400
                          ? "bg-secondary"
                          : terrenoCount === 300
                          ? "bg-primary"
                          : terrenoCount === 200
                          ? "bg-primary-light"
                          : "bg-neutral-200"
                        : terrenoCount === 400
                        ? "bg-secondary/30"
                        : terrenoCount === 300
                        ? "bg-primary/30"
                        : terrenoCount === 200
                        ? "bg-primary-light/30"
                        : "bg-neutral-200/30"
                    }`}
                    style={{ height: `${chartHeights[terrenoCount as keyof typeof chartHeights]}%` }}
                  >
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-xs font-mono">
                      {terrenoCount === 100 ? 107 : terrenoCount === 200 ? 215 : terrenoCount === 300 ? 322 : 430}
                    </div>
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs">
                      {terrenoCount}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Y-axis */}
              <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-neutral-500">
                <div>500</div>
                <div>400</div>
                <div>300</div>
                <div>200</div>
                <div>100</div>
                <div>0</div>
              </div>
              
              {/* X-axis label */}
              <div className="absolute left-0 right-0 bottom-[-30px] text-center text-sm text-neutral-500">
                {t("financial.simulator.lands")}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">{t("financial.simulator.indicators")}</h4>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              className="space-y-4"
            >
              <motion.div variants={fadeIn} className="p-4 bg-neutral-50 rounded-lg">
                <div className="text-sm text-neutral-500 mb-1">{t("financial.simulator.van")}</div>
                <div className="text-2xl font-mono font-bold text-primary">{financial.van.toLocaleString()}</div>
              </motion.div>
              <motion.div variants={fadeIn} className="p-4 bg-neutral-50 rounded-lg">
                <div className="text-sm text-neutral-500 mb-1">{t("financial.simulator.tir")}</div>
                <div className="text-2xl font-mono font-bold text-primary">{financial.tir}%</div>
              </motion.div>
              <motion.div variants={fadeIn} className="p-4 bg-neutral-50 rounded-lg">
                <div className="text-sm text-neutral-500 mb-1">{t("financial.simulator.payback")}</div>
                <div className="text-2xl font-mono font-bold text-primary">{financial.payback}</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-neutral-50 border-t border-neutral-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-medium text-neutral-500 pr-4">{t("financial.simulator.scenario")}</th>
              <th className="text-center text-sm font-medium text-neutral-500 px-4">{t("financial.simulator.lands")}</th>
              <th className="text-center text-sm font-medium text-neutral-500 px-4">VAN (15%)</th>
              <th className="text-center text-sm font-medium text-neutral-500 px-4">{t("financial.simulator.tir")}</th>
              <th className="text-center text-sm font-medium text-neutral-500 pl-4">Payback</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((scenario) => (
              <motion.tr
                key={scenario.id}
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                className={`cursor-pointer transition-colors ${
                  financial.inputs.terrenos === scenario.terrenos ? "bg-neutral-100" : ""
                }`}
                onClick={() => financial.updateInputs({ terrenos: scenario.terrenos })}
              >
                <td className="py-3 text-sm font-medium">{scenario.id}</td>
                <td className="py-3 text-sm text-center">{scenario.terrenos}</td>
                <td className="py-3 text-sm text-center text-success">{scenario.van}</td>
                <td className="py-3 text-sm text-center">{scenario.tir}</td>
                <td className="py-3 text-sm text-center">{scenario.payback}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
