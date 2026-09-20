 
import { useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import ThreatActivity from "./components/ThreatActivity";
import Alerts from "./components/Alerts";
import AIAgents from "./components/AIAgents";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main */}
      <main className="main">

        <Topbar />

        {/* Mobile menu button */}
        <button
          className="mobile-menu"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={22} />
        </button>

        <section className="dashboard">

          {/* Heading */}
          <div className="dashboard-heading">

            <div>
              <p className="heading-label">
                SECURITY OPERATIONS CENTER
              </p>

              <h1>Security Operations Center</h1>

              <p className="heading-subtitle">
                AI-powered threat detection & response
              </p>
            </div>

            {/* <div className="soc-online">
              <span></span>
              SOC STATUS: ONLINE
            </div> */}

          </div>


          {/* Statistics */}
          <div className="stats-grid">

            <StatCard
              title="Total Alerts"
              value="24"
              change="+12% from yesterday"
              type="blue"
            />

            <StatCard
              title="Critical Threats"
              value="7"
              change="+2 since last hour"
              type="red"
            />

            <StatCard
              title="Active Incidents"
              value="3"
              change="2 being investigated"
              type="orange"
            />

            <StatCard
              title="AI Accuracy"
              value="98.7%"
              change="+0.4% this week"
              type="green"
            />

          </div>


          {/* Dashboard panels */}
          <div className="dashboard-grid">

            <ThreatActivity />

            <div className="panel system-panel">

              <div className="panel-title">
                <div>
                  <h3>System Health</h3>
                  <p>Infrastructure status</p>
                </div>

                <span className="health-status">
                  ● HEALTHY
                </span>
              </div>

              <div className="health-item">
                <div className="health-name">
                  <span>SIEM</span>
                  <b>96%</b>
                </div>

                <div className="progress">
                  <span style={{ width: "96%" }}></span>
                </div>
              </div>

              <div className="health-item">
                <div className="health-name">
                  <span>EDR</span>
                  <b>99%</b>
                </div>

                <div className="progress">
                  <span style={{ width: "99%" }}></span>
                </div>
              </div>

              <div className="health-item">
                <div className="health-name">
                  <span>Network</span>
                  <b>94%</b>
                </div>

                <div className="progress">
                  <span style={{ width: "94%" }}></span>
                </div>
              </div>

              <div className="health-item">
                <div className="health-name">
                  <span>AI Engine</span>
                  <b>98%</b>
                </div>

                <div className="progress">
                  <span style={{ width: "98%" }}></span>
                </div>
              </div>

            </div>


            <Alerts />

            <AIAgents />

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;

