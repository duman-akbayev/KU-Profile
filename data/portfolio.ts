export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  sector: string;
  role: string;
  company: string;
  location: string;
  period: string;
  intro: string;
  challenge: string;
  response: string[];
  impact: string[];
  technologies: string[];
  metrics: Metric[];
  accent: "teal" | "amber" | "blue" | "lime" | "violet" | "coral";
  featured: boolean;
};

export type Experience = {
  role: string;
  company: string;
  companyShort: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  stack: string[];
  mark: string;
};

export const profile = {
  name: "Kanat Umertayev",
  initials: "KU",
  title: "Project Engineer · Employer’s Representative · Civil Engineer",
  headline: "Engineering certainty into complex industrial projects.",
  shortBio:
    "Civil and project engineer with 17+ years of experience protecting owner interests across power, steel, oil & gas, mining, and major industrial construction.",
  location: "Karaganda, Kazakhstan",
  email: "kan.umertayev@protonmail.com",
  phoneDisplay: "+7 701 920 0189",
  phone: "+77019200189",
  linkedin: "https://www.linkedin.com/in/kanatt/",
  availability:
    "Open to senior project engineering, employer’s representative, and civil engineering opportunities.",
  cvPath: "/Kanat-Umertayev-CV.pdf",
};

export const heroMetrics: Metric[] = [
  { value: "17+", label: "years in industry" },
  { value: "15+", label: "major assignments" },
  { value: "3", label: "countries worked in" },
  { value: "EPC", label: "owner-side delivery" },
];

export const expertise = [
  {
    number: "01",
    title: "Owner-side assurance",
    copy: "Representing the Employer from early design through site execution, handover, and operational readiness.",
  },
  {
    number: "02",
    title: "Design risk control",
    copy: "Finding constructability gaps, interface clashes, and lifecycle risks before they become costly site changes.",
  },
  {
    number: "03",
    title: "Industrial delivery",
    copy: "Coordinating contractors, schedules, documentation, quality, and safety inside complex operating facilities.",
  },
  {
    number: "04",
    title: "Technical leadership",
    copy: "Turning multidisciplinary detail into clear decisions for project leaders, contractors, and technical authorities.",
  },
];

