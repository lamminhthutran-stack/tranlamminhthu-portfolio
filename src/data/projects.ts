export type Project = {
    id: string;
    n: string;
    title: string;
    impact: string;
    tags: string[];
    year?: string;
    metric: string;
    gradient: string;
    content: string; // The content for the project sub-page
    video?: string; // Optional video URL or path
};

export const projects: Project[] = [
    {
        id: "ai-daily-newsletter",
        n: "01",
        title: "AI Daily Newsletter",
        impact: "Saved hours every week with auto-curated market briefings.",
        tags: ["Automation", "Personal Project"],
        year: "2026",
        metric: "↓ 3 hrs / week",
        gradient: "linear-gradient(135deg, oklch(0.5 0.2 255), oklch(0.18 0.06 270))",
        content: "Full case study coming soon... This newsletter aggregates daily AI insights, categorizes them using LLMs, and synthesizes them into actionable summaries for quick consumption.",
        video: "/demo-video.mp4", // Replace with your actual video filename
    },
    {
        id: "project-x-workflow",
        n: "02",
        title: "Project X Workflow System",
        impact: "Automated communication for 700+ applicants across multiple cohorts.",
        tags: ["Automation", "Marketing Campaign", "Communication"],
        year: "2025 - 2026",
        metric: "700+ applicants",
        gradient: "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.16 0.05 260))",
        content: "Full case study coming soon... Project X is an automated intake system designed to process 700+ applicants smoothly through multi-stage validations, eliminating manual entry.",
    },
    {
        id: "dashboards-data-vis",
        n: "03",
        title: "Dashboards for Data Visualization",
        impact: "Reduced repetitive manual review tasks and lowered platform risk.",
        tags: ["Data Visualization", "Personal Project"],
        metric: "Faster decisions with live dashboards",
        gradient: "linear-gradient(135deg, oklch(0.4 0.17 270), oklch(0.16 0.05 250))",
        content: "Full case study coming soon... Through dynamic query generation and unified charts, this platform transforms fragmented spreadsheets into rich visual narratives.",
    },
    {
        id: "partner-reporting",
        n: "04",
        title: "Partner Reporting Automation System",
        impact: "Built an automated Apps Script workflow that generated partner-facing sheets and reduced repetitive manual reporting work.",
        tags: ["Automation", "Operations", "Apps Script"],
        year: "2026",
        metric: "↓ 4 hrs / week",
        gradient: "linear-gradient(135deg, oklch(0.46 0.18 248), oklch(0.18 0.06 268))",
        content: "Full case study coming soon... Driven by Google Apps Script, this reporting automation generates individually isolated spreadsheets for external partners weekly, completely hands-off.",
    },
];
