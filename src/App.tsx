import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/auth-context";
import Navbar from "@/components/Navbar";
import RequireAuth from "@/components/RequireAuth";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import DashboardPage from "@/pages/DashboardPage";
import AdminPage from "@/pages/AdminPage";
import AdminAccountsPage from "@/pages/AdminAccountsPage";
import PricingPage from "@/pages/PricingPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import RefundPage from "@/pages/RefundPage";
import NotFound from "./pages/NotFound.tsx";
import SniplinkPayPage from "@/pages/SniplinkPayPage";
import SniplinkPayAdminPage from "@/pages/SniplinkPayAdminPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>

            {/* Admin accounts management - standalone */}
            <Route path="/admin/accounts" element={<AdminAccountsPage />} />

            {/* Sniplink Pay standalone pages */}
            <Route path="/sniplink-pay" element={<SniplinkPayPage />} />
            <Route path="/sniplink-pay/admin" element={<SniplinkPayAdminPage />} />

            {/* Main site with navbar */}
            <Route element={<><Navbar /><Outlet /></>}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
              <Route path="/refund-policy" element={<RefundPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