export const projects: Project[] = [
  {
    slug: "recovery-power-plant",
    title: "Recovery Power Plant — multidisciplinary design delivery",
    shortTitle: "Recovery Power Plant",
    sector: "Power & utilities",
    role: "Civil Engineer / Employer’s Representative",
    company: "ERG Capital Projects LLP",
    location: "Aktobe, Kazakhstan",
    period: "Dec 2024 — Dec 2025",
    intro:
      "Led structural design coordination and owner-side technical assurance for a recovery power plant delivered inside an operating industrial facility.",
    challenge:
      "The project combined a dense brownfield environment, live underground utilities, multidisciplinary interfaces, long-lead equipment, and operational shutdown constraints. Design quality and schedule decisions had direct consequences for plant continuity.",
    response: [
      "Managed structural design packages and coordinated AR, AS, KZh, KM, GP, HVAC, water, sewerage, and 3D-model interfaces.",
      "Built and challenged schedules against construction progress, equipment delivery, MDR status, and adjacent projects.",
      "Prepared design briefs for surveys and foundation settlement monitoring, including dynamic local calculations for turbine and vessel foundations.",
      "Directed technical correspondence, site handover documentation, survey benchmarks, underground-utility risk notices, and protective letters on behalf of the Employer.",
      "Coordinated emergency repair preparation for the DN400 feedwater pipeline ahead of a critical plant shutdown.",
    ],
    impact: [
      "Structural scope passed expert review within contractual deadlines.",
      "Defended turbine-hall main-crane requirements that reduced projected duration and cost.",
      "Improved decision visibility through risk-based schedules and disciplined design handover.",
    ],
    technologies: [
      "AutoCAD",
      "Primavera P6 R24",
      "3D model review",
      "MDR control",
      "RoK / GOST",
      "Engineering surveys",
    ],
    metrics: [
      { value: "DN400", label: "critical pipeline repair" },
      { value: "12+", label: "design interfaces" },
      { value: "On time", label: "expert review" },
    ],
    accent: "teal",
    featured: true,
  },
  {
    slug: "turbo-compressor-modernization",
    title: "4th Turbo Compressor — CAPEX audit and scope reset",
    shortTitle: "4th Turbo Compressor",
    sector: "Steel & utilities",
    role: "Senior Construction Engineer",
    company: "ArcelorMittal Temirtau JSC",
    location: "Temirtau, Kazakhstan",
    period: "Oct 2022 — Nov 2023",
    intro:
      "Audited an industrial turbo-compressor modernization package and turned fragmented project records into a decision-ready recovery plan.",
    challenge:
      "Design, customs, accounting, technical, and supplier documentation needed to be reconciled before leadership could confidently reset cost, timeline, procurement, and contractor scope.",
    response: [
      "Reviewed technical solutions and supplier documentation across the full project record.",
      "Created detailed, traceable document registers and identified information gaps.",
      "Reframed contractor work scopes around the verified remaining work.",
      "Prepared practical recommendations covering capital cost, delivery duration, and equipment service life.",
    ],
    impact: [
      "Gave project leadership a consolidated evidence base for investment decisions.",
      "Identified opportunities to reduce cost and schedule exposure.",
      "Improved contractor tender clarity through a more complete scope definition.",
    ],
    technologies: [
      "CAPEX governance",
      "Technical audit",
      "Document control",
      "Scope development",
      "Supplier review",
    ],
    metrics: [
      { value: "4th", label: "compressor train" },
      { value: "360°", label: "document audit" },
      { value: "3", label: "value levers" },
    ],
    accent: "amber",
    featured: true,
  },
  {
    slug: "chp2-boiler-transformer",
    title: "CHP-2 7th Boiler & Transformer — late-stage constructability",
    shortTitle: "CHP-2 Boiler & Transformer",
    sector: "Power & utilities",
    role: "Senior Construction Engineer",
    company: "ArcelorMittal Temirtau JSC",
    location: "Temirtau, Kazakhstan",
    period: "2022 — 2023",
    intro:
      "Joined a late-stage energy project to resolve design-to-field discrepancies and strengthen civil, structural, and cable-package coordination.",
    challenge:
      "The project had inherited unresolved design details, site deviations, maintainability concerns, and cross-discipline clashes that threatened completion and future operating cost.",
    response: [
      "Analysed discrepancies between the working design and installed condition.",
      "Coordinated correction of detailed design errors with future maintenance in view.",
      "Supervised the transformer contractor and reviewed civil and cable-management packages for clashes.",
      "Reviewed working-drawing submissions and prepared clear owner-side findings.",
    ],
    impact: [
      "Reduced downstream maintenance and service-cost exposure.",
      "Improved interface clarity across civil, structural, and electrical packages.",
      "Focused completion teams on the highest-value corrective actions.",
    ],
    technologies: [
      "Constructability review",
      "Clash detection",
      "Civil works",
      "Cable management",
      "Contractor supervision",
    ],
    metrics: [
      { value: "7th", label: "boiler unit" },
      { value: "2", label: "linked workstreams" },
      { value: "Late stage", label: "recovery mandate" },
    ],
    accent: "blue",
    featured: true,
  },
  {
    slug: "coke-oven-batteries",
    title: "8th & 9th Coke Oven Batteries — construction governance",
    shortTitle: "Coke Oven Batteries 8 & 9",
    sector: "Metals & mining",
    role: "Senior Construction Engineer",
    company: "ArcelorMittal Temirtau JSC",
    location: "Temirtau, Kazakhstan",
    period: "2022 — 2023",
    intro:
      "Advised project leadership on construction compliance, contract strategy, scope alignment, and acceptance of internationally executed works.",
    challenge:
      "A major steelmaking program required disciplined interpretation of Kazakhstan construction legislation while work packages and acceptance activities crossed organizational and national boundaries.",
    response: [
      "Advised management on compliance with Republic of Kazakhstan construction legislation.",
      "Supported contract strategy when project scope and delivery conditions changed.",
      "Helped organize acceptance of works performed abroad.",
      "Supervised temporary-fencing installation and maintained an auditable record through Employer suspension.",
    ],
    impact: [
      "Strengthened governance around changing work scope.",
      "Protected owner acceptance criteria across international interfaces.",
      "Maintained clear supervision records during a paused workfront.",
    ],
    technologies: [
      "RoK legislation",
      "Contract strategy",
      "International acceptance",
      "Site supervision",
      "Quality control",
    ],
    metrics: [
      { value: "8 + 9", label: "battery program" },
      { value: "RoK", label: "compliance basis" },
      { value: "Cross-border", label: "work acceptance" },
    ],
    accent: "coral",
    featured: false,
  },
  {
    slug: "aksu-power-unit-7",
    title: "Aksu Power Unit No. 7 — site representation",
    shortTitle: "Aksu Power Unit No. 7",
    sector: "Power & utilities",
    role: "Civil Constructability Engineer",
    company: "ERG Capital Projects LLP",
    location: "Aksu, Kazakhstan",
    period: "Jan 2019 — Jun 2020",
    intro:
      "Represented the Employer during reconstruction of a major power unit, connecting field reality with design, contracts, and weekly controls.",
    challenge:
      "Reconstruction inside an established power facility demanded rapid verification of working documentation against actual conditions and close coordination of technical and author-supervision parties.",
    response: [
      "Prepared construction and service contracts for technical and author supervision.",
      "Coordinated contractor activity and reviewed working documentation against actual site conditions.",
      "Tracked as-built documentation and verified weekly progress reporting.",
      "Supported operational controls and owner-side issue resolution on site.",
    ],
    impact: [
      "Improved traceability between field execution, contracts, and as-built records.",
      "Raised the quality of weekly owner reporting.",
      "Reduced ambiguity where design assumptions met existing-plant conditions.",
    ],
    technologies: [
      "Owner representation",
      "Constructability",
      "As-built control",
      "Contract preparation",
      "Site coordination",
    ],
    metrics: [
      { value: "Unit 7", label: "reconstruction" },
      { value: "18 mo", label: "site assignment" },
      { value: "Weekly", label: "control cycle" },
    ],
    accent: "lime",
    featured: true,
  },
  {
    slug: "tengiz-third-generation",
    title: "Third Generation Plant — civil execution at scale",
    shortTitle: "Third Generation Plant",
    sector: "Oil & gas",
    role: "Chief Engineer / Civil Engineer",
    company: "Consolidated Contractors Company",
    location: "Tengiz, Kazakhstan",
    period: "Sep 2014 — Apr 2016",
    intro:
      "Led and coordinated civil workfronts for a major oil-and-gas expansion, spanning design verification, site delivery, quality, planning, and stakeholder interfaces.",
    challenge:
      "A very large workfront brought together Employer requirements, multiple subcontractors, government authorities, technical supervision, logistics, and strict project specifications.",
    response: [
      "Verified design and estimate documentation against Kazakhstan standards and technical specifications.",
      "Coordinated subcontractor engineers, forepersons, estimators, surveyors, authorities, and technical supervision.",
      "Planned construction, controlled material quality, resolved field issues, and produced daily progress reporting.",
      "Led preparatory work and fencing installation across a 3.24-million-square-metre workfront.",
      "Reviewed working design and reporting for a 2,000-person rotational camp.",
    ],
    impact: [
      "Created a dependable coordination rhythm across diverse site stakeholders.",
      "Protected quality and technical-compliance requirements during high-volume execution.",
      "Supported safe, reportable delivery across multiple civil work packages.",
    ],
    technologies: [
      "Civil execution",
      "Project scheduling",
      "QA/QC",
      "Survey coordination",
      "HSE interfaces",
      "RoK standards",
    ],
    metrics: [
      { value: "3.24M m²", label: "workfront" },
      { value: "2,000", label: "camp capacity" },
      { value: "20 mo", label: "site progression" },
    ],
    accent: "violet",
    featured: true,
  },
  {
    slug: "orken-rotational-camp",
    title: "Orken Rotational Camp — Primavera delivery planning",
    shortTitle: "Orken Rotational Camp",
    sector: "Industrial infrastructure",
    role: "Civil Supervisor",
    company: "Isker / Orion",
    location: "Tengiz, Kazakhstan",
    period: "Feb 2017 — Aug 2017",
    intro:
      "Supervised concrete works and developed the Primavera P6 delivery schedule for a large rotational accommodation program.",
    challenge:
      "A temporary assignment required immediate control of concrete execution and a practical schedule for a high-capacity camp under active construction.",
    response: [
      "Supervised civil and concrete workfronts against project requirements.",
      "Developed and maintained the Primavera P6 construction schedule.",
      "Aligned site progress information with near-term delivery priorities.",
    ],
    impact: [
      "Established schedule visibility for a fast-moving temporary assignment.",
      "Connected field production with planning controls.",
      "Supported delivery of infrastructure sized for 5,000 residents.",
    ],
    technologies: ["Primavera P6", "Concrete works", "Site supervision", "Progress control"],
    metrics: [
      { value: "5,000", label: "camp capacity" },
      { value: "P6", label: "planning platform" },
      { value: "7 mo", label: "assignment" },
    ],
    accent: "amber",
    featured: false,
  },
  {
    slug: "sunrise-smart-campus",
    title: "S.U.N.R.I.S.E. Smart Campus — research into practice",
    shortTitle: "S.U.N.R.I.S.E. Smart Campus",
    sector: "Research & urban systems",
    role: "Civil Engineering Intern",
    company: "Université d’Artois / Lille 1",
    location: "Villeneuve-d’Ascq, France",
    period: "Apr 2014 — Jul 2014",
    intro:
      "Applied graduate research to a live smart-grid infrastructure program serving the Lille 1 university campus.",
    challenge:
      "The master’s thesis placement required connecting site evidence, geodetic data, design-and-estimate documentation, and GIS mapping within a multidisciplinary research setting.",
    response: [
      "Performed site inspections and supported design-and-estimate documentation.",
      "Contributed geodetic surveys and GIS mapping.",
      "Collaborated with NORPAC, part of Bouygues Construction.",
      "Connected academic analysis with a campus infrastructure program serving approximately 11,000 people.",
    ],
    impact: [
      "Produced field-informed material for the master’s research program.",
      "Expanded international experience in smart infrastructure and urban systems.",
      "Built practical capability across surveys, GIS, and design documentation.",
    ],
    technologies: ["GIS", "Geodetic survey", "Design documentation", "Smart grids", "Urban systems"],
    metrics: [
      { value: "11,000", label: "campus population" },
      { value: "France", label: "research setting" },
      { value: "4 mo", label: "placement" },
    ],
    accent: "blue",
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    role: "Civil Engineer",
    company: "ERG Capital Projects LLP",
    companyShort: "ERG",
    location: "Aktobe",
    period: "Dec 2024 — Dec 2025",
    summary:
      "Owner-side structural design management for a recovery power plant in an operating industrial environment.",
    achievements: [
      "Delivered structural design through expert review within contractual deadlines.",
      "Coordinated multidisciplinary documentation, schedules, equipment interfaces, surveys, and foundation monitoring.",
      "Protected project duration and cost through risk-based planning and decisive technical requirements.",
    ],
    stack: ["Design management", "Primavera P6", "AutoCAD", "RoK / GOST"],
    mark: "E",
  },
  {
    role: "Senior Construction Engineer",
    company: "ArcelorMittal Temirtau JSC",
    companyShort: "AMT",
    location: "Temirtau",
    period: "Oct 2022 — Nov 2023",
    summary:
      "CAPEX project assurance across steelmaking and utility assets, with a focus on constructability, governance, and recovery.",
    achievements: [
      "Audited the 4th turbo-compressor project and reframed remaining contractor scope.",
      "Advised the 8th and 9th coke-oven battery program on compliance and contract strategy.",
      "Resolved late-stage design and interface issues across CHP-2 boiler, transformer, and ash-disposal projects.",
    ],
    stack: ["CAPEX", "Technical audit", "Constructability", "Contract strategy"],
    mark: "A",
  },
  {
    role: "Civil Constructability Engineer",
    company: "ERG Capital Projects LLP",
    companyShort: "ERG",
    location: "Aksu",
    period: "Jan 2019 — Jun 2020",
    summary:
      "Employer’s site representative for reconstruction of Power Unit No. 7 at the Aksu power station.",
    achievements: [
      "Prepared construction and technical-supervision service contracts.",
      "Verified design against actual site conditions and coordinated contractor activity.",
      "Controlled as-built documentation, weekly reports, and operational interfaces.",
    ],
    stack: ["Owner representation", "Contracts", "As-built control", "Field engineering"],
    mark: "E",
  },
  {
    role: "Civil Engineer",
    company: "Talap Oil and Gas Services LLP",
    companyShort: "TOGS",
    location: "Karaganda",
    period: "Nov 2018 — Dec 2018",
    summary:
      "Prepared and verified supporting packages for fabricated steel structures serving the Third Generation Plant.",
    achievements: [
      "Reviewed Imstalcon fabrication documentation for steel structures.",
      "Prepared Employer-facing reports and construction schedules.",
    ],
    stack: ["Steel structures", "Document control", "Scheduling"],
    mark: "T",
  },
  {
    role: "Engineer",
    company: "WorleyParsons–KGNT JV",
    companyShort: "WPK",
    location: "Aksai",
    period: "Jul 2018 — Sep 2018",
    summary:
      "Supervised geotechnical fieldwork and technical inspection of foundations at the Aksai oil field.",
    achievements: [
      "Monitored contractor geotechnical work and foundation inspections.",
      "Prepared evidence-based reports on completed field quantities.",
    ],
    stack: ["Geotechnical works", "Foundations", "Technical inspection"],
    mark: "W",
  },
  {
    role: "Civil Supervisor",
    company: "Isker / Orion",
    companyShort: "I/O",
    location: "Tengiz",
    period: "Feb 2017 — Aug 2017",
    summary:
      "Supervised concrete works and developed the Primavera P6 schedule for the 5,000-person Orken camp.",
    achievements: [
      "Controlled active concrete workfronts.",
      "Connected site execution with an integrated P6 plan.",
    ],
    stack: ["Primavera P6", "Concrete works", "Site supervision"],
    mark: "I",
  },
  {
    role: "Deputy Site Manager",
    company: "A-Engineering Group LLP",
    companyShort: "AEG",
    location: "Zholymbet",
    period: "Sep 2016 — Oct 2016",
    summary:
      "Supervised construction of a reinforced-concrete gold-ore-mill foundation at a tailings-processing facility.",
    achievements: [
      "Coordinated site execution for a 300 m³ concrete foundation.",
      "Maintained quality and progress controls on a concentrated industrial workfront.",
    ],
    stack: ["Concrete", "Mining facilities", "Site management"],
    mark: "A",
  },
  {
    role: "Chief Engineer / Civil Engineer",
    company: "Consolidated Contractors Company",
    companyShort: "CCC",
    location: "Tengiz",
    period: "Sep 2014 — Apr 2016",
    summary:
      "Progressed through civil engineering and site leadership roles on Third Generation Plant infrastructure.",
    achievements: [
      "Coordinated design, planning, materials, subcontractors, surveys, authorities, quality, and daily reporting.",
      "Led civil delivery across a 3.24M m² workfront and a 2,000-person rotational camp scope.",
      "Aligned execution with Employer requirements, Kazakhstan standards, and project specifications.",
    ],
    stack: ["Civil delivery", "QA/QC", "Planning", "Stakeholder coordination"],
    mark: "C",
  },
  {
    role: "Civil Engineering Intern",
    company: "Université d’Artois / Lille 1",
    companyShort: "LGCgE",
    location: "Villeneuve-d’Ascq, France",
    period: "Apr 2014 — Jul 2014",
    summary:
      "Master’s thesis internship on the S.U.N.R.I.S.E. smart-grid facilities and infrastructure program.",
    achievements: [
      "Completed site inspections, geodetic surveys, design documentation, and GIS mapping.",
      "Collaborated with NORPAC (Bouygues Construction) in an international research setting.",
    ],
    stack: ["GIS", "Geodetic surveys", "Smart infrastructure"],
    mark: "L",
  },
  {
    role: "Geotechnical Laboratory Assistant",
    company: "Incheon University",
    companyShort: "INU",
    location: "Incheon, South Korea",
    period: "Aug 2012 — Sep 2012",
    summary: "Performed laboratory soil testing as part of master’s research.",
    achievements: [
      "Built practical laboratory experience in geotechnical material testing.",
      "Extended civil-engineering research through an international placement.",
    ],
    stack: ["Soil testing", "Geotechnical research"],
    mark: "I",
  },
  {
    role: "HSE Engineer",
    company: "Absolute Kazakhstan Building LLP",
    companyShort: "AKB",
    location: "Karaganda",
    period: "Jun 2009 — Aug 2009",
    summary: "Supported incident investigation, safety briefings, and occupational-safety documentation.",
    achievements: [
      "Participated in workplace accident investigations and Form N-1 reporting.",
      "Delivered safety briefings and helped develop an occupational-safety instruction.",
    ],
    stack: ["HSE", "Incident investigation", "Safety documentation"],
    mark: "A",
  },
];

