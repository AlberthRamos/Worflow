import { Background3D } from "@/components/Background3D";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Globe, Layers, Sparkles, Zap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-white">
            Workflow<span className="text-primary">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Início", "Serviços", "Projetos", "Sobre", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Começar Projeto
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 glass border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {["Início", "Serviços", "Projetos", "Sobre", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-white/80"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="início" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-primary/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary-foreground/80">
            A Agência do Futuro
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]"
        >
          Inovação Digital <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent text-glow">
            Sem Limites
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Criamos experiências digitais imersivas que conectam marcas ao futuro.
          Design de alta performance, tecnologia de ponta e estratégia visionária.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-white/90">
            Explorar Projetos <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10">
            Nossos Serviços
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Desenvolvimento Web",
      description: "Sites imersivos e aplicações web progressivas construídas com as tecnologias mais modernas.",
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Interfaces intuitivas e belas que encantam usuários e aumentam conversões.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: "Automação & IA",
      description: "Soluções inteligentes que otimizam processos e escalam seu negócio automaticamente.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance",
      description: "Otimização extrema para garantir que seu site carregue instantaneamente em qualquer lugar.",
    },
  ];

  return (
    <section id="serviços" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Combinamos design futurista com engenharia robusta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card p-8 rounded-2xl h-full group hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="projetos" className="py-24 px-6 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
              Projetos Recentes
            </h2>
            <p className="text-white/60 max-w-xl">
              Veja como transformamos ideias em realidade digital.
            </p>
          </div>
          <Button variant="link" className="text-white hover:text-primary p-0 h-auto gap-2">
            Ver Todos os Projetos <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
              <img
                src={`https://images.unsplash.com/photo-${item === 1 ? '1481480750345-498993f78386' : item === 2 ? '1550745165-9bc0b252726f' : '1550751827-4bd374c3f58b'}?auto=format&fit=crop&q=80&w=800`}
                alt="Project Preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-sm font-medium mb-2 block">Fintech</span>
                <h3 className="text-2xl font-bold text-white">Project Nova {item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card border-none overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex flex-col justify-between bg-primary/10">
              <div>
                <h2 className="text-3xl font-bold font-display text-white mb-4">Vamos Conversar?</h2>
                <p className="text-white/70 mb-8">
                  Tem um projeto em mente? Estamos prontos para transformar sua visão em realidade.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span>contato@agenciaworkflow.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Code className="w-5 h-5" />
                  </div>
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>

            <div className="p-10 bg-black/20">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Nome</label>
                  <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Email</label>
                  <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary" placeholder="seu@email.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Mensagem</label>
                  <Textarea className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary min-h-[120px]" placeholder="Conte-nos sobre seu projeto..." />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-white/10 relative z-10 glass bg-black/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="text-lg font-bold font-display text-white">
            Workflow<span className="text-primary">.</span>
          </span>
        </div>
        <p className="text-sm text-white/40">
          © 2024 Agência Workflow. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          {/* Social Icons would go here */}
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
