import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface StationData {
  id: number;
  hotsport: number;
  use: string;
  leasePeriod: number;
  monthlyLease: number;
  annualTotal: number;
  totalDecade: number;
  totalTwoDecades: number;
}

const stationData: StationData[] = [
  { id: 1, hotsport: 1, use: "Hotel Minero", leasePeriod: 120, monthlyLease: 1500000, annualTotal: 18000000, totalDecade: 180000000, totalTwoDecades: 360000000 },
  { id: 2, hotsport: 2, use: "Estación de Servicio (Bencina)", leasePeriod: 120, monthlyLease: 70000, annualTotal: 840000, totalDecade: 8400000, totalTwoDecades: 16800000 },
  { id: 3, hotsport: 3, use: "Seco Seco", leasePeriod: 120, monthlyLease: 60000, annualTotal: 720000, totalDecade: 7200000, totalTwoDecades: 14400000 },
  { id: 4, hotsport: 4, use: "Centro Logístico", leasePeriod: 120, monthlyLease: 40000, annualTotal: 480000, totalDecade: 4800000, totalTwoDecades: 9600000 },
  { id: 5, hotsport: 5, use: "Supermercado", leasePeriod: 120, monthlyLease: 50000, annualTotal: 600000, totalDecade: 6000000, totalTwoDecades: 12000000 },
  { id: 6, hotsport: 6, use: "Servicentro", leasePeriod: 120, monthlyLease: 12000, annualTotal: 144000, totalDecade: 1440000, totalTwoDecades: 2880000 },
  { id: 7, hotsport: 7, use: "Maquinaria (Finning)", leasePeriod: 120, monthlyLease: 35000, annualTotal: 420000, totalDecade: 4200000, totalTwoDecades: 8400000 },
  { id: 8, hotsport: 8, use: "Data Center", leasePeriod: 120, monthlyLease: 1500000, annualTotal: 18000000, totalDecade: 180000000, totalTwoDecades: 360000000 },
  { id: 9, hotsport: 9, use: "Energía Solar", leasePeriod: 120, monthlyLease: 500000, annualTotal: 6000000, totalDecade: 60000000, totalTwoDecades: 120000000 },
  { id: 10, hotsport: 10, use: "Estación de Servicio (Bencina) 2", leasePeriod: 120, monthlyLease: 70000, annualTotal: 840000, totalDecade: 8400000, totalTwoDecades: 16800000 },
];

interface StationDetailsTableProps {
  className?: string;
}

export const StationDetailsTable: React.FC<StationDetailsTableProps> = ({ className }) => {
  const { t } = useLanguage();
  
  // Calculate totals
  const totalMonthly = stationData.reduce((acc, station) => acc + station.monthlyLease, 0);
  const totalAnnual = stationData.reduce((acc, station) => acc + station.annualTotal, 0);
  const totalDecade = stationData.reduce((acc, station) => acc + station.totalDecade, 0);
  const totalTwoDecades = stationData.reduce((acc, station) => acc + station.totalTwoDecades, 0);

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={`overflow-hidden ${className}`}
    >
      <h3 className="text-xl font-semibold mb-4">Top 10 Terrenos más Atractivos</h3>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">ID</TableHead>
              <TableHead>Uso</TableHead>
              <TableHead className="text-right">Plazo (meses)</TableHead>
              <TableHead className="text-right">Arriendo USD</TableHead>
              <TableHead className="text-right">Total Anual</TableHead>
              <TableHead className="text-right">Total 10 Años</TableHead>
              <TableHead className="text-right">Total 20 Años</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stationData.map((station) => (
              <motion.tr 
                key={station.id}
                variants={fadeIn}
                className="hover:bg-neutral-50 cursor-pointer"
              >
                <TableCell className="font-medium">{station.hotsport}</TableCell>
                <TableCell>{station.use}</TableCell>
                <TableCell className="text-right">{station.leasePeriod}</TableCell>
                <TableCell className="text-right">USD {station.monthlyLease.toLocaleString()}</TableCell>
                <TableCell className="text-right">USD {station.annualTotal.toLocaleString()}</TableCell>
                <TableCell className="text-right">USD {station.totalDecade.toLocaleString()}</TableCell>
                <TableCell className="text-right">USD {station.totalTwoDecades.toLocaleString()}</TableCell>
              </motion.tr>
            ))}
            <TableRow className="bg-neutral-100 font-bold">
              <TableCell colSpan={3}>TOTAL</TableCell>
              <TableCell className="text-right">USD {totalMonthly.toLocaleString()}</TableCell>
              <TableCell className="text-right">USD {totalAnnual.toLocaleString()}</TableCell>
              <TableCell className="text-right">USD {totalDecade.toLocaleString()}</TableCell>
              <TableCell className="text-right">USD {totalTwoDecades.toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default StationDetailsTable;