export const skillGroups = [
  {
    title: "Project delivery",
    description: "From investment intent to controlled field execution.",
    skills: [
      { name: "EPC project management", level: 94 },
      { name: "Employer representation", level: 96 },
      { name: "Design management", level: 92 },
      { name: "Contractor management", level: 91 },
      { name: "Scheduling & progress", level: 90 },
      { name: "Budget awareness", level: 84 },
    ],
  },
  {
    title: "Civil & industrial",
    description: "Deep field judgement across complex asset environments.",
    skills: [
      { name: "Industrial construction", level: 96 },
      { name: "Constructability review", level: 94 },
      { name: "Structural packages", level: 91 },
      { name: "Foundations & concrete", level: 91 },
      { name: "Geotechnical works", level: 86 },
      { name: "Engineering surveys", level: 85 },
    ],
  },
  {
    title: "Controls & governance",
    description: "Evidence, standards, and decisions that protect delivery.",
    skills: [
      { name: "Quality control", level: 93 },
      { name: "RoK & GOST standards", level: 92 },
      { name: "Technical documentation", level: 95 },
      { name: "Risk identification", level: 93 },
      { name: "Contract strategy", level: 86 },
      { name: "HSE coordination", level: 84 },
    ],
  },
];

export const tools = [
  "AutoCAD",
  "Primavera P6 R24",
  "3D model review",
  "GIS mapping",
  "MDR / document registers",
  "Design & estimate documentation",
  "As-built control",
  "Progress reporting",
  "RoK construction standards",
  "GOST standards",
];

