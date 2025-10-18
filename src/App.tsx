import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import PolicyPage from "./pages/PolicyPage";
import CreatePolicy from "./components/CreatePolicy";
import Login from "./pages/Login";
import Request from "./pages/Request";
import RequestReview from "./pages/RequestReview";
import UserManagement from "./pages/UserManagement";
import AuditTrail from "./pages/AuditTrail";
import ManageRoles from "./pages/ManageRoles";
import Headbar from "./components/Headbar";

function App() {
  const location = useLocation();
  const hideSidebarRoutes = ["/"];
  const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

  const hideHeadbar = ["/"];
  const shouldHideHeadbar = !hideHeadbar.includes(location.pathname);

  return (
    // <Router>

    <div className="flex bg-[#ffffff]">
      {shouldShowSidebar && <Sidebar />}

      <main className="flex-1 px-2.5 py-1 flex flex-col gap-2">
        {shouldHideHeadbar && <Headbar />}

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/policy-management" element={<PolicyPage />} />
          <Route path="/requests/dashboard" element={<Request />} />
          <Route path="/requests/data" element={<RequestReview />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/role-management" element={<ManageRoles />} />
          <Route path="/createPolicy" element={<CreatePolicy />} />
          <Route path="/audit" element={<AuditTrail />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </main>
    </div>

    // </Router>
  );
}

export default App;
