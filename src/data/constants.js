// =====================================================================
//  ALL SITE CONTENT LIVES IN THIS FILE.
//  To change text, links, skills, experience or projects, edit it here.
//  To change an image, replace the file in src/images/ and keep its name.
// =====================================================================

// ---------- Images ----------
import profileImage from "../images/profile.png";

import cloudIcon from "../images/skills/cloud.svg";
import codeIcon from "../images/skills/code.svg";
import automationIcon from "../images/skills/automation.svg";
import securityIcon from "../images/skills/security.svg";
import integrationIcon from "../images/skills/integration.svg";
import aiIcon from "../images/skills/ai.svg";
import dataIcon from "../images/skills/data.svg";
import gitIcon from "../images/skills/git.svg";
import toolIcon from "../images/skills/tool.svg";

import agentforceBadge from "../images/certifications/agentforce-specialist.png";
import nextCertBadge from "../images/certifications/next-certification.png";

import runnerzImage from "../images/projects/runnerz.png";
import blogspotImage from "../images/projects/blogspot.png";
import stayhubImage from "../images/projects/stayhub.png";
import awardImage1 from "../images/projects/awards/award-1.png";
import awardImage2 from "../images/projects/awards/award-2.png";


// ---------- Show or hide the Salesforce Implementations section ----------
export const showImplementations = true;

// ---------- Profile ----------
export const Bio = {
  name: "Nishant Deshmukh",
  title: "Salesforce Developer & Administrator",
  // Small status pill above the name. Set to "" to hide it.
  openToWork: "Open to Salesforce Developer roles",
  tagline:
    "I build quote-to-cash solutions on Salesforce CPQ, Revenue Cloud Advanced and Salesforce Billing, using Apex, LWC and Flows.",
  image: profileImage,
  // Put the resume PDF at public/resume/Nishant_Deshmukh_Resume.pdf
  // (or replace this with a Google Drive link).
  resume: process.env.PUBLIC_URL + "/resume/Nishant_Deshmukh_Resume.pdf",
  email: "nishantdeshmukhdev@gmail.com",
  // Set a number (e.g. "+91 98765 43210") to show a Phone card in Contact.
  phone: "",
  location: "Pune, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/nishant-deshmukh-dev/",
  github: "https://github.com/nishant-deshmukh",
  trailhead: "https://www.salesforce.com/trailblazer/yyxckwksp8z5ei6jho",
  // Tags floating around the profile photo
  heroChips: [
    { label: "Apex & LWC", position: { top: 44, left: -56 }, delay: 0 },
    { label: "Salesforce CPQ", position: { top: 200, right: -70 }, delay: 1.2 },
    { label: "Revenue Cloud", position: { bottom: 40, left: -40 }, delay: 2.4 },
  ],
};

// ---------- Contact section ----------
export const contact = {
  heading: "Working on Salesforce CPQ, Revenue Cloud or Billing?",
  text: "I'm open to Salesforce Developer and Administrator roles. Email is the fastest way to reach me.",
};

export const about =
  "Salesforce Developer and Administrator with 1.5+ years of experience building quote-to-cash solutions on Salesforce CPQ, Revenue Cloud Advanced and Salesforce Billing. I specialise in Apex, Lightning Web Components, Flows and SOQL, along with integrations using REST APIs and Named Credentials. My work spans automation, data migration, production troubleshooting, security and access setup, and AI features with Prompt Builder. I enjoy exploring new parts of the platform and turning complex business requirements into clean, reliable Salesforce solutions.";