export const strengths = [
  "Analytical judgement",
  "Cross-functional leadership",
  "Clear technical writing",
  "Commercial awareness",
  "Stakeholder alignment",
  "Calm issue resolution",
  "Lifecycle thinking",
  "Site-to-boardroom communication",
];

export const education = [
  {
    institution: "Lille 1 University of Science and Technology",
    location: "Villeneuve-d’Ascq, France",
    degree: "Master’s — Urban Engineering & Habitat",
    period: "2013 — 2014",
    detail:
      "International graduate study with applied research in smart infrastructure, urban systems, GIS, and geodetic survey work.",
    mark: "L1",
  },
  {
    institution: "Karaganda State Technical University",
    location: "Karaganda, Kazakhstan",
    degree: "Master’s — Civil Engineering",
    period: "2011 — 2013",
    detail:
      "Graduate civil-engineering study; winner in a Republic-level competition for sustainable projects.",
    mark: "KTU",
  },
  {
    institution: "Karaganda State Technical University",
    location: "Karaganda, Kazakhstan",
    degree: "Bachelor’s — Civil Engineering",
    period: "2007 — 2011",
    detail: "Core training in civil, structural, geotechnical, and construction engineering.",
    mark: "KTU",
  },
];

export const credentials = [
  {
    title: "Site Manager Licence",
    issuer: "Republic of Kazakhstan",
    date: "Active credential",
    detail: "Certificate of Site Manager, MAMAN №000073.",
    type: "Licence",
  },
  {
    title: "IOSH Managing Safely",
    issuer: "Steel & Mining Production",
    date: "Feb 2023",
    detail: "Certificate KP-2023-1663.",
    type: "Safety",
  },
  {
    title: "Quality Management System — Introductory",
    issuer: "Consolidated Contractors Company",
    date: "Feb 2015",
    detail: "Foundational quality-management system training.",
    type: "Quality",
  },
  {
    title: "Bearing Method in Saline Soils",
    issuer: "Kazakhstan Patent KZ No. 22796",
    date: "Issued Apr 2013",
    detail: "Patent covering a pipe-framework bearing method for saline-soil conditions.",
    type: "Patent",
  },
];

