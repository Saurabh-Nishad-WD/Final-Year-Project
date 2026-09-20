 
function ThreatActivity() {

  return (
    <div className="panel threat-panel">

      <div className="panel-title">

        <div>
          <h3>Threat Activity</h3>
          <p>Real-time security events</p>
        </div>

        <select>
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>

      </div>


      <div className="chart">

        <div className="chart-lines">

          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>

        <svg
          viewBox="0 0 700 250"
          preserveAspectRatio="none"
        >

          <defs>

            <linearGradient
              id="areaGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="0%"
                stopOpacity="0.35"
              />

              <stop
                offset="100%"
                stopOpacity="0"
              />

            </linearGradient>

          </defs>


          <path
            className="area"
            d="
              M0 210
              L70 185
              L140 200
              L210 140
              L280 165
              L350 100
              L420 125
              L490 80
              L560 105
              L630 50
              L700 75
              L700 250
              L0 250
              Z
            "
          />

          <polyline
            className="line"
            points="
              0,210
              70,185
              140,200
              210,140
              280,165
              350,100
              420,125
              490,80
              560,105
              630,50
              700,75
            "
          />

        </svg>


        <div className="chart-labels">

          <span>00:00</span>
          <span>04:00</span>
          <span>08:00</span>
          <span>12:00</span>
          <span>16:00</span>
          <span>20:00</span>
          <span>24:00</span>

        </div>

      </div>

    </div>
  );
}

export default ThreatActivity;

