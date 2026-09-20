 
import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

function Topbar() {

  return (
    <header className="topbar">

      <div className="search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search alerts, incidents, IOCs..."
        />

        <span>⌘ K</span>

      </div>


      <div className="topbar-right">

        <button className="notification">

          <Bell size={20} />

          <i></i>

        </button>


        <div className="user">

          <div className="avatar">
            AR
          </div>

          <div className="user-info">
            <strong>Analyst</strong>
            <small>Security Team</small>
          </div>

          <ChevronDown size={16} />

        </div>

      </div>

    </header>
  );
}

export default Topbar;

