import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GreentanyConsultingPage from "./pages/Cabinet";
import GreentanyExportPage from "./pages/GreentanyExportPage";
import ProductsPage from "./pages/ProductsPage";
import ReferencesPage from "./pages/ReferencesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";
import Index from "./pages/Index";
import Cabinet from "./pages/Cabinet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SmoothScroll>
          <div className="min-h-screen">
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
            <Footer />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
