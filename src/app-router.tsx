import AppShellLayout from './layouts/AppShellLayout';
import { AuthenticationLayout } from './layouts/AuthenticationLayout';
import { AuthGuardLayout } from './layouts/AuthGuardLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { PublicGuardLayout } from './layouts/PublicGuardLayout';
import IndexPage from './pages/dashboard';
import MoveItPage from './pages/dashboard/move';
import LoginPage from './pages/auth/login';
import SignUpPage from './pages/auth/signup';
import NotFoundPage from './pages/error/NotFoundPage';
import { Route, Routes, useLocation } from 'react-router';
import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './components/common/page-wrapper';
import ProfilePage from './pages/dashboard/profile';

const AppRoutes: FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppShellLayout />}>
          <Route element={<PublicGuardLayout />}>
            <Route path="/" element={<AuthenticationLayout />}>
              <Route
                path="/login"
                element={
                  <PageWrapper>
                    <LoginPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/signup"
                element={
                  <PageWrapper>
                    <SignUpPage />
                  </PageWrapper>
                }
              />
            </Route>
          </Route>

          {/* Protected Routes */}
          <Route element={<AuthGuardLayout />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route
                index
                element={
                  <PageWrapper>
                    <IndexPage />
                  </PageWrapper>
                }
              />
              <Route
                path="move"
                element={
                  <PageWrapper>
                    <MoveItPage />
                  </PageWrapper>
                }
              />
              <Route
                path="profile"
                element={
                  <PageWrapper>
                    <ProfilePage />
                  </PageWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <NotFoundPage />
                  </PageWrapper>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