export const languages = [
  { name: "English", level: "Advanced", code: "EN" },
  { name: "Russian", level: "Advanced", code: "RU" },
];

export const principles = [
  {
    title: "Interrogate the interfaces",
    copy: "The highest-cost surprises usually sit between packages, disciplines, contracts, or assumptions.",
  },
  {
    title: "Make risk visible early",
    copy: "A practical schedule and a clear technical note can change an outcome long before mobilization.",
  },
  {
    title: "Design for operations",
    copy: "Maintainability, access, shutdowns, and service life belong in design decisions—not in the punch list.",
  },
  {
    title: "Leave an evidence trail",
    copy: "Good documentation protects decisions, accelerates handover, and lets every stakeholder act with confidence.",
  },
];

export const sectors = [
  "Power generation",
  "Steel production",
  "Oil & gas",
  "Mining",
  "Industrial infrastructure",
  "Smart urban systems",
];

export type ProjectPhoto = {
  src: string;
  alt: string;
  sourceUrl: string;
};

export const projectPhotos: Record<string, ProjectPhoto> = {
  "recovery-power-plant": {
    src: "/images/projects/recovery-power-plant.jpg",
    alt: "Aerial view of a large industrial power and process facility",
    sourceUrl: "https://www.pexels.com/photo/infrastructure-of-poer-plant-6754760/",
  },
  "turbo-compressor-modernization": {
    src: "/images/projects/turbo-compressor.jpg",
    alt: "Large red rotating machinery operating inside an industrial facility",
    sourceUrl: "https://www.pexels.com/photo/engines-in-a-factory-19521860/",
  },
  "chp2-boiler-transformer": {
    src: "/images/projects/chp2-cooling-towers.jpg",
    alt: "Cooling towers at a major power-generation facility",
    sourceUrl: "https://www.pexels.com/photo/power-plant-cooling-towers-10165700/",
  },
  "coke-oven-batteries": {
    src: "/images/projects/steel-factory.jpg",
    alt: "Worker operating equipment inside a steelmaking facility",
    sourceUrl: "https://www.pexels.com/photo/man-working-in-an-industrial-factory-7739856/",
  },
  "aksu-power-unit-7": {
    src: "/images/projects/power-substation.jpg",
    alt: "Electrical substation silhouetted against the evening sky",
    sourceUrl: "https://www.pexels.com/photo/silhouette-of-electrical-power-substation-12809142/",
  },
  "tengiz-third-generation": {
    src: "/images/projects/industrial-pipework.jpg",
    alt: "Industrial roof structures with integrated services and pipework",
    sourceUrl: "https://www.pexels.com/photo/electrical-and-hydraulic-installations-on-the-roof-and-walls-covered-with-corrugated-metal-sheets-18413196/",
  },
  "orken-rotational-camp": {
    src: "/images/projects/industrial-construction.jpg",
    alt: "Civil construction team working across a reinforced-concrete structure",
    sourceUrl: "https://www.pexels.com/photo/men-working-in-a-construction-site-2383650/",
  },
  "sunrise-smart-campus": {
    src: "/images/projects/smart-infrastructure.jpg",
    alt: "Daylit industrial architecture with steel framing and integrated building services",
    sourceUrl: "https://www.pexels.com/photo/windows-in-the-roof-of-an-airport-terminal-9305375/",
  },
};

export function getProjectPhoto(slug: string) {
  return projectPhotos[slug];
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
