/**
 * Contact.tsx - Contact page
 * Contact form and company information
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentRange: "",
    projectInterest: "",
    message: "",
    preferredContact: "email"
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Corporativo",
      value: COMPANY_INFO.email,
      description: "Respuesta en 24 horas",
      action: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: Phone,
      title: "Línea Directa",
      value: COMPANY_INFO.phone,
      description: "Lunes a Viernes, 9:00 - 18:00",
      action: `tel:${COMPANY_INFO.phone}`
    },
    {
      icon: MapPin,
      title: "Oficinas",
      value: COMPANY_INFO.address,
      description: "Reuniones por cita previa",
      action: null
    }
  ];

  const investmentRanges = [
    { value: "500k-1m", label: "US$ 500K - 1M" },
    { value: "1m-5m", label: "US$ 1M - 5M" },
    { value: "5m-10m", label: "US$ 5M - 10M" },
    { value: "10m+", label: "US$ 10M+" }
  ];

  const projects = [
    { value: "estaciones", label: "500+ Estaciones" },
    { value: "puchuncavi", label: "Puchuncaví" },
    { value: "hub-norte", label: "Hub Norte" },
    { value: "fibra-oscura", label: "Fibra Oscura" },
    { value: "portafolio", label: "Portafolio Completo" }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="h-12 w-12 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¡Mensaje <span className="text-emerald-400">Enviado!</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8">
            Gracias por tu interés en Invenor. Nuestro equipo revisará tu consulta y 
            se pondrá en contacto contigo dentro de las próximas 24 horas.
          </p>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Próximos pasos:</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-300">Revisión de tu consulta (2-4 horas)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-300">Contacto personalizado (24 horas)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-300">Agendamiento de reunión inicial</span>
              </div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "", email: "", phone: "", company: "",
                investmentRange: "", projectInterest: "", message: "", preferredContact: "email"
              });
            }}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Enviar Otra Consulta
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Conecta con <span className="text-emerald-400">Nosotros</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Estamos aquí para responder tus consultas y ayudarte a encontrar 
              la oportunidad de inversión perfecta para tu portafolio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600 hover:border-emerald-400/50 transition-all duration-300 text-center group"
                >
                  <div className="bg-emerald-500/20 p-4 rounded-lg w-fit mx-auto mb-6 group-hover:bg-emerald-500/30 transition-colors">
                    <Icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  
                  {method.action ? (
                    <a
                      href={method.action}
                      className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <div className="text-emerald-400 font-semibold">{method.value}</div>
                  )}
                  
                  <p className="text-slate-300 text-sm mt-2">{method.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solicita una <span className="text-emerald-400">Reunión</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo para agendar una reunión personalizada
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="+56 9 XXXX XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              {/* Investment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Rango de Inversión
                  </label>
                  <select
                    name="investmentRange"
                    value={formData.investmentRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                  >
                    <option value="">Seleccionar rango</option>
                    {investmentRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Proyecto de Interés
                  </label>
                  <select
                    name="projectInterest"
                    value={formData.projectInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                  >
                    <option value="">Seleccionar proyecto</option>
                    {projects.map((project) => (
                      <option key={project.value} value={project.value}>
                        {project.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                  placeholder="Cuéntanos sobre tus objetivos de inversión, timeline y cualquier pregunta específica..."
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-3">
                  Método de Contacto Preferido
                </label>
                <div className="flex space-x-4">
                  {[
                    { value: "email", label: "Email", icon: Mail },
                    { value: "phone", label: "Teléfono", icon: Phone },
                    { value: "whatsapp", label: "WhatsApp", icon: MessageSquare }
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <label
                        key={method.value}
                        className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.preferredContact === method.value
                            ? "border-emerald-400 bg-emerald-500/10 text-emerald-400"
                            : "border-slate-600 bg-slate-700/50 text-slate-300 hover:border-slate-500"
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method.value}
                          checked={formData.preferredContact === method.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{method.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Solicitud</span>
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-600">
              <p className="text-slate-400 text-sm text-center">
                Al enviar este formulario, aceptas que un representante de Invenor se ponga en contacto contigo 
                para discutir oportunidades de inversión. Respetamos tu privacidad y no compartimos tu información.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;