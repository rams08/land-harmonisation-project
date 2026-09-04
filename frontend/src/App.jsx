import {
  Activity,
  AlertTriangle,
  Bell,
  CheckCircle2,
  Database,
  FileText,
  GitMerge,
  Layers,
  LayoutDashboard,
  MapPinned,
  Search,
  Settings,
  ShieldCheck,
  Upload,
  Users,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./App.css";


const parcels = [
  {
    id: "PAR-10482",
    owner: "Rajesh Kumar",
    area: "1,240 m²",
    status: "Harmonized",
    confidence: 97,
    position: [
      [19.0820, 73.0150],
      [19.0840, 73.0170],
      [19.0825, 73.0190],
      [19.0805, 73.0170],
    ],
  },
  {
    id: "PAR-10491",
    owner: "Sunita Sharma",
    area: "890 m²",
    status: "Review",
    confidence: 72,
    position: [
      [19.0800, 73.0195],
      [19.0825, 73.0215],
      [19.0800, 73.0235],
      [19.0785, 73.0210],
    ],
  },
  {
    id: "PAR-10503",
    owner: "Amit Patil",
    area: "1,680 m²",
    status: "Conflict",
    confidence: 54,
    position: [
      [19.0845, 73.0195],
      [19.0870, 73.0210],
      [19.0855, 73.0240],
      [19.0830, 73.0220],
    ],
  },
  {
    id: "PAR-10518",
    owner: "Meera Deshmukh",
    area: "2,140 m²",
    status: "Harmonized",
    confidence: 94,
    position: [
      [19.0765, 73.0160],
      [19.0790, 73.0180],
      [19.0775, 73.0200],
      [19.0750, 73.0180],
    ],
  },
];


function StatusBadge({ status }) {
  const cls = status.toLowerCase();

  return (
    <span className={`status-badge ${cls}`}>
      <span className="status-dot-small" />
      {status}
    </span>
  );
}


function StatCard({ icon: Icon, title, value, subtitle, type }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${type}`}>
        <Icon size={21} />
      </div>

      <div>
        <p>{title}</p>
        <h3>{value}</h3>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">
            <MapPinned size={25} />
          </div>

          <div>
            <h1>BHUMI-FUSE</h1>
            <span>LAND INTELLIGENCE</span>
          </div>
        </div>


        <div className="nav-heading">
          OPERATIONS
        </div>

        <nav>

          <div className="nav-item active">
            <LayoutDashboard size={18} />
            Dashboard
          </div>

          <div className="nav-item">
            <MapPinned size={18} />
            Parcel Intelligence
          </div>

          <div className="nav-item">
            <Database size={18} />
            Data Sources
          </div>

          <div className="nav-item">
            <GitMerge size={18} />
            Harmonization
          </div>

          <div className="nav-item">
            <AlertTriangle size={18} />
            Conflict Center
            <b>12</b>
          </div>

          <div className="nav-item">
            <ShieldCheck size={18} />
            Validation
          </div>

        </nav>


        <div className="nav-heading">
          ANALYTICS
        </div>

        <nav>

          <div className="nav-item">
            <Activity size={18} />
            Change Detection
          </div>

          <div className="nav-item">
            <FileText size={18} />
            Reports
          </div>

          <div className="nav-item">
            <Users size={18} />
            Review Queue
          </div>

        </nav>


        <div className="sidebar-bottom">

          <div className="system-card">

            <span className="online-dot" />

            <div>
              <strong>System Operational</strong>
              <small>All services online</small>
            </div>

          </div>

          <div className="nav-item">
            <Settings size={18} />
            Settings
          </div>

        </div>

      </aside>


      {/* MAIN */}

      <main className="main">

        {/* HEADER */}

        <header className="header">

          <div>
            <div className="breadcrumb">
              Workspace / Overview
            </div>

            <h2>Land Record Intelligence</h2>
          </div>


          <div className="header-actions">

            <div className="search">

              <Search size={17} />

              <input
                placeholder="Search parcel or survey number..."
              />

              <kbd>CTRL K</kbd>

            </div>


            <button className="notification">
              <Bell size={18} />
              <span />
            </button>


            <div className="user">

              <div className="avatar">
                AD
              </div>

              <div>
                <strong>Administrator</strong>
                <small>Land Records Officer</small>
              </div>

            </div>

          </div>

        </header>


        {/* CONTENT */}

        <section className="content">

          <div className="hero">

            <div>

              <div className="eyebrow">
                MULTI-SOURCE GEOSPATIAL PLATFORM
              </div>

              <h1>
                Unified Land Record
                <span> Intelligence</span>
              </h1>

              <p>
                Automated integration, spatial harmonization and
                intelligent reconciliation of multi-source land records.
              </p>

            </div>


            <button className="primary-button">
              <Upload size={17} />
              Import Dataset
            </button>

          </div>


          {/* STATISTICS */}

          <div className="stats">

            <StatCard
              icon={MapPinned}
              title="TOTAL PARCELS"
              value="12,482"
              subtitle="+8.4% this month"
              type="blue"
            />

            <StatCard
              icon={CheckCircle2}
              title="HARMONIZED"
              value="10,931"
              subtitle="87.6% of all records"
              type="green"
            />

            <StatCard
              icon={Users}
              title="REVIEW REQUIRED"
              value="1,127"
              subtitle="9.0% awaiting validation"
              type="orange"
            />

            <StatCard
              icon={AlertTriangle}
              title="CONFLICTS"
              value="424"
              subtitle="3.4% detected conflicts"
              type="red"
            />

          </div>


          {/* MAP + PIPELINE */}

          <div className="main-grid">


            {/* GIS MAP */}

            <div className="panel map-panel">

              <div className="panel-header">

                <div>
                  <h3>Geospatial Parcel Intelligence</h3>
                  <p>
                    Harmonized multi-source cadastral layer
                  </p>
                </div>

                <div className="map-actions">

                  <button className="map-filter active">
                    <Layers size={15} />
                    Harmonized
                  </button>

                  <button className="map-filter">
                    Cadastral
                  </button>

                  <button className="map-filter">
                    Municipal
                  </button>

                </div>

              </div>


              <div className="map-wrapper">

                <MapContainer
                  center={[19.0815, 73.019]}
                  zoom={15}
                  scrollWheelZoom={true}
                  className="leaflet-map"
                >

                  <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />


                  {parcels.map((parcel) => {

                    const color =
                      parcel.status === "Conflict"
                        ? "#ef5350"
                        : parcel.status === "Review"
                        ? "#f0a33b"
                        : "#2196f3";

                    return (

                      <Polygon
                        key={parcel.id}
                        positions={parcel.position}
                        pathOptions={{
                          color,
                          fillColor: color,
                          fillOpacity: 0.28,
                          weight: 2,
                        }}
                      >

                        <Popup>

                          <div className="popup">

                            <strong>{parcel.id}</strong>

                            <p>
                              Owner: {parcel.owner}
                            </p>

                            <p>
                              Area: {parcel.area}
                            </p>

                            <p>
                              Confidence: {parcel.confidence}%
                            </p>

                            <StatusBadge status={parcel.status} />

                          </div>

                        </Popup>

                      </Polygon>

                    );

                  })}

                </MapContainer>


                <div className="map-legend">

                  <div>
                    <i className="blue-dot" />
                    Harmonized
                  </div>

                  <div>
                    <i className="orange-dot" />
                    Review
                  </div>

                  <div>
                    <i className="red-dot" />
                    Conflict
                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="right-column">


              {/* PIPELINE */}

              <div className="panel">

                <div className="panel-header">

                  <div>
                    <h3>Harmonization Pipeline</h3>
                    <p>Real-time processing status</p>
                  </div>

                  <span className="live">
                    ● LIVE
                  </span>

                </div>


                <div className="pipeline">

                  <PipelineStep
                    icon={Database}
                    title="Data Ingestion"
                    subtitle="5 sources connected"
                    status="complete"
                  />

                  <PipelineStep
                    icon={MapPinned}
                    title="Spatial Normalization"
                    subtitle="CRS harmonization complete"
                    status="complete"
                  />

                  <PipelineStep
                    icon={GitMerge}
                    title="Entity Matching"
                    subtitle="92.4% average confidence"
                    status="active"
                  />

                  <PipelineStep
                    icon={ShieldCheck}
                    title="Validation & Scoring"
                    subtitle="1,127 records awaiting review"
                    status="pending"
                  />

                </div>

              </div>


              {/* CONFLICTS */}

              <div className="panel conflict-panel">

                <div className="panel-header">

                  <div>
                    <h3>Priority Conflicts</h3>
                    <p>Records requiring attention</p>
                  </div>

                  <button className="view-all">
                    View all
                  </button>

                </div>


                <Conflict
                  id="PAR-10503"
                  issue="Area mismatch · 18.7%"
                  score="54%"
                  severity="high"
                />

                <Conflict
                  id="PAR-10821"
                  issue="Boundary overlap detected"
                  score="68%"
                  severity="medium"
                />

                <Conflict
                  id="PAR-10914"
                  issue="Owner attribute conflict"
                  score="71%"
                  severity="medium"
                />

              </div>

            </div>

          </div>


          {/* LOWER SECTION */}

          <div className="lower-grid">


            {/* DATA SOURCES */}

            <div className="panel">

              <div className="panel-header">

                <div>
                  <h3>Connected Data Sources</h3>
                  <p>Multi-source ingestion monitoring</p>
                </div>

                <span className="source-count">
                  5 SOURCES
                </span>

              </div>


              <Source
                icon={MapPinned}
                name="Cadastral Records"
                info="4,281 features · Updated 8 min ago"
              />

              <Source
                icon={Database}
                name="Municipal GIS"
                info="3,912 features · Updated 12 min ago"
              />

              <Source
                icon={FileText}
                name="Revenue Records"
                info="4,289 records · Updated 21 min ago"
              />

            </div>


            {/* QUALITY */}

            <div className="panel">

              <div className="panel-header">

                <div>
                  <h3>Data Quality Score</h3>
                  <p>Overall harmonization quality</p>
                </div>

              </div>


              <div className="quality">

                <div className="score">
                  <strong>92.4</strong>
                  <span>%</span>
                </div>


                <div className="quality-bars">

                  <Quality
                    name="Spatial consistency"
                    value="94.8%"
                    width="94.8%"
                  />

                  <Quality
                    name="Attribute consistency"
                    value="91.2%"
                    width="91.2%"
                  />

                  <Quality
                    name="Topology validity"
                    value="96.1%"
                    width="96.1%"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}


/* COMPONENTS */


function PipelineStep({
  icon: Icon,
  title,
  subtitle,
  status,
}) {

  return (

    <div className={`pipeline-step ${status}`}>

      <div className="pipeline-icon">
        <Icon size={17} />
      </div>

      <div>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>

      {status === "complete" && (
        <CheckCircle2 size={17} />
      )}

      {status === "active" && (
        <Activity size={17} />
      )}

    </div>

  );
}


function Conflict({
  id,
  issue,
  score,
  severity,
}) {

  return (

    <div className="conflict">

      <div className={`conflict-icon ${severity}`}>
        <AlertTriangle size={16} />
      </div>

      <div className="conflict-info">
        <strong>{id}</strong>
        <span>{issue}</span>
      </div>

      <b className={`confidence ${severity}`}>
        {score}
      </b>

    </div>

  );
}


function Source({
  icon: Icon,
  name,
  info,
}) {

  return (

    <div className="source">

      <div className="source-icon">
        <Icon size={17} />
      </div>

      <div>
        <strong>{name}</strong>
        <span>{info}</span>
      </div>

      <b>
        Connected
      </b>

    </div>

  );
}


function Quality({
  name,
  value,
  width,
}) {

  return (

    <div className="quality-item">

      <div>
        <span>{name}</span>
        <strong>{value}</strong>
      </div>

      <div className="progress">
        <div style={{ width }} />
      </div>

    </div>

  );
}


export default App;