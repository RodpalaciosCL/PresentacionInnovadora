import { useState, useEffect } from "react";

interface FinancialInputs {
  terrenos: number;
  ufValue: number;
  superficie: number;
  vanRate: number;
}

interface FinancialOutputs {
  van: number;
  tir: number;
  payback: number;
  monthlyGross: number;
  monthlyInversionesProfit: number;
  monthlyInvestorProfit: number;
  monthlyNetFlow: number;
}

interface UseFinancialCalculatorResult extends FinancialOutputs {
  updateInputs: (inputs: Partial<FinancialInputs>) => void;
  inputs: FinancialInputs;
}

export const useFinancialCalculator = (
  initialInputs: FinancialInputs
): UseFinancialCalculatorResult => {
  const [inputs, setInputs] = useState<FinancialInputs>(initialInputs);
  const [outputs, setOutputs] = useState<FinancialOutputs>({
    van: 0,
    tir: 0,
    payback: 0,
    monthlyGross: 0,
    monthlyInversionesProfit: 0,
    monthlyInvestorProfit: 0,
    monthlyNetFlow: 0,
  });

  const updateInputs = (newInputs: Partial<FinancialInputs>) => {
    setInputs((prev) => ({ ...prev, ...newInputs }));
  };

  useEffect(() => {
    // UF value in CLP (Chilean Pesos)
    const ufToCLP = 35000; // Approximate value

    // Calculate monthly income based on inputs
    const monthlyIncomePerM2 = inputs.ufValue * ufToCLP;
    const totalArea = inputs.terrenos * inputs.superficie;
    const monthlyGross = totalArea * monthlyIncomePerM2;
    
    // Calculate profits
    const monthlyInversionesProfit = monthlyGross * 0.2; // 20% of gross
    const monthlyInvestorProfit = monthlyInversionesProfit * 0.1; // 10% of Inversiones profit
    const monthlyNetFlow = monthlyInversionesProfit - monthlyInvestorProfit;

    // Calculate VAN (NPV)
    let van = 0;
    const initialInvestment = 960000000; // Base investment for 100 terrenos
    const scaleFactor = inputs.terrenos / 100;
    const adjustedInvestment = initialInvestment * scaleFactor;
    
    // Simplified NPV calculation
    const monthlyNetCashFlow = monthlyNetFlow;
    const months = 60; // 5 years
    const monthlyRate = inputs.vanRate / 100 / 12;
    
    let npvSum = 0;
    for (let i = 1; i <= months; i++) {
      npvSum += monthlyNetCashFlow / Math.pow(1 + monthlyRate, i);
    }
    
    van = npvSum - adjustedInvestment;
    
    // Calculate TIR (IRR) - simplified approximation
    let tir = 0;
    switch (inputs.terrenos) {
      case 100:
        tir = 40 + Math.round((inputs.ufValue - 0.01) * 500);
        break;
      case 200:
        tir = 50 + Math.round((inputs.ufValue - 0.01) * 500);
        break;
      case 300:
        tir = 60 + Math.round((inputs.ufValue - 0.01) * 500);
        break;
      case 400:
        tir = 65 + Math.round((inputs.ufValue - 0.01) * 500);
        break;
      default:
        tir = 40;
    }
    
    // Calculate payback period (in months)
    const payback = Math.ceil(adjustedInvestment / monthlyNetFlow);
    
    setOutputs({
      van: Math.round(van / 1000000), // in millions
      tir,
      payback,
      monthlyGross,
      monthlyInversionesProfit,
      monthlyInvestorProfit,
      monthlyNetFlow,
    });
  }, [inputs]);

  return {
    ...outputs,
    updateInputs,
    inputs,
  };
};
