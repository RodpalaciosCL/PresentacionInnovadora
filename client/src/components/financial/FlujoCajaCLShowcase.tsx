import React from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from "recharts";
import { Building2, PieChart, TrendingUp, Wallet } from "lucide-react";
import {
  flujoCajaCLMilestones,
  flujoCajaCLSummary,
  flujoCajaCLTimeline,
  flujoCajaNarrativa
} from "@/data/flujo-caja-cl";

type CashflowChartData = {
  label: string;
  cumulativeFlow: number;
  netFlow: number;
};

type OccupancyChartData = {
  label: string;
  occupancyPerc: number;
  totalMt2: number;
};

const formatMillions = (value: number) =>
  `${(value / 1_000_000).toLocaleString("es-CL", { maximumFractionDigits: 1 })} MM CLP`;

const formatCurrency = (value: number) =>
  value.toLocaleString("es-CL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

const formatPercent = (value: number) => `${(value * 100).toFixed(0)} %`;

const cashflowChartData: CashflowChartData[] = flujoCajaCLTimeline.map((item) => ({
  label: item.label,
  cumulativeFlow: Number((item.cumulativeFlow / 1_000_000).toFixed(2)),
  netFlow: Number((item.netFlow / 1_000_000).toFixed(2))
}));

const occupancyChartData: OccupancyChartData[] = flujoCajaCLTimeline.map((item) => ({
  label: item.label,
  occupancyPerc: Number((item.occupancy * 100).toFixed(1)),
  totalMt2: item.totalMt2
}));

const CustomFlowTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  const net = payload.find((item) => item.dataKey === "netFlow");
  const cumulative = payload.find((item) => item.dataKey === "cumulativeFlow");
  const netValue = typeof net?.value === "number" ? net.value : Number(net?.value ?? 0);
  const cumulativeValue = typeof cumulative?.value === "number" ? cumulative.value : Number(cumulative?.value ?? 0);

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
      <div className="mt-2 space-y-1 text-sm">
        <p className="text-emerald-400">
          Flujo neto: <span className="font-semibold">{`${netValue.toLocaleString("es-CL", { maximumFractionDigits: 2 })} MM CLP`}</span>
        </p>
        <p className="text-slate-300">
          Acumulado: <span className="font-semibold">{`${cumulativeValue.toLocaleString("es-CL", { maximumFractionDigits: 2 })} MM CLP`}</span>
        </p>
      </div>
    </div>
  );
};

const CustomOccupancyTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  const occupancy = payload.find((item) => item.dataKey === "occupancyPerc");
  const area = payload.find((item) => item.dataKey === "totalMt2");
  const occupancyValue = typeof occupancy?.value === "number" ? occupancy.value : Number(occupancy?.value ?? 0);
  const areaValue = typeof area?.value === "number" ? area.value : Number(area?.value ?? 0);

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 shadow-xl">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
      <div className="mt-2 space-y-1 text-sm">
        <p className="text-emerald-400">
          Ocupación: <span className="font-semibold">{`${occupancyValue.toFixed(1)} %`}</span>
        </p>
        <p className="text-slate-300">
          Área operativa: <span className="font-semibold">{`${formatCurrency(areaValue)} m²`}</span>
        </p>
      </div>
    </div>
  );
};

const highlightCards = [
  {
    icon: Wallet,
    label: "Capital de trabajo inicial",
    value: formatMillions(flujoCajaCLSummary.capitalTrabajo),
    sublabel: "Preparación de terreno, permisos y habilitación"
  },
  {
    icon: TrendingUp,
    label: "Ingresos acumulados 18M",
    value: formatMillions(flujoCajaCLSummary.totalIngresos),
    sublabel: "Renta UF ajustada a rampas comerciales"
  },
  {
    icon: PieChart,
    label: "Ocupación pico",
    value: formatPercent(flujoCajaCLSummary.peakOcupacion.value),
    sublabel: `Mes ${flujoCajaCLSummary.peakOcupacion.month} con 108 mil m² operativos`
  },
  {
    icon: Building2,
    label: "Flujo acumulado 18M",
    value: formatMillions(flujoCajaCLSummary.flujoFinal),
    sublabel: "Caja disponible para reinversión o dividendos"
  }
];

