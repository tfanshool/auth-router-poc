import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import AppShellLayout from './layouts/AppShellLayout';
import { AuthenticationLayout } from './layouts/AuthenticationLayout';
import { AuthGuardLayout } from './layouts/AuthGuardLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { PublicGuardLayout } from './layouts/PublicGuardLayout';
import IndexPage from './pages/dashboard';
import MoveItPage from './pages/dashboard/move';
import LoginPage from './pages/auth/login';
import SignUpPage from './pages/auth/signup';
import { AuthProvider } from './state/contexts/AuthProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShellLayout />}>
            <Route element={<PublicGuardLayout />}>
              <Route path="/" element={<AuthenticationLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Route>
            </Route>

            {/* Protected Routes */}
            <Route element={<AuthGuardLayout />}>
              <Route element={<DashboardLayout />}>
                <Route path="/" element={<IndexPage />} />
                <Route path="move" element={<MoveItPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
