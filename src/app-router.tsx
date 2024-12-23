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
import QRCodePage from './pages/dashboard/qr-code';

const AppRoutes: FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppShellLayout />}>
          {/* Public Routes */}
          <Route element={<PublicGuardLayout />}>
            <Route path="/" element={<AuthenticationLayout />}>
              <Route
                path="/login"
                element={
                  <PageWrapper
                    showPageTitle={false}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle=""
                  >
                    <LoginPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/signup"
                element={
                  <PageWrapper
                    showPageTitle={false}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle=""
                  >
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
                  <PageWrapper
                    showPageTitle={true}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle="Dashboard"
                  >
                    <IndexPage />
                  </PageWrapper>
                }
              />
              <Route
                path="move"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={true}
                    transparentBackgorund={true}
                    pageTitle="Move It"
                  >
                    <MoveItPage />
                  </PageWrapper>
                }
              />
              <Route
                path="profile"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={true}
                    transparentBackgorund={true}
                    pageTitle="Profile"
                  >
                    <ProfilePage />
                  </PageWrapper>
                }
              />
              <Route
                path="scanner"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={true}
                    transparentBackgorund={true}
                    pageTitle="Scanner"
                  >
                    <QRCodePage />
                  </PageWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageWrapper
                    showPageTitle={false}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle=""
                  >
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
