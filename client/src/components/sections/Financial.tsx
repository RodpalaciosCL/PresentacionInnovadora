import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { FinancialSimulator } from "@/components/ui/FinancialSimulator";
import { fadeIn } from "@/lib/animations";
import { AlertTriangle } from "lucide-react";

interface FinancialItemProps {
  label: string;
  value: string;
  isTotal?: boolean;
}

const FinancialItem: React.FC<FinancialItemProps> = ({ label, value, isTotal = false }) => (
  <tr className={isTotal ? "bg-neutral-50" : ""}>
    <td className="px-4 py-4 text-sm">{label}</td>
    <td className={`px-4 py-4 text-sm text-right font-mono ${isTotal ? "font-medium text-primary" : ""}`}>
      {value}
    </td>
  </tr>
);

const Financial: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="financiero" ref={ref} className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-montserrat font-bold text-primary">{t("financial.title")}</h2>
          <p className="text-lg text-neutral-600 mt-4 max-w-3xl mx-auto">
            {t("financial.description")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Initial Investment Card */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-primary text-white p-6">
              <h3 className="font-montserrat font-bold text-xl mb-2">{t("financial.investment.title")}</h3>
              <p className="text-white/80">{t("financial.investment.subtitle")}</p>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        {t("financial.investment.concept")}
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        {t("financial.investment.amount")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <FinancialItem 
                      label={t("financial.investment.cashout")} 
                      value="$350.000.000" 
                    />
                    <FinancialItem 
                      label={t("financial.investment.working")} 
                      value="$210.000.000" 
                    />
                    <FinancialItem 
                      label={t("financial.investment.capex")} 
                      value="$400.000.000" 
                    />
                    <FinancialItem 
                      label={t("financial.investment.total")} 
                      value="$960.000.000" 
                      isTotal 
                    />
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      {t("financial.investment.warning")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Monthly Income Card */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-secondary text-white p-6">
              <h3 className="font-montserrat font-bold text-xl mb-2">{t("financial.income.title")}</h3>
              <p className="text-white/80">{t("financial.income.subtitle")}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border border-neutral-200 rounded-lg">
                  <div className="text-sm text-neutral-500 mb-1">{t("financial.income.gross")}</div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-mono font-bold text-neutral-800">$358.140.150</span>
                    <span className="ml-2 text-sm text-neutral-500">CLP</span>
                  </div>
                </div>
                
                <div className="p-4 border border-neutral-200 rounded-lg">
                  <div className="text-sm text-neutral-500 mb-1">{t("financial.income.inversiones")}</div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-mono font-bold text-neutral-800">$71.628.030</span>
                    <span className="ml-2 text-sm text-neutral-500">CLP</span>
                  </div>
                </div>
                
                <div className="p-4 border border-neutral-200 rounded-lg">
                  <div className="text-sm text-neutral-500 mb-1">{t("financial.income.investor")}</div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-mono font-bold text-neutral-800">$7.162.803</span>
                    <span className="ml-2 text-sm text-neutral-500">CLP</span>
                  </div>
                </div>
                
                <div className="p-4 border border-neutral-200 rounded-lg bg-neutral-50">
                  <div className="text-sm text-neutral-500 mb-1">{t("financial.income.net")}</div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-mono font-bold text-primary">$64.465.227</span>
                    <span className="ml-2 text-sm text-neutral-500">CLP</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-600 italic">
                  {t("financial.income.growth")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-montserrat font-bold text-primary mb-6 text-center">
            {t("financial.simulator.title")}
          </h3>
          
          <FinancialSimulator />
        </motion.div>
      </div>
    </section>
  );
};

export default Financial;
