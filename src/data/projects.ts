export interface Project {
  id: string;
  title: string;
  division: "neurotech" | "stem" | "iot";
  category: string;
  categoryTag:
    | "Wireless IoT"
    | "Smart Agriculture"
    | "Water Management"
    | "Environmental Monitoring"
    | "Wearable IoT"
    | "Smart Infrastructure"
    | "EEG Signal Processing"
    | "Neuroprosthetics & Assistive Tech"
    | "Brain-Computer Interface"
    | "STEM Lab Setup"
    | "Robotics & Hardware"
    | "Teacher Training";
  status: "Concept" | "In Progress" | "Prototype" | "Completed" | "Educational Blueprint" | "Demonstration";
  description: string;
  overview: string;
  problemStatement?: string;
  objectives?: string[];
  hardwareAndSensors?: string[];
  communicationArchitecture?: string;
  softwareAndDataProcessing?: string[];
  implementationWorkflow?: string[];
  testingAndResults?: string;
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  techStack: string[];
  keyHighlights: string[];
  disclaimer?: string;
  isSoftwareOnly?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "long-range-environmental-sensing",
    title: "Long Range Wireless and Environmental Sensing",
    division: "iot",
    category: "Wireless IoT & Environmental Monitoring",
    categoryTag: "Wireless IoT",
    status: "Prototype",
    description: "Long-range low-power outdoor environmental sensing node architecture for microclimate and atmospheric telemetry.",
    overview: "A long-range environmental sensing node designed to capture ambient microclimate data (temperature, humidity, atmospheric pressure, and air quality) and wirelessly transmit telemetry across distant field locations to a central collector gateway.",
    problemStatement: "Traditional short-range wireless sensor networks fail in rural agricultural or expansive outdoor sites due to severe range limits and high energy drain, requiring frequent battery replacement.",
    objectives: [
      "Deploy sub-GHz low-power radio communication for multi-kilometer telemetry link.",
      "Achieve multi-month autonomous field operation using solar-assisted power management.",
      "Provide structured digital packet payloads for microclimate and environmental logging."
    ],
    hardwareAndSensors: [
      "Sub-GHz wireless RF transceiver module & ultra-low-power MCU",
      "Digital ambient temperature & relative humidity sensor (SHT series)",
      "Barometric pressure sensor (BMP series)",
      "Lightweight particulate / ambient gas sensing module",
      "Li-Po battery with solar charge controller"
    ],
    communicationArchitecture: "Sub-GHz point-to-point / star topology wireless link transmitting binary sensor payload frames to an edge collector gateway.",
    softwareAndDataProcessing: [
      "Embedded C++ firmware with hardware deep-sleep cycle management",
      "Gateway Python telemetry receiver and packet parser",
      "CSV/JSON time-series data logger"
    ],
    implementationWorkflow: [
      "Breadboard integration and sensor I2C/SPI bus calibration",
      "Firmware transmission interval and sleep mode power profiling",
      "Outdoor line-of-sight range verification test"
    ],
    testingAndResults: "Bench testing completed; line-of-sight signal telemetry packets successfully received up to field boundary limits. Continuous year-round outdoor deployment testing details to be added.",
    image: "/images/projects/long-range-sensing.webp",
    githubUrl: "https://github.com/alistron",
    demoUrl: "",
    techStack: ["Sub-GHz RF", "Embedded C++", "SHT31", "BMP280", "Python", "Solar PMIC"],
    keyHighlights: [
      "Sub-GHz long-range wireless node architecture",
      "Ultra-low-power deep sleep power budget",
      "Multi-sensor ambient microclimate telemetry"
    ]
  },
  {
    id: "smart-irrigation-system",
    title: "Smart Irrigation System",
    division: "iot",
    category: "Smart Agriculture",
    categoryTag: "Smart Agriculture",
    status: "Prototype",
    description: "Automated soil-moisture responsive irrigation controller using closed-loop sensor feedback to optimize agricultural water usage.",
    overview: "An automated smart agricultural controller that monitors real-time soil moisture and environmental metrics to dynamically actuate water solenoid valves, eliminating over-irrigation and crop stress.",
    problemStatement: "Fixed-timer irrigation systems consume excess water regardless of rainfall or soil saturation levels, leading to water wastage and root rot in community gardens and educational farms.",
    objectives: [
      "Automate valve actuation based on calibrated soil volumetric water content thresholds.",
      "Incorporate humidity and temperature safety locks to prevent watering during rain events.",
      "Provide visual status LED feedback and manual override controls."
    ],
    hardwareAndSensors: [
      "Capacitive soil moisture sensor (corrosion-resistant probe)",
      "Ambient temperature and relative humidity sensor (DHT22/SHT30)",
      "12V DC solenoid water valve with optocoupled relay driver module",
      "Low-power microcontroller development board"
    ],
    communicationArchitecture: "Local closed-loop microcontroller logic with optional serial telemetry / Wi-Fi dashboard output.",
    softwareAndDataProcessing: [
      "Hysteresis threshold decision algorithm in C++",
      "Capacitive sensor ADC smoothing and calibration mapping",
      "Relay safety timeout logic"
    ],
    implementationWorkflow: [
      "Soil moisture sensor ADC calibration across dry, damp, and saturated soil samples",
      "Relay isolation and solenoid valve bench setup",
      "Closed-loop control loop programming and field container trial"
    ],
    testingAndResults: "Bench-tested with potted soil containers; system reliably opened the solenoid valve when soil moisture dropped below 30% threshold and shut off upon reaching 65% moisture saturation.",
    image: "/images/projects/smart-irrigation.webp",
    githubUrl: "https://github.com/alistron",
    demoUrl: "",
    techStack: ["Microcontroller", "Capacitive Moisture Sensor", "Solenoid Valve", "Embedded C++", "Relay Driver"],
    keyHighlights: [
      "Corrosion-resistant capacitive moisture sensing",
      "Dynamic hysteresis valve actuation logic",
      "Reduces garden water consumption"
    ]
  },
  {
    id: "smart-water-leakage-prediction",
    title: "Smart Water Distribution and Leakage Prediction System",
    division: "iot",
    category: "Water Management & IoT",
    categoryTag: "Water Management",
    status: "Concept",
    description: "Pipe network telemetry and differential flow analysis concept for detecting pressure drops and hydraulic imbalances.",
    overview: "A smart water management concept for campus and municipal distribution pipelines, comparing inline pulse flow meters and pressure transducers across network branches to detect leakage anomalies.",
    problemStatement: "Unmonitored underground distribution networks suffer significant unaccounted water loss from subtle joint leaks or pipe ruptures before visual surface detection occurs.",
    objectives: [
      "Monitor flow rate differential across upstream and downstream node pairs.",
      "Analyze pressure signatures to pinpoint hydraulic drop locations.",
      "Trigger rapid alerts for facilities and maintenance operators."
    ],
    hardwareAndSensors: [
      "Pulse-output inline water flow meters",
      "Industrial piezoresistive pressure transducers",
      "Cellular / LoRaWAN wireless telemetry node"
    ],
    communicationArchitecture: "Wireless network telemetry node pushing flow rates to a cloud time-series processing server.",
    softwareAndDataProcessing: [
      "Time-series flow balance differential algorithms",
      "Statistical threshold anomaly detector",
      "Central monitoring dashboard UI concept"
    ],
    implementationWorkflow: [
      "Hydraulic network flow mathematical modeling",
      "Sensor selection and signal conditioning design",
      "Pilot test rig construction (planned)"
    ],
    testingAndResults: "System architecture and flow differential logic modeled in simulation. Physical test rig validation details to be added.",
    image: "/images/projects/water-leakage.webp",
    githubUrl: "https://github.com/alistron",
    demoUrl: "",
    techStack: ["Flow Sensors", "Pressure Transducers", "LoRaWAN", "Time-Series Analytics", "Python"],
    keyHighlights: [
      "Differential flow meter telemetry logic",
      "Pressure anomaly detection framing",
      "Targeted for municipal & campus pipe networks"
    ]
  },
  {
    id: "smart-asthma-guardian",
    title: "Smart Asthma Guardian",
    division: "iot",
    category: "Wearable IoT & Environmental Monitoring",
    categoryTag: "Wearable IoT",
    status: "In Progress",
    description: "Compact environmental awareness wearable monitoring particulate matter (PM2.5), VOCs, and humidity levels.",
    overview: "A compact personal environmental tracking prototype designed to provide real-time alerts regarding airborne particulate matter (PM2.5/PM10), volatile organic compounds, and humidity triggers in the user's immediate surroundings.",
    problemStatement: "Individuals with environmental sensitivities lack real-time localized warnings when entering spaces with high particulate concentrations or harsh volatile chemical irritants.",
    objectives: [
      "Continuously measure PM2.5, VOCs, temperature, and relative humidity in a wearable form-factor.",
      "Provide instant visual LED ring / haptic vibration feedback upon exceeding safety thresholds.",
      "Log environmental exposure telemetry to a companion mobile smartphone app."
    ],
    hardwareAndSensors: [
      "Miniature optical dust / PM2.5 particulate sensor",
      "Metal-oxide VOC / air quality gas sensor",
      "BLE-enabled low-power microcontroller",
      "Haptic vibration motor & RGB status LED indicator ring",
      "Rechargeable LiPo battery"
    ],
    communicationArchitecture: "Bluetooth Low Energy (BLE 5.0) GATT service streaming environmental telemetry frames to a mobile smartphone application.",
    softwareAndDataProcessing: [
      "Moving average signal filter for particulate readings",
      "BLE custom service firmware stack",
      "Mobile telemetry visualization client app"
    ],
    implementationWorkflow: [
      "Sensor integration and response time evaluation in controlled aerosol test chamber",
      "Wearable 3D-printed enclosure prototyping",
      "BLE smartphone data sync development"
    ],
    testingAndResults: "Enclosure and sensor response verified against indoor particulate variations. Long-term user trial data details to be added.",
    image: "/images/projects/asthma-guardian.webp",
    githubUrl: "https://github.com/alistron",
    demoUrl: "",
    techStack: ["BLE 5.0", "PM2.5 Sensor", "VOC Sensor", "Embedded C++", "Haptic Motor", "Mobile App"],
    keyHighlights: [
      "Real-time localized airborne irritant detection",
      "Instant haptic & RGB visual safety feedback",
      "BLE smartphone exposure telemetry logging"
    ],
    disclaimer: "Experimental wellness & environmental awareness prototype. Not a clinically validated medical device. Not intended for diagnosis, treatment, or medical monitoring."
  },
  {
    id: "urban-flood-intelligence-engine",
    title: "Urban Flood Intelligence Engine",
    division: "iot",
    category: "Smart Infrastructure & Environmental Monitoring",
    categoryTag: "Smart Infrastructure",
    status: "In Progress",
    description: "Geospatial flood risk engine combining elevation models with connected ultrasonic water level telemetry.",
    overview: "A hybrid GIS visualization and IoT telemetry ingestion platform designed to model urban surface water runoff and ingest live water level measurements from ultrasonic sensors mounted at critical drainage culverts.",
    problemStatement: "Intense localized urban rainfall causes rapid flash flooding in low-lying city thoroughfares, overwhelming traditional regional weather forecasts.",
    objectives: [
      "Ingest digital elevation models (DEM) and urban storm drain vector GIS layers.",
      "Ingest real-time water level data from connected ultrasonic IoT field nodes.",
      "Render dynamic inundation heatmaps for urban planning and emergency awareness."
    ],
    hardwareAndSensors: [
      "Ultrasonic water level distance sensor node",
      "Solar-powered cellular IoT telemetry gateway",
      "IP67 weather-proof culvert mounting enclosure",
      "Note: Platform operates as a hybrid software/GIS platform capable of ingesting live IoT sensor feeds or synthetic rainfall model data."
    ],
    communicationArchitecture: "MQTT / HTTP REST API ingesting sensor payload JSON packets from field ultrasonic nodes into a GIS cloud server.",
    softwareAndDataProcessing: [
      "Python GIS processing pipeline (GeoPandas, Rasterio)",
      "Hydrodynamic digital elevation flow routing algorithm",
      "Real-time WebGL interactive map dashboard"
    ],
    implementationWorkflow: [
      "Municipal DEM elevation layer ingestion and slope flow routing calculation",
      "MQTT telemetry ingestion server deployment",
      "Ultrasonic water level node bench testing"
    ],
    testingAndResults: "Hydrodynamic elevation flow model validated against historical municipal rain data. Field node installation details to be added.",
    image: "/images/projects/urban-flood.webp",
    githubUrl: "https://github.com/alistron",
    demoUrl: "",
    techStack: ["Python GIS", "GeoPandas", "Ultrasonic Node", "MQTT", "WebGL Map", "Docker"],
    keyHighlights: [
      "Hybrid GIS spatial modeling & IoT telemetry ingestion",
      "Connected ultrasonic culvert water level monitoring",
      "Interactive urban inundation risk heatmap"
    ],
    isSoftwareOnly: false
  }
];

