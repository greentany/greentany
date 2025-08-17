import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import ReferencesPage from "./pages/ReferencesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";
import Index from "./pages/Index";
import Cabinet from "./pages/Cabinet";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Composant qui utilise useLocation (doit être à l'intérieur de BrowserRouter)
const AppContent = () => {
  const location = useLocation();
  
  // Ne pas afficher le Footer sur la page produits
  const shouldShowFooter = location.pathname !== '/produits';
  
  return (
    <SmoothScroll>
      <div className="min-h-screen w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {shouldShowFooter && <Footer />}
      </div>
    </SmoothScroll>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
