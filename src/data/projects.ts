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
    id: "line-follower-robot",
    title: "Autonomous Line Follower Robot",
    division: "stem",
    category: "Robotics & Hardware",
    categoryTag: "Robotics & Hardware",
    status: "Completed",
    description: "An autonomous two-wheel differential drive mobile robot using calibrated infrared reflectance sensors and closed-loop motor control to track high-contrast line paths.",
    overview: "A precision autonomous mobile robot engineered to follow continuous black lines on white surfaces (or vice versa). Equipped with an array of infrared reflectance sensors, an Arduino microcontroller, and an L298N dual H-bridge motor driver, the system executes real-time path tracking through calibrated sensor thresholds and smooth differential motor speed control.",
    problemStatement: "Robotics learners struggle to understand analog sensor physics, comparator threshold calibration, and real-time closed-loop motor actuation when working only with simulated code.",
    objectives: [
      "Deploy a multi-channel infrared reflectance sensor array for surface line detection.",
      "Implement closed-loop differential drive algorithms for smooth trajectory correction.",
      "Construct a modular 2WD chassis with independent PWM speed regulation for sharp turns and curves."
    ],
    hardwareAndSensors: [
      "Arduino UNO / Nano microcontroller board",
      "TCRT5000 multi-channel infrared reflectance sensor array",
      "L298N / TB6612FNG dual DC motor driver module",
      "Twin 6V geared DC motors with high-traction rubber wheels",
      "Front omnidirectional caster ball wheel",
      "7.4V Li-ion rechargeable battery pack with power toggle switch"
    ],
    communicationArchitecture: "USB Serial programming interface & real-time sensor threshold telemetry.",
    softwareAndDataProcessing: [
      "Embedded C++ firmware on Arduino IDE",
      "Digital & analog sensor threshold normalization",
      "Differential drive error correction steering algorithm",
      "PWM timer modulation for linear motor acceleration"
    ],
    implementationWorkflow: [
      "Chassis assembly & mechanical alignment",
      "Sensor height tuning (5mm - 10mm ground clearance)",
      "Driver pin mapping and motor polarity testing",
      "Track testing with curved tracks, sharp 90-degree bends, and intersections"
    ],
    testingAndResults: "Successfully tested across complex arena tracks with 90-degree corners and tight S-curves, achieving continuous track following at up to 0.45 m/s without track loss.",
    image: "/images/projects/line-follower.jpg",
    techStack: ["Arduino", "IR Sensor Array", "L298N Motor Driver", "Embedded C++", "PWM Control"],
    keyHighlights: [
      "Multi-channel IR reflectance sensor array for high-contrast track detection",
      "Dual H-Bridge differential steering with dynamic PWM modulation",
      "Modular physical chassis designed for hands-on student robotics workshops"
    ]
  },
  {
    id: "bluetooth-car",
    title: "Smartphone Controlled Bluetooth Robot Car",
    division: "stem",
    category: "Robotics & Hardware",
    categoryTag: "Robotics & Hardware",
    status: "Completed",
    description: "A wireless mobile robotic vehicle controlled via Android smartphone app over serial Bluetooth RF, featuring responsive directional steering and speed tuning.",
    overview: "A wireless mobile robot platform interfaced with an HC-05/HC-06 Bluetooth module and an Arduino microcontroller. The car receives single-character and packetized command strings over UART from a mobile app, translating touch gestures, button inputs, or accelerometer tilt into precise forward, reverse, steering, and braking maneuvers.",
    problemStatement: "Students frequently find wireless RF protocols intimidating and lack hands-on experience linking mobile interfaces to physical embedded motor actuators.",
    objectives: [
      "Establish bidirectional serial communication over 2.4 GHz Bluetooth RF link.",
      "Design responsive smartphone control interface with low latency (<50ms).",
      "Implement fail-safe auto-brake routines upon Bluetooth connection loss."
    ],
    hardwareAndSensors: [
      "Arduino UNO microcontroller board",
      "HC-05 / HC-06 Bluetooth Serial Transceiver module",
      "L298N dual H-bridge motor driver",
      "4x DC geared motors with 4WD chassis assembly",
      "Status indicator LEDs & buzzer for pairing state feedback",
      "Rechargeable 18650 Li-ion battery pack (7.4V - 8.4V)"
    ],
    communicationArchitecture: "UART Serial (9600 baud, 8-N-1) over Bluetooth SPP (Serial Port Profile).",
    softwareAndDataProcessing: [
      "Arduino C++ UART buffer parsing",
      "State-machine drive command handler (Fwd, Rev, Left, Right, Stop)",
      "PWM speed level adjustment protocol",
      "Connection watchdog timer for emergency stop"
    ],
    implementationWorkflow: [
      "HC-05 module pairing & baud rate configuration",
      "Motor driver wiring & logic table verification",
      "Mobile app button and tilt steering mapping",
      "Range and response latency obstacle course driving tests"
    ],
    testingAndResults: "Tested reliable wireless command responsiveness up to 12 meters line-of-sight with latency below 40ms and immediate auto-stop upon connection timeout.",
    image: "/images/projects/bluetooth-car.jpg",
    techStack: ["Arduino UNO", "HC-05 Bluetooth", "UART Serial", "Android App Control", "Motor Drivers"],
    keyHighlights: [
      "Low-latency UART serial command decoding over Bluetooth link",
      "Full directional drive control with variable PWM speed switching",
      "Auto-stop safety watchdog preventing runaway when out of RF range"
    ]
  },
  {
    id: "obstacle-avoiding-robot",
    title: "Autonomous Ultrasonic Obstacle Avoiding Robot",
    division: "stem",
    category: "Robotics & Hardware",
    categoryTag: "Robotics & Hardware",
    status: "Completed",
    description: "An intelligent autonomous rover equipped with an ultrasonic distance sensor and micro servo scanner to detect obstacles in real time and navigate around collisions.",
    overview: "An intelligent mobile robot designed to roam independently without human intervention. Featuring an ultrasonic distance sensor mounted on an SG90 micro servo, the rover continuously scans its forward hemisphere. When an obstacle is detected within a predefined safety perimeter (e.g., 20cm), the rover halts, pans left and right to evaluate clearance distances, and autonomously turns toward the clearest path.",
    problemStatement: "Building truly autonomous machines requires students to integrate sensor measurement physics with decision-making state machines and spatial navigation logic.",
    objectives: [
      "Measure high-accuracy distance telemetry using time-of-flight ultrasonic echolocation.",
      "Mount ultrasonic sensor on panning servo to evaluate 180-degree spatial clearance.",
      "Implement reactive collision-avoidance state machine to navigate unstructured spaces."
    ],
    hardwareAndSensors: [
      "Arduino UNO / Nano microcontroller board",
      "HC-SR04 Ultrasonic distance sensor (2cm - 400cm range)",
      "SG90 9g micro servo motor for directional sensor panning",
      "L298N / TB6612 motor driver module",
      "Robotic rover chassis with DC gear motors",
      "7.4V rechargeable battery pack & regulated 5V power supply"
    ],
    communicationArchitecture: "Trigger/Echo ultrasonic pulse timing (10µs trigger pulse duration).",
    softwareAndDataProcessing: [
      "Arduino C++ pulseIn() distance calculation with temperature compensation",
      "Obstacle scanning state machine (LookAhead, Halt, ScanLeft, ScanRight, Pivot)",
      "Differential reverse-and-turn maneuver sequence",
      "Digital noise smoothing filter for distance readings"
    ],
    implementationWorkflow: [
      "Chassis build and servo-ultrasonic turret mounting",
      "Ultrasonic pulse calibration and minimum safety distance tuning",
      "Collision avoidance algorithm testing in boxed maze environments",
      "Performance optimization for fast turning and dead-end recovery"
    ],
    testingAndResults: "Demonstrated 100% collision prevention across test mazes, successfully navigating narrow passages and dead ends with dynamic left/right clearance evaluation.",
    image: "/images/projects/obstacle-avoider.jpg",
    techStack: ["Arduino", "HC-SR04 Ultrasonic", "SG90 Servo", "Autonomous Navigation", "C++"],
    keyHighlights: [
      "180-degree servo panning turret for dynamic spatial path evaluation",
      "Microsecond ultrasonic echolocation with anti-stuck dead-end recovery",
      "Completely autonomous navigation requiring zero external operator input"
    ]
  },
  {
    id: "emg-prosthetic-control",
    title: "Surface EMG Bionic Hand & Gesture Interface",
    division: "neurotech",
    category: "Neuroprosthetics & Assistive Tech",
    categoryTag: "Neuroprosthetics & Assistive Tech",
    status: "Prototype",
    description: "A non-invasive biosignal interface capturing surface electromyography (sEMG) signals to control an articulated 3D-printed prosthetic hand prototype.",
    overview: "An exploratory gesture classification pipeline capturing surface muscle potentials from forearm muscles to control multi-articulated prosthetic actuators, originating from Alistron's founding collegiate neuro-engineering research.",
    problemStatement: "Traditional threshold-based muscle switches offer limited degrees of freedom for upper-limb assistive devices.",
    objectives: [
      "Detect surface muscle activation from differential sEMG sensor channels.",
      "Translate activation envelopes to discrete prosthetic grip commands.",
      "Provide real-time visual telemetry on an embedded microcontroller."
    ],
    hardwareAndSensors: [
      "Differential surface EMG analog sensor electrodes",
      "Arduino / ARM Cortex-M microcontroller",
      "3D-printed multi-articulated bionic hand mechanics",
      "Micro servo motors with tendon wire actuation"
    ],
    communicationArchitecture: "Analog sensor ADC acquisition & PWM servo signaling.",
    softwareAndDataProcessing: [
      "Analog signal envelope detection & baseline threshold filtering",
      "Multi-state gesture command mapping (Open, Fist, Pinch, Point)",
      "PWM servo actuation driver"
    ],
    implementationWorkflow: [
      "sEMG sensor skin placement and contact impedance calibration",
      "Muscle contraction threshold characterization",
      "Bench testing with 3D-printed prosthetic mechanism"
    ],
    testingAndResults: "Demonstrated reliable real-time grip trigger actuation from surface forearm contractions on laboratory test bench.",
    techStack: ["Arduino", "sEMG Sensors", "3D Printing", "Embedded C++", "Servo Actuation"],
    keyHighlights: [
      "Non-invasive surface electromyography signal acquisition",
      "3D-printed articulated hand with tendon-wire servo actuation",
      "Foundational research prototype driving Alistron NeuroTech exploration"
    ],
    disclaimer: "Non-clinical engineering prototype developed for exploratory human-machine interaction testing."
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
