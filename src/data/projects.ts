export type ProjectContentSection = {
  title: string;
  body?: string | string[]; // string for paragraph, array for bullets
  video?: string;
  image?: string | { url: string; alt?: string };
  demoUrl?: string;
  demoNote?: string;
  demoAspectRatio?: string;
  fileDownload?: { url: string; label: string; caption?: string };
  isFullWidth?: boolean;
  comparisonDemos?: {
    left: { url: string; title: string };
    right: { url: string; title: string };
    aspectRatio?: string;
  };
};

export type Project = {
  id: string;
  n: string;
  title: string;
  impact: string;
  tags: string[];
  year?: string;
  metric: string;
  gradient: string;
  content: string | ProjectContentSection[]; // The content for the project sub-page
  video?: string; // Optional video URL or path
  demoUrl?: string; // Optional PowerBI/iframe demo URL
};

export const projects: Project[] = [
  {
    id: "ai-daily-newsletter",
    n: "01",
    title: "Daily News Briefing System",
    impact: "Saved hours every week with auto-curated market briefings.",
    tags: ["Automation", "Personal Project"],
    year: "2026",
    metric: "↓ 3 hrs / week",
    gradient: "linear-gradient(135deg, oklch(0.5 0.2 255), oklch(0.18 0.06 270))",
    content: [
      {
        title: "Overview",
        body: 'Built an automated Daily News Briefing system that aggregates articles from multiple sources, filters high-signal stories, and delivers AI-summarized reports with clear "So What" insights — cutting manual news review from hours to minutes.',
      },
      {
        title: "Problem",
        body: "Scanning news across multiple sources daily was slow and inconsistent. Key macro, financial, and industry signals were often missed, and raw articles rarely surfaced clear business implications.",
      },
      {
        title: "Solution",
        body: "Designed an n8n automation pipeline that pulls news via RSS/APIs, applies relevance filters, uses an LLM to summarize and generate insight bullets, then delivers a structured daily report — fully hands-off.",
      },
      {
        title: "Stack",
        body: "n8n · RSS/APIs · LLM (Prompt Engineering) · JSON Parsing · Workflow Automation",
      },
      {
        title: "What I Learned",
        body: [
          "Designing automation around business outcomes, not just technical logic",
          "Prompt engineering for consistent, structured outputs",
          "Building reliable pipelines with error handling and scalable logic",
        ],
      },
    ],
    video: "/daily_news_vid.mp4",
  },
  {
    id: "partner-reporting",
    n: "02",
    title: "Partner Reporting Automation System",
    impact:
      "Built an automated Apps Script workflow that generated partner-facing sheets and reduced repetitive manual reporting work.",
    tags: ["Automation", "Operations", "Apps Script"],
    year: "2026",
    metric: "↓ 4 hrs / week",
    gradient: "linear-gradient(135deg, oklch(0.46 0.18 248), oklch(0.18 0.06 268))",
    content: [
      {
        title: "Overview",
        body: "Built a Candidate CV Management Automation System using Google Apps Script to streamline recruitment operations from Google Form submissions to recruiter-ready partner sheets. Designed to automatically organize applicants by company and role, manage CV access permissions, and keep data synced with minimal manual intervention.",
      },
      {
        title: "Problem",
        body: [
          "Managing candidate submissions manually across Google Forms and spreadsheets was time-consuming and error-prone. Recruiters needed to sort applicants by company and position, create partner-facing sheets, update new submissions, prevent duplicates, and ensure CV files were accessible.",
          "This created risks of delayed processing, duplicate records, broken file access, and inefficient handoff to hiring partners.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Created an automated Apps Script workflow that reads raw form responses from Google Sheets, dynamically splits applicants into company sub-sheets, generates recruiter-facing spreadsheets by company and position, automatically unlocks CV viewing permissions, and runs through form triggers plus periodic syncs.",
          "The system also includes duplicate prevention logic, trigger management, reset/rebuild tools, and concurrency protection using LockService.",
        ],
      },
      {
        title: "Stack",
        body: [
          "Google Apps Script",
          "Google Sheets",
          "Google Forms",
          "Google Drive API",
          "Trigger Automation",
          "Spreadsheet Workflow Logic",
          "LockService",
          "Data Validation Logic",
        ],
      },
      {
        title: "Outcome",
        body: [
          "Reduced manual workload in recruitment operations",
          "Improved speed of candidate routing and partner handoff",
          "Prevented duplicate applicant entries",
          "Improved reliability of CV access sharing",
          "Created a scalable and reusable hiring operations system",
          "Increased visibility and control through automated sync workflows",
        ],
      },
      {
        title: "What I Learned",
        body: [
          "How to turn manual recruiting workflows into scalable internal systems",
          "Designing automation that balances speed, reliability, and usability",
          "Using triggers and concurrency controls for stable operations",
          "Structuring spreadsheet-based systems like lightweight internal tools",
          "Building end-to-end workflows that solve real operational bottlenecks",
        ],
      },
      {
        title: "Documentation",
        fileDownload: {
          url: "/Partner Reporting Automation System_SOP.docx",
          label: "Download SOP Documentation",
          caption: "Detailed step-by-step documentation of the system design, automation logic, and implementation workflow."
        }
      }
    ],
    video: "/Partner%20Sheets%20Splitter.mp4",
  },
  {
    id: "project-x-workflow",
    n: "03",
    title: "Project X Workflow System",
    impact: "Automated communication for 700+ applicants across multiple cohorts.",
    tags: ["Automation", "Marketing Campaign", "Communication"],
    year: "2025 - 2026",
    metric: "",
    gradient: "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.16 0.05 260))",
    content: [
      {
        title: "Workflow 1 — Email Confirmation Workflow System",
        image: "/PJX%20Confirmation%20Email%20Workflow.png",
      },
      {
        title: "Overview",
        body: "Built an applicant operations automation for Project X Vietnam's Summer Fellowship recruitment — handling intake, segmentation, database logging, and confirmation emails end-to-end without manual intervention.",
      },
      {
        title: "Problem",
        body: "High application volume meant repetitive admin work: sorting submissions, updating spreadsheets, and sending confirmation emails manually — creating delays, inconsistency, and risk of missed responses.",
      },
      {
        title: "Solution",
        body: "Designed an n8n pipeline that receives submissions via webhook, classifies applicants as Early Bird or Normal based on submission time, logs records to the correct Google Sheet, and sends personalized HTML confirmation emails with auto-updated delivery status.",
      },
      {
        title: "Stack",
        body: "n8n · Google Sheets · Gmail · Webhooks · JavaScript · HTML Email Templates",
      },
      {
        title: "What I Learned",
        body: [
          "Designing ops systems around real workflow bottlenecks, not just automation for automation's sake",
          "Combining data routing + user communication in a single reliable pipeline",
          "Building scalable, reusable workflows with tracking and status controls",
        ],
      },
      {
        title: "Workflow 2 — Media Partnership Outreach Automation",
        image: "/PJX%20Outreach%20Email.png",
      },
      {
        title: "Overview",
        body: "Built an outreach automation system for Project X Vietnam's recruitment marketing — covering initial partner emails, timed follow-ups, and centralized campaign tracking across universities, clubs, and communities.",
      },
      {
        title: "Problem",
        body: "Managing outreach to multiple partners manually made it hard to track send status, follow-up timing, and responses — creating missed opportunities and inconsistent communication across the pipeline.",
      },
      {
        title: "Solution",
        body: "Created an n8n workflow that reads partner leads from Google Sheets, sends personalized outreach emails, auto-triggers follow-ups for non-responders after a defined window, and updates tracking status in one centralized sheet.",
      },
      {
        title: "Stack",
        body: "n8n · Google Sheets · Gmail · Conditional Routing · Email Personalization · Campaign Tracking",
      },
      {
        title: "What I Learned",
        body: [
          "Operationalizing outbound campaigns as repeatable, scalable systems",
          "Structuring CRM-like pipeline tracking with simple, accessible tools",
          "Using automation to enforce follow-up discipline and reduce response drop-off",
        ],
      },
    ],
  },
  {
    id: "dashboards-data-vis",
    n: "04",
    title: "Dashboards for Data Visualization",
    impact: "Reduced repetitive manual review tasks and lowered platform risk.",
    tags: ["Data Visualization", "Personal Project"],
    year: "2025",
    metric: "Faster decisions with live dashboards",
    gradient: "linear-gradient(135deg, oklch(0.4 0.17 270), oklch(0.16 0.05 250))",
    content: [
      {
        title: "Dashboard 1 — Adidas Sales Performance (Power BI)",
        video: "/vid.mp4",
      },
      {
        title: "Overview",
        body: "Built an interactive Power BI dashboard analyzing Adidas retail partner performance across revenue, profit, margin, geography, and product lines — enabling self-serve analytics for stakeholder decision-making.",
      },
      {
        title: "Problem",
        body: "Sales data across multiple retailers, cities, and product categories was fragmented. Decision-makers needed a faster way to monitor KPIs and drill into trends without manual spreadsheet work.",
      },
      {
        title: "Solution",
        body: "Designed a centralized dashboard with dynamic filters and DAX-driven KPIs, transforming raw transactional data into visual business insights — sliceable by retailer, location, and date in real time.",
      },
      {
        title: "Stack",
        body: "Power BI · DAX · Power Query · Excel/CSV",
      },
      {
        title: "What I Learned",
        body: [
          "Structuring dashboards around business questions, not just charts",
          "Translating raw data into KPIs that drive decisions",
          "Designing for usability — empowering self-serve analysis over static reports",
        ],
      },
      {
        title: "Interactive Demo",
        demoUrl:
          "https://app.powerbi.com/reportEmbed?reportId=6c360436-cc00-44c2-a011-6b6c772c3cc1&autoAuth=true&embeddedDemo=true",
        demoNote: "* Sign in Microsoft business account to try interactive dashboards.",
      },
      {
        title: "Dashboard 2 — PepsiCo Sales Performance (Excel)",
        video: "/vid1.mp4",
      },
      {
        title: "Overview",
        body: "Built an interactive Excel dashboard for PepsiCo tracking revenue, profitability, brand mix, retailer contribution, and geographic trends — consolidating scattered data into one executive-ready reporting view.",
      },
      {
        title: "Problem",
        body: "Raw sales data across multiple retailers, brands, and time periods lived in separate spreadsheets — making performance tracking slow and insight generation manual.",
      },
      {
        title: "Solution",
        body: "Created a dynamic Excel dashboard using Pivot Tables, slicers, and KPI cards that lets users filter by retailer and date period to explore performance instantly — no formulas needed by end users.",
      },
      {
        title: "Stack",
        body: "Microsoft Excel · Pivot Tables & Charts · Slicers / Timeline Filters · Advanced Formulas",
      },
      {
        title: "What I Learned",
        body: [
          "Turning spreadsheets into decision-making tools without complex tech stacks",
          "Building stakeholder-friendly dashboards with clear visual hierarchy",
          "Balancing analytical depth with clean, usable presentation",
        ],
      },
      {
        title: "Project Files",
        fileDownload: {
          url: "/Pepsico_Dashboard.xlsx",
          label: "Download Pepsico_Dashboard.xlsx",
        },
      },
    ],
  },
];
