import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {
  Home as HomeIcon,
  Map,
  Gamepad2,
  Video,
  Mic,
  Camera,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Lightbulb,
  Palette,
  Settings2,
  Circle,
  Network,
  ShieldAlert,
  Activity,
  Users,
  Route as RouteIcon,
  LifeBuoy,
  X,
  Radio,
  ArrowUpRight,
  Wind,
  Navigation,
  Wifi,
  MapPin,
  Battery,
  Thermometer,
  CircleAlert,
  Signal,
  Send,
  Volume2,
  VolumeX,
  MicOff,
  Bot,
  MessageSquare,
  Trash2,
} from "lucide-react";

const navItems = [
  { to: "/", label: "HOME", icon: HomeIcon },
  { to: "/mine-map", label: "MINE MAP", icon: Map },
  { to: "/rover-control", label: "ROVER CONTROL", icon: Gamepad2 },
  { to: "/communication", label: "COMMUNICATION", icon: Mic },
  { to: "/live-view", label: "LIVE VIEW", icon: Video },
  { to: "/network", label: "NETWORK", icon: Network },
];

const features = [
  { id: "hazards", title: "DETECT HAZARDS", description: "Monitor underground gases and environmental conditions to identify dangerous situations.", icon: Activity },
  { id: "survivors", title: "LOCATE SURVIVORS", description: "Identify and display possible survivor locations to support rescue operations.", icon: Users },
  { id: "routes", title: "PLAN SAFE ROUTES", description: "Use underground condition data to identify safer paths for rover and rescue movement.", icon: RouteIcon },
  { id: "rescue", title: "SUPPORT RESCUE", description: "Provide live underground information, rover status and communication support to rescue teams.", icon: LifeBuoy },
];

function App() {
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  return (
    <div className="app">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <div className="brand-symbol">M</div>
          <div><div className="brand-name">MINE<span>NOVA</span></div><div className="brand-subtitle">AI MINE RESCUE ROVER</div></div>
        </NavLink>
        <nav className="main-nav">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
              <Icon size={16} /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="system-area">
          <div className="system-status"><span className="status-dot" /><div><strong>SYSTEM ONLINE</strong><small>ROVER-01 • LIVE SIMULATION</small></div></div>
          <button className="emergency-button" onClick={() => setEmergencyOpen(true)}><ShieldAlert size={17} />EMERGENCY STOP</button>
        </div>
      </header>

      {emergencyOpen && (
        <div className="modal-backdrop">
          <div className="modal emergency-modal">
            <button className="modal-close" onClick={() => setEmergencyOpen(false)}><X size={20} /></button>
            <ShieldAlert size={44} />
            <span className="eyebrow">CRITICAL COMMAND</span>
            <h2>EMERGENCY STOP</h2>
            <p>Stop ROVER-01 immediately?</p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button className="confirm-stop" onClick={() => setEmergencyOpen(false)}>CONFIRM STOP</button>
              <button className="secondary-action" onClick={() => setEmergencyOpen(false)}>CANCEL</button>
            </div>
          </div>
        </div>
      )}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mine-map" element={<MineMapPage />} />
          <Route path="/rover-control" element={<RoverControlPage />} />
          <Route path="/communication" element={<CommunicationPage />} />
          <Route path="/live-view" element={<LiveViewPage />} />
          <Route path="/network" element={<NetworkPage />} />
        </Routes>
      </main>
    </div>
  );
}