export const FlujoCajaCLShowcase: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 p-8 shadow-2xl md:p-12">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl text-center"
      >
        <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
          Flujo de Caja 18 Meses
        </span>
        <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
          Evolución financiera del Centro Logístico Baquedano
        </h2>
        <p className="mt-4 text-lg text-slate-300 md:text-xl">
          Visualizamos cómo escala el activo cuando la demanda minera activa contratos por bloques y el arriendo indexado en UF acelera el retorno del capital invertido.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {highlightCards.map(({ icon: Icon, label, value, sublabel }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
          >
            <div className="absolute right-4 top-4 h-12 w-12 rounded-full bg-emerald-500/10 blur-xl transition-all duration-500 group-hover:scale-125" />
            <Icon className="h-8 w-8 text-emerald-300" />
            <p className="mt-4 text-sm uppercase tracking-wide text-slate-400">{label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
            <p className="mt-3 text-sm text-slate-400">{sublabel}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <header className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-emerald-300">Curva de acumulación</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Caja proyectada mes a mes</h3>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              +{formatMillions(flujoCajaCLSummary.flujoFinal)}
            </span>
          </header>

          <div className="mt-6 h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashflowChartData} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="flowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 8" stroke="#1f2937" />
                <XAxis dataKey="label" tick={{ fill: "#94a3b8" }} tickLine={false} axisLine={false} interval={2} />
                <YAxis tick={{ fill: "#94a3b8" }} tickLine={false} axisLine={false} width={70} unit=" MM" />
                <Tooltip content={<CustomFlowTooltip />} />
                <Area type="monotone" dataKey="cumulativeFlow" stroke="#34d399" strokeWidth={2} fill="url(#flowGradient)" name="Flujo acumulado" />
                <Line type="monotone" dataKey="netFlow" stroke="#22d3ee" strokeWidth={2} dot={false} name="Flujo neto" />
                <Legend verticalAlign="top" align="right" wrapperStyle={{ color: "#cbd5f5" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            A medida que se activan nuevos contratos, el flujo neto mensual se estabiliza sobre los CLP 200 MM y sostiene un colchón acumulado que supera los CLP 2,4 mil MM al mes 18.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <header className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-emerald-300">Demanda capturada</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Ocupación y superficie activa</h3>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              108 mil m² activos
            </span>
          </header>

          <div className="mt-6 h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedOccupancyChart data={occupancyChartData} />
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            El proyecto aterriza clientes por bloques de superficie. El punto de inflexión ocurre entre los meses 8 y 10, cuando se cierra 75 mil m² y la curva de ingresos acelera.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[2fr_3fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <h3 className="text-xl font-semibold text-white">Narrativa ejecutiva</h3>
          <dl className="mt-6 space-y-5">
            <NarrativeRow label="Contexto" text={flujoCajaNarrativa.contexto} />
            <NarrativeRow label="Propuesta" text={flujoCajaNarrativa.propuestaValor} />
            <NarrativeRow label="Lectura estratégica" text={flujoCajaNarrativa.lecturaEstrategica} />
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <h3 className="text-xl font-semibold text-white">Hitos comerciales</h3>
          <ul className="mt-6 space-y-4">
            {flujoCajaCLMilestones.map((milestone) => (
              <li
                key={milestone.month}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <span className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:blur-2xl" />
                <div className="flex items-center justify-between text-sm text-emerald-300">
                  <span>Mes {milestone.month}</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide">
                    Momentum
                  </span>
                </div>
                <p className="mt-2 text-lg font-semibold text-white">{milestone.title}</p>
                <p className="mt-2 text-sm text-slate-300">{milestone.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const NarrativeRow = ({ label, text }: { label: string; text: string }) => (
  <div>
    <dt className="text-xs uppercase tracking-[0.28em] text-emerald-300">{label}</dt>
    <dd className="mt-2 text-sm text-slate-300">{text}</dd>
  </div>
);

const ComposedOccupancyChart: React.FC<{ data: OccupancyChartData[] }> = ({ data }) => {
  return (
    <BarChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
      <CartesianGrid strokeDasharray="4 8" stroke="#1f2937" />
      <XAxis dataKey="label" tick={{ fill: "#94a3b8" }} tickLine={false} axisLine={false} interval={2} />
      <YAxis
        yAxisId="left"
        tick={{ fill: "#94a3b8" }}
        tickLine={false}
        axisLine={false}
        width={60}
        unit=" %"
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        tick={{ fill: "#94a3b8" }}
        tickLine={false}
        axisLine={false}
        width={70}
        tickFormatter={(value) => `${Math.round(value / 1000)}K`}
      />
      <Tooltip content={<CustomOccupancyTooltip />} />
      <Legend verticalAlign="top" align="right" wrapperStyle={{ color: "#cbd5f5" }} />
      <Bar
        yAxisId="right"
        dataKey="totalMt2"
        name="Superficie activa"
        fill="rgba(59,130,246,0.4)"
        stroke="rgba(59,130,246,1)"
        radius={[10, 10, 0, 0]}
      />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="occupancyPerc"
        name="Ocupación"
        stroke="#34d399"
        strokeWidth={2}
        dot={false}
      />
    </BarChart>
  );
};

export default FlujoCajaCLShowcase;