// ---------- Navigation (order = order on the page) ----------
const allNavLinks = [
  { id: "about", title: "About Me" },
  { id: "skills", title: "Skills" },
  { id: "certifications", title: "Certifications" },
  { id: "experience", title: "Experience" },
  { id: "implementations", title: "Implementations" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const navLinks = allNavLinks.filter(
  (link) => showImplementations || link.id !== "implementations"
);

// ---------- Skills ----------
// Each skill: name + icon. To use an official logo, add the file to
// src/images/skills/, import it above and set it as the icon.
export const skills = [
  {
    title: "Clouds & Products",
    highlight: true,
    skills: [
      { name: "Salesforce CPQ", icon: cloudIcon },
      { name: "Revenue Cloud Advanced", icon: cloudIcon },
      { name: "Salesforce Billing", icon: cloudIcon },
      { name: "Sales Cloud", icon: cloudIcon },
      { name: "Conga", icon: cloudIcon },
    ],
  },
  {
    title: "Development",
    skills: [
      { name: "Apex", icon: codeIcon },
      { name: "LWC", icon: codeIcon },
      { name: "Visualforce", icon: codeIcon },
      { name: "SOQL", icon: codeIcon },
      { name: "Triggers", icon: codeIcon },
      { name: "Batch Apex", icon: codeIcon },
      { name: "Async Apex", icon: codeIcon },
      { name: "Test Classes", icon: codeIcon },
      { name: "Custom Metadata", icon: codeIcon },
    ],
  },
  {
    title: "Automation",
    skills: [
      { name: "Flows", icon: automationIcon },
      { name: "Flow Orchestration", icon: automationIcon },
      { name: "Approval Processes", icon: automationIcon },
      { name: "DLRS", icon: automationIcon },
      { name: "Price Rules", icon: automationIcon },
      { name: "Product Rules", icon: automationIcon },
      { name: "Quote Template", icon: automationIcon },
      { name: "Conga Template", icon: automationIcon }
    ],
  },
  {
    title: "Administration",
    skills: [
      { name: "Profiles", icon: securityIcon },
      { name: "Permission Sets", icon: securityIcon },
      { name: "FLS", icon: securityIcon },
      { name: "OWD & Sharing", icon: securityIcon },
      { name: "Record Types", icon: securityIcon },
      { name: "Validation Rules", icon: securityIcon },
      { name: "Lightning App Builder", icon: securityIcon },
      { name: "Reports & Dashboards", icon: securityIcon },
    ],
  },
  {
    title: "Integrations",
    skills: [
      { name: "REST APIs", icon: integrationIcon },
      { name: "Named Credentials", icon: integrationIcon },
      { name: "External Client Apps", icon: integrationIcon },
      { name: "Platform Events", icon: integrationIcon },
      { name: "Webhooks", icon: integrationIcon },
      { name: "Postman", icon: toolIcon },
    ],
  },
  {
    title: "AI, Data & Tools",
    skills: [
      { name: "Prompt Builder", icon: aiIcon },
      { name: "Agentforce", icon: aiIcon },
      { name: "Data Loader", icon: dataIcon },
      { name: "Data Migration", icon: dataIcon },
      { name: "Git", icon: gitIcon },
      { name: "VS Code", icon: toolIcon },
    ],
  },
];

// ---------- Exposure & Training (wide box under the skill groups) ----------
// label = how it was used. Shown as a small tag on each chip.
export const exposure = {
  title: "Exposure & Training",
  items: [
    { name: "MuleSoft", label: "Training", icon: integrationIcon },
    { name: "Data Cloud", label: "Exposure", icon: cloudIcon },
    { name: "Experience Cloud", label: "Exposure", icon: cloudIcon },
    { name: "Einstein Activity Capture", label: "Exposure", icon: aiIcon },
    { name: "Workato", label: "US Client", icon: integrationIcon },
    { name: "Zapier", label: "US Client", icon: automationIcon },
    { name: "Intercom", label: "US Client", icon: toolIcon },
    { name: "APITemplate.io", label: "US Client", icon: codeIcon },
    { name: "Lucidchart", label: "Diagrams", icon: toolIcon },
  ],
};

// ---------- Certifications ----------
export const certifications = [
  {
    name: "Salesforce Certified Agentforce Specialist",
    status: "Certified · Dec 2025",
    image: agentforceBadge,
  },
  {
    // Placeholder: replace with the next certification when earned,
    // or delete this block.
    name: "[Next certification]",
    status: "Add when earned",
    image: nextCertBadge,
    placeholder: true,
  },
];

// ---------- Experience (newest first) ----------
export const experiences = [
  {
    role: "Salesforce Developer (Associate Technical Consultant)",
    company: "Blueflame Labs",
    location: "Pune, Maharashtra, India",
    date: "Jul 2025 - Present",
    award: {
      title: "Rookie of TR14 award",
      description: "Recognized for standout performance among 57 trainees.",
      images: [
        { src: awardImage1, alt: "Rookie of TR14 medal" },
        { src: awardImage2, alt: "Rookie of TR14 award" },
      ],
    },
    points: [
      "Delivered Salesforce solutions on **Sales Cloud, CPQ, Revenue Cloud Advanced and Billing** for field-services, healthcare and financial-services clients, configuring product rules, price rules and bundles that enabled **accurate pricing** and a smoother quoting process.",
      "Optimized slow business automation by removing **repeated trigger and Flow runs**, which made key workflows **up to 5x faster** and gave users quicker, more reliable record updates.",
      "Audited every active product in Production with **30+ SOQL checks** to catch linked records that could break during migration, and shared the findings in a **client-ready Excel report** that guided a safe go-live.",
      "Rehearsed a **critical product migration** across multiple sandboxes, defining the order for retiring old products and activating new ones, and timed every run to give the client a **tested time estimate** for the product replacement.",
      "Managed **admin work** across security, record types, page layouts, approval processes and Lightning pages, plus data import and export jobs, deploying through **change sets with rollback plans** to keep every release safe.",
      "Led **a 20-hour and a 60-hour task**, guiding **5 to 6 peers** working under each one, dividing the work and supporting **overnight production deployments**, which resulted in seamless delivery of both tasks.",
      "Worked independently on a **US-based client project**, managing requirements, updates and delivery directly with the client team over Slack and Asana, which **built client trust** and kept work on track across time zones.",
    ],
    current: true,
  },
  {
    role: "Software Developer (Independent Projects)",
    company: "Self-employed",
    location: "Pune, Maharashtra, India",
    date: "Feb 2025 - Jun 2025",
    points: [
      "Developed Runnerz, a Spring Boot 3 run-tracking app with full CRUD REST APIs and PostgreSQL persistence.",
      "Built BlogSpot, a blogging platform with JWT authentication and CRUD operations using React, Node.js and MySQL.",
    ],
  },
  {
    role: "Software Developer Trainee (PG-DAC)",
    company: "SunBeam Institute of Information Technology",
    location: "Karad, India",
    date: "Aug 2024 - Feb 2025",
    points: [
      "Built StayHub, a PG accommodation platform, as the capstone project of the PG-DAC program.",
      "Developed REST APIs using Java, Spring Boot and MySQL, with JWT authentication and role-based access.",
      "Integrated Razorpay for secure payments and validated APIs with Postman.",
    ],
  },
];

// ---------- Salesforce Implementations (Blueflame Labs client work) ----------
// Keep client names out: describe each client by type instead.
export const implementations = [
  {
    product: "Revenue Cloud Advanced",
    title: "Product Migration to Revenue Cloud",
    client: "Field-services client · Data analysis + migration readiness",
    points: [
      "Analyzed 30 production bundle products across UOM, catalog, selling models and price books.",
      "Built isolated test data to validate Product Catalog and UOM behaviour before migration.",
      "Turned the findings into a step-by-step rehearsal runbook with rollback planning.",
    ],
    tags: ["RCA", "Product Catalog", "SOQL", "Runbooks"],
  },
  {
    product: "Salesforce CPQ",
    title: "Quote Template Revamp",
    client: "Enterprise client · Implementation + QA",
    points: [
      "Built 22 CPQ quote templates with conditional sections, legal terms and line columns.",
      "Fixed HTML and layout issues so quotes generate as clean, client-ready PDFs.",
      "Tested every template variant against real quote scenarios.",
    ],
    tags: ["CPQ", "Quote Templates", "HTML", "QA"],
  },
  {
    product: "Agentforce · Prompt Builder",
    title: "AI Summaries for Leads and Cases",
    client: "Internal sales and support teams · Implementation",
    points: [
      "Generated AI summaries from Chatter, customer interactions and record history.",
      "Reduced manual review of Lead and Case records by about 40%.",
    ],
    tags: ["Prompt Builder", "Agentforce", "Flows"],
  },
  {
    product: "Sales Cloud",
    title: "Email Thread to Task Automation",
    client: "Services client · Implementation + testing",
    points: [
      "Built an Apex handler and Flow to turn email threads into tracked Tasks.",
      "Added validation rules and picklist values, with positive and negative test scenarios.",
      "Wrote Apex test classes and a report to track the automated Tasks.",
    ],
    tags: ["Apex", "Flows", "Validation Rules", "Test Classes"],
  },
];

// ---------- Projects ----------
export const projects = [
  {
    title: "Runnerz",
    date: "Mar 2025",
    description:
      "Run-tracking web app where users record, view, update and delete runs through full CRUD REST APIs, backed by PostgreSQL.",
    tags: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
    image: runnerzImage,
    github: "https://github.com/nishant-deshmukh/runnerz-run-management",
  },
  {
    title: "BlogSpot",
    date: "May 2025",
    description:
      "Blogging platform with JWT login, CRUD operations for posts, a personal posts view and a rich text editor.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    image: blogspotImage,
    github: "https://github.com/nishant-deshmukh/BlogSpot-Blogging-Platform",
  },
  {
    title: "StayHub",
    date: "Feb 2025",
    description:
      "PG accommodation platform where owners list properties and manage rooms, with JWT auth, role-based access and Razorpay payments.",
    tags: ["Spring Boot", "MySQL", "React", "Razorpay"],
    image: stayhubImage,
    github: "https://github.com/smokiesam/CDAC_PROJECT_KD_J028",
  },
];
