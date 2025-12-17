import { HologramBackground } from "@/components/HologramBackground";
import { GlowButton } from "@/components/GlowButton";
import { TypewriterText } from "@/components/TypewriterText";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ParallaxSection } from "@/components/ParallaxSection";
import { AdvancedTicker } from "@/components/AdvancedTicker";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Globe, Layers, Sparkles, Zap, Menu, X, BarChart3, Database, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600/10 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo placeholder - using text as per request */}
          <img src="/logo.png" alt="Workflow Logo" className="h-8 w-auto object-contain" />
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-zinc-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-xl font-display">Acessar Conta</DialogTitle>
                <DialogDescription className="text-white/60">
                  Entre com suas credenciais para acessar o painel do cliente.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                  <Input id="email" placeholder="seu@email.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-sm font-medium text-white/80">Senha</label>
                  <Input id="password" type="password" placeholder="••••••••" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
                  Entrar no Sistema
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
  const [, setLocation] = useLocation();
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Hologram Background com efeito mais sutil */} 
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-950/40 to-background z-10" />
        <div className="absolute inset-0 opacity-40">
          <HologramBackground />
        </div>
      </div>

      {/* Partículas de fundo animadas */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center z-10 grid lg:grid-cols-1 gap-12 items-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-8 border border-blue-500/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
            </motion.div>
            <span className="text-sm font-semibold glass-text">
              Agência Digital Impulsionada por IA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 leading-[1.1]"
          >
            <span className="glass-text-strong block mb-2">
              Marketing Inteligente,
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-glow-blue block">
              <TypewriterText 
                texts={[
                  "Automação Estratégica",
                  "IA em Tempo Real",
                  "Performance Maximizada",
                  "Escala Sustentável"
                ]} 
                speed={100} 
                delay={2500} 
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-12 leading-relaxed glass-text"
          >
            Enquanto o mercado ainda trabalha com fluxo criativo e gestão de redes sociais, a Workflow opera em outro patamar. 
            Integramos marketing, tecnologia e automação em um único ecossistema voltado para um objetivo claro: <strong className="text-blue-300">crescimento real e previsível.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <GlowButton 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => setLocation('/diagnostico')}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Diagnóstico Inteligente
              </GlowButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              <GlowButton variant="outline" size="lg" className="w-full sm:w-auto">
                Quero transformar meu marketing <ArrowRight className="ml-2 w-5 h-5" />
              </GlowButton>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              <GlowButton variant="outline" size="lg" className="w-full sm:w-auto">
                Falar com um especialista
              </GlowButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator com animação melhorada */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} 
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-blue-300/60 font-medium">Descubra mais</span>
          <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center p-1 backdrop-blur-sm">
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const CrossingBanners = () => {
  const tickerTexts = useMemo(() => [
    "MARKETING INTELIGENTE",
    "AUTOMAÇÃO AVANÇADA", 
    "IA EM TEMPO REAL",
    "DADOS ESTRATÉGICOS",
    "PERFORMANCE MAXIMIZADA",
    "ESCALA SUSTENTÁVEL",
    "TECNOLOGIA FUTURISTA",
    "RESULTADOS MENSURÁVEIS"
  ], []);

  return (
    <div className="relative h-40 overflow-hidden flex flex-col justify-center -mt-16 z-20 pointer-events-none">
      {/* Faixa Superior - Azul Primário */}
      <AdvancedTicker
        texts={tickerTexts.slice(0, 4)}
        speed={60}
        direction="left"
        variant="primary"
        intensity="strong"
        className="-rotate-1 mb-2"
      />
      
      {/* Faixa Inferior - Azul Secundário */}
      <AdvancedTicker
        texts={tickerTexts.slice(4, 8)}
        speed={80}
        direction="right"
        variant="secondary"
        intensity="strong"
        className="rotate-1 mt-2"
      />
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 border-y border-white/5 bg-black/30 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { value: 200, suffix: "+", label: "Clientes Atendidos" },
            { value: 30, suffix: "+", label: "Empresas Globais" },
            { value: 60, suffix: "%", label: "Redução de Custo" },
            { value: 5, suffix: "x", label: "ROI Médio" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-bold font-display text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2}
                  delay={index * 0.2}
                />
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider group-hover:text-white/80 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      title: "Design & Conversão",
      description: "Acompanhamos métricas, analisamos dados, ajustamos e ampliamos canais para gerar escala.",
    },
  ];

  return (
    <section id="servicos" className="py-24 px-6 relative z-10 overflow-hidden">
      <ParallaxSection speed={0.3} direction="up" className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </ParallaxSection>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            O que faremos para seu <br/>negócio escalar
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Estratégia, automações e inteligência artificial integradas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ParallaxSection key={index} speed={0.2} direction={index % 2 === 0 ? "up" : "down"}>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="glass-card p-8 md:p-10 rounded-3xl h-full group hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-primary/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-white/70 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </ParallaxSection>
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
      role: "Head of Marketing",
      company: "Saldo Simples",
      rating: 5
    },
    {
      quote: "Com a Workflow saímos do improviso para uma operação profissional. Marketing, automação e IA integrados em um único sistema. O que antes dependia de vários fornecedores hoje funciona sozinho.",
      author: "Alex Mendes",
      role: "Fundador",
      company: "Epic Inc",
      rating: 5
    },
    {
      quote: "A Workflow mapeou tudo e criou uma operação digital que roda 24/7. Nunca vi uma agência trabalhar assim. Eles não fazem campanhas — constroem máquinas de aquisição.",
      author: "Késia Tonin",
      role: "CMO",
      company: "Zenith Store",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Transformamos negócios com tecnologia e estratégia. Veja o que nossos parceiros dizem sobre os resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.quote}
              rating={testimonial.rating}
              delay={index * 0.2}
            />
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
      <ParallaxSection speed={0.5} direction="up" className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-[100px]" />
      </ParallaxSection>
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
            Sua empresa vai mudar de patamar
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Pronto para transformar seu negócio? Vamos construir uma operação que realmente funciona — com tecnologia, inteligência e execução.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GlowButton variant="primary" size="lg" className="text-lg">
            Quero fazer isso acontecer
          </GlowButton>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex items-center justify-center gap-6 text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm">Sem contrato de fidelidade</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm">Resultados em até 90 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm">Suporte 24/7</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative z-10 glass bg-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Workflow Logo" className="h-8 w-auto object-contain" />
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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 scroll-smooth relative">
      <HologramBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CrossingBanners />
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
