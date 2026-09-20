 
import {
  AlertTriangle,
  Clock3,
  ChevronRight,
} from "lucide-react";

function Alerts() {

  const alerts = [
    {
      title: "Brute-force attack detected",
      level: "Critical",
      time: "2m ago",
    },
    {
      title: "Suspicious PowerShell activity",
      level: "High",
      time: "5m ago",
    },
    {
      title: "Malicious IOC detected",
      level: "Medium",
      time: "9m ago",
    },
    {
      title: "Unusual login activity",
      level: "High",
      time: "14m ago",
    },
  ];

  return (
    <div className="panel alerts-panel">

      <div className="panel-title">

        <div>
          <h3>Recent Alerts</h3>
          <p>Latest detected threats</p>
        </div>

        <button className="view-all">
          View all
        </button>

      </div>


      <div className="alerts-list">

        {alerts.map((alert, index) => (

          <div className="alert-item" key={index}>

            <div className={`alert-icon ${alert.level.toLowerCase()}`}>
              <AlertTriangle size={17} />
            </div>


            <div className="alert-content">

              <strong>
                {alert.title}
              </strong>

              <div className="alert-meta">

                <span className={`severity ${alert.level.toLowerCase()}`}>
                  {alert.level}
                </span>

                <span className="time">
                  <Clock3 size={12} />
                  {alert.time}
                </span>

              </div>

            </div>

            <ChevronRight
              size={17}
              className="arrow"
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default Alerts;

