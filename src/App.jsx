import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/MainLayout";
import Overview from "./pages/Overview";
import Report from "./pages/Report";
import Features from "./pages/Feature";
import User from "./pages/User";
import Feedback from "./pages/Feedback";
import AuditLog from "./pages/AuditLog";

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="features" element={<Features />} />
        <Route path="reports" element={<Report />} />
        <Route path="users" element={<User />} />
        <Route path="feedbacks" element={<Feedback />} />
        <Route path="audit-logs" element={<AuditLog />} />
      </Route>
    </Routes>
  );
}
