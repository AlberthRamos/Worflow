import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ParticleAnimation } from "@/components/ParticleAnimation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import DiagnosticPage from "@/pages/Diagnostic";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diagnostico" component={DiagnosticPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ParticleAnimation />
        <Toaster />
        <Router />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
