/**
 * ChatWidget.tsx - Floating chat widget with quick contact form
 * Triggers high-ticket webhook for investments > $1M
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, DollarSign, User, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const quickContactSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Teléfono inválido"),
  investmentAmount: z.number().min(100000, "Mínimo US$100,000"),
  message: z.string().min(10, "Mensaje muy corto")
});

type QuickContactData = z.infer<typeof quickContactSchema>;

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuickContactData>({
    resolver: zodResolver(quickContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      investmentAmount: 500000,
      message: ""
    }
  });

  const onSubmit = async (data: QuickContactData) => {
    setIsSubmitting(true);
    
    try {
      // Check if high-ticket investment (> $1M)
      if (data.investmentAmount > 1000000) {
        // Send to high-ticket webhook
        await apiRequest("/high-ticket", {
          method: "POST",
          body: JSON.stringify({
            ...data,
            priority: "high",
            type: "high-ticket-lead"
          })
        });
        
        toast({
          title: "¡Consulta prioritaria recibida!",
          description: "Un ejecutivo senior se contactará contigo en las próximas 2 horas.",
        });
      } else {
        // Regular contact
        await apiRequest("/contact", {
          method: "POST",
          body: JSON.stringify({
            ...data,
            source: "chat-widget"
          })
        });
        
        toast({
          title: "¡Mensaje enviado!",
          description: "Te responderemos en menos de 24 horas.",
        });
      }

      form.reset();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Por favor intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Abrir chat"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Widget Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 bg-slate-800 rounded-2xl border border-slate-600 shadow-2xl w-80 max-h-screen overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-emerald-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Consulta Rápida</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-slate-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Fix 2: Form container con scroll y botón sticky */}
            <div className="flex-1 overflow-y-auto">
              <form id="quick-contact-form" onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-4">
              {/* Name */}
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    {...form.register("name")}
                    placeholder="Tu nombre"
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none text-sm"
                  />
                </div>
                {form.formState.errors.name && (
                  <p className="text-red-400 text-xs mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    {...form.register("email")}
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none text-sm"
                  />
                </div>
                {form.formState.errors.email && (
                  <p className="text-red-400 text-xs mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    {...form.register("phone")}
                    placeholder="Teléfono"
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none text-sm"
                  />
                </div>
                {form.formState.errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>

              {/* Investment Amount */}
              <div>
                <label className="block text-slate-300 text-xs mb-1">Monto de Inversión (USD)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    {...form.register("investmentAmount", { valueAsNumber: true })}
                    type="number"
                    min="100000"
                    step="100000"
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none text-sm"
                  />
                </div>
                {form.formState.errors.investmentAmount && (
                  <p className="text-red-400 text-xs mt-1">{form.formState.errors.investmentAmount.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...form.register("message")}
                  placeholder="¿En qué proyecto estás interesado?"
                  rows={3}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none text-sm resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-xs mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

            </form>
            </div>
            
            {/* Submit Button Sticky */}
            <div className="sticky bottom-0 bg-slate-800 p-4 border-t border-slate-600">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                form="quick-contact-form"
                disabled={form.formState.isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                {form.formState.isSubmitting ? (
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Enviar Consulta</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};