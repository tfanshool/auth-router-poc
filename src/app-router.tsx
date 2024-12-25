import AppShellLayout from './layouts/AppShellLayout';
import { AuthenticationLayout } from './layouts/AuthenticationLayout';
import { AuthGuardLayout } from './layouts/AuthGuardLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { PublicGuardLayout } from './layouts/PublicGuardLayout';
import IndexPage from './pages/dashboard';
import MoveItPage from './pages/dashboard/menu/move';
import LoginPage from './pages/auth/login';
import SignUpPage from './pages/auth/signup';
import NotFoundPage from './pages/error/NotFoundPage';
import { Route, Routes, useLocation } from 'react-router';
import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './components/common/page-wrapper';
import ProfilePage from './pages/dashboard/action/profile';
import ScannerModePage from './pages/dashboard/action/scanner-mode';
import ScheduleItPage from './pages/dashboard/menu/schedule';
import MaintainItPage from './pages/dashboard/menu/maintain';
import SupportItPage from './pages/dashboard/menu/support';
import UpdateItPage from './pages/dashboard/menu/update';
import UseItPage from './pages/dashboard/menu/use';
import SettingsPage from './pages/dashboard/action/setting';
import CheckUpdatePage from './pages/dashboard/action/check-update';
import ScannerPlaygroundPage from './pages/dashboard/action/scanner_playground';

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

              {/* Menu Pages */}
              <Route
                path="move"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle="Move It"
                  >
                    <MoveItPage />
                  </PageWrapper>
                }
              />

              <Route
                path="maintain"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle="Maintain It"
                  >
                    <MaintainItPage />
                  </PageWrapper>
                }
              />

              <Route
                path="schedule"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle="Schedule It"
                  >
                    <ScheduleItPage />
                  </PageWrapper>
                }
              />

              <Route
                path="support"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle="Support It"
                  >
                    <SupportItPage />
                  </PageWrapper>
                }
              />

              <Route
                path="update"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle="Update It"
                  >
                    <UpdateItPage />
                  </PageWrapper>
                }
              />

              <Route
                path="use"
                element={
                  <PageWrapper
                    showPageTitle={true}
                    showBack={false}
                    transparentBackgorund={true}
                    pageTitle="Use It"
                  >
                    <UseItPage />
                  </PageWrapper>
                }
              />
              <Route path="/action">
                {/* Action Pages */}
                <Route
                  path="profile"
                  element={
                    <PageWrapper
                      showPageTitle={true}
                      showBack={false}
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
                      showBack={false}
                      transparentBackgorund={true}
                      pageTitle="Scanner"
                    >
                      <ScannerModePage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="scanner/v2"
                  element={
                    <PageWrapper
                      showPageTitle={true}
                      showBack={false}
                      transparentBackgorund={true}
                      pageTitle="Scanner v2"
                    >
                      <ScannerPlaygroundPage />
                    </PageWrapper>
                  }
                />

                <Route
                  path="setting"
                  element={
                    <PageWrapper
                      showPageTitle={true}
                      showBack={false}
                      transparentBackgorund={true}
                      pageTitle="Settings"
                    >
                      <SettingsPage />
                    </PageWrapper>
                  }
                />

                <Route
                  path="check-update"
                  element={
                    <PageWrapper
                      showPageTitle={true}
                      showBack={false}
                      transparentBackgorund={true}
                      pageTitle="Update"
                    >
                      <CheckUpdatePage />
                    </PageWrapper>
                  }
                />
              </Route>
              {/* Error Pages */}
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
