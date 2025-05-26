/**
 * Contact.tsx - Contact page
 * Contact form and company information
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Calendar, CheckCircle, Linkedin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Invalid phone"),
  company: z.string().optional(),
  investmentRange: z.string().min(1, "Select an investment range"),
  projectInterest: z.string().min(1, "Select a project of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.enum(["email", "phone", "both"])
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const { t } = useTranslation();
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
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
      });
    } catch (error) {
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        variant: "destructive"
      });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      titleKey: "email",
      value: COMPANY_INFO.email,
      descriptionKey: "email",
      action: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: Phone,
      titleKey: "phone",
      value: "+56 2 2XXX XXXX",
      descriptionKey: "phone", 
      action: "tel:+56222XXXXXX"
    },
    {
      icon: MapPin,
      titleKey: "office",
      value: "Santiago, Chile",
      descriptionKey: "office",
      action: "#"
    }
  ];

  const teamMembers = [
    {
      name: "Carlos Mendoza",
      role: "CEO & Fundador",
      linkedin: "https://linkedin.com/in/carlos-mendoza"
    },
    {
      name: "Ana Rodríguez",
      role: "Directora de Inversiones",
      linkedin: "https://linkedin.com/in/ana-rodriguez"
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
          <h2 className="text-3xl font-bold text-white mb-4">{t('contact.form.success')}</h2>
          <p className="text-slate-300 mb-8">
            {t('contact.form.success.message')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSubmitted(false)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t('contact.form.sendAnother')}
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('contact.hero.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
              <p className="text-slate-300 mb-8">
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
                  className="flex items-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-emerald-400 transition-all group"
                >
                  <div className="bg-emerald-500/20 p-3 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                    <method.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold">{t(`contact.methods.${method.titleKey}.title`)}</h3>
                    <p className="text-emerald-400">{method.value}</p>
                    <p className="text-slate-400 text-sm">{t(`contact.methods.${method.descriptionKey}.description`)}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Team Members */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Nuestro Equipo</h3>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <motion.a
                    key={index}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all group"
                  >
                    <div className="bg-emerald-500/20 p-2 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                      <Linkedin className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">{member.name}</h4>
                      <p className="text-slate-400 text-sm">{member.role}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    {t('contact.form.name')} *
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
                    {t('contact.form.email')} *
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl p-8 border border-emerald-400/30">
            <Clock className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Respuesta Garantizada</h3>
            <p className="text-slate-300">
              Nuestro equipo se compromete a responder todas las consultas en menos de 24 horas.
              Para inversiones superiores a US$1M, contacto inmediato con ejecutivos senior.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;