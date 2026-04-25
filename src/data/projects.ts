export type ProjectContentSection = {
    title: string;
    body?: string | string[]; // string for paragraph, array for bullets
    video?: string;
    demoUrl?: string;
    fileDownload?: { url: string; label: string };
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
        title: "AI Daily Newsletter",
        impact: "Saved hours every week with auto-curated market briefings.",
        tags: ["Automation", "Personal Project"],
        year: "2026",
        metric: "↓ 3 hrs / week",
        gradient: "linear-gradient(135deg, oklch(0.5 0.2 255), oklch(0.18 0.06 270))",
        content: [
            {
                title: "Overview",
                body: "Built an automated daily newsletter that aggregates business, finance, economy, and technology news from multiple sources, runs each story through AI analysis, and delivers a structured HTML digest to my inbox every morning. The workflow runs on n8n, combining RSS feeds, NewsAPI, VNExpress, Claude via OpenRouter, and Gmail into a single end-to-end pipeline."
            },
            {
                title: "Problem",
                body: "Keeping up with business news manually was slow and shallow — headlines without context, no clear \"so what.\" I wanted a system that could turn scattered daily information into concise, decision-oriented insights for market awareness, business learning, and strategic thinking."
            },
            {
                title: "Solution",
                body: "Designed a fully automated pipeline that runs every morning at 7AM, pulls from multiple news sources, filters and classifies content by category, sends it to Claude for structured analysis, formats the output into an HTML email, and delivers it through Gmail — with no manual input required."
            },
            {
                title: "My Role",
                body: "Designed the full workflow logic, prompt structure, content classification framework, HTML email template, and automation flow in n8n from scratch."
            },
            {
                title: "Workflow",
                body: [
                    "Trigger — Schedule node fires at 7AM daily",
                    "Data collection — Fetches news from NewsAPI, RSS feeds, VNExpress, and ZenQuotes",
                    "Data processing — JavaScript code node cleans, classifies, and limits news items by category",
                    "AI analysis — Claude generates structured insights using a fixed four-lens framework",
                    "HTML formatting — Output is cleaned and converted into email-ready HTML",
                    "Delivery — Gmail sends the final digest to selected recipients"
                ]
            },
            {
                title: "Analysis Framework",
                body: [
                    "Summary — What happened and who is involved",
                    "Why it matters — The business, market, or economic significance",
                    "Forward outlook — What may unfold over the next 3–12 months",
                    "Actionable learning — Key takeaways for a founder, PM, investor, or student"
                ]
            },
            {
                title: "Key Features",
                body: [
                    "Multi-source news aggregation with fallback rules to avoid gaps in key categories",
                    "AI-generated \"so what\" analysis structured around a fixed decision framework",
                    "Content classified across finance, economy, business, and technology",
                    "Clean HTML email template with clear visual hierarchy",
                    "Fully automated daily scheduling — zero manual input"
                ]
            },
            {
                title: "Stack",
                body: "n8n · NewsAPI · RSS Feed · VNExpress RSS · ZenQuotes API · Claude Sonnet via OpenRouter · JavaScript · Gmail"
            },
            {
                title: "Outcome",
                body: "A repeatable personal intelligence system that eliminates manual news scanning and converts daily information into structured strategic insights. The project demonstrates workflow design, API integration, prompt engineering, automation logic, and business-oriented information synthesis."
            },
            {
                title: "What I Learned",
                body: "The most important design decision wasn't the automation itself — it was building a reliable analysis framework. Without a fixed structure, AI output tends to summarize without adding value. The four-lens framework forced the model to go beyond headlines and explain market relevance, future implications, and practical lessons from every story."
            }
        ],
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
        content: [
            {
                title: "1st Dashboard: Adidas Sales Performance",
                body: "Watch the video demo of our first dashboard below.",
                video: "/vid.mov"
            },
            {
                title: "Overview",
                body: "Built an interactive **Power BI sales performance dashboard** analyzing Adidas retail partner performance across revenue, profit, margin, units sold, geography, product lines, and seasonality. Designed to help stakeholders quickly identify top-performing channels, markets, and growth opportunities through self-serve analytics."
            },
            {
                title: "Problem",
                body: "Raw sales data across multiple retailers, cities, states, and product categories was fragmented and difficult to interpret. Decision-makers needed a faster way to monitor KPIs, compare partner performance, and drill into trends without manual spreadsheet analysis."
            },
            {
                title: "Solution",
                body: "Developed a centralized dashboard with dynamic filters and visual storytelling to transform transactional sales data into actionable business insights. Enabled users to slice performance by retailer, location, and date range in real time."
            },
            {
                title: "My Role",
                body: [
                    "Cleaned and modeled raw sales data for reporting",
                    "Designed dashboard layout and KPI framework",
                    "Built DAX measures for business metrics",
                    "Created interactive filters, slicers, and drill-down visuals",
                    "Structured insights for executive-level decision making",
                    "Optimized usability and presentation for portfolio/demo use"
                ]
            },
            {
                title: "Workflow",
                body: [
                    "Imported and cleaned raw sales dataset",
                    "Built data model and relationships in Power BI",
                    "Defined core KPIs (Revenue, Profit, Margin, Units Sold)",
                    "Designed visuals for trend, geography, retailer share, product mix",
                    "Added slicers for retailer, city, and date range",
                    "Tested interactivity and refined dashboard UX"
                ]
            },
            {
                title: "Key Features",
                body: [
                    "KPI Cards: Total Revenue, Profit, Margin, Units Sold",
                    "Revenue trend by quarter",
                    "Retailer performance comparison",
                    "Revenue by state / geographic analysis",
                    "Revenue share donut chart by retailer",
                    "Revenue vs Profit by product line",
                    "Dynamic filtering by retailer, city, and date",
                    "Interactive cross-filtering between visuals"
                ]
            },
            {
                title: "Stack",
                body: [
                    "Power BI",
                    "DAX",
                    "Power Query",
                    "Excel / CSV Data Source",
                    "Data Visualization & Dashboard Design"
                ]
            },
            {
                title: "Outcome",
                body: [
                    "Converted raw sales data into an executive-ready analytics tool",
                    "Reduced time to identify top retailers and markets",
                    "Improved visibility into profitability by category",
                    "Demonstrated strong business intelligence + storytelling skills",
                    "Created a portfolio-ready interactive dashboard project"
                ]
            },
            {
                title: "What I Learned",
                body: [
                    "How to structure dashboards around business questions, not just charts",
                    "Translating raw data into clear KPIs and decisions",
                    "Designing dashboards for usability and stakeholder needs",
                    "Using filters/interactions to empower self-serve analysis",
                    "Balancing analytical depth with clean visual communication"
                ]
            },
            {
                title: "2nd Dashboard: PepsiCo Performance",
                body: "Interactive Pepsico Dashboard demo.",
                video: "/vid1.mov",
                fileDownload: {
                    url: "/Pepsico_Dashboard.xlsx",
                    label: "Download Pepsico_Dashboard.xlsx"
                }
            },
            {
                title: "Overview",
                body: "Built an interactive Excel Sales Performance Dashboard for PepsiCo to track revenue, profitability, product performance, retailer contribution, and geographic sales trends. Designed for business stakeholders to monitor KPIs and make faster commercial decisions through one centralized reporting view."
            },
            {
                title: "Problem",
                body: "Sales data across multiple retailers, brands, states, and time periods was scattered in raw spreadsheets, making it difficult to quickly identify top performers, revenue drivers, and profit opportunities. Manual reporting was time-consuming and lacked clear visualization."
            },
            {
                title: "Solution",
                body: "Created a dynamic Excel dashboard that transforms raw transactional data into actionable insights using pivot tables, slicers, KPI cards, charts, and automated calculations. Users can filter by retailer and time period to explore performance instantly."
            },
            {
                title: "My Role",
                body: [
                    "Cleaned and structured raw sales data",
                    "Built Excel data model using Pivot Tables",
                    "Designed executive dashboard layout and UI",
                    "Created KPI logic for revenue, profit, margin, and units sold",
                    "Added interactive slicers for retailer and date filtering",
                    "Developed charts to visualize trends, geography, and brand mix",
                    "Optimized dashboard for presentation and portfolio use"
                ]
            },
            {
                title: "Workflow",
                body: [
                    "Imported and organized raw sales dataset",
                    "Standardized fields (date, retailer, brand, revenue, profit, units)",
                    "Created Pivot Tables for metric aggregation",
                    "Built KPI summary cards",
                    "Designed charts for retailer, trend, geography, and margin analysis",
                    "Added slicers for dynamic filtering",
                    "Refined dashboard formatting and user experience"
                ]
            },
            {
                title: "Key Features",
                body: [
                    "KPI Cards: Total Revenue, Operating Profit, Margin, Units Sold",
                    "Best Product by Revenue",
                    "Best Performing Retailer",
                    "Revenue by Retailer comparison",
                    "Profit by Retailer over time",
                    "Revenue by State (US Map Visualization)",
                    "Revenue Trend by month/year",
                    "Revenue Share by Brand (Pie Chart)",
                    "Top 5 Brands by Margin",
                    "Interactive slicers for Retailer & Invoice Date"
                ]
            },
            {
                title: "Stack",
                body: [
                    "Microsoft Excel",
                    "Pivot Tables",
                    "Pivot Charts",
                    "Slicers / Timeline Filters",
                    "Advanced Formulas",
                    "Dashboard Design & Data Storytelling"
                ]
            },
            {
                title: "Outcome",
                body: [
                    "Converted raw spreadsheet data into an executive-ready dashboard",
                    "Reduced time needed for monthly sales reporting",
                    "Improved visibility into retailer and brand performance",
                    "Enabled faster identification of growth opportunities and low-margin areas",
                    "Demonstrated strong analytics + dashboarding capability using Excel"
                ]
            },
            {
                title: "What I Learned",
                body: [
                    "How to turn spreadsheets into decision-making tools",
                    "Structuring dashboards around business questions, not just visuals",
                    "Building interactive reports with Pivot Tables and slicers",
                    "Designing clean, stakeholder-friendly dashboards",
                    "Balancing analytical depth with usability and presentation quality"
                ]
            }
        ],
        demoUrl: "https://app.powerbi.com/reportEmbed?reportId=6c360436-cc00-44c2-a011-6b6c772c3cc1&autoAuth=true&embeddedDemo=true",
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
