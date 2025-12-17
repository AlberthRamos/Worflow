import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Brain, TrendingUp, Zap } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface Question {
  id: string;
  question: string;
  placeholder: string;
  icon: React.ReactNode;
}

const questions = useMemo(() => [
  {
    id: 'business',
    question: 'Descreva seu negócio em poucas palavras',
    placeholder: 'Ex: Consultoria de marketing, e-commerce de moda, restaurante...',
    icon: <Brain className="w-5 h-5 text-blue-400" />
  },
  {
    id: 'challenge',
    question: 'Qual seu maior desafio atual?',
    placeholder: 'Ex: Captar clientes, aumentar vendas, automação...',
    icon: <TrendingUp className="w-5 h-5 text-blue-400" />
  },
  {
    id: 'goal',
    question: 'Qual seu objetivo principal?',
    placeholder: 'Ex: Aumentar faturamento em 50%, escalar operações...',
    icon: <Zap className="w-5 h-5 text-blue-400" />
  }
], []);

export const DiagnosticChat = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = useMemo(() => questions[currentStep], [currentStep, questions]);

  const addMessage = useCallback((content: string, type: 'user' | 'ai') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!inputValue.trim()) return;

    // Adicionar resposta do usuário
    addMessage(inputValue, 'user');
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: inputValue }));
    setInputValue('');
    setIsTyping(true);

    // Simular processamento
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (currentStep < questions.length - 1) {
      // Próxima pergunta
      setCurrentStep(prev => prev + 1);
      setIsTyping(false);
    } else {
      // Diagnóstico completo
      setIsTyping(false);
      setIsComplete(true);
      
      // Gerar análise
      const analysis = generateAnalysis({ ...answers, [currentQuestion.id]: inputValue });
      addMessage(analysis, 'ai');
    }
  }, [inputValue, currentStep, questions.length, currentQuestion, addMessage, answers]);

  const generateAnalysis = useCallback((responses: Record<string, string>) => {
    return `🎯 **Análise Personalizada**

Com base nas suas respostas, identifiquei oportunidades estratégicas:

**Sobre seu negócio:** ${responses.business}
**Desafio principal:** ${responses.challenge}
**Objetivo:** ${responses.goal}

**Recomendações prioritárias:**

1. **Automação de Marketing** - Implementar funis inteligentes
2. **Inteligência de Dados** - Análise preditiva de clientes
3. **Performance Maximizada** - Otimização contínua com IA

**Próximos passos:**
- Diagnóstico detalhado em 24h
- Plano de ação personalizado
- Implementação em 30 dias

Clique em "Agendar Consultoria" para dar o próximo passo!`;
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  const restartDiagnostic = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setMessages([]);
    setIsComplete(false);
    setInputValue('');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-blue-400" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Diagnóstico Inteligente
            </h1>
          </div>
          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            Responda algumas perguntas e receba uma análise inicial personalizada de marketing, vendas e automação
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div 
          className="glass-card-strong rounded-2xl p-6 backdrop-blur-3xl border border-blue-400/20 shadow-2xl shadow-blue-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-blue-300/60 mb-2">
              <span>Progresso</span>
              <span>{currentStep + 1} de {questions.length}</span>
            </div>
            <div className="w-full bg-blue-900/30 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto mb-6 space-y-4 pr-2">
            <AnimatePresence>
              {/* Mensagem inicial */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-900/40 rounded-2xl rounded-tl-none p-4 border border-blue-400/20">
                      <p className="text-blue-100 font-medium mb-2">{currentQuestion.question}</p>
                      <p className="text-blue-300/70 text-sm">{currentQuestion.placeholder}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Mensagens do usuário e IA */}
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-700' 
                      : 'bg-gradient-to-br from-blue-600 to-blue-800'
                  }`}>
                    {message.type === 'user' ? (
                      <div className="w-5 h-5 bg-white rounded-full" />
                    ) : (
                      <Brain className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className={`flex-1 max-w-[80%] ${
                    message.type === 'user' ? 'items-end' : 'items-start'
                  }`}>
                    <div className={`bg-gradient-to-br rounded-2xl p-4 border ${
                      message.type === 'user'
                        ? 'bg-blue-600/40 rounded-tr-none border-blue-400/30'
                        : 'bg-blue-900/40 rounded-tl-none border-blue-400/20'
                    }`}>
                      <p className="text-white whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Indicador de digitação */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-900/40 rounded-2xl rounded-tl-none p-4 border border-blue-400/20">
                      <div className="flex space-x-2">
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          {!isComplete && (
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  {currentQuestion.icon}
                </div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={currentQuestion.placeholder}
                  className="w-full bg-blue-900/30 border border-blue-400/20 rounded-xl px-12 py-4 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  disabled={isTyping}
                  autoFocus
                />
              </div>
              <motion.button
                onClick={handleSubmit}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-900 disabled:to-blue-900 disabled:opacity-50 text-white px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}

          {/* Action Buttons */}
          {isComplete && (
            <motion.div 
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.button
                onClick={restartDiagnostic}
                className="bg-blue-900/40 hover:bg-blue-900/60 border border-blue-400/30 text-blue-200 px-6 py-3 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Refazer Diagnóstico
              </motion.button>
              <motion.button
                onClick={() => window.open('/consultoria', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Consultoria
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};