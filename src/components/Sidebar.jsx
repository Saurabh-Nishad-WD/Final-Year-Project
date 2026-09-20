
import {
  LayoutDashboard,
  AlertTriangle,
  ShieldAlert,
  Radar,
  Bot,
  FileText,
  Settings,
  ShieldCheck,
  X,
  HomeIcon,
} from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

      <div className="logo">

        <div className="logo-icon">
          <ShieldCheck size={24} />
        </div>

        <div>
          <h2>AGENTIC AI</h2>
          <span> CYBERSECURITY SOC ASSISTANT </span>
        </div>

        <button
          className="close-sidebar"
          onClick={closeSidebar}
        >
          <X size={21} />
        </button>

      </div>


      <nav>

        <p className="menu-label">
          MAIN
        </p>

        <a className="menu-item active">
          <HomeIcon size={18} />
          Dashboard
        </a>

        <a className="menu-item">
          <AlertTriangle size={18} />
          Alerts
          <span className="badge">
            24
          </span>
        </a>

        <a className="menu-item">
          <ShieldAlert size={18} />
          Incidents
          <span className="badge red">
            3
          </span>
        </a>

        <a className="menu-item">
          <Radar size={18} />
          Threat Intel
        </a>

        <a className="menu-item">
          <Bot size={18} />
          AI Agents
        </a>


        <p className="menu-label system-label">
          SYSTEM
        </p>

        <a className="menu-item">
          <FileText size={18} />
          Reports
        </a>

        <a className="menu-item">
          <Settings size={18} />
          Settings
        </a>

      </nav>


      <div className="sidebar-bottom">

        {/* <div className="system-online">

          <span className="online-dot"></span>

          <div>
            <strong>System Online</strong>
            <small>All systems operational</small>
          </div> 

        </div> */}

        <p className="version">
          SENTINEL AI v1.0
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;

