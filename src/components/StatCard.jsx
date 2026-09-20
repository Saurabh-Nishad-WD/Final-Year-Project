 
import {
  AlertTriangle,
  ShieldAlert,
  Activity,
  BrainCircuit,
} from "lucide-react";

function StatCard({
  title,
  value,
  change,
  type,
}) {

  const icons = {
    blue: <AlertTriangle size={20} />,
    red: <ShieldAlert size={20} />,
    orange: <Activity size={20} />,
    green: <BrainCircuit size={20} />,
  };

  return (
    <div className="stat-card">

      <div className={`stat-icon ${type}`}>
        {icons[type]}
      </div>

      <div className="stat-content">

        <span>
          {title}
        </span>

        <h2>
          {value}
        </h2>

        <small className={type === "red" ? "danger-text" : "success-text"}>
          {change}
        </small>

      </div>

    </div>
  );
}

export default StatCard;
