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
    image: "/images/projects/long-range-sensing.jpg",
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
    image: "/images/projects/smart-irrigation.jpg",
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
    image: "/images/projects/water-leakage.jpg",
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
    image: "/images/projects/asthma-guardian.jpg",
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
    image: "/images/projects/urban-flood.jpg",
    githubUrl: "https://github.com/alistron",
    demoUrl: "",
    techStack: ["Python GIS", "GeoPandas", "Ultrasonic Node", "MQTT", "WebGL Map", "Docker"],
    keyHighlights: [
      "Hybrid GIS spatial modeling & IoT telemetry ingestion",
      "Connected ultrasonic culvert water level monitoring",
      "Interactive urban inundation risk heatmap"
    ],
    isSoftwareOnly: false
  },
  {
    id: "eeg-signal-pipeline",
    title: "Real-Time Biosignal Analysis Pipeline",
    division: "neurotech",
    category: "EEG Signal Processing",
    categoryTag: "EEG Signal Processing",
    status: "Prototype",
    description: "An open-source Python & C++ signal processing pipeline for real-time filtering, bandpower calculation, and artifact removal from multi-channel EEG streams.",
    overview: "An exploratory software processing framework built to ingest, filter, and extract spectral features from multi-channel electroencephalography signals in real time.",
    problemStatement: "Raw EEG signal streams suffer from heavy muscle activity artifacts and mains line noise, necessitating low-latency filtering prior to feature extraction.",
    objectives: [
      "Provide real-time digital filtering with <15ms processing latency.",
      "Extract relative alpha, beta, and theta bandpower features.",
      "Isolate ocular and electromyographic noise artifacts."
    ],
    hardwareAndSensors: [
      "Multi-channel bio-potential ADC frontend (ADS1299 series)",
      "Dry / gel EEG electrode array"
    ],
    communicationArchitecture: "LSL (Lab Streaming Layer) / WebSockets binary data stream.",
    softwareAndDataProcessing: [
      "IIR Notch & Butterworth bandpass filters",
      "Fast Fourier Transform (FFT) bandpower calculator",
      "Python MNE biosignal library"
    ],
    implementationWorkflow: [
      "Synthetic EEG signal generator validation",
      "Filter latency benchmarking",
      "Live stream GUI integration"
    ],
    testingAndResults: "Achieved sub-15ms processing latency across 8-channel 250Hz sample streams in laboratory simulation.",
    techStack: ["Python", "C++", "DSP Filters", "MNE-Python", "WebSockets"],
    keyHighlights: [
      "Low-latency notch and bandpass filtering (<15ms)",
      "Automated blink and muscle artifact separation algorithm",
      "Modular architecture for exploratory EEG hardware"
    ],
    disclaimer: "Exploratory research prototype. Not intended or tested for medical diagnosis or clinical monitoring."
  },
  {
    id: "emg-prosthetic-control",
    title: "Multi-Channel EMG Intent Classifier",
    division: "neurotech",
    category: "Neuroprosthetics & Assistive Tech",
    categoryTag: "Neuroprosthetics & Assistive Tech",
    status: "Prototype",
    description: "A machine learning interface that decodes surface electromyography (sEMG) signals into discrete hand gesture commands for robotic prosthetics.",
    overview: "A gesture classification pipeline capturing surface muscle potentials from forearm muscles to control multi-articulated prosthetic actuators.",
    problemStatement: "Traditional threshold-based muscle switches offer limited degrees of freedom for upper-limb amputees.",
    objectives: [
      "Classify 5 distinct hand gesture intents from 4 sEMG sensor channels.",
      "Run inference on low-power embedded microcontrollers.",
      "Provide real-time visual telemetry."
    ],
    hardwareAndSensors: [
      "4-channel differential sEMG analog sensors",
      "STM32 / ARM Cortex-M microcontrollers",
      "3D-printed robotic prosthetic hand with servo actuators"
    ],
    communicationArchitecture: "SPI/UART serial bus between sensor ADC and motor controller.",
    softwareAndDataProcessing: [
      "Time-domain feature extraction (MAV, RMS, Waveform Length)",
      "Lightweight Neural Network classifier in PyTorch/C++",
      "PWM servo actuation driver"
    ],
    implementationWorkflow: [
      "sEMG dataset collection across 10 trial subjects",
      "Model training & quantizing for MCU",
      "Bench testing with prosthetic hand"
    ],
    testingAndResults: "Achieved 91.5% offline gesture classification accuracy across 5 grip patterns on laboratory test bench.",
    techStack: ["PyTorch", "sEMG Sensors", "Embedded C++", "STM32 Microcontrollers"],
    keyHighlights: [
      "Pattern recognition classifier for 5 distinct grip gestures",
      "On-device lightweight neural network inference model",
      "Interactive telemetry visualizer for forearm muscle activation"
    ],
    disclaimer: "Non-clinical engineering prototype developed for human-machine interaction testing."
  },
  {
    id: "bci-speller-concept",
    title: "Visual Evoked Potential (VEP) Assistive Speller",
    division: "neurotech",
    category: "Brain-Computer Interface",
    categoryTag: "Brain-Computer Interface",
    status: "Concept",
    description: "A high-frequency steady-state visual evoked potential (SSVEP) paradigm design for hands-free text entry and communication.",
    overview: "A research paradigm concept utilizing flickering visual targets on a screen to evoke distinct occipital EEG frequencies for hands-free selection.",
    problemStatement: "Individuals with severe motor impairment require reliable hands-free communication channels that do not depend on physical movement.",
    objectives: [
      "Design dual-frequency visual flicker grid.",
      "Implement Canonical Correlation Analysis (CCA) for frequency detection.",
      "Create accessible keyboard layout."
    ],
    hardwareAndSensors: [
      "Occipital electrode array (O1, O2, Oz channels)",
      "120Hz high-refresh monitor"
    ],
    communicationArchitecture: "Local GPU monitor rendering + LSL signal stream.",
    softwareAndDataProcessing: [
      "Canonical Correlation Analysis (CCA) algorithm",
      "OpenCV target rendering engine",
      "Python signal visualizer"
    ],
    implementationWorkflow: [
      "Visual stimulus frequency design",
      "Simulation algorithm testing",
      "UI ergonomics design"
    ],
    testingAndResults: "Algorithmic research concept tested via simulated SSVEP frequency streams.",
    techStack: ["Python", "OpenCV", "Signal FFT Analysis", "UI Ergonomics"],
    keyHighlights: [
      "Dual-frequency flickering visual target grid layout",
      "Canonical correlation analysis (CCA) frequency recognition core",
      "Designed for accessible hands-free typing interfaces"
    ],
    disclaimer: "Algorithmic research concept under active laboratory simulation."
  },
  {
    id: "school-stem-lab-v1",
    title: "Standardized Secondary STEM Lab Blueprint",
    division: "stem",
    category: "STEM Lab Setup",
    categoryTag: "STEM Lab Setup",
    status: "Educational Blueprint",
    description: "A turnkey physical lab layout specification featuring modular electronics workbenches, safe power distribution, and multi-student experimentation stations.",
    overview: "A complete physical and curriculum infrastructure plan for middle and high schools equipping new STEM laboratories.",
    problemStatement: "Schools struggle to procure compatible hardware components, ESD-safe workstations, and structured lab management frameworks.",
    objectives: [
      "Layout safe 30-student workstation environment.",
      "Specify modular electronics toolkits.",
      "Establish lab safety and inventory protocols."
    ],
    hardwareAndSensors: [
      "Modular electronics workbenches",
      "3D printing & soldering equipment",
      "ESD-safe tools & power distribution"
    ],
    communicationArchitecture: "N/A (Physical Lab Layout Specification).",
    softwareAndDataProcessing: ["TinkerCAD / Arduino IDE learning software suite."],
    implementationWorkflow: ["School site assessment", "Equipment procurement specification", "Lab setup"],
    testingAndResults: "Structured and documented as a comprehensive reference layout for school STEM lab planning and pilot evaluations.",
    techStack: ["Microcontroller Benches", "3D Printing Stations", "Safety Equipment", "Curriculum Guides"],
    keyHighlights: [
      "Optimized workstation layout for 30-student class capacity",
      "Comprehensive component inventory management framework",
      "Integrated safety protocols and ESD-safe work surfaces"
    ]
  },
  {
    id: "arduino-robotics-kit",
    title: "Interactive Arduino Robotics & Sensor Program",
    division: "stem",
    category: "Robotics & Hardware",
    categoryTag: "Robotics & Hardware",
    status: "Demonstration",
    description: "A structured 12-week practical curriculum for middle and high school students, featuring obstacle-avoiding rovers and smart IoT sensor nodes.",
    overview: "A hands-on educational robotics kit and course teaching basic programming, circuit assembly, and sensor integration.",
    problemStatement: "Abstract coding courses fail to engage young students without tangible physical feedback.",
    objectives: [
      "Teach C++ micro-controller programming fundamentals.",
      "Build autonomous obstacle avoiding mobile robots.",
      "Introduce IoT sensor monitoring concepts."
    ],
    hardwareAndSensors: [
      "Arduino UNO development board",
      "Ultrasonic distance sensors & IR line trackers",
      "2-wheel drive robot chassis with motor driver"
    ],
    communicationArchitecture: "USB Serial programming interface.",
    softwareAndDataProcessing: ["Arduino C++ IDE", "Block-based coding translation guides"],
    implementationWorkflow: ["Curriculum module design", "Robotics kit assembly testing", "School pilot workshops"],
    testingAndResults: "Pilot-tested across interactive demonstration workshops with positive student engagement and functional project completions.",
    techStack: ["Arduino UNO", "Ultrasonic Sensors", "Motor Drivers", "C++ for Beginners"],
    keyHighlights: [
      "Step-by-step visual assembly schematics and code templates",
      "Hands-on sensor calibration and algorithm design exercises",
      "Capstone project: Autonomous line-following and obstacle navigation"
    ]
  },
  {
    id: "stem-teacher-workshop",
    title: "Master Educator Embedded Systems Workshop",
    division: "stem",
    category: "Teacher Training",
    categoryTag: "Teacher Training",
    status: "Demonstration",
    description: "A professional development program training science and computer teachers to lead hands-on electronics labs and mentor student robotics projects.",
    overview: "A train-the-trainer program empowering school educators with confidence in troubleshooting student hardware, running labs, and assessing STEM projects.",
    problemStatement: "Teachers often lack hands-on electronics experience, creating a barrier to adopting modern STEM curricula in schools.",
    objectives: [
      "Train teachers on basic hardware troubleshooting.",
      "Provide reusable classroom lesson plans.",
      "Establish educator support network."
    ],
    hardwareAndSensors: ["Educator demonstration hardware kits", "Multimeters & breadboard modules"],
    communicationArchitecture: "N/A (Teacher Professional Development).",
    softwareAndDataProcessing: ["Arduino IDE", "Lesson plan repository"],
    implementationWorkflow: ["Workshop curriculum development", "2-day teacher intensive training", "Follow-up classroom visits"],
    testingAndResults: "Empowered 40+ school educators to launch independent STEM clubs.",
    techStack: ["Pedagogical Frameworks", "Microcontroller Hardware", "Lab Manuals"],
    keyHighlights: [
      "Troubleshooting guide for common student hardware errors",
      "Project-based learning assessment rubrics",
      "Continuous ongoing mentor support framework"
    ]
  }
];
