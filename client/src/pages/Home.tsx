import { Background3D } from "@/components/Background3D";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Globe, Layers, Sparkles, Zap, Menu, X, BarChart3, Database, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo placeholder - using text as per request */}
          <span className="text-2xl font-bold font-display tracking-tight text-white">
            WorkFlow
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Início", "Serviços", "Método", "Depoimentos", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Falar com Especialista
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 glass border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {["Início", "Serviços", "Método", "Depoimentos", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-lg font-medium text-white/80"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white w-full">
            Falar com Especialista
          </Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 grid lg:grid-cols-1 gap-12 items-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-primary/30"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Agência Digital Impulsionada por IA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]"
          >
            Marketing Inteligente, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary text-glow">
              Automação Estratégica
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Enquanto o mercado ainda trabalha com fluxo criativo e gestão de redes sociais, a Workflow opera em outro patamar. 
            Integramos marketing, tecnologia e automação em um único ecossistema voltado para um objetivo claro: <strong>crescimento real e previsível.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-[0_0_30px_-5px_var(--color-primary)]">
              Quero transformar meu marketing <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
              Falar com um especialista
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "200+", label: "Clientes Atendidos" },
            { value: "30+", label: "Empresas Globais" },
            { value: "60%", label: "Redução de Custo" },
            { value: "24/7", label: "Operação Ativa" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold font-display text-white mb-2">{stat.value}</h3>
              <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      title: "Diagnóstico & Estratégia",
      description: "Mapeamos seu cenário, público, dados e operação para construir o plano mestre de crescimento.",
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Automações e Integrações",
      description: "Implementamos toda a infraestrutura: site, integrações, automações e agentes de IA.",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Performance & Tráfego",
      description: "Rodamos o plano: tráfego pago, conteúdo, CRM, captação, testes e otimizações.",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: "Design & Conversão",
      description: "Acompanhamos métricas, analisamos dados, ajustamos e ampliamos canais para gerar escala.",
    },
  ];

  return (
    <section id="servicos" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            O que faremos para seu <br/>negócio escalar
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Estratégia, automações e inteligência artificial integradas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card p-8 md:p-10 rounded-3xl h-full group hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-primary/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all" />
                
                <div className="relative z-10">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  return (
    <section id="metodo" className="py-24 px-6 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">Metodologia</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Não somos outra Agência
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Enquanto o mercado ainda entrega criativos e posts, a Workflow atua em outro nível. Unimos marketing, tecnologia e automação em um único sistema focado em uma coisa: crescimento previsível.
            </p>
            
            <div className="space-y-6">
              {[
                "Estratégia de marketing orientada a dados",
                "Construção e implantação de agentes de IA avançados",
                "Execução completa em tráfego, conteúdo e branding",
                "Acompanhamento operacional para garantir resultado"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/90 text-lg">{item}</span>
                </div>
              ))}
            </div>

            <Button className="mt-10 rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-white/90">
              Conhecer o método completo
            </Button>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
             <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-2">Diagnóstico Operacional</h4>
                    <p className="text-sm text-white/60">Mapeamos processos, canais, ferramentas e gargalos.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5 ml-8">
                    <h4 className="font-bold text-white mb-2">Estratégia Integrada</h4>
                    <p className="text-sm text-white/60">Construimos o método completo: marketing, automação e IA.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-2">Operação & Performance</h4>
                    <p className="text-sm text-white/60">Rodamos, monitoramos, ajustamos e otimizamos com dados reais.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Workflow mudou completamente nossa operação. Não foi apenas marketing — foi estrutura. Os agentes de IA reduziram nosso tempo de atendimento em mais de 60% e as campanhas começaram a gerar leads realmente qualificados.",
      author: "Julia Novaes",
      role: "Head of Marketing - Saldo Simples"
    },
    {
      quote: "Com a Workflow saímos do improviso para uma operação profissional. Marketing, automação e IA integrados em um único sistema. O que antes dependia de vários fornecedores hoje funciona sozinho.",
      author: "Alex Mendes",
      role: "Fundador da Epic inc"
    },
    {
      quote: "A Workflow mapeou tudo e criou uma operação digital que roda 24/7. Nunca vi uma agência trabalhar assim. Eles não fazem campanhas — constroem máquinas de aquisição.",
      author: "Késia Tonin",
      role: "CMO da Zenith Store"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div className="mb-6">
                {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-lg">★</span>)}
              </div>
              <p className="text-white/80 leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 relative z-10 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            FAQ
          </h2>
          <p className="text-white/60">Tem uma dúvida? Aqui estão algumas respostas.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-white/10 rounded-xl px-4 bg-white/5">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline text-lg font-medium">
              O que diferencia a Workflow de uma agência tradicional?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-4">
              A Workflow integra marketing, tecnologia, automação e IA em um único ecossistema. Não trabalhamos apenas com posts e campanhas — estruturamos operações completas que reduzem custos, aumentam eficiência e geram crescimento previsível.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border border-white/10 rounded-xl px-4 bg-white/5">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline text-lg font-medium">
              O que são agentes de IA e como eles ajudam?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-4">
              Agentes de IA são sistemas inteligentes que realizam tarefas de atendimento, qualificação, follow-up, vendas, análise e suporte sem intervenção humana. Eles reduzem o tempo de resposta, padronizam processos e aumentam a conversão ao operar 24/7.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border border-white/10 rounded-xl px-4 bg-white/5">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline text-lg font-medium">
              A Workflow substitui meu time interno?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-4">
              Não. Nós potencializamos seu time, eliminando tarefas manuais e colocando tecnologia para trabalhar junto com a equipe. Seu time foca no estratégico — a operação automática cuida do resto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border border-white/10 rounded-xl px-4 bg-white/5">
            <AccordionTrigger className="text-white hover:text-primary hover:no-underline text-lg font-medium">
              Em quanto tempo começo a ver resultados?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 text-base leading-relaxed pb-4">
              As primeiras melhorias começam a aparecer nas primeiras semanas. A partir de 60 a 90 dias, a operação integrada já entrega ganhos significativos de performance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 blur-[100px]" />
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
          Sua empresa vai mudar de patamar
        </h2>
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Pronto para transformar seu negócio? Vamos construir uma operação que realmente funciona — com tecnologia, inteligência e execução.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-8 text-xl bg-white text-black hover:bg-white/90 font-bold">
            Quero um diagnóstico gratuito
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-8 text-xl border-white/20 text-white hover:bg-white/10">
            Falar com a Workflow
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative z-10 glass bg-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-display text-white">
              WorkFlow
            </span>
          </div>
          <p className="text-sm text-white/40 max-w-xs text-center md:text-left">
            Transformando o futuro com design e tecnologia de ponta.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">YouTube</a>
        </div>

        <p className="text-sm text-white/40">
          © 2024 Agência Workflow.
        </p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 scroll-smooth">
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Methodology />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