function HomePage() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  return (
    <div className="home-page">
      <style>{`
        /* HOME ONLY: move the four feature cards slightly downward */
        .home-page .features-section {
          transform: translateY(62px);
        }

        /* HOME FEATURE POPUP ONLY: four clean cards in a 2 x 2 layout */
        .home-page .feature-modal .how-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .home-page .feature-modal .how-card {
          min-height: 82px;
          padding: 14px 15px;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 10px;
          background: rgba(255,255,255,.035);
          display: flex;
          align-items: flex-start;
          gap: 12px;
          box-sizing: border-box;
        }

        .home-page .feature-modal .how-card > span {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(242,132,45,.75);
          border-radius: 7px;
          color: #f5a04f;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .home-page .feature-modal .how-card p {
          margin: 1px 0 0;
          font-size: 11px;
          line-height: 1.5;
          font-weight: 400;
          color: rgba(255,255,255,.78);
        }

        @media (max-width: 720px) {
          .home-page .feature-modal .how-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-label"><Radio size={15} />AUTONOMOUS RESCUE TECHNOLOGY</div>
          <h1>SAFER MINES.<br /><span>BRIGHTER TOMORROWS.</span></h1>
          <p>MineNova is an AI-powered underground mine rescue rover designed to explore hazardous zones, detect dangers, locate survivors and support rescue teams.</p>
          <div className="hero-stats">
            <div><strong>AI</strong><span>HAZARD ANALYSIS</span></div>
            <div><strong>24/7</strong><span>MONITORING</span></div>
            <div><strong>REAL-TIME</strong><span>RESCUE SUPPORT</span></div>
          </div>
        </div>
        <div className="features-section">
          <div className="feature-grid">
            {features.map((feature) => { const Icon = feature.icon; return (
              <button key={feature.id} className="feature-card" onClick={() => setSelectedFeature(feature)}>
                <div className="feature-icon"><Icon size={23} /></div>
                <div className="feature-text"><h3>{feature.title}</h3><p>{feature.description}</p></div>
                <ArrowUpRight className="feature-arrow" size={19} />
              </button>
            ); })}
          </div>
        </div>
        {selectedFeature && <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />}
      </section>
    </div>
  );
}

function FeatureModal({ feature, onClose }) {
  const Icon = feature.icon;
  const how = {
    hazards: ["Sensors continuously scan the underground atmosphere.", "AI checks readings against dangerous-condition patterns.", "Risky zones are detected before rescue teams enter.", "Hazard locations are highlighted on the mine map."],
    survivors: ["Camera and onboard sensing search for human presence.", "AI analyses movement, heat and visual clues.", "Possible survivor locations are marked on the map.", "Rescue teams receive the location for faster response."],
    routes: ["The rover evaluates tunnels and known hazard zones.", "Blocked or dangerous sections are avoided.", "A safer route is calculated from available paths.", "The route can guide the rover and rescue team."],
    rescue: ["Live rover information is shared with the rescue team.", "Mine conditions help teams understand the danger ahead.", "Map markers show hazards, survivors and rover position.", "The system supports faster and safer rescue decisions."],
  }[feature.id];
  return <div className="modal-backdrop"><div className="modal feature-modal">
    <button className="modal-close" onClick={onClose}><X size={20} /></button>
    <div className="feature-icon large"><Icon size={30} /></div><span className="eyebrow">MINENOVA SYSTEM</span><h2>{feature.title}</h2><p>{feature.description}</p>
    <div className="how-grid">{how.map((item, i) => <div className="how-card" key={item}><span>0{i + 1}</span><p>{item}</p></div>)}</div>
  </div></div>;
}

function MineMapPage() {
  const [selected, setSelected] = useState(null);
  const [roverStep, setRoverStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoverStep((step) => (step + 1) % 8);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  // These positions follow the visible tunnel/track area in mine-map.png.
  // The rover never travels through the empty centre of the map.
  const roverPath = [
    { left: 30.5, top: 18.5 },
    { left: 34.5, top: 21.0 },
    { left: 39.0, top: 22.5 },
    { left: 43.5, top: 20.5 },
    { left: 48.0, top: 17.8 },
    { left: 51.5, top: 18.8 },
    { left: 47.0, top: 21.8 },
    { left: 40.5, top: 23.0 },
  ];

  const rover = roverPath[roverStep];

  const markers = [
    {
      id: "hazard",
      type: "HAZARD",
      title: "TOXIC GAS ZONE",
      shortTitle: "DANGER",
      text: "AI has detected a potentially dangerous gas condition in this tunnel section. Rescue teams should avoid direct entry until the area is assessed.",
      detail: "Gas risk: HIGH • Danger level: 78%",
      left: 75.0,
      top: 31.5,
      className: "hazard-marker",
      icon: <CircleAlert size={18} />,
    },
    {
      id: "survivor",
      type: "SURVIVOR",
      title: "SURVIVOR LOCATION",
      shortTitle: "SURVIVOR",
      text: "Possible survivor presence detected at this point. Rescue teams can use this location as the current search target.",
      detail: "1 person detected • Search confidence: 78%",
      left: 57.0,
      top: 46.0,
      className: "survivor-marker",
      icon: <Users size={18} />,
    },
    {
      id: "network",
      type: "NETWORK",
      title: "RELAY NODE 03",
      shortTitle: "NETWORK",
      text: "This relay node maintains the communication link between the rover and the surface gateway.",
      detail: "Signal: Strong • Link quality: 92%",
      left: 82.0,
      top: 29.0,
      className: "network-marker",
      icon: <Signal size={18} />,
    },
    {
      id: "water",
      type: "ENVIRONMENT",
      title: "WATER ZONE",
      shortTitle: "WATER",
      text: "Water accumulation has been detected in the lower tunnel area. The rover is monitoring this zone for changes.",
      detail: "Water level: Moderate",
      left: 30.0,
      top: 63.0,
      className: "water-marker",
      icon: <Activity size={18} />,
    },
  ];

  return (
    <section className="mine-map-page">
      <style>{`
        .mine-map-page{
          height:calc(100vh - 72px);
          min-height:620px;
          position:relative;
          overflow:hidden;
          background:#050709;
          color:#f4f5f6;
        }
        .mine-map-bg{
          position:absolute;
          inset:0;
          background-image:
            linear-gradient(180deg,rgba(3,5,7,.22),rgba(3,5,7,.08) 45%,rgba(3,5,7,.38)),
            url('/mine-map.png');
          background-size:cover;
          background-position:center center;
          background-repeat:no-repeat;
        }
        .mine-map-vignette{
          position:absolute;
          inset:0;
          pointer-events:none;
          background:radial-gradient(circle at 52% 43%,transparent 28%,rgba(0,0,0,.18) 67%,rgba(0,0,0,.58) 100%);
        }
        .map-title{
          position:absolute;
          left:24px;
          top:20px;
          z-index:12;
          pointer-events:none;
        }
        .map-title .eyebrow{
          color:#f08a32;
          font-size:9px;
          letter-spacing:2px;
          font-weight:800;
        }
        .map-title h1{
          margin:4px 0 3px;
          font-size:25px;
          line-height:1;
          letter-spacing:1px;
        }
        .map-title p{
          margin:0;
          color:#c1c6ca;
          font-size:9px;
          letter-spacing:1px;
        }
        .map-marker-wrap{
          position:absolute;
          transform:translate(-50%,-50%);
          z-index:15;
        }
        .map-marker-button{
          width:42px;
          height:42px;
          border-radius:50%;
          border:2px solid rgba(255,255,255,.9);
          display:grid;
          place-items:center;
          color:#fff;
          cursor:pointer;
          transition:transform .2s ease,filter .2s ease;
          box-shadow:0 0 0 6px rgba(0,0,0,.25),0 0 22px rgba(255,255,255,.16);
        }
        .map-marker-button:hover{transform:scale(1.1);filter:brightness(1.15)}
        .hazard-marker .map-marker-button{background:#d53232;box-shadow:0 0 0 6px rgba(0,0,0,.28),0 0 24px rgba(213,50,50,.65);animation:dangerPulse 1.6s infinite}
        .survivor-marker .map-marker-button{background:#d9a72f;box-shadow:0 0 0 6px rgba(0,0,0,.28),0 0 24px rgba(217,167,47,.5)}
        .network-marker .map-marker-button{background:#16a77d;box-shadow:0 0 0 6px rgba(0,0,0,.28),0 0 24px rgba(22,167,125,.55);animation:networkPulse 2s infinite}
        .water-marker .map-marker-button{background:#139ed1;box-shadow:0 0 0 6px rgba(0,0,0,.28),0 0 24px rgba(19,158,209,.55);animation:waterPulse 2s infinite}
        .marker-label{
          position:absolute;
          left:31px;
          top:3px;
          min-width:108px;
          padding:7px 9px;
          border-radius:7px;
          background:rgba(6,9,11,.86);
          border:1px solid rgba(255,255,255,.2);
          backdrop-filter:blur(8px);
          pointer-events:none;
          box-shadow:0 8px 18px rgba(0,0,0,.28);
        }
        .marker-label strong{display:block;font-size:9px;letter-spacing:1px}
        .marker-label span{display:block;margin-top:3px;font-size:8px;color:#c7c9cb;white-space:nowrap}
        .hazard-marker .marker-label{border-color:rgba(213,50,50,.65)}
        .hazard-marker .marker-label strong{color:#ff5a5a}
        .survivor-marker .marker-label{border-color:rgba(217,167,47,.6)}
        .survivor-marker .marker-label strong{color:#ffd35a}
        .network-marker .marker-label{border-color:rgba(22,167,125,.6)}
        .network-marker .marker-label strong{color:#53e3b4}
        .water-marker .marker-label{border-color:rgba(19,158,209,.6)}
        .water-marker .marker-label strong{color:#55d6ff}
        .water-marker .marker-label{left:30px;top:-4px}
        .rover-sim{
          position:absolute;
          transform:translate(-50%,-50%);
          z-index:20;
          transition:left 1.35s ease-in-out,top 1.35s ease-in-out;
        }
        .rover-button{
          width:44px;
          height:44px;
          border-radius:11px;
          border:2px solid #fff;
          background:#15191c;
          color:#55c9ff;
          display:grid;
          place-items:center;
          cursor:pointer;
          box-shadow:0 0 0 5px rgba(0,0,0,.28),0 0 26px rgba(39,174,239,.65);
        }
        .rover-name{
          position:absolute;
          left:50%;
          bottom:51px;
          transform:translateX(-50%);
          padding:5px 8px;
          border:1px solid rgba(39,174,239,.7);
          border-radius:6px;
          background:rgba(5,10,14,.9);
          color:#dff6ff;
          font-size:9px;
          font-weight:800;
          letter-spacing:1px;
          white-space:nowrap;
          pointer-events:none;
        }
        .rover-beam{
          position:absolute;
          width:85px;
          height:34px;
          right:29px;
          top:5px;
          transform:skewX(-20deg);
          background:linear-gradient(90deg,rgba(55,194,255,.42),transparent);
          filter:blur(2px);
          pointer-events:none;
        }
        .map-info-card{
          position:absolute;
          left:22px;
          bottom:20px;
          width:300px;
          z-index:22;
          padding:14px 16px 15px 18px;
          border:1px solid rgba(255,255,255,.15);
          border-radius:11px;
          background:rgba(5,8,10,.86);
          backdrop-filter:blur(12px);
          box-shadow:0 14px 30px rgba(0,0,0,.3);
        }
        .map-info-card:before{
          content:"";
          position:absolute;
          left:0;
          top:13px;
          bottom:13px;
          width:3px;
          border-radius:4px;
          background:#e54848;
        }
        .map-info-card .info-type{font-size:8px;letter-spacing:1.7px;color:#ff5b5b;font-weight:800}
        .map-info-card h3{margin:5px 0 5px;font-size:14px;letter-spacing:.5px}
        .map-info-card p{margin:0;color:#bfc4c7;font-size:10px;line-height:1.55}
        .map-info-card .info-detail{margin-top:8px;color:#fff;font-size:9px;font-weight:700;letter-spacing:.5px}
        .selected-close{position:absolute;right:9px;top:9px;width:25px;height:25px;border:1px solid rgba(255,255,255,.14);border-radius:6px;background:transparent;color:#aaa;display:grid;place-items:center;cursor:pointer}
        .selected-close:hover{color:#fff;border-color:rgba(255,255,255,.4)}
        .map-legend{
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          bottom:20px;
          z-index:22;
          display:flex;
          align-items:center;
          gap:18px;
          padding:9px 15px;
          border:1px solid rgba(255,255,255,.16);
          border-radius:9px;
          background:rgba(5,8,10,.82);
          backdrop-filter:blur(10px);
        }
        .legend-item{display:flex;align-items:center;gap:6px;color:#cdd0d2;font-size:8px;letter-spacing:1px;font-weight:700;white-space:nowrap}
        .legend-dot{width:8px;height:8px;border-radius:50%}
        .legend-dot.rover{background:#49c8ff}.legend-dot.hazard{background:#ef4b4b}.legend-dot.survivor{background:#e7b83c}.legend-dot.network{background:#28d49d}.legend-dot.water{background:#20b7ed}
        @keyframes dangerPulse{0%,100%{box-shadow:0 0 0 6px rgba(213,50,50,.18),0 0 22px rgba(213,50,50,.5)}50%{box-shadow:0 0 0 12px rgba(213,50,50,.04),0 0 34px rgba(213,50,50,.75)}}
        @keyframes networkPulse{50%{box-shadow:0 0 0 10px rgba(22,167,125,.05),0 0 30px rgba(22,167,125,.7)}}
        @keyframes waterPulse{50%{box-shadow:0 0 0 10px rgba(19,158,209,.05),0 0 30px rgba(19,158,209,.7)}}
        @media(max-width:1000px){.map-title{left:18px}.map-title p{display:none}.map-info-card{width:270px}.map-legend{gap:10px}.legend-item{font-size:7px}}
      `}</style>

      <div className="mine-map-bg" />
      <div className="mine-map-vignette" />

      <div className="map-title">
        <span className="eyebrow">LIVE UNDERGROUND OPERATIONS</span>
        <h1>MINE MAP</h1>
        <p>ROVER POSITION • HAZARDS • SURVIVOR LOCATIONS • NETWORK</p>
      </div>

      {markers.map((marker) => (
        <div
          key={marker.id}
          className={`map-marker-wrap ${marker.className}`}
          style={{ left: `${marker.left}%`, top: `${marker.top}%` }}
        >
          <button
            className="map-marker-button"
            title={marker.title}
            onClick={() => setSelected(marker)}
          >
            {marker.icon}
          </button>
          <div className="marker-label">
            <strong>{marker.shortTitle}</strong>
            <span>{marker.detail}</span>
          </div>
        </div>
      ))}

      <div
        className="rover-sim"
        style={{ left: `${rover.left}%`, top: `${rover.top}%` }}
      >
        <div className="rover-beam" />
        <button
          className="rover-button"
          title="Open ROVER-01 information"
          onClick={() =>
            setSelected({
              type: "ROVER",
              title: "ROVER-01",
              shortTitle: "ROVER",
              detail: "AUTONOMOUS • MOVING",
              text: "ROVER-01 is moving along the mapped tunnel route and continuously updating its position for the rescue team.",
            })
          }
        >
          <Navigation size={22} />
        </button>
        <div className="rover-name">ROVER-01</div>
      </div>

      <div className="map-info-card">
        {selected && (
          <button className="selected-close" onClick={() => setSelected(null)}>
            <X size={14} />
          </button>
        )}
        {selected ? (
          <>
            <span className="info-type">{selected.type}</span>
            <h3>{selected.title}</h3>
            <p>{selected.text}</p>
            <div className="info-detail">{selected.detail}</div>
          </>
        ) : (
          <>
            <span className="info-type">HAZARD ALERT</span>
            <h3>TOXIC GAS ZONE</h3>
            <p>AI has detected a potentially dangerous gas condition in this tunnel section. Rescue teams should avoid direct entry until the area is assessed.</p>
            <div className="info-detail">DANGER LEVEL: HIGH • RISK: 78%</div>
          </>
        )}
      </div>

      <div className="map-legend">
        <div className="legend-item"><span className="legend-dot rover" />ROVER</div>
        <div className="legend-item"><span className="legend-dot hazard" />HAZARD</div>
        <div className="legend-item"><span className="legend-dot survivor" />SURVIVOR</div>
        <div className="legend-item"><span className="legend-dot network" />NETWORK</div>
        <div className="legend-item"><span className="legend-dot water" />WATER</div>
      </div>
    </section>
  );
}


function RoverControlPage() {
  const [battery, setBattery] = useState(86.4);
  const [temperature, setTemperature] = useState(32.4);
  const [depth, setDepth] = useState(41.8);
  const [speed, setSpeed] = useState(0);
  const [uptime, setUptime] = useState(18);
  const [cameraLight, setCameraLight] = useState(false);
  const [mode, setMode] = useState("MANUAL");
  const [direction, setDirection] = useState("STOPPED");
  const [speedMode, setSpeedMode] = useState("NORMAL");
  const [mission, setMission] = useState("UNDERGROUND SURVEY");
  const [sensors, setSensors] = useState({
    co: 23.4,
    methane: 0.42,
    h2s: 2.1,
    oxygen: 20.6,
    humidity: 67.8,
    pressure: 100.8,
    network: 92,
  });
  const [systemLog, setSystemLog] = useState(["System ready • MNR-01 online"]);

  const speedValue = (modeName = speedMode) =>
    modeName === "SLOW" ? 0.35 : modeName === "FAST" ? 1.2 : 0.75;

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((v) => v + 1);

      setBattery((v) => {
        const drain = direction === "STOPPED" ? 0.0015 : cameraLight ? 0.010 : 0.007;
        return Math.max(0, +(v - drain).toFixed(2));
      });

      setTemperature((v) =>
        +(Math.max(27, Math.min(39, v + (Math.random() - 0.5) * 0.16)).toFixed(1))
      );

      setSensors((s) => ({
        co: +(Math.max(15, Math.min(35, s.co + (Math.random() - 0.5) * 0.18)).toFixed(1)),
        methane: +(Math.max(0.18, Math.min(0.85, s.methane + (Math.random() - 0.5) * 0.012)).toFixed(2)),
        h2s: +(Math.max(0.8, Math.min(4.8, s.h2s + (Math.random() - 0.5) * 0.08)).toFixed(1)),
        oxygen: +(Math.max(19.7, Math.min(21.0, s.oxygen + (Math.random() - 0.5) * 0.015)).toFixed(1)),
        humidity: +(Math.max(60, Math.min(76, s.humidity + (Math.random() - 0.5) * 0.22)).toFixed(1)),
        pressure: +(Math.max(99.2, Math.min(102.2, s.pressure + (Math.random() - 0.5) * 0.05)).toFixed(1)),
        network: Math.round(Math.max(84, Math.min(99, s.network + (Math.random() - 0.5) * 2.4))),
      }));

      if (direction === "FORWARD") {
        setDepth((v) => +(Math.min(250, v + 0.025).toFixed(1)));
      } else if (direction === "REVERSE") {
        setDepth((v) => +(Math.max(0, v - 0.02).toFixed(1)));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [direction, cameraLight]);

  const addLog = (message) => {
    setSystemLog((logs) => [`${message} • ${new Date().toLocaleTimeString()}`, ...logs].slice(0, 5));
  };

  const command = (nextDirection) => {
    setDirection(nextDirection);
    setSpeed(
      nextDirection === "STOPPED"
        ? 0
        : nextDirection === "TURN LEFT" || nextDirection === "TURN RIGHT"
          ? 0.22
          : speedValue()
    );
    addLog(`${nextDirection} command`);
  };

  const changeSpeedMode = (next) => {
    setSpeedMode(next);
    if (direction === "FORWARD" || direction === "REVERSE") {
      setSpeed(speedValue(next));
    }
    addLog(`SPEED ${next}`);
  };

  const formatUptime = () => {
    const h = Math.floor(uptime / 3600);
    const m = Math.floor((uptime % 3600) / 60);
    const s = uptime % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const sensorItems = [
    ["CARBON MONOXIDE", sensors.co.toFixed(1), "ppm"],
    ["METHANE", sensors.methane.toFixed(2), "%LEL"],
    ["HYDROGEN SULFIDE", sensors.h2s.toFixed(1), "ppm"],
    ["OXYGEN", sensors.oxygen.toFixed(1), "%"],
    ["TEMPERATURE", temperature.toFixed(1), "°C"],
    ["HUMIDITY", sensors.humidity.toFixed(1), "%"],
    ["PRESSURE", sensors.pressure.toFixed(1), "kPa"],
    ["NETWORK", sensors.network, "%"],
  ];

  return (
    <section className="rover-control-page">
      <style>{`
        .rover-control-page{
          min-height:calc(100vh - 72px);
          height:calc(100vh - 72px);
          overflow:hidden;
          box-sizing:border-box;
          padding:12px 16px 10px;
          color:#eef6fa;
          background:
            radial-gradient(circle at 50% 8%,rgba(0,178,255,.13),transparent 32%),
            radial-gradient(circle at 12% 70%,rgba(255,137,36,.10),transparent 30%),
            radial-gradient(circle at 88% 25%,rgba(0,214,184,.06),transparent 28%),
            linear-gradient(135deg,#030a10 0%,#07131c 48%,#02070b 100%);
        }
        .rc-head{
          display:flex;justify-content:space-between;align-items:center;
          margin-bottom:10px;padding:0 3px;
        }
        .rc-kicker{font-size:8px;letter-spacing:2.4px;color:#ff9b43;font-weight:900;text-shadow:0 0 10px rgba(255,145,55,.18)}
        .rc-head h1{margin:3px 0 0;font-size:23px;letter-spacing:1.5px;color:#f7fbfd}
        .rc-head p{margin:3px 0 0;color:#76909e;font-size:8px;letter-spacing:1.1px}
        .rc-mode{display:flex;gap:6px;align-items:center}
        .rc-mode button{
          border:1px solid rgba(67,191,235,.22);background:linear-gradient(145deg,rgba(20,53,70,.72),rgba(5,18,26,.82));
          color:#8fa7b3;padding:8px 13px;border-radius:7px;font-size:8px;
          font-weight:900;letter-spacing:1px;cursor:pointer;transition:.2s;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.035);
        }
        .rc-mode button:hover{transform:translateY(-1px);border-color:rgba(255,151,65,.65);color:#ffd0a4}
        .rc-mode button.active{
          border-color:rgba(255,151,65,.9);background:linear-gradient(135deg,rgba(255,137,36,.22),rgba(0,176,255,.08));
          color:#ffb66f;box-shadow:0 0 20px rgba(255,137,36,.12),inset 0 1px 0 rgba(255,255,255,.05);
        }
        .rc-grid{
          display:grid;grid-template-columns:1.05fr 1.72fr 1.08fr;gap:10px;
          height:calc(100% - 47px);
        }
        .rc-column{display:flex;flex-direction:column;gap:10px;min-width:0;min-height:0}
        .rc-card{
          position:relative;border:1px solid rgba(67,191,235,.22);border-radius:12px;
          background:
            linear-gradient(145deg,rgba(10,31,42,.94),rgba(3,12,18,.97) 72%),
            radial-gradient(circle at 100% 0%,rgba(0,190,255,.08),transparent 35%);
          box-shadow:
            0 18px 38px rgba(0,0,0,.40),
            0 0 24px rgba(0,145,190,.035),
            inset 0 1px 0 rgba(255,255,255,.045);
          overflow:hidden;
        }
        .rc-card:before{
          content:"";position:absolute;left:0;top:0;width:34%;height:2px;
          background:linear-gradient(90deg,#ff8b2c,#16c8ff,transparent);
          opacity:.9;pointer-events:none;
        }
        .rc-card:after{
          content:"";position:absolute;inset:0;pointer-events:none;
          background:
            linear-gradient(120deg,rgba(255,255,255,.028),transparent 32%),
            radial-gradient(circle at 90% 10%,rgba(0,193,255,.045),transparent 28%);
        }
        .rc-card-title{
          display:flex;justify-content:space-between;align-items:center;
          padding:10px 13px 8px;border-bottom:1px solid rgba(70,181,220,.12);
          background:linear-gradient(90deg,rgba(10,49,65,.26),transparent);
        }
        .rc-card-title span{font-size:8px;font-weight:900;letter-spacing:1.7px;color:#e6f1f5}
        .rc-card-title small{font-size:7px;letter-spacing:1px;color:#6f8b98}
        .rc-status{flex:1;min-height:0}
        .rc-rover-visual{
          height:205px;margin:8px 9px 7px;border-radius:10px;
          background:
            radial-gradient(circle at 50% 52%,rgba(0,169,230,.22),transparent 43%),
            linear-gradient(145deg,rgba(3,14,20,.40),rgba(12,35,45,.90));
          display:flex;align-items:center;justify-content:center;overflow:hidden;
          border:1px solid rgba(42,187,235,.18);
          box-shadow:inset 0 0 35px rgba(0,0,0,.34),0 0 18px rgba(0,166,220,.04);
        }
        .rc-rover-visual img{
          width:108%;height:108%;object-fit:cover;object-position:center;
          transform:scale(1.05);filter:drop-shadow(0 18px 17px rgba(0,0,0,.70));
          transition:filter .35s,transform .35s;
        }
        .rc-rover-visual.light-on{
          border-color:rgba(255,180,85,.45);
          box-shadow:inset 0 0 35px rgba(0,0,0,.25),0 0 22px rgba(255,158,62,.10);
        }
        .rc-rover-visual.light-on img{
          filter:drop-shadow(0 0 18px rgba(255,184,91,.38)) drop-shadow(0 18px 17px rgba(0,0,0,.65));
        }
        .rc-identity{display:flex;justify-content:space-between;align-items:center;padding:0 13px 8px}
        .rc-id strong{display:block;font-size:13px;letter-spacing:.8px;color:#f4f8fa}
        .rc-id small{display:block;margin-top:2px;color:#66808d;font-size:7px;letter-spacing:1px}
        .rc-online{display:flex;align-items:center;gap:5px;color:#48e2aa;font-size:7px;font-weight:900;letter-spacing:1px}
        .rc-dot{width:7px;height:7px;border-radius:50%;background:#35e2a2;box-shadow:0 0 11px #35e2a2;animation:onlinePulse 1.8s infinite}
        .rc-battery{padding:0 13px 10px}
        .rc-battery-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
        .rc-battery-row span{font-size:7px;color:#7f99a5;letter-spacing:1.2px}
        .rc-battery-row strong{font-size:17px;color:#f5fbfd;text-shadow:0 0 12px rgba(255,255,255,.08)}
        .rc-bar{height:7px;border-radius:8px;background:#10232c;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,.6);border:1px solid rgba(53,176,215,.10)}
        .rc-bar i{
          display:block;height:100%;border-radius:8px;
          background:linear-gradient(90deg,#ff8b2c,#ffb45e,#24c9ff);
          transition:width 1s linear;
          box-shadow:0 0 12px rgba(255,143,54,.35);
        }
        .rc-metrics{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(66,181,220,.11)}
        .rc-metric{padding:9px 11px;border-right:1px solid rgba(66,181,220,.10);border-bottom:1px solid rgba(66,181,220,.10);background:rgba(3,17,24,.22)}
        .rc-metric:nth-child(2n){border-right:0}
        .rc-metric span{display:block;color:#63808d;font-size:6.5px;letter-spacing:1.2px}
        .rc-metric strong{display:block;margin-top:4px;font-size:12px;font-weight:800;color:#e7f5fa}
        .rc-manual{flex:1;min-height:0}
        .rc-control-area{padding:12px 16px}
        .rc-direction{
          height:26px;display:flex;align-items:center;justify-content:center;margin-bottom:7px;
          color:#ffb06b;font-size:8px;font-weight:900;letter-spacing:1.8px;
          text-shadow:0 0 13px rgba(255,145,55,.28);
        }
        .rc-pad{
          width:205px;height:175px;margin:0 auto;display:grid;
          grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);gap:7px;
        }
        .rc-pad button{
          border:1px solid rgba(67,191,235,.26);border-radius:10px;
          background:linear-gradient(145deg,#103044,#07151d);color:#dcecf2;
          font-size:19px;cursor:pointer;
          box-shadow:0 7px 16px rgba(0,0,0,.38),inset 0 1px 0 rgba(255,255,255,.045);
          transition:transform .15s,box-shadow .15s,border-color .15s,color .15s,background .15s;
        }
        .rc-pad button:hover{
          transform:translateY(-2px);border-color:rgba(255,154,68,.82);color:#ffd0a5;
          background:linear-gradient(145deg,#173d50,#0a1b24);
          box-shadow:0 9px 22px rgba(0,0,0,.42),0 0 20px rgba(0,177,240,.10);
        }
        .rc-pad button:active{transform:translateY(2px);box-shadow:inset 0 4px 10px rgba(0,0,0,.5)}
        .rc-pad button.active-control{
          border-color:rgba(39,222,177,.85);color:#72f0c6;
          background:linear-gradient(145deg,#10473d,#071b18);
          box-shadow:0 0 22px rgba(39,222,177,.18),inset 0 1px 0 rgba(255,255,255,.05);
        }
        .rc-pad .stop{
          background:radial-gradient(circle,#a83b35,#4b1719);border-color:rgba(255,91,82,.82);
          color:#ffaaa3;font-size:9px;font-weight:900;letter-spacing:1px;
          box-shadow:0 0 22px rgba(227,70,62,.18),inset 0 1px 0 rgba(255,255,255,.08);
        }
        .rc-pad .stop:hover{border-color:#ff766d;color:#fff;box-shadow:0 0 30px rgba(227,70,62,.32)}
        .rc-pad .empty{visibility:hidden}
        .rc-speed{margin-top:12px}
        .rc-speed-head{display:flex;justify-content:space-between;font-size:7px;color:#78919c;letter-spacing:1px}
        .rc-speed-head strong{color:#dcecf1}
        .rc-speed-options{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:7px}
        .rc-speed-options button{
          padding:8px 4px;border:1px solid rgba(67,191,235,.18);background:rgba(6,26,36,.62);
          border-radius:6px;color:#77909b;font-size:7px;font-weight:900;cursor:pointer;transition:.18s;
        }
        .rc-speed-options button:hover{border-color:rgba(255,151,65,.55);color:#ffbc83}
        .rc-speed-options button.active{
          color:#ffd0a4;border-color:rgba(255,151,65,.82);background:linear-gradient(90deg,rgba(255,137,36,.16),rgba(0,184,255,.08));
          box-shadow:0 0 16px rgba(255,137,36,.10);
        }
        .rc-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;padding:9px}
        .rc-info-box{
          padding:9px;border:1px solid rgba(67,191,235,.13);border-radius:8px;
          background:linear-gradient(145deg,rgba(13,48,63,.52),rgba(5,20,28,.50));
          box-shadow:inset 0 1px 0 rgba(255,255,255,.025);
        }
        .rc-info-box span{display:block;color:#63818d;font-size:6.5px;letter-spacing:1px}
        .rc-info-box strong{display:block;margin-top:4px;font-size:9px;letter-spacing:.3px;color:#dcecf1}
        .rc-env{flex:1;min-height:0}
        .rc-env-grid{display:grid;grid-template-columns:1fr 1fr;padding:7px}
        .rc-env-item{
          padding:11px 10px;border-bottom:1px solid rgba(67,191,235,.09);
          position:relative;transition:background .2s;
        }
        .rc-env-item:hover{background:linear-gradient(90deg,rgba(0,180,240,.06),rgba(255,145,55,.025))}
        .rc-env-item:nth-child(odd){border-right:1px solid rgba(67,191,235,.09)}
        .rc-env-item span{display:block;color:#64818c;font-size:6.5px;letter-spacing:1.05px}
        .rc-env-item strong{display:block;margin-top:5px;font-size:13px;color:#e7f5f8}
        .rc-env-item em{font-style:normal;color:#76909b;font-size:6.5px;margin-left:3px}
        .rc-env-item:last-child strong{color:#54e2af;text-shadow:0 0 12px rgba(52,224,171,.14)}
        .rc-actions{padding:9px;display:grid;grid-template-columns:1fr 1fr;gap:7px}
        .rc-action{
          padding:10px 7px;border:1px solid rgba(67,191,235,.15);border-radius:7px;
          background:linear-gradient(145deg,rgba(15,51,66,.58),rgba(5,20,28,.62));
          color:#b8ccd4;font-size:7px;font-weight:900;letter-spacing:.7px;cursor:pointer;transition:.18s;
        }
        .rc-action:hover{transform:translateY(-1px);border-color:rgba(255,151,65,.66);color:#ffd0a4;box-shadow:0 5px 16px rgba(0,0,0,.27),0 0 14px rgba(255,137,36,.06)}
        .rc-action.active{
          border-color:rgba(53,226,169,.72);color:#72edc2;background:linear-gradient(145deg,rgba(20,88,72,.36),rgba(5,35,28,.40));
          box-shadow:0 0 18px rgba(53,226,169,.09);
        }
        .rc-log{min-height:103px}
        .rc-log-list{padding:6px 10px 8px}
        .rc-log-line{display:flex;gap:7px;padding:4px 0;color:#7e98a3;font-size:7px;line-height:1.3;border-bottom:1px solid rgba(67,191,235,.055)}
        .rc-log-line:last-child{border-bottom:0}
        .rc-log-line b{color:#3ee0a5;font-size:7px;text-shadow:0 0 8px rgba(62,224,165,.4)}
        .rc-footer{
          height:16px;margin-top:4px;display:flex;justify-content:space-between;align-items:center;
          color:#506a76;font-size:6.5px;letter-spacing:1px;
        }
        .rc-footer strong{color:#8ba1aa}
        @keyframes onlinePulse{50%{opacity:.45;box-shadow:0 0 5px #35e2a2}}
        @media(max-width:1050px){
          .rover-control-page{overflow:auto;height:auto;min-height:100vh}
          .rc-grid{height:auto;grid-template-columns:1fr}
          .rc-status{min-height:480px}.rc-manual{min-height:390px}.rc-env{min-height:330px}
          .rc-footer{margin-bottom:10px}
        }
      `}</style>

      <div className="rc-head">
        <div>
          <div className="rc-kicker">MINENOVA • AUTONOMOUS RESCUE TECHNOLOGY</div>
          <h1>ROVER CONTROL</h1>
          <p>REMOTE OPERATION • TELEMETRY • ENVIRONMENT MONITORING</p>
        </div>
        <div className="rc-mode">
          <button className={mode === "MANUAL" ? "active" : ""} onClick={() => { setMode("MANUAL"); addLog("MANUAL MODE"); }}>MANUAL</button>
          <button className={mode === "AUTONOMOUS" ? "active" : ""} onClick={() => { setMode("AUTONOMOUS"); addLog("AUTONOMOUS MODE"); }}>AUTONOMOUS</button>
        </div>
      </div>

      <div className="rc-grid">
        <div className="rc-column">
          <div className="rc-card rc-status">
            <div className="rc-card-title"><span>ROVER STATUS</span><small>LIVE TELEMETRY</small></div>

            <div className={`rc-rover-visual ${cameraLight ? "light-on" : ""}`}>
              <img src="/RoverC.png" alt="MNR-01 Rover" />
            </div>

            <div className="rc-identity">
              <div className="rc-id"><strong>MNR-01</strong><small>AI MINE RESCUE ROVER</small></div>
              <div className="rc-online"><i className="rc-dot" /> ONLINE</div>
            </div>

            <div className="rc-battery">
              <div className="rc-battery-row"><span>BATTERY LEVEL</span><strong>{battery.toFixed(1)}%</strong></div>
              <div className="rc-bar"><i style={{width:`${battery}%`}} /></div>
            </div>

            <div className="rc-metrics">
              <div className="rc-metric"><span>TEMPERATURE</span><strong>{temperature.toFixed(1)}°C</strong></div>
              <div className="rc-metric"><span>DEPTH</span><strong>{depth.toFixed(1)} m</strong></div>
              <div className="rc-metric"><span>SPEED</span><strong>{speed.toFixed(2)} m/s</strong></div>
              <div className="rc-metric"><span>UPTIME</span><strong>{formatUptime()}</strong></div>
            </div>
          </div>

          <div className="rc-card">
            <div className="rc-card-title"><span>MISSION INFO</span><small>ACTIVE</small></div>
            <div className="rc-info-grid">
              <div className="rc-info-box"><span>CURRENT MISSION</span><strong>{mission}</strong></div>
              <div className="rc-info-box"><span>MODE</span><strong>{mode}</strong></div>
              <div className="rc-info-box"><span>DIRECTION</span><strong>{direction}</strong></div>
              <div className="rc-info-box"><span>CONNECTION</span><strong style={{color:"#65d7a7"}}>ONLINE</strong></div>
            </div>
          </div>
        </div>

        <div className="rc-column">
          <div className="rc-card rc-manual">
            <div className="rc-card-title"><span>MANUAL NAVIGATION</span><small>{mode === "MANUAL" ? "CONTROL ENABLED" : "AUTO ACTIVE"}</small></div>
            <div className="rc-control-area">
              <div className="rc-direction">CURRENT: {direction} • {speed.toFixed(2)} m/s</div>

              <div className="rc-pad">
                <button className="empty" aria-hidden="true" />
                <button className={direction === "FORWARD" ? "active-control" : ""} onClick={() => command("FORWARD")}>▲</button>
                <button className="empty" aria-hidden="true" />
                <button className={direction === "TURN LEFT" ? "active-control" : ""} onClick={() => command("TURN LEFT")}>◀</button>
                <button className="stop" onClick={() => command("STOPPED")}>STOP</button>
                <button className={direction === "TURN RIGHT" ? "active-control" : ""} onClick={() => command("TURN RIGHT")}>▶</button>
                <button className="empty" aria-hidden="true" />
                <button className={direction === "REVERSE" ? "active-control" : ""} onClick={() => command("REVERSE")}>▼</button>
                <button className="empty" aria-hidden="true" />
              </div>

              <div className="rc-speed">
                <div className="rc-speed-head"><span>SPEED CONTROL</span><strong>{speed.toFixed(2)} m/s</strong></div>
                <div className="rc-speed-options">
                  {["SLOW","NORMAL","FAST"].map((item) =>
                    <button key={item} className={speedMode === item ? "active" : ""} onClick={() => changeSpeedMode(item)}>{item}</button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rc-card">
            <div className="rc-card-title"><span>QUICK ACTIONS</span><small>ROVER SYSTEM</small></div>
            <div className="rc-actions">
              <button className={`rc-action ${cameraLight ? "active" : ""}`} onClick={() => {
                const next = !cameraLight;
                setCameraLight(next);
                addLog(`CAMERA LIGHT ${next ? "ON" : "OFF"}`);
              }}>CAMERA LIGHT: {cameraLight ? "ON" : "OFF"}</button>

              <button className="rc-action" onClick={() => {
                setMission("RETURN TO BASE");
                setMode("AUTONOMOUS");
                command("REVERSE");
                addLog("RETURN TO BASE");
              }}>RETURN TO BASE</button>

              <button className="rc-action" onClick={() => {
                setMission("RESCUE SUPPORT");
                setMode("AUTONOMOUS");
                command("FORWARD");
                addLog("RESCUE MISSION");
              }}>RESCUE MISSION</button>

              <button className="rc-action" onClick={() => {
                setMission("UNDERGROUND SURVEY");
                setMode("MANUAL");
                command("STOPPED");
                addLog("SYSTEM READY");
              }}>RESET / READY</button>
            </div>
          </div>

          <div className="rc-card rc-log">
            <div className="rc-card-title"><span>SYSTEM LOG</span><small>RECENT EVENTS</small></div>
            <div className="rc-log-list">
              {systemLog.map((line, i) =>
                <div className="rc-log-line" key={`${line}-${i}`}><b>●</b><span>{line}</span></div>
              )}
            </div>
          </div>
        </div>

        <div className="rc-column">
          <div className="rc-card rc-env">
            <div className="rc-card-title"><span>ENVIRONMENT MONITORING</span><small>LIVE SIMULATION</small></div>
            <div className="rc-env-grid">
              {sensorItems.map(([label, value, unit]) => (
                <div className="rc-env-item" key={label}>
                  <span>{label}</span><strong>{value} <em>{unit}</em></strong>
                </div>
              ))}
            </div>
          </div>

          <div className="rc-card">
            <div className="rc-card-title"><span>OPERATION STATUS</span><small>CONTROL LINK</small></div>
            <div className="rc-info-grid">
              <div className="rc-info-box"><span>CONTROL LINK</span><strong style={{color:"#65d7a7"}}>STABLE</strong></div>
              <div className="rc-info-box"><span>SENSOR LINK</span><strong style={{color:"#65d7a7"}}>ACTIVE</strong></div>
              <div className="rc-info-box"><span>CAMERA LIGHT</span><strong style={{color:cameraLight ? "#ffd08a" : "#9aa5aa"}}>{cameraLight ? "ON" : "OFF"}</strong></div>
              <div className="rc-info-box"><span>SAFETY</span><strong style={{color:"#65d7a7"}}>NORMAL</strong></div>
            </div>
          </div>
        </div>
      </div>

      <div className="rc-footer"><span>LIVE SIMULATION • TELEMETRY UPDATING</span><span>MNR-01 • MINENOVA</span></div>
    </section>
  );
}


function CommunicationPage() {
  const [messages, setMessages] = useState([
    { id: 1, from: "rover", type: "voice", text: "Communication link established. I am ready.", time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
  ]);
  const [textMessage, setTextMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [micLevel, setMicLevel] = useState(68);
  const [status, setStatus] = useState("READY");
  const [lastTranscript, setLastTranscript] = useState("Tap the microphone and speak to Rover.");

  const addMessage = (from, type, text) => {
    setMessages((items) => [
      ...items,
      {
        id: Date.now() + Math.random(),
        from,
        type,
        text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ].slice(-30));
  };

  const speakRover = (text) => {
    if (muted || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 0.82;
    utterance.volume = volume;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const getRoverReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("battery")) return "Battery status is stable. I am continuing the current mission.";
    if (lower.includes("temperature") || lower.includes("hot")) return "Temperature is within the current operating range.";
    if (lower.includes("gas") || lower.includes("air")) return "Atmosphere readings are being monitored continuously. No new critical change detected.";
    if (lower.includes("stop")) return "Stop command acknowledged. Rover is holding position.";
    if (lower.includes("return") || lower.includes("base")) return "Return to base command received. Preparing the route.";
    if (lower.includes("photo") || lower.includes("image") || lower.includes("camera")) return "Camera request received. I am checking the area ahead.";
    return "Message received. I understand and will report the latest underground status.";
  };

  const sendText = (value = textMessage) => {
    const clean = value.trim();
    if (!clean) return;

    addMessage("you", "text", clean);
    setTextMessage("");
    setLastTranscript(`You: ${clean}`);
    setStatus("SENDING");

    window.setTimeout(() => {
      const reply = getRoverReply(clean);
      addMessage("rover", "voice", reply);
      setLastTranscript(`Rover: ${reply}`);
      setStatus("ROVER REPLY");
      speakRover(reply);
    }, 650);
  };

  const startVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setStatus("MIC NOT SUPPORTED");
      setLastTranscript("Voice recognition is not supported in this browser. Use Chrome or Edge.");
      return;
    }

    if (isListening) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
      setStatus("LISTENING");
      setLastTranscript("Listening… speak to Rover.");
    };

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1];
      const transcript = result[0].transcript.trim();

      if (transcript) {
        setLastTranscript(`You: ${transcript}`);
        setMicLevel(72 + Math.round(Math.random() * 22));

        if (result.isFinal) {
          addMessage("you", "voice", transcript);
          setStatus("ROVER REPLY");

          window.setTimeout(() => {
            const reply = getRoverReply(transcript);
            addMessage("rover", "voice", reply);
            setLastTranscript(`Rover: ${reply}`);
            speakRover(reply);
          }, 500);
        }
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setStatus("READY");
      setLastTranscript("Microphone input stopped. Tap the microphone to try again.");
    };

    recognition.onend = () => {
      setIsListening(false);
      setStatus((value) => value === "LISTENING" ? "READY" : value);
    };

    recognition.start();
  };

  const clearLog = () => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setMessages([]);
    setLastTranscript("Communication log cleared.");
    setStatus("READY");
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      const incoming = [
        "Rover status update: underground link is stable.",
        "I am monitoring the tunnel conditions ahead.",
        "No new survivor signal detected in the current section.",
        "Network relay is stable. Communication remains active.",
      ];
      const reply = incoming[Math.floor(Math.random() * incoming.length)];
      addMessage("rover", "voice", reply);
      setLastTranscript(`Rover: ${reply}`);
      setStatus("INCOMING MESSAGE");
    }, 22000);

    return () => {
      window.clearInterval(timer);
      window.speechSynthesis?.cancel();
    };
  }, [muted, volume]);

  return (
    <section className="communication-page">
      <style>{`
        .communication-page{
          min-height:calc(100vh - 72px);
          height:calc(100vh - 72px);
          overflow:hidden;
          box-sizing:border-box;
          padding:16px 18px 12px;
          color:#eef3f5;
          background:
            radial-gradient(circle at 48% 12%,rgba(38,92,105,.18),transparent 34%),
            radial-gradient(circle at 18% 75%,rgba(232,122,42,.07),transparent 30%),
            linear-gradient(135deg,#05090b,#0a1317 52%,#05080a);
        }
        .cm-head{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          margin:0 2px 11px;
        }
        .cm-kicker{
          color:#f09a4b;
          font-size:8px;
          font-weight:900;
          letter-spacing:2.4px;
        }
        .cm-head h1{
          margin:4px 0 2px;
          font-size:25px;
          letter-spacing:1.7px;
        }
        .cm-head p{
          margin:0;
          color:#829097;
          font-size:8px;
          letter-spacing:1.3px;
        }
        .cm-live{
          display:flex;
          align-items:center;
          gap:7px;
          padding:8px 11px;
          border:1px solid rgba(72,211,165,.2);
          border-radius:8px;
          background:rgba(72,211,165,.045);
          color:#67dfb0;
          font-size:8px;
          font-weight:900;
          letter-spacing:1.2px;
        }
        .cm-live i{
          width:7px;height:7px;border-radius:50%;
          background:#45d7a2;
          box-shadow:0 0 12px #45d7a2;
          animation:cmPulse 1.6s infinite;
        }
        .cm-layout{
          display:grid;
          grid-template-columns:1.42fr 1fr;
          gap:11px;
          height:calc(100% - 55px);
          min-height:0;
        }
        .cm-main{
          display:grid;
          grid-template-rows:minmax(270px,1.18fr) minmax(145px,.72fr) 78px;
          gap:10px;
          min-height:0;
        }
        .cm-side{
          display:grid;
          grid-template-rows:minmax(0,1fr) 105px;
          gap:10px;
          min-height:0;
        }
        .cm-card{
          position:relative;
          min-width:0;
          min-height:0;
          border:1px solid rgba(255,255,255,.1);
          border-radius:12px;
          overflow:hidden;
          background:linear-gradient(145deg,rgba(16,29,34,.96),rgba(5,11,14,.97));
          box-shadow:0 16px 35px rgba(0,0,0,.32),inset 0 1px 0 rgba(255,255,255,.035);
        }
        .cm-card:after{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          background:linear-gradient(120deg,rgba(255,255,255,.025),transparent 34%);
        }
        .cm-title{
          height:37px;
          box-sizing:border-box;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 13px;
          border-bottom:1px solid rgba(255,255,255,.07);
        }
        .cm-title-left{
          display:flex;
          align-items:center;
          gap:9px;
        }
        .cm-title-left svg{color:#75dfff}
        .cm-title span{
          font-size:8px;
          font-weight:900;
          letter-spacing:1.7px;
        }
        .cm-title small{
          color:#68777e;
          font-size:7px;
          letter-spacing:1px;
        }
        .cm-voice-body{
          height:calc(100% - 37px);
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:0;
        }
        .cm-voice-panel{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          padding:14px;
          border-right:1px solid rgba(255,255,255,.07);
        }
        .cm-voice-panel:last-child{border-right:0}
        .cm-voice-label{
          color:#9ba8ae;
          font-size:7px;
          font-weight:900;
          letter-spacing:1.4px;
          margin-bottom:10px;
        }
        .cm-orb{
          width:82px;
          height:82px;
          border-radius:50%;
          display:grid;
          place-items:center;
          border:1px solid rgba(73,220,188,.7);
          background:radial-gradient(circle,rgba(46,185,162,.2),rgba(7,17,19,.92) 67%);
          color:#80f2d1;
          box-shadow:0 0 0 7px rgba(73,220,188,.035),0 0 30px rgba(73,220,188,.16);
          transition:.25s;
        }
        .cm-orb.rover{
          border-color:rgba(70,196,255,.7);
          color:#86dcff;
          background:radial-gradient(circle,rgba(47,152,199,.2),rgba(7,17,20,.92) 67%);
          box-shadow:0 0 0 7px rgba(70,196,255,.035),0 0 30px rgba(70,196,255,.17);
        }
        .cm-orb.active{
          transform:scale(1.06);
          box-shadow:0 0 0 12px rgba(73,220,188,.05),0 0 40px rgba(73,220,188,.35);
          animation:cmOrb 1.1s infinite;
        }
        .cm-orb.rover.active{
          box-shadow:0 0 0 12px rgba(70,196,255,.05),0 0 40px rgba(70,196,255,.34);
        }
        .cm-wave{
          width:190px;
          height:30px;
          margin:10px 0 4px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:3px;
        }
        .cm-wave i{
          display:block;
          width:3px;
          height:8px;
          border-radius:4px;
          background:#39dcb8;
          opacity:.7;
          animation:cmWave .9s ease-in-out infinite alternate;
        }
        .cm-wave.blue i{background:#38bfff}
        .cm-wave i:nth-child(2n){animation-delay:.15s}
        .cm-wave i:nth-child(3n){animation-delay:.3s}
        .cm-wave i:nth-child(4n){animation-delay:.45s}
        .cm-wave i:nth-child(5n){animation-delay:.6s}
        .cm-wave:not(.active) i{animation-play-state:paused;height:3px;opacity:.35}
        .cm-status{
          height:17px;
          color:#67dfb0;
          font-size:8px;
          font-weight:900;
          letter-spacing:1px;
        }
        .cm-status.blue{color:#71d9ff}
        .cm-voice-btn{
          width:205px;
          padding:10px;
          border-radius:7px;
          border:1px solid rgba(73,220,188,.48);
          background:linear-gradient(135deg,rgba(43,164,143,.14),rgba(255,255,255,.025));
          color:#cceee5;
          font-size:8px;
          font-weight:900;
          letter-spacing:1px;
          cursor:pointer;
          transition:.18s;
        }
        .cm-voice-btn:hover{
          transform:translateY(-1px);
          border-color:#67dfc1;
          box-shadow:0 0 18px rgba(73,220,188,.12);
        }
        .cm-voice-btn.stop{
          border-color:rgba(255,89,79,.58);
          color:#ffaaa3;
          background:rgba(205,57,51,.09);
        }
        .cm-tts-body{padding:10px 12px}
        .cm-textbox{
          width:100%;
          height:69px;
          box-sizing:border-box;
          resize:none;
          border:1px solid rgba(83,190,225,.35);
          border-radius:9px;
          outline:none;
          background:rgba(3,10,13,.78);
          color:#e8eef0;
          padding:11px 12px;
          font:inherit;
          font-size:10px;
        }
        .cm-textbox:focus{
          border-color:rgba(83,210,246,.72);
          box-shadow:0 0 18px rgba(83,190,225,.08);
        }
        .cm-text-bottom{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-top:7px;
        }
        .cm-char{
          color:#65757d;
          font-size:7px;
          letter-spacing:.7px;
        }
        .cm-send{
          display:flex;
          align-items:center;
          gap:7px;
          padding:9px 18px;
          border:1px solid rgba(44,191,255,.68);
          border-radius:7px;
          background:linear-gradient(135deg,rgba(28,153,211,.2),rgba(28,92,124,.1));
          color:#9ce5ff;
          font-size:8px;
          font-weight:900;
          letter-spacing:1px;
          cursor:pointer;
        }
        .cm-send:hover{box-shadow:0 0 20px rgba(44,191,255,.14);transform:translateY(-1px)}
        .cm-quick{
          display:grid;
          grid-template-columns:repeat(5,1fr);
          gap:6px;
          padding:10px;
        }
        .cm-quick button{
          min-width:0;
          border:1px solid rgba(255,255,255,.09);
          border-radius:7px;
          background:rgba(255,255,255,.025);
          color:#9ca9ae;
          font-size:7px;
          font-weight:800;
          letter-spacing:.4px;
          cursor:pointer;
          transition:.18s;
        }
        .cm-quick button:hover{
          color:#f2a461;
          border-color:rgba(239,145,64,.5);
          background:rgba(239,145,64,.06);
        }
        .cm-log{
          display:flex;
          flex-direction:column;
        }
        .cm-log-list{
          flex:1;
          min-height:0;
          overflow:auto;
          padding:8px 10px;
          scrollbar-width:thin;
          scrollbar-color:#33464d transparent;
        }
        .cm-msg{
          display:flex;
          gap:8px;
          margin:0 0 9px;
          align-items:flex-start;
        }
        .cm-msg.you{flex-direction:row-reverse}
        .cm-avatar{
          flex:0 0 27px;
          width:27px;height:27px;
          display:grid;place-items:center;
          border-radius:8px;
          border:1px solid rgba(62,191,243,.35);
          background:rgba(28,111,150,.13);
          color:#71d9ff;
        }
        .cm-msg.rover .cm-avatar{
          border-color:rgba(239,145,64,.4);
          background:rgba(190,95,31,.1);
          color:#f0a05b;
        }
        .cm-bubble-wrap{max-width:78%;min-width:0}
        .cm-msg.you .cm-bubble-wrap{text-align:right}
        .cm-msg-meta{
          display:flex;
          gap:6px;
          align-items:center;
          margin:0 2px 3px;
          color:#65757d;
          font-size:6.5px;
          letter-spacing:.5px;
        }
        .cm-msg.you .cm-msg-meta{justify-content:flex-end}
        .cm-msg-meta strong{color:#7ddcff}
        .cm-msg.rover .cm-msg-meta strong{color:#f1a35f}
        .cm-bubble{
          display:inline-block;
          padding:8px 10px;
          border-radius:9px 9px 9px 3px;
          border:1px solid rgba(69,183,231,.2);
          background:linear-gradient(145deg,rgba(31,70,91,.42),rgba(11,24,30,.72));
          color:#cbd5d9;
          font-size:8px;
          line-height:1.45;
          text-align:left;
        }
        .cm-msg.you .cm-bubble{
          border-radius:9px 9px 3px 9px;
          border-color:rgba(71,207,168,.2);
          background:linear-gradient(145deg,rgba(28,82,71,.34),rgba(10,25,22,.72));
        }
        .cm-log-empty{
          height:100%;
          display:grid;
          place-items:center;
          color:#58686f;
          font-size:8px;
          letter-spacing:1px;
        }
        .cm-clear{
          display:flex;
          align-items:center;
          gap:5px;
          border:0;
          background:none;
          color:#738188;
          font-size:7px;
          cursor:pointer;
        }
        .cm-clear:hover{color:#ff8d84}
        .cm-audio{
          padding:10px 12px;
          display:grid;
          grid-template-columns:1fr auto;
          gap:10px;
          align-items:center;
        }
        .cm-slider-row{
          display:flex;
          align-items:center;
          gap:8px;
          color:#8a979d;
          font-size:7px;
          letter-spacing:.7px;
        }
        .cm-slider-row input{
          width:120px;
          accent-color:#f09a4b;
        }
        .cm-audio-actions{
          display:flex;
          gap:6px;
        }
        .cm-audio-actions button{
          width:30px;height:30px;
          display:grid;place-items:center;
          border:1px solid rgba(255,255,255,.1);
          border-radius:7px;
          background:rgba(255,255,255,.025);
          color:#b8c2c6;
          cursor:pointer;
        }
        .cm-audio-actions button.active{
          color:#71dfba;
          border-color:rgba(71,208,157,.45);
          background:rgba(71,208,157,.07);
        }
        .cm-footer{
          position:absolute;
          left:18px;
          right:18px;
          bottom:3px;
          display:flex;
          justify-content:space-between;
          color:#4f5d63;
          font-size:6.5px;
          letter-spacing:1px;
          pointer-events:none;
        }
        @keyframes cmPulse{50%{opacity:.4;box-shadow:0 0 4px #45d7a2}}
        @keyframes cmOrb{50%{box-shadow:0 0 0 15px rgba(73,220,188,.025),0 0 48px rgba(73,220,188,.45)}}
        @keyframes cmWave{from{height:5px}to{height:24px}}
        @media(max-width:950px){
          .communication-page{height:auto;min-height:100vh;overflow:auto;padding-bottom:30px}
          .cm-layout{height:auto;grid-template-columns:1fr}
          .cm-main,.cm-side{grid-template-rows:auto}
          .cm-card{min-height:150px}
          .cm-voice-body{min-height:310px}
          .cm-footer{position:static;margin-top:10px}
        }
      
        /* COMMUNICATION ONLY: COLOR / VISUAL RESTYLE — layout and functionality unchanged */
        .communication-page{
          color:#edf7ff;
          background:
            radial-gradient(circle at 18% 24%,rgba(0,191,255,.10),transparent 28%),
            radial-gradient(circle at 82% 68%,rgba(255,125,45,.09),transparent 30%),
            radial-gradient(circle at 52% 100%,rgba(0,119,180,.10),transparent 38%),
            linear-gradient(135deg,#030b12 0%,#071a27 48%,#040a10 100%);
        }
        .communication-page .cm-kicker{color:#ff963f}
        .communication-page .cm-head p{color:#91a8b7}
        .communication-page .cm-live{
          border-color:rgba(52,220,181,.32);
          background:linear-gradient(135deg,rgba(24,178,151,.10),rgba(20,111,145,.06));
          color:#66e6c2;
          box-shadow:0 0 22px rgba(34,205,178,.06);
        }
        .communication-page .cm-card{
          border-color:rgba(42,185,235,.22);
          background:
            linear-gradient(145deg,rgba(6,29,43,.97),rgba(3,12,19,.98));
          box-shadow:
            0 16px 35px rgba(0,0,0,.38),
            inset 0 1px 0 rgba(103,220,255,.045),
            0 0 22px rgba(0,145,210,.035);
        }
        .communication-page .cm-card:after{
          background:
            radial-gradient(circle at 15% 25%,rgba(255,126,48,.055),transparent 25%),
            linear-gradient(120deg,rgba(61,207,255,.035),transparent 38%);
        }
        .communication-page .cm-title{
          border-bottom-color:rgba(49,190,239,.14);
        }
        .communication-page .cm-title-left svg{color:#48d5ff}
        .communication-page .cm-title small{color:#7893a2}
        .communication-page .cm-voice-panel{
          border-right-color:rgba(44,185,235,.15);
        }
        .communication-page .cm-voice-label{color:#9fc0cf}
        .communication-page .cm-orb{
          border-color:rgba(255,116,86,.82);
          background:radial-gradient(circle,rgba(255,101,70,.18),rgba(5,18,25,.94) 67%);
          color:#ff9b83;
          box-shadow:0 0 0 7px rgba(255,92,70,.045),0 0 32px rgba(255,92,70,.18);
        }
        .communication-page .cm-orb.rover{
          border-color:rgba(37,205,255,.86);
          background:radial-gradient(circle,rgba(0,155,224,.22),rgba(4,18,27,.94) 67%);
          color:#72ddff;
          box-shadow:0 0 0 7px rgba(37,205,255,.045),0 0 32px rgba(37,205,255,.22);
        }
        .communication-page .cm-orb.active{
          box-shadow:0 0 0 12px rgba(255,101,70,.055),0 0 44px rgba(255,101,70,.34);
        }
        .communication-page .cm-orb.rover.active{
          box-shadow:0 0 0 12px rgba(37,205,255,.055),0 0 44px rgba(37,205,255,.38);
        }
        .communication-page .cm-wave i{background:#ff765e}
        .communication-page .cm-wave.blue i{background:#25cfff}
        .communication-page .cm-status{color:#65e5c0}
        .communication-page .cm-status.blue{color:#6bdcff}
        .communication-page .cm-voice-btn{
          border-color:rgba(255,112,76,.62);
          background:linear-gradient(135deg,rgba(218,74,42,.16),rgba(255,255,255,.025));
          color:#ffe0d6;
        }
        .communication-page .cm-voice-btn:hover{
          border-color:#ff835f;
          box-shadow:0 0 20px rgba(255,105,70,.16);
        }
        .communication-page .cm-voice-btn.stop{
          border-color:rgba(255,83,76,.72);
          color:#ffaaa4;
          background:rgba(210,49,43,.11);
        }
        .communication-page .cm-textbox{
          border-color:rgba(38,194,246,.46);
          background:rgba(2,15,23,.86);
          color:#edf8ff;
          box-shadow:inset 0 0 20px rgba(0,115,170,.035);
        }
        .communication-page .cm-textbox:focus{
          border-color:rgba(51,211,255,.85);
          box-shadow:0 0 20px rgba(38,194,246,.13),inset 0 0 18px rgba(0,115,170,.05);
        }
        .communication-page .cm-char{color:#708895}
        .communication-page .cm-send{
          border-color:rgba(39,202,255,.78);
          background:linear-gradient(135deg,rgba(0,154,222,.32),rgba(0,78,119,.18));
          color:#b8efff;
          box-shadow:0 0 16px rgba(0,168,235,.08);
        }
        .communication-page .cm-send:hover{box-shadow:0 0 24px rgba(0,185,255,.20)}
        .communication-page .cm-quick button{
          border-color:rgba(46,163,210,.25);
          background:linear-gradient(145deg,rgba(12,47,65,.42),rgba(255,255,255,.018));
          color:#a9c0cb;
        }
        .communication-page .cm-quick button:hover{
          color:#ffad69;
          border-color:rgba(255,143,65,.68);
          background:rgba(239,112,42,.09);
          box-shadow:0 0 16px rgba(239,112,42,.08);
        }
        .communication-page .cm-log-list{scrollbar-color:#23657d transparent}
        .communication-page .cm-avatar{
          border-color:rgba(37,202,255,.46);
          background:rgba(0,119,171,.16);
          color:#70dcff;
        }
        .communication-page .cm-msg.rover .cm-avatar{
          border-color:rgba(255,139,65,.52);
          background:rgba(190,76,25,.13);
          color:#ffad69;
        }
        .communication-page .cm-msg-meta{color:#718896}
        .communication-page .cm-msg-meta strong{color:#7fe3ff}
        .communication-page .cm-msg.rover .cm-msg-meta strong{color:#ffad69}
        .communication-page .cm-bubble{
          border-color:rgba(37,177,232,.28);
          background:linear-gradient(145deg,rgba(12,61,84,.55),rgba(4,21,30,.82));
          color:#d2e3eb;
        }
        .communication-page .cm-msg.you .cm-bubble{
          border-color:rgba(51,212,174,.28);
          background:linear-gradient(145deg,rgba(10,79,70,.42),rgba(4,25,23,.82));
        }
        .communication-page .cm-clear:hover{color:#ff8e82}
        .communication-page .cm-slider-row{color:#91a6b0}
        .communication-page .cm-slider-row input{accent-color:#ff9947}
        .communication-page .cm-audio-actions button{
          border-color:rgba(49,177,224,.24);
          background:rgba(10,36,48,.48);
          color:#b9d2dc;
        }
        .communication-page .cm-audio-actions button:hover{
          border-color:rgba(45,205,255,.65);
          color:#6cddff;
          box-shadow:0 0 16px rgba(0,176,238,.10);
        }
        .communication-page .cm-audio-actions button.active{
          color:#71e6c0;
          border-color:rgba(71,208,157,.55);
          background:rgba(23,126,103,.11);
        }
        .communication-page .cm-footer{color:#607783}
`}</style>

      <div className="cm-head">
        <div>
          <div className="cm-kicker">MINENOVA • TWO-WAY ROVER COMMUNICATION</div>
          <h1>COMMUNICATION</h1>
          <p>TALK • TYPE • LISTEN • SEND • RECEIVE</p>
        </div>
        <div className="cm-live"><i /> COMMUNICATION LINK ACTIVE</div>
      </div>

      <div className="cm-layout">
        <div className="cm-main">
          <div className="cm-card">
            <div className="cm-title">
              <div className="cm-title-left"><Mic size={15} /><span>VOICE COMMUNICATION</span></div>
              <small>{status}</small>
            </div>

            <div className="cm-voice-body">
              <div className="cm-voice-panel">
                <div className="cm-voice-label">YOUR MICROPHONE</div>
                <button
                  className={`cm-orb ${isListening ? "active" : ""}`}
                  onClick={startVoice}
                  title="Tap to speak to Rover"
                >
                  {isListening ? <Mic size={30} /> : <MicOff size={30} />}
                </button>
                <div className={`cm-wave ${isListening ? "active" : ""}`}>
                  {Array.from({ length: 28 }).map((_, i) => <i key={i} style={{ height: `${6 + ((i * 7) % 17)}px` }} />)}
                </div>
                <div className="cm-status">{isListening ? "LISTENING…" : "TAP TO SPEAK"}</div>
                <button className={`cm-voice-btn ${isListening ? "stop" : ""}`} onClick={startVoice}>
                  {isListening ? "LISTENING…" : "START VOICE MESSAGE"}
                </button>
              </div>

              <div className="cm-voice-panel">
                <div className="cm-voice-label">ROVER SPEAKER / PLAYBACK</div>
                <div className={`cm-orb rover ${isSpeaking ? "active" : ""}`}>
                  <Volume2 size={30} />
                </div>
                <div className={`cm-wave blue ${isSpeaking ? "active" : ""}`}>
                  {Array.from({ length: 28 }).map((_, i) => <i key={i} style={{ height: `${5 + ((i * 9) % 18)}px` }} />)}
                </div>
                <div className="cm-status blue">{isSpeaking ? "ROVER SPEAKING…" : "READY TO PLAY"}</div>
                <button
                  className="cm-voice-btn"
                  onClick={() => {
                    const reply = "Rover communication test successful. Audio output is working.";
                    addMessage("rover", "voice", reply);
                    setLastTranscript(`Rover: ${reply}`);
                    speakRover(reply);
                  }}
                >
                  TEST ROVER SPEAKER
                </button>
              </div>
            </div>
          </div>

          <div className="cm-card">
            <div className="cm-title">
              <div className="cm-title-left"><MessageSquare size={14} /><span>TEXT TO SPEECH</span></div>
              <small>TYPE → ROVER VOICE</small>
            </div>
            <div className="cm-tts-body">
              <textarea
                className="cm-textbox"
                value={textMessage}
                maxLength={200}
                onChange={(e) => setTextMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendText();
                  }
                }}
                placeholder="Type a message for Rover…"
              />
              <div className="cm-text-bottom">
                <span className="cm-char">{textMessage.length}/200 • {lastTranscript}</span>
                <button className="cm-send" onClick={() => sendText()}>
                  <Send size={13} /> CONVERT & SEND
                </button>
              </div>
            </div>
          </div>

          <div className="cm-card">
            <div className="cm-title">
              <div className="cm-title-left"><MessageSquare size={13} /><span>QUICK MESSAGES</span></div>
              <small>ONE-TAP COMMANDS</small>
            </div>
            <div className="cm-quick">
              {["Status Update", "Are you okay?", "Check temperature", "Scan the area", "Return to base"].map((item) => (
                <button key={item} onClick={() => sendText(item)}>{item}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="cm-side">
          <div className="cm-card cm-log">
            <div className="cm-title">
              <div className="cm-title-left"><Bot size={15} /><span>COMMUNICATION LOG</span></div>
              <button className="cm-clear" onClick={clearLog}><Trash2 size={12} /> CLEAR</button>
            </div>

            <div className="cm-log-list">
              {messages.length === 0 ? (
                <div className="cm-log-empty">NO MESSAGES YET</div>
              ) : (
                messages.map((message) => (
                  <div className={`cm-msg ${message.from}`} key={message.id}>
                    <div className="cm-avatar">
                      {message.from === "you"
                        ? (message.type === "voice" ? <Mic size={14} /> : <MessageSquare size={14} />)
                        : <Bot size={14} />}
                    </div>
                    <div className="cm-bubble-wrap">
                      <div className="cm-msg-meta">
                        <strong>
                          {message.from === "you"
                            ? `YOU (${message.type.toUpperCase()})`
                            : "ROVER (VOICE)"}
                        </strong>
                        <span>{message.time}</span>
                      </div>
                      <div className="cm-bubble">{message.text}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="cm-card">
            <div className="cm-title">
              <div className="cm-title-left"><Volume2 size={14} /><span>AUDIO CONTROLS</span></div>
              <small>{muted ? "MUTED" : `${Math.round(volume * 100)}%`}</small>
            </div>
            <div className="cm-audio">
              <div className="cm-slider-row">
                <Volume2 size={12} />
                VOLUME
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                />
              </div>
              <div className="cm-audio-actions">
                <button
                  className={muted ? "active" : ""}
                  onClick={() => setMuted((v) => !v)}
                  title={muted ? "Unmute rover speaker" : "Mute rover speaker"}
                >
                  {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
                <button
                  onClick={() => {
                    window.speechSynthesis?.cancel();
                    setIsSpeaking(false);
                    setStatus("READY");
                  }}
                  title="Stop rover speech"
                >
                  <MicOff size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cm-footer">
        <span>SIMULATION • BROWSER MICROPHONE + SPEAKER</span>
        <span>MNR-01 • MINENOVA</span>
      </div>
    </section>
  );
}


function LiveViewPage() {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const streamRef = React.useRef(null);
  const recorderRef = React.useRef(null);
  const chunksRef = React.useRef([]);
  const recognitionRef = React.useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [zoom, setZoom] = useState(1);
  const [lightOn, setLightOn] = useState(false);
  const [micOn, setMicOn] = useState(false);
  const [recording, setRecording] = useState(false);
  const [voiceText, setVoiceText] = useState("");
  const [mode, setMode] = useState("NORMAL");
  const [showMode, setShowMode] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [captured, setCaptured] = useState(null);
  const [captureSaved, setCaptureSaved] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [recordingSaved, setRecordingSaved] = useState(false);

  const filterStyle =
    mode === "GRAYSCALE"
      ? "grayscale(1)"
      : mode === "NIGHT VISION"
        ? "sepia(1) hue-rotate(70deg) saturate(2.2) brightness(.72) contrast(1.12)"
        : mode === "THERMAL"
          ? "hue-rotate(150deg) saturate(2.4) contrast(1.18) brightness(1.02)"
          : "none";

  const attachStreamToVideo = async (stream) => {
    const video = videoRef.current;
    if (!video) return;

    video.srcObject = stream;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;

    try {
      await video.play();
    } catch {
      // The video element is muted, so browsers normally allow autoplay.
      // If a browser delays playback, the canplay handler below retries it.
    }
  };

  const startCamera = async () => {
    setCameraError("");
    setCameraReady(false);
    setCaptureSaved(false);

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError("Camera access is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      // Use the laptop's available webcam. Avoid forcing a facingMode so
      // built-in laptop cameras work reliably across Chrome/Edge/Windows.
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30, max: 30 },
        },
        audio: false,
      });

      const videoTrack = stream.getVideoTracks()[0];

      if (!videoTrack) {
        stream.getTracks().forEach((track) => track.stop());
        throw new Error("NO_VIDEO_TRACK");
      }

      streamRef.current = stream;
      setCameraOn(true);

      // Attach immediately after permission succeeds.
      requestAnimationFrame(() => {
        attachStreamToVideo(stream);
      });
    } catch (error) {
      setCameraOn(false);
      setCameraReady(false);

      if (error?.name === "NotAllowedError") {
        setCameraError("Camera permission was denied. Click the camera icon and choose Allow.");
      } else if (error?.name === "NotFoundError") {
        setCameraError("No webcam was found. Check that the laptop camera is available.");
      } else if (error?.name === "NotReadableError") {
        setCameraError("The webcam is busy in another app. Close Camera/Teams/Zoom and try again.");
      } else {
        setCameraError("Unable to access the laptop camera. Check browser camera permission and try again.");
      }
    }
  };

  useEffect(() => {
    if (!cameraOn) return;

    const video = videoRef.current;
    const stream = streamRef.current;

    if (!video || !stream) return;

    video.srcObject = stream;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;

    const handleReady = async () => {
      setCameraReady(video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0);
      try {
        await video.play();
      } catch {}
    };

    video.addEventListener("loadedmetadata", handleReady);
    video.addEventListener("canplay", handleReady);
    video.addEventListener("playing", handleReady);
    handleReady();

    return () => {
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("playing", handleReady);
    };
  }, [cameraOn]);

  const stopCamera = () => {
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }

    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }

    setCameraOn(false);
    setCameraReady(false);
    setRecording(false);
  };

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      recognitionRef.current?.stop();
      if (recorderRef.current && recorderRef.current.state !== "inactive") {
        recorderRef.current.stop();
      }
    };
  }, []);

  const takeSnapshot = () => {
    if (!cameraOn || !cameraReady || !videoRef.current || !canvasRef.current) {
      setCameraError("Camera is not ready yet. Wait for the LIVE indicator, then try Snapshot.");
      return;
    }

    const video = videoRef.current;

    if (!video.videoWidth || !video.videoHeight) {
      setCameraError("Camera frame is not ready yet. Please wait a moment and try again.");
      return;
    }

    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.filter = filterStyle;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL("image/jpeg", 0.92);
    setCaptured(image);
    setCaptureSaved(false);
  };

  const saveSnapshot = () => {
    if (!captured) return;

    const a = document.createElement("a");
    a.href = captured;
    a.download = `minenova-snapshot-${Date.now()}.jpg`;
    a.click();
    setCaptureSaved(true);
  };

  const toggleMic = async () => {
    if (micOn) {
      recognitionRef.current?.stop();
      recognitionRef.current = null;
      setMicOn(false);
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceText("Voice control is not supported here. Use Chrome or Edge.");
      return;
    }

    try {
      const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStream.getTracks().forEach((track) => track.stop());

      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      recognition.interimResults = true;
      recognition.continuous = false;
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setMicOn(true);
        setVoiceText("Listening… speak your rover instruction.");
      };

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1];
        const spoken = result[0].transcript.trim();

        if (spoken) {
          setVoiceText(`ROVER INSTRUCTION • ${spoken}`);
        }

        if (result.isFinal) {
          setMicOn(false);
        }
      };

      recognition.onerror = () => {
        setMicOn(false);
        setVoiceText("Microphone input could not be captured. Try again.");
      };

      recognition.onend = () => {
        recognitionRef.current = null;
        setMicOn(false);
      };

      recognition.start();
    } catch (error) {
      setMicOn(false);
      setVoiceText(
        error?.name === "NotAllowedError"
          ? "Microphone permission was denied."
          : "Unable to access the microphone."
      );
    }
  };

  const toggleRecording = () => {
    if (!cameraOn || !cameraReady || !streamRef.current) return;

    if (recording) {
      if (recorderRef.current && recorderRef.current.state !== "inactive") {
        recorderRef.current.stop();
      }
      return;
    }

    try {
      const mimeCandidates = [
        "video/webm;codecs=vp9",
        "video/webm;codecs=vp8",
        "video/webm",
      ];

      const mimeType =
        mimeCandidates.find((type) => MediaRecorder.isTypeSupported(type)) || "";

      const recorder = new MediaRecorder(
        streamRef.current,
        mimeType ? { mimeType } : undefined
      );

      chunksRef.current = [];
      recorderRef.current = recorder;
      setRecordingSaved(false);

      recorder.ondataavailable = (event) => {
        if (event.data?.size) chunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "video/webm",
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `minenova-live-recording-${Date.now()}.webm`;
        a.click();

        window.setTimeout(() => URL.revokeObjectURL(url), 1500);
        chunksRef.current = [];
        recorderRef.current = null;
        setRecording(false);
        setRecordingSaved(true);
      };

      recorder.start(200);
      setRecording(true);
    } catch {
      setRecording(false);
      setCameraError("Video recording is not supported by this browser.");
    }
  };

  const toggleFullscreen = async () => {
    const page = document.querySelector(".live-view-page");

    try {
      if (!document.fullscreenElement && page?.requestFullscreen) {
        await page.requestFullscreen();
        setIsFullscreen(true);
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      setIsFullscreen(false);
    }
  };

  const modeLabel =
    mode === "NORMAL"
      ? "NORMAL"
      : mode === "NIGHT VISION"
        ? "NIGHT"
        : mode === "GRAYSCALE"
          ? "GRAY"
          : "THERMAL";

  return (
    <section className="live-view-page">
      <style>{`
        .live-view-page{
          height:calc(100vh - 72px);
          min-height:560px;
          position:relative;
          overflow:hidden;
          background:#020406;
          color:#eef3f5;
        }

        .lv-camera-stage{
          position:absolute;
          inset:0;
          background:#010304;
          overflow:hidden;
        }

        .lv-video,
        .lv-placeholder{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .lv-video{
          transform:scale(var(--lv-zoom,1));
          transition:transform .25s ease,filter .25s ease;
          filter:var(--lv-filter,none);
          background:#05090b;
        }

        .lv-placeholder{
          display:grid;
          place-items:center;
          background:
            radial-gradient(circle at 50% 45%,rgba(41,67,76,.28),transparent 36%),
            linear-gradient(135deg,#071014,#020406 65%);
        }

        .lv-placeholder-inner{
          text-align:center;
          max-width:420px;
          padding:28px;
        }

        .lv-placeholder .cam-icon{
          width:74px;
          height:74px;
          border-radius:20px;
          border:1px solid rgba(95,194,238,.35);
          display:grid;
          place-items:center;
          margin:0 auto 18px;
          background:rgba(17,39,47,.72);
          color:#66d5ff;
          box-shadow:0 0 40px rgba(60,190,240,.12);
        }

        .lv-placeholder h2{
          margin:0 0 8px;
          font-size:22px;
          letter-spacing:1.2px;
        }

        .lv-placeholder p{
          margin:0;
          color:#8e9ca2;
          font-size:10px;
          line-height:1.7;
          letter-spacing:.7px;
        }

        .lv-connect{
          margin-top:18px;
          padding:11px 18px;
          border-radius:8px;
          border:1px solid rgba(239,145,64,.65);
          background:linear-gradient(135deg,rgba(239,145,64,.22),rgba(239,145,64,.06));
          color:#ffb273;
          font-size:9px;
          font-weight:900;
          letter-spacing:1.3px;
          cursor:pointer;
        }

        .lv-overlay{
          position:absolute;
          inset:0;
          pointer-events:none;
          background:
            linear-gradient(180deg,rgba(0,0,0,.48),transparent 23%,transparent 75%,rgba(0,0,0,.58)),
            radial-gradient(circle at center,transparent 48%,rgba(0,0,0,.26) 100%);
        }

        .lv-top{
          position:absolute;
          left:20px;
          right:20px;
          top:16px;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          z-index:5;
        }

        .lv-live{
          display:flex;
          align-items:center;
          gap:9px;
          padding:8px 12px;
          border:1px solid rgba(255,80,70,.55);
          border-radius:8px;
          background:rgba(3,8,10,.72);
          backdrop-filter:blur(10px);
          font-size:10px;
          font-weight:900;
          letter-spacing:1.4px;
        }

        .lv-live-dot{
          width:8px;
          height:8px;
          border-radius:50%;
          background:#ff4b45;
          box-shadow:0 0 14px #ff4b45;
          animation:lvPulse 1.3s infinite;
        }

        .lv-top-right{
          display:flex;
          align-items:center;
          gap:7px;
        }

        .lv-chip{
          padding:8px 10px;
          border:1px solid rgba(255,255,255,.13);
          border-radius:7px;
          background:rgba(3,8,10,.70);
          backdrop-filter:blur(10px);
          color:#b9c4c9;
          font-size:7px;
          letter-spacing:1px;
          font-weight:800;
        }

        .lv-chip strong{
          color:#65d7a7;
        }

        .lv-fullscreen{
          width:36px;
          height:36px;
          border:1px solid rgba(255,255,255,.18);
          border-radius:8px;
          background:rgba(3,8,10,.76);
          color:#dce8ed;
          display:grid;
          place-items:center;
          cursor:pointer;
        }

        .lv-side-controls{
          position:absolute;
          right:18px;
          top:50%;
          transform:translateY(-50%);
          z-index:10;
          display:flex;
          flex-direction:column;
          gap:7px;
          padding:8px;
          border:1px solid rgba(255,255,255,.13);
          border-radius:14px;
          background:rgba(3,8,10,.76);
          backdrop-filter:blur(16px);
          box-shadow:0 18px 45px rgba(0,0,0,.45);
        }

        .lv-control{
          position:relative;
        }

        .lv-control button{
          width:43px;
          height:43px;
          border-radius:10px;
          border:1px solid rgba(90,190,238,.38);
          background:linear-gradient(145deg,#10212a,#071014);
          color:#dbeef4;
          display:grid;
          place-items:center;
          cursor:pointer;
          transition:.18s;
          box-shadow:0 5px 16px rgba(0,0,0,.3);
        }

        .lv-control button:hover{
          transform:translateX(-2px);
          border-color:rgba(100,210,255,.85);
          color:#6edaff;
          box-shadow:0 0 20px rgba(74,190,240,.14);
        }

        .lv-control button.active{
          border-color:#63d5ff;
          color:#6edaff;
          background:linear-gradient(145deg,#153541,#08151a);
          box-shadow:0 0 20px rgba(74,190,240,.22);
        }

        .lv-control button:disabled{
          cursor:not-allowed;
        }

        .lv-control.record button{
          border-color:rgba(255,76,69,.62);
          color:#ff726d;
        }

        .lv-control.record button.active{
          background:#441719;
          color:#ff8a84;
          box-shadow:0 0 22px rgba(255,70,62,.25);
        }

        .lv-control-label{
          position:absolute;
          right:52px;
          top:50%;
          transform:translateY(-50%);
          opacity:0;
          pointer-events:none;
          white-space:nowrap;
          padding:7px 9px;
          border:1px solid rgba(255,255,255,.13);
          border-radius:6px;
          background:rgba(4,9,11,.94);
          color:#dce5e8;
          font-size:7px;
          font-weight:900;
          letter-spacing:1px;
          transition:.18s;
        }

        .lv-control:hover .lv-control-label{
          opacity:1;
        }

        .lv-popup{
          position:absolute;
          right:52px;
          top:0;
          width:180px;
          padding:10px;
          border:1px solid rgba(94,190,238,.28);
          border-radius:10px;
          background:rgba(4,10,13,.96);
          backdrop-filter:blur(16px);
          box-shadow:0 16px 35px rgba(0,0,0,.45);
        }

        .lv-popup h4{
          margin:0 0 8px;
          font-size:8px;
          letter-spacing:1.2px;
          color:#dce5e9;
        }

        .lv-popup button{
          width:100%;
          height:31px;
          margin:3px 0;
          border:1px solid rgba(255,255,255,.09);
          border-radius:6px;
          background:rgba(255,255,255,.035);
          color:#9ca9ae;
          font-size:7px;
          font-weight:800;
          letter-spacing:.8px;
          cursor:pointer;
        }

        .lv-popup button.active{
          border-color:rgba(82,199,247,.6);
          color:#68d6ff;
          background:rgba(53,166,214,.10);
        }

        .lv-error{
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          z-index:20;
          width:min(420px,80vw);
          padding:14px;
          border:1px solid rgba(255,88,79,.42);
          border-radius:9px;
          background:rgba(22,7,8,.9);
          color:#ffaaa5;
          font-size:9px;
          line-height:1.6;
          text-align:center;
        }

        .lv-bottom-status{
          position:absolute;
          left:20px;
          bottom:18px;
          z-index:8;
          display:flex;
          align-items:center;
          gap:7px;
          padding:8px 11px;
          border:1px solid rgba(255,255,255,.12);
          border-radius:7px;
          background:rgba(4,9,11,.72);
          backdrop-filter:blur(10px);
          color:#9aa7ac;
          font-size:7px;
          letter-spacing:1px;
          font-weight:800;
        }

        .lv-bottom-status strong{
          color:#65d7a7;
        }

        .lv-voice-status{
          position:absolute;
          left:50%;
          bottom:18px;
          transform:translateX(-50%);
          z-index:9;
          max-width:min(650px,70vw);
          padding:9px 14px;
          border:1px solid rgba(98,210,255,.26);
          border-radius:8px;
          background:rgba(3,10,13,.82);
          backdrop-filter:blur(10px);
          color:#b9dce7;
          font-size:8px;
          letter-spacing:.5px;
          text-align:center;
          box-shadow:0 12px 28px rgba(0,0,0,.25);
        }

        .lv-capture{
          position:absolute;
          left:20px;
          top:78px;
          z-index:12;
          width:210px;
          padding:8px;
          border:1px solid rgba(255,255,255,.14);
          border-radius:9px;
          background:rgba(4,9,11,.92);
          backdrop-filter:blur(12px);
          box-shadow:0 14px 30px rgba(0,0,0,.4);
        }

        .lv-capture img{
          display:block;
          width:100%;
          border-radius:6px;
          margin-bottom:7px;
        }

        .lv-capture-title{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px;
          color:#dce5e8;
          font-size:7px;
          font-weight:900;
          letter-spacing:1px;
        }

        .lv-capture-title strong{
          color:#65d7a7;
        }

        .lv-capture-actions{
          display:flex;
          gap:5px;
        }

        .lv-capture-actions button{
          flex:1;
          padding:7px;
          border:1px solid rgba(255,255,255,.12);
          border-radius:5px;
          background:rgba(255,255,255,.04);
          color:#d8e1e4;
          font-size:7px;
          font-weight:800;
          cursor:pointer;
        }

        .lv-capture-actions button:hover{
          border-color:rgba(99,213,255,.5);
          color:#69d9ff;
        }

        .lv-light-glow{
          position:absolute;
          inset:0;
          pointer-events:none;
          background:radial-gradient(circle at 52% 58%,rgba(255,214,126,.16),transparent 30%);
          mix-blend-mode:screen;
        }

        @keyframes lvPulse{
          50%{opacity:.45;transform:scale(.8)}
        }

        @media(max-width:850px){
          .lv-side-controls{
            right:10px;
            gap:5px;
            padding:6px;
          }

          .lv-control button{
            width:39px;
            height:39px;
          }

          .lv-chip{
            display:none;
          }

          .lv-bottom-status{
            bottom:10px;
            left:10px;
          }

          .lv-voice-status{
            bottom:10px;
            max-width:62vw;
          }

          .lv-capture{
            top:70px;
            left:10px;
            width:170px;
          }
        }
      `}</style>

      <div
        className="lv-camera-stage"
        style={{
          "--lv-zoom": zoom,
          "--lv-filter": filterStyle,
        }}
      >
        {cameraOn ? (
          <video
            ref={videoRef}
            className="lv-video"
            autoPlay
            playsInline
            muted
          />
        ) : (
          <div className="lv-placeholder">
            <div className="lv-placeholder-inner">
              <div className="cam-icon">
                <Camera size={34} />
              </div>
              <h2>LIVE VIDEO FEED</h2>
              <p>
                Tap the camera icon to connect the laptop camera for the
                prototype. The same view can later receive the rover camera
                stream.
              </p>
              <button className="lv-connect" onClick={startCamera}>
                CONNECT CAMERA
              </button>
            </div>
          </div>
        )}

        {lightOn && cameraOn && <div className="lv-light-glow" />}
        <div className="lv-overlay" />

        <div className="lv-top">
          <div className="lv-live">
            <span className="lv-live-dot" />
            {cameraOn ? (cameraReady ? "LIVE" : "CONNECTING") : "STANDBY"}
            {recording && <span style={{ color: "#ff7068", marginLeft: 4 }}>• REC</span>}
          </div>

          <div className="lv-top-right">
            <div className="lv-chip">
              MODE <strong>{modeLabel}</strong>
            </div>
            <div className="lv-chip">
              {cameraOn ? (cameraReady ? "CAMERA ACTIVE" : "CAMERA STARTING") : "CAMERA READY"}
            </div>
            <button
              className="lv-fullscreen"
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              <Maximize2 size={17} />
            </button>
          </div>
        </div>

        {cameraError && <div className="lv-error">{cameraError}</div>}

        <div className="lv-bottom-status">
          <span>FEED</span>
          <strong>{cameraOn ? (cameraReady ? "LIVE" : "CONNECTING") : "STANDBY"}</strong>
          <span>•</span>
          <span>ROVER-01 READY</span>
        </div>

        {voiceText && (
          <div className="lv-voice-status">
            🎙 {voiceText}
          </div>
        )}

        <div className="lv-side-controls">
          <div className="lv-control">
            <button
              className={micOn ? "active" : ""}
              onClick={toggleMic}
              title="Microphone"
            >
              <Mic size={18} />
            </button>
            <div className="lv-control-label">
              {micOn ? "STOP MIC" : "MIC"}
            </div>
          </div>

          <div className="lv-control">
            <button
              className={cameraOn ? "active" : ""}
              onClick={cameraOn ? stopCamera : startCamera}
              title={cameraOn ? "Disconnect camera" : "Connect camera"}
            >
              <Camera size={18} />
            </button>
            <div className="lv-control-label">
              {cameraOn ? "DISCONNECT" : "CONNECT CAMERA"}
            </div>
          </div>

          <div className="lv-control">
            <button
              onClick={takeSnapshot}
              title="Take snapshot"
              disabled={!cameraReady}
              style={{ opacity: cameraReady ? 1 : .42 }}
            >
              <Camera size={17} />
            </button>
            <div className="lv-control-label">SNAPSHOT</div>
          </div>

          <div className="lv-control record">
            <button
              className={recording ? "active" : ""}
              onClick={toggleRecording}
              title={recording ? "Stop recording" : "Start recording"}
              disabled={!cameraReady}
              style={{ opacity: cameraReady ? 1 : .42 }}
            >
              <Circle size={18} fill={recording ? "currentColor" : "none"} />
            </button>
            <div className="lv-control-label">
              {recording ? "STOP RECORDING" : "RECORD"}
            </div>
          </div>

          <div className="lv-control">
            <button
              className={lightOn ? "active" : ""}
              onClick={() => setLightOn((v) => !v)}
              title="Camera light"
            >
              <Lightbulb size={18} />
            </button>
            <div className="lv-control-label">
              LIGHT {lightOn ? "ON" : "OFF"}
            </div>
          </div>

          <div className="lv-control">
            <button
              className={zoom !== 1 ? "active" : ""}
              onClick={() => setZoom((v) => (v >= 3 ? 1 : +(v + .25).toFixed(2)))}
              title="Zoom"
            >
              <ZoomIn size={18} />
            </button>
            <div className="lv-control-label">ZOOM {zoom.toFixed(2)}x</div>
          </div>

          <div className="lv-control">
            <button
              className={showMode ? "active" : ""}
              onClick={() => {
                setShowMode((v) => !v);
                setShowMore(false);
              }}
              title="Camera modes"
            >
              <Palette size={18} />
            </button>
            <div className="lv-control-label">MODE</div>

            {showMode && (
              <div className="lv-popup">
                <h4>CAMERA MODE</h4>
                {["NORMAL", "GRAYSCALE", "NIGHT VISION", "THERMAL"].map((item) => (
                  <button
                    key={item}
                    className={mode === item ? "active" : ""}
                    onClick={() => {
                      setMode(item);
                      setShowMode(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lv-control">
            <button
              className={showMore ? "active" : ""}
              onClick={() => {
                setShowMore((v) => !v);
                setShowMode(false);
              }}
              title="More controls"
            >
              <Settings2 size={18} />
            </button>
            <div className="lv-control-label">MORE</div>

            {showMore && (
              <div className="lv-popup">
                <h4>VIEW CONTROLS</h4>
                <button onClick={() => setZoom((v) => Math.max(1, +(v - .25).toFixed(2)))}>
                  <ZoomOut size={12} style={{ verticalAlign: "middle", marginRight: 5 }} />
                  ZOOM OUT
                </button>
                <button onClick={() => setZoom((v) => Math.min(3, +(v + .25).toFixed(2)))}>
                  <ZoomIn size={12} style={{ verticalAlign: "middle", marginRight: 5 }} />
                  ZOOM IN
                </button>
                <button
                  onClick={() => {
                    setZoom(1);
                    setMode("NORMAL");
                    setLightOn(false);
                    setShowMore(false);
                  }}
                >
                  RESET VIEW
                </button>
                <button
                  onClick={() => {
                    setShowMore(false);
                    setCameraError("ROVER CAMERA • HARDWARE STREAM READY");
                  }}
                >
                  ROVER CAMERA • READY
                </button>
              </div>
            )}
          </div>
        </div>

        {captured && (
          <div className="lv-capture">
            <div className="lv-capture-title">
              <span>SNAPSHOT CAPTURED</span>
              {captureSaved && <strong>SAVED</strong>}
            </div>
            <img src={captured} alt="Latest MineNova snapshot" />
            <div className="lv-capture-actions">
              <button onClick={saveSnapshot}>
                {captureSaved ? "SAVED" : "SAVE PHOTO"}
              </button>
              <button
                onClick={() => {
                  setCaptured(null);
                  setCaptureSaved(false);
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

        {recordingSaved && !captured && (
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 78,
              zIndex: 12,
              padding: "9px 12px",
              border: "1px solid rgba(101,215,167,.32)",
              borderRadius: 8,
              background: "rgba(4,14,11,.9)",
              color: "#65d7a7",
              fontSize: 8,
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            ✓ LIVE RECORDING SAVED
          </div>
        )}
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </section>
  );
}


function NetworkPage() {
  const [selected, setSelected] = useState(null);
  const [tick, setTick] = useState(0);

  const baseNodes = [
    ["N01", 7, 55, "NORMAL"], ["N02", 17, 42, "NORMAL"], ["N03", 27, 45, "NORMAL"],
    ["N04", 37, 36, "NORMAL"], ["N05", 46, 23, "NORMAL"], ["N06", 57, 31, "WEAK"],
    ["N07", 68, 20, "NORMAL"], ["N08", 79, 34, "NORMAL"], ["N09", 89, 50, "NORMAL"],
    ["N10", 29, 61, "NORMAL"], ["N11", 36, 72, "NORMAL"], ["N12", 47, 78, "WEAK"],
    ["N13", 55, 64, "NORMAL"], ["N14", 61, 75, "CRITICAL"], ["N15", 70, 69, "NORMAL"],
    ["N16", 80, 58, "NORMAL"], ["N17", 87, 43, "NORMAL"], ["N18", 94, 68, "NORMAL"],
    ["N19", 75, 84, "NORMAL"], ["N20", 48, 88, "NORMAL"],
  ];

  useEffect(() => {
    const timer = setInterval(() => setTick(v => v + 1), 2200);
    return () => clearInterval(timer);
  }, []);

  const nodes = baseNodes.map(([id, left, top, baseStatus], index) => {
    let status = baseStatus;

    if (id !== "N14" && id !== "N06" && id !== "N12" && (tick + index * 3) % 23 === 0) {
      status = "WEAK";
    }

    if (id !== "N14" && status === "WEAK" && (tick + index) % 9 === 0) {
      status = "NORMAL";
    }

    const signal =
      status === "CRITICAL"
        ? 18 + ((tick * 3) % 7)
        : status === "WEAK"
          ? 48 + ((tick + index) % 15)
          : 87 + ((tick + index * 2) % 12);

    const battery = Math.max(42, 96 - ((tick + index * 5) % 31));
    const temperature = (31 + ((tick + index) % 7) * 0.8).toFixed(1);
    const depth = Math.round(120 + index * 15 + ((tick + index) % 5));

    const issue =
      status === "CRITICAL"
        ? "Methane concentration high"
        : status === "WEAK"
          ? "Signal strength unstable"
          : "Relay connection stable";

    return { id, left, top, status, signal, battery, temperature, depth, issue };
  });

  const counts = {
    normal: nodes.filter(n => n.status === "NORMAL").length,
    weak: nodes.filter(n => n.status === "WEAK").length,
    critical: nodes.filter(n => n.status === "CRITICAL").length,
  };

  const health = Math.round(
    ((counts.normal * 100 + counts.weak * 58 + counts.critical * 18) / nodes.length)
  );

  const selectedNode = selected
    ? nodes.find(n => n.id === selected.id) || selected
    : nodes.find(n => n.id === "N14");

  const routes = [
    "M 7 55 C 12 42, 14 42, 17 42 S 23 45, 27 45 S 33 37, 37 36 S 42 25, 46 23",
    "M 46 23 C 51 19, 53 27, 57 31 S 63 23, 68 20 S 75 29, 79 34 S 85 44, 89 50",
    "M 27 45 C 30 52, 29 57, 29 61 S 33 69, 36 72 S 42 76, 47 78",
    "M 37 36 C 42 42, 43 57, 47 58 S 51 62, 55 64 S 58 70, 61 75",
    "M 57 31 C 60 39, 61 52, 55 64 S 63 69, 70 69 S 77 60, 80 58",
    "M 79 34 C 82 42, 84 45, 89 50 S 91 61, 94 68",
    "M 61 75 C 66 80, 69 84, 75 84 S 83 72, 87 72",
    "M 47 78 C 47 83, 47 85, 48 88 S 57 88, 61 75",
  ];

  const nodeImage = selectedNode.status === "CRITICAL"
    ? "/mine-map.png"
    : "/mine-map.png";

  return (
    <section className="network-page">
      <style>{`
        .network-page{
          min-height:calc(100vh - 72px);
          height:calc(100vh - 72px);
          overflow:hidden;
          box-sizing:border-box;
          padding:12px 16px 10px;
          color:#edf5f6;
          background:
            radial-gradient(circle at 62% 10%,rgba(35,104,116,.18),transparent 35%),
            linear-gradient(135deg,#030709 0%,#081218 52%,#030608 100%);
        }

        .net-head{
          height:54px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:9px;
          padding:0 2px;
        }

        .net-title-wrap{display:flex;align-items:center;gap:12px}
        .net-title-icon{
          width:42px;height:42px;border-radius:10px;
          display:grid;place-items:center;
          color:#43d8ff;
          border:1px solid rgba(53,205,239,.28);
          background:rgba(26,119,141,.10);
          box-shadow:0 0 24px rgba(44,194,231,.08);
        }
        .net-kicker{
          color:#5fdcff;
          font-size:7px;font-weight:900;letter-spacing:2.2px;
        }
        .net-head h1{
          margin:3px 0 2px;font-size:23px;line-height:1;letter-spacing:1.2px;
        }
        .net-head p{
          margin:0;color:#7f9198;font-size:7px;letter-spacing:1px;
        }
        .net-quote{
          color:#a8b7bc;font-size:9px;font-style:italic;line-height:1.45;
          text-align:right;margin-right:14px;
        }
        .net-live{
          display:flex;align-items:center;gap:7px;
          padding:8px 11px;border:1px solid rgba(74,209,162,.28);
          border-radius:7px;background:rgba(74,209,162,.05);
          color:#69dfad;font-size:7px;font-weight:900;letter-spacing:1px;
        }
        .net-live i{
          width:7px;height:7px;border-radius:50%;background:#4fd89c;
          box-shadow:0 0 11px #4fd89c;animation:netOnlinePulse 1.7s infinite;
        }

        .net-layout{
          height:calc(100% - 63px);
          display:grid;
          grid-template-columns:minmax(0,2.25fr) minmax(285px,.82fr);
          grid-template-rows:minmax(0,1fr) 142px;
          gap:10px;
        }

        .net-card{
          position:relative;
          border:1px solid rgba(70,188,219,.30);
          border-radius:11px;
          background:linear-gradient(145deg,rgba(12,25,31,.96),rgba(4,10,13,.98));
          box-shadow:0 18px 38px rgba(0,0,0,.36),inset 0 1px 0 rgba(255,255,255,.035);
          overflow:hidden;
        }

        .net-map{
          position:relative;
          min-height:0;
          border-color:rgba(57,197,230,.38);
          background:
            linear-gradient(180deg,rgba(2,8,11,.14),rgba(2,8,11,.28)),
            url('/mine-map.png');
          background-size:cover;
          background-position:center;
        }

        .net-map:after{
          content:"";
          position:absolute;inset:0;pointer-events:none;
          background:
            radial-gradient(circle at 50% 48%,transparent 26%,rgba(0,0,0,.12) 65%,rgba(0,0,0,.52) 100%),
            linear-gradient(180deg,rgba(2,7,9,.08),rgba(2,7,9,.26));
        }

        .net-map-label{
          position:absolute;left:15px;top:13px;z-index:12;
          padding:8px 11px;border:1px solid rgba(85,208,235,.25);
          border-radius:7px;background:rgba(3,10,13,.82);
          backdrop-filter:blur(9px);
        }
        .net-map-label strong{display:block;font-size:8px;letter-spacing:1.4px}
        .net-map-label span{display:block;margin-top:3px;color:#71868e;font-size:6.5px;letter-spacing:.9px}

        .net-gateway{
          position:absolute;left:15px;bottom:16px;z-index:12;
          display:flex;align-items:center;gap:7px;
          padding:7px 9px;border:1px solid rgba(45,226,171,.38);
          border-radius:7px;background:rgba(2,11,12,.86);
          color:#66dfb1;font-size:7px;font-weight:900;letter-spacing:1px;
        }
        .net-gateway i{width:7px;height:7px;border-radius:50%;background:#39dfa8;box-shadow:0 0 10px #39dfa8}

        .net-routes{
          position:absolute;inset:0;width:100%;height:100%;z-index:4;pointer-events:none;
        }
        .route-base{
          fill:none;stroke:rgba(3,10,12,.96);stroke-width:5.4;
          stroke-linecap:round;stroke-linejoin:round;
          filter:drop-shadow(0 3px 4px rgba(0,0,0,.65));
        }
        .route-core{
          fill:none;stroke:rgba(52,211,228,.72);stroke-width:1.7;
          stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:2.5 4.5;
          filter:drop-shadow(0 0 4px rgba(50,211,232,.48));
          animation:routeFlow 5s linear infinite;
        }
        .route-warning{stroke:rgba(239,182,66,.78)}
        .route-danger{stroke:rgba(238,65,65,.86)}

        .net-node{
          position:absolute;z-index:10;transform:translate(-50%,-50%);
          cursor:pointer;
        }
        .net-node-dot{
          width:25px;height:25px;border-radius:50%;
          display:grid;place-items:center;
          border:2px solid rgba(220,255,250,.96);
          transition:.2s;
          box-sizing:border-box;
        }
        .net-node-dot:before{
          content:"";width:7px;height:7px;border-radius:50%;background:#fff;
        }
        .net-node:hover .net-node-dot{transform:scale(1.13)}
        .net-node.normal .net-node-dot{
          background:#14b982;
          box-shadow:0 0 0 4px rgba(0,0,0,.34),0 0 18px rgba(20,220,164,.72);
        }
        .net-node.weak .net-node-dot{
          background:#e2a82d;
          box-shadow:0 0 0 4px rgba(0,0,0,.34),0 0 20px rgba(226,168,45,.82);
        }
        .net-node.critical .net-node-dot{
          width:34px;height:34px;background:#e63838;
          box-shadow:0 0 0 7px rgba(232,56,56,.13),0 0 31px rgba(232,56,56,.95);
          animation:netDanger 1.2s infinite;
        }
        .net-node.critical .net-node-dot:before{width:9px;height:9px}
        .net-node.selected .net-node-dot{outline:2px solid #fff;outline-offset:2px}

        .net-node-label{
          position:absolute;left:17px;top:-9px;
          min-width:27px;padding:3px 5px;
          border-radius:4px;background:rgba(2,8,10,.88);
          border:1px solid rgba(255,255,255,.13);
          color:#d8e3e5;font-size:6.5px;font-weight:900;letter-spacing:.6px;
          white-space:nowrap;pointer-events:none;
        }
        .net-node.weak .net-node-label{color:#ffd263;border-color:rgba(226,168,45,.45)}
        .net-node.critical .net-node-label{color:#ff6b6b;border-color:rgba(238,65,65,.62)}

        .net-danger-callout{
          position:absolute;z-index:13;
          left:48%;top:51%;
          width:190px;padding:11px 12px;
          border:1px solid rgba(242,68,68,.82);
          border-radius:8px;
          background:rgba(8,12,14,.95);
          box-shadow:0 12px 28px rgba(0,0,0,.56),0 0 22px rgba(235,53,53,.10);
        }
        .net-danger-callout:after{
          content:"";position:absolute;left:20px;bottom:-21px;
          width:2px;height:22px;background:#ed4444;transform:rotate(35deg);
          transform-origin:top;
        }
        .net-danger-callout strong{
          display:flex;align-items:center;gap:7px;color:#ff5555;
          font-size:11px;letter-spacing:1px;
        }
        .net-danger-callout p{
          margin:6px 0 0;color:#d4d9db;font-size:8px;line-height:1.55;
        }
        .net-danger-callout span{
          display:block;margin-top:6px;color:#ff7777;font-size:6.5px;font-weight:900;letter-spacing:1px;
        }

        .net-legend{
          position:absolute;right:13px;top:13px;z-index:12;
          width:143px;padding:9px 10px;
          border:1px solid rgba(102,211,235,.27);border-radius:7px;
          background:rgba(3,10,13,.82);backdrop-filter:blur(8px);
        }
        .net-legend-title{font-size:6.5px;color:#7e949c;letter-spacing:1px;margin-bottom:7px}
        .net-legend-row{
          display:flex;align-items:center;gap:7px;margin:5px 0;
          color:#bdc9cd;font-size:7px;
        }
        .net-legend-row i{width:10px;height:10px;border-radius:50%}
        .net-legend-row .g{background:#20d096;box-shadow:0 0 8px rgba(32,208,150,.6)}
        .net-legend-row .y{background:#e6b536;box-shadow:0 0 8px rgba(230,181,54,.5)}
        .net-legend-row .r{background:#ef4848;box-shadow:0 0 10px rgba(239,72,72,.65)}

        .net-map-tools{
          position:absolute;right:13px;bottom:14px;z-index:12;
          display:flex;gap:6px;
        }
        .net-map-tools button{
          border:1px solid rgba(63,199,230,.35);border-radius:6px;
          padding:7px 9px;background:rgba(3,11,14,.84);color:#83dfff;
          font-size:6.5px;font-weight:900;letter-spacing:.7px;cursor:pointer;
        }
        .net-map-tools button:hover{background:rgba(30,107,125,.25);border-color:#4fdcff}

        .net-details{
          padding:11px 12px 12px;
          display:flex;flex-direction:column;
        }
        .net-details-head{
          display:flex;align-items:center;justify-content:space-between;
          padding-bottom:9px;border-bottom:1px solid rgba(255,255,255,.07);
        }
        .net-details-head h2{margin:0;font-size:15px;letter-spacing:.8px}
        .net-details-head h2 span{color:#ff4f4f}
        .net-status-badge{
          padding:6px 8px;border:1px solid rgba(239,65,65,.62);border-radius:6px;
          color:#ff6767;background:rgba(239,65,65,.09);font-size:6.5px;font-weight:900;letter-spacing:1px;
        }
        .net-node-photo{
          height:88px;margin:9px 0 8px;border-radius:7px;
          border:1px solid rgba(255,255,255,.10);
          background-image:linear-gradient(rgba(4,8,10,.18),rgba(4,8,10,.32)),url('/mine-map.png');
          background-size:cover;background-position:center;
          box-shadow:inset 0 0 25px rgba(0,0,0,.45);
        }
        .net-detail-row{
          display:grid;grid-template-columns:18px 1fr auto;
          align-items:center;gap:7px;
          min-height:25px;border-bottom:1px solid rgba(255,255,255,.055);
          color:#9eafb5;font-size:7px;
        }
        .net-detail-row svg{color:#7d969f}
        .net-detail-row strong{color:#eef4f5;font-size:8px;font-weight:800}
        .net-detail-row strong.red{color:#ff5a5a}
        .net-progress{
          width:72px;height:6px;border-radius:5px;background:#15242a;overflow:hidden;
          border:1px solid rgba(255,255,255,.06);
        }
        .net-progress i{display:block;height:100%;border-radius:5px;background:#36d89e;transition:width .5s}
        .net-progress.danger i{background:#ef3f48}
        .net-locate{
          margin-top:9px;width:100%;padding:9px;
          border:1px solid rgba(241,66,66,.75);border-radius:7px;
          background:linear-gradient(135deg,rgba(207,49,49,.88),rgba(119,22,25,.86));
          color:#fff;font-size:7px;font-weight:900;letter-spacing:.8px;cursor:pointer;
          box-shadow:0 0 17px rgba(226,53,53,.15);
        }
        .net-locate:hover{filter:brightness(1.08)}

        .net-bottom-card{padding:11px 12px}
        .net-bottom-title{
          display:flex;align-items:center;justify-content:space-between;
          margin-bottom:9px;
        }
        .net-bottom-title strong{font-size:9px;letter-spacing:1.2px}
        .net-bottom-title span{font-size:6.5px;color:#6e828a;letter-spacing:.8px}
        .net-overview-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}
        .net-overview-box{
          min-width:0;padding:10px 9px;border-radius:7px;
          border:1px solid rgba(255,255,255,.07);
          background:linear-gradient(145deg,rgba(255,255,255,.04),rgba(255,255,255,.012));
        }
        .net-overview-box span{display:block;color:#71838a;font-size:6px;letter-spacing:.8px}
        .net-overview-box strong{display:block;margin-top:5px;font-size:17px}
        .net-overview-box small{display:block;margin-top:3px;color:#61737b;font-size:6px}
        .net-overview-box.green strong{color:#4fe1a6}
        .net-overview-box.yellow strong{color:#eec050}
        .net-overview-box.red strong{color:#ff5555}

        .net-env-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
        .net-env-box{
          padding:9px;border-radius:7px;border:1px solid rgba(67,186,220,.13);
          background:linear-gradient(145deg,rgba(18,58,69,.27),rgba(7,17,21,.5));
        }
        .net-env-box span{display:block;color:#789099;font-size:6px;letter-spacing:.8px}
        .net-env-box strong{display:block;margin-top:5px;font-size:13px}
        .net-env-box.gas strong{color:#4fe1a6}
        .net-env-box.temp strong{color:#55cfff}
        .net-env-box.humidity strong{color:#55bfff}
        .net-env-box.collapse strong{color:#e8b13d}

        .net-bottom-wide{grid-column:1;display:grid;grid-template-columns:1.15fr .85fr;gap:10px}
        .net-bottom-side{grid-column:2;grid-row:2;display:none}

        @keyframes netDanger{
          50%{
            box-shadow:0 0 0 11px rgba(239,70,70,.035),0 0 38px rgba(239,70,70,.98);
          }
        }
        @keyframes routeFlow{
          to{stroke-dashoffset:-36}
        }
        @keyframes netOnlinePulse{50%{opacity:.45}}

        @media(max-width:1050px){
          .network-page{height:auto;min-height:100vh;overflow:auto}
          .net-head{height:auto;min-height:58px}
          .net-quote{display:none}
          .net-layout{height:auto;grid-template-columns:1fr;grid-template-rows:560px auto auto}
          .net-bottom-wide{grid-column:1;grid-row:auto}
          .net-details{min-height:390px}
        }

        @media(max-width:700px){
          .network-page{padding:10px}
          .net-title-icon{display:none}
          .net-head h1{font-size:18px}
          .net-layout{grid-template-rows:480px auto auto}
          .net-overview-grid{grid-template-columns:1fr 1fr}
          .net-map-tools{display:none}
          .net-danger-callout{left:37%;top:54%;width:155px}
        }
      `}</style>

      <div className="net-head">
        <div className="net-title-wrap">
          <div className="net-title-icon"><Network size={25} /></div>
          <div>
            <div className="net-kicker">MINENOVA • UNDERGROUND CONNECTIVITY</div>
            <h1>UNDERGROUND NETWORK</h1>
            <p>Live node status and mission connectivity</p>
          </div>
        </div>

        <div className="net-quote">“Every connection brings<br />someone closer to safety.”</div>

        <div className="net-live"><i /> NETWORK ONLINE</div>
      </div>

      <div className="net-layout">
        <div className="net-card net-map">
          <div className="net-map-label">
            <strong>MINE MAP — NODE NETWORK</strong>
            <span>LIVE UNDERGROUND ROUTES • SIMULATION</span>
          </div>

          <div className="net-gateway"><i /> SURFACE GATEWAY • ONLINE</div>

          <svg className="net-routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {routes.map((path, i) => (
              <g key={i}>
                <path className={`route-base ${i === 5 ? "route-danger" : i === 1 ? "route-warning" : ""}`} d={path} vectorEffect="non-scaling-stroke" />
                <path className={`route-core ${i === 5 ? "route-danger" : i === 1 ? "route-warning" : ""}`} d={path} vectorEffect="non-scaling-stroke" />
              </g>
            ))}
          </svg>

          {nodes.map(node => (
            <div
              key={node.id}
              className={`net-node ${node.status.toLowerCase()} ${selected?.id === node.id ? "selected" : ""}`}
              style={{ left:`${node.left}%`, top:`${node.top}%` }}
              onClick={() => setSelected(node)}
              title={`Open ${node.id} details`}
            >
              <div className="net-node-dot" />
              <div className="net-node-label">{node.id}</div>
            </div>
          ))}

          <div className="net-danger-callout">
            <strong><CircleAlert size={15} /> DANGER</strong>
            <p>Methane level high<br />Signal unstable<br />Inspect immediately</p>
            <span>NODE 14 • CRITICAL</span>
          </div>

          <div className="net-legend">
            <div className="net-legend-title">NETWORK LEGEND</div>
            <div className="net-legend-row"><i className="g" />Normal Node</div>
            <div className="net-legend-row"><i className="y" />Weak Signal</div>
            <div className="net-legend-row"><i className="r" />Danger / Critical</div>
          </div>

          <div className="net-map-tools">
            <button>3D VIEW</button>
            <button>RESET VIEW</button>
          </div>
        </div>

        <aside className="net-card net-details">
          <div className="net-details-head">
            <h2><span>{selectedNode.id}</span> — DETAILS</h2>
            <div className="net-status-badge">{selectedNode.status}</div>
          </div>

          <div className="net-node-photo" style={{ backgroundImage:`linear-gradient(rgba(4,8,10,.18),rgba(4,8,10,.34)),url('${nodeImage}')` }} />

          <div className="net-detail-row">
            <Activity size={14} />
            <span>Status</span>
            <strong className={selectedNode.status === "CRITICAL" ? "red" : ""}>
              {selectedNode.status === "CRITICAL" ? "High Risk" : selectedNode.status === "WEAK" ? "Weak Signal" : "Normal"}
            </strong>
          </div>

          <div className="net-detail-row">
            <Signal size={14} />
            <span>Signal Strength</span>
            <div style={{display:"flex",alignItems:"center",gap:7}}>
              <div className={`net-progress ${selectedNode.status === "CRITICAL" ? "danger" : ""}`}><i style={{width:`${selectedNode.signal}%`}} /></div>
              <strong>{selectedNode.signal}%</strong>
            </div>
          </div>

          <div className="net-detail-row">
            <Battery size={14} />
            <span>Battery Level</span>
            <div style={{display:"flex",alignItems:"center",gap:7}}>
              <div className="net-progress"><i style={{width:`${selectedNode.battery}%`}} /></div>
              <strong>{selectedNode.battery}%</strong>
            </div>
          </div>

          <div className="net-detail-row">
            <MapPin size={14} />
            <span>Depth</span>
            <strong>{selectedNode.depth} m</strong>
          </div>

          <div className="net-detail-row">
            <Thermometer size={14} />
            <span>Temperature</span>
            <strong>{selectedNode.temperature}°C</strong>
          </div>

          <div className="net-detail-row">
            <CircleAlert size={14} />
            <span>Methane (CH₄)</span>
            <strong className={selectedNode.status === "CRITICAL" ? "red" : ""}>
              {selectedNode.status === "CRITICAL" ? "High" : "Normal"}
            </strong>
          </div>

          <div className="net-detail-row">
            <Activity size={14} />
            <span>Last Contact</span>
            <strong>{selectedNode.status === "CRITICAL" ? "3 min ago" : "Just now"}</strong>
          </div>

          <div className="net-detail-row">
            <CircleAlert size={14} />
            <span>Possible Cause</span>
            <strong>{selectedNode.status === "CRITICAL" ? "Gas Leak" : selectedNode.status === "WEAK" ? "Relay Distance" : "—"}</strong>
          </div>

          <div className="net-detail-row">
            <RouteIcon size={14} />
            <span>Recommended Action</span>
            <strong>{selectedNode.status === "CRITICAL" ? "Inspect node" : "Continue monitoring"}</strong>
          </div>

          <button className="net-locate" onClick={() => setSelected(nodes.find(n => n.id === "N14"))}>
            <Navigation size={13} /> LOCATE NODE ON MAP
          </button>
        </aside>

        <div className="net-bottom-wide">
          <div className="net-card net-bottom-card">
            <div className="net-bottom-title">
              <strong>NETWORK OVERVIEW</strong>
              <span>LIVE SIMULATION</span>
            </div>
            <div className="net-overview-grid">
              <div className="net-overview-box"><span>TOTAL NODES</span><strong>{nodes.length}</strong><small>DEPLOYED</small></div>
              <div className="net-overview-box green"><span>ACTIVE NODES</span><strong>{counts.normal}</strong><small>CONNECTED</small></div>
              <div className="net-overview-box yellow"><span>WEAK NODES</span><strong>{counts.weak}</strong><small>CHECK SIGNAL</small></div>
              <div className="net-overview-box red"><span>CRITICAL NODES</span><strong>{counts.critical}</strong><small>IMMEDIATE ACTION</small></div>
            </div>
          </div>

          <div className="net-card net-bottom-card">
            <div className="net-bottom-title">
              <strong>ENVIRONMENT OVERVIEW</strong>
              <span>UNDERGROUND</span>
            </div>
            <div className="net-env-grid">
              <div className="net-env-box gas"><span>GAS LEVEL</span><strong>{selectedNode.status === "CRITICAL" ? "HIGH" : "NORMAL"}</strong></div>
              <div className="net-env-box temp"><span>TEMPERATURE</span><strong>{selectedNode.temperature}°C</strong></div>
              <div className="net-env-box humidity"><span>HUMIDITY</span><strong>{68 + ((tick + 3) % 4)}%</strong></div>
              <div className="net-env-box collapse"><span>COLLAPSE RISK</span><strong>{selectedNode.status === "CRITICAL" ? "HIGH" : "MODERATE"}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulePage({ title, text, icon: Icon }) {
  return <section className="module-page"><div className="module-card"><div className="module-icon"><Icon size={30}/></div><span className="eyebrow">MINENOVA MODULE</span><h1>{title}</h1><p>{text}</p><div className="module-status"><Wifi size={16}/> MODULE ONLINE • ROVER-01</div></div></section>;
}

export default App;
