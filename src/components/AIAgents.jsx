 
import {
  Radar,
  Zap,
  BrainCircuit,
  Bot,
} from "lucide-react";

function AIAgents() {

  const agents = [
    {
      name: "Detection Agent",
      status: "Investigating",
      icon: <Radar size={18} />,
    },
    {
      name: "Response Agent",
      status: "Active",
      icon: <Zap size={18} />,
    },
    {
      name: "Threat Intel Agent",
      status: "Monitoring",
      icon: <BrainCircuit size={18} />,
    },
  ];

  return (
    <div className="panel agents-panel">

      <div className="panel-title">

        <div>
          <h3>AI Agents</h3>
          <p>Autonomous security agents</p>
        </div>

        <Bot size={20} />

      </div>


      <div className="agents-list">

        {agents.map((agent, index) => (

          <div className="agent-item" key={index}>

            <div className="agent-icon">
              {agent.icon}
            </div>

            <div className="agent-content">

              <strong>
                {agent.name}
              </strong>

              <span>
                <i></i>
                {agent.status}
              </span>

            </div>

            <button>
              Open
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIAgents;

