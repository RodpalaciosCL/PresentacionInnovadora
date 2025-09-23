/**
 * Contact.tsx - Contact page
 * Contact form and company information
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Calendar, CheckCircle, Users } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Teléfono inválido"),
  company: z.string().optional(),
  investmentRange: z.string().min(1, "Selecciona un rango de inversión"),
  projectInterest: z.string().min(1, "Selecciona un proyecto de interés"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  preferredContact: z.enum(["email", "phone", "both"])
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      investmentRange: "",
      projectInterest: "",
      message: "",
      preferredContact: "email"
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await apiRequest("/contact", {
        method: "POST",
        body: JSON.stringify(data)
      });

      setIsSubmitted(true);
      form.reset();
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Por favor intenta nuevamente o contáctanos directamente.",
        variant: "destructive"
      });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: COMPANY_INFO.email,
      description: "",
      action: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+56223210980",
      description: "Lun-Vie 9:00-19:00",
      action: "tel:+56223210980"
    },
    {
      icon: MapPin,
      title: "Oficina",
      value: "Luis Carrera 1263 oficina 301, Vitacura",
      description: "",
      action: "#"
    }
  ];

  const teamMembers = [
    {
      name: "Carlos Mendoza",
      role: "CEO & Fundador"
    },
    {
      name: "Ana Rodríguez",
      role: "Directora de Inversiones"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700"
        >
          <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">¡Mensaje Enviado!</h2>
          <p className="text-slate-300 mb-8">
            Gracias por tu interés en Inversiones del Norte. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSubmitted(false)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Enviar Otro Mensaje
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-3">
            Contacto
          </h1>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
              <p className="text-slate-300 mb-6">
                Nuestro equipo está disponible para responder todas tus consultas sobre 
                inversiones inmobiliarias estratégicas.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-emerald-400 transition-all group"
                >
                  <div className="bg-emerald-500/20 p-3 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                    <method.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold">{method.title}</h3>
                    <p className="text-emerald-400">{method.value}</p>
                    {method.description && <p className="text-slate-400 text-sm">{method.description}</p>}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Team Members - Removed */}
            {/* <div>
              <h3 className="text-xl font-semibold text-white mb-4">Nuestro Equipo</h3>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all group"
                  >
                    <div className="bg-emerald-500/20 p-2 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                      <Users className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">{member.name}</h4>
                      <p className="text-slate-400 text-sm">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    {...form.register("name")}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="Juan Pérez"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    {...form.register("email")}
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="juan@empresa.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Teléfono *
                  </label>
                  <input
                    {...form.register("phone")}
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="+56 9 XXXX XXXX"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    {...form.register("company")}
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="Nombre de la empresa"
                  />
                </div>
              </div>
              
              {/* Investment Information */}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Proyecto de Interés *
                  </label>
                  <select
                    {...form.register("projectInterest")}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                  >
                    <option value="">Seleccionar proyecto</option>
                    <option value="puchuncavi">Puchuncaví</option>
                    <option value="hub-norte">Hub Norte</option>
                    <option value="portfolio">Portfolio Completo</option>
                    <option value="custom">Proyecto Personalizado</option>
                  </select>
                  {form.formState.errors.projectInterest && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.projectInterest.message}</p>
                  )}
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  {...form.register("message")}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                  placeholder="Describe tu interés en los proyectos de Invenor..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              {/* Contact Preference */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-3">
                  Método de Contacto Preferido
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                    <input
                      {...form.register("preferredContact")}
                      type="radio"
                      value="email"
                      className="text-emerald-500 focus:ring-emerald-400 border-slate-600 bg-slate-700"
                    />
                    <span className="ml-2 text-slate-300">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...form.register("preferredContact")}
                      type="radio"
                      value="phone"
                      className="text-emerald-500 focus:ring-emerald-400 border-slate-600 bg-slate-700"
                    />
                    <span className="ml-2 text-slate-300">Teléfono</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...form.register("preferredContact")}
                      type="radio"
                      value="both"
                      className="text-emerald-500 focus:ring-emerald-400 border-slate-600 bg-slate-700"
                    />
                    <span className="ml-2 text-slate-300">Ambos</span>
                  </label>
                </div>
              </div>
              
              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                {form.formState.isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Consulta</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default Contact;