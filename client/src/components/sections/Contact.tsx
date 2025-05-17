import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ArrowRight, Circle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { fadeIn, slideInLeft, slideInRight } from "@/lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must accept to receive information.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data:", data);
      setIsSubmitting(false);
      form.reset();
      
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  }

  return (
    <section id="contacto" ref={ref} className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <h2 className="text-3xl font-montserrat font-bold mb-6">{t("contact.title")}</h2>
            <p className="text-xl mb-8 text-white/80">
              {t("contact.description")}
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white text-primary mt-0.5">
                  <span className="text-sm font-medium">1</span>
                </div>
                <p className="ml-3 text-lg">{t("contact.point1")}</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white text-primary mt-0.5">
                  <span className="text-sm font-medium">2</span>
                </div>
                <p className="ml-3 text-lg">{t("contact.point2")}</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-white text-primary mt-0.5">
                  <span className="text-sm font-medium">3</span>
                </div>
                <p className="ml-3 text-lg">{t("contact.point3")}</p>
              </li>
            </ul>
            
            <h3 className="text-xl font-montserrat font-medium mb-4">{t("contact.also.title")}</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Circle className="h-2 w-2 text-white mr-3" />
                <span>{t("contact.also.point1")}</span>
              </li>
              <li className="flex items-center">
                <Circle className="h-2 w-2 text-white mr-3" />
                <span>{t("contact.also.point2")}</span>
              </li>
              <li className="flex items-center">
                <Circle className="h-2 w-2 text-white mr-3" />
                <span>{t("contact.also.point3")}</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6">{t("contact.form.title")}</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{t("contact.form.name")}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t("contact.form.name.placeholder")} 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:ring-white/50" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{t("contact.form.email")}</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder={t("contact.form.email.placeholder")} 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:ring-white/50" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{t("contact.form.company")}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t("contact.form.company.placeholder")} 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:ring-white/50" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t("contact.form.message.placeholder")} 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:ring-white/50" 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0 py-2">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                          className="data-[state=checked]:bg-secondary border-white/30" 
                        />
                      </FormControl>
                      <FormLabel className="font-medium text-white/70">
                        {t("contact.form.consent")}
                      </FormLabel>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-medium"
                >
                  {isSubmitting ? "Sending..." : t("contact.form.submit")} 
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
