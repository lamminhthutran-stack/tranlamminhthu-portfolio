export type ProjectContentSection = {
  title?: string;
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
    caption?: string;
  };
  comparisonVideos?: {
    left: { url: string; title: string };
    right: { url: string; title: string };
    aspectRatio?: string;
    caption?: string;
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
  headerDownload?: { url: string; label: string; caption?: string }; // Optional download link in the header
};

export const projects: Project[] = [
  {
    id: "ai-daily-newsletter",
    n: "01",
    title: "Daily News Briefing",
    impact: "Turning scattered information into a structured decision-support workflow",
    tags: ["Automation", "Personal Project"],
    year: "2026",
    metric: "↓ 3 hrs / week",
    gradient: "linear-gradient(135deg, oklch(0.5 0.2 255), oklch(0.18 0.06 270))",
    content: [
      {
        title: "Overview",
        body: "An automated information workflow that collects news from selected sources, filters for high-signal updates, and delivers a structured daily briefing — separating facts from interpretation so each update is easier to act on.",
      },
      {
        title: "Context",
        body: "In fast-moving environments, important updates are scattered across multiple sources and easy to miss. Reading news manually creates information overload — too much volume, too little signal. For someone earlier in their career without deep domain context, the problem is compounded: even when the right articles surface, it is not always clear what changed, why it matters, or what to do with it.",
      },
      {
        title: "Problem",
        body: "The core problem was not lack of information, but lack of structured filtering. News existed everywhere, but it was fragmented, repetitive, and time-consuming to process. What was missing was a faster way to identify what actually changed, why it mattered, and which updates deserved attention — with enough context to make the output actionable, not just informative.",
      },
      {
        title: "Why it mattered",
        body: "Without a structured briefing workflow, it is easy to spend time scanning low-priority updates while missing high-impact signals. For someone building domain knowledge, an unstructured reading habit also means absorbing facts without understanding implications. The goal was a system that did not just summarize news, but helped develop the habit of thinking about information in terms of relevance, impact, and forward implication.",
      },
      {
        title: "Decision-making",
        body: "Rather than summarizing every article, I designed the briefing around three core questions: What happened? Why does it matter? Who is affected? Each article is scored against relevance criteria — topic fit, significance, and value-added — before being included. This filtering step happens before summarization, not after, which keeps the output focused rather than comprehensive by default.\n\nThe briefing format was also deliberately structured to include two sections most news summaries omit: Actionable Learnings and Forward Outlook. These exist specifically to bridge the gap between raw information and practical understanding — a deliberate design choice for someone still building domain fluency.",
      },
      {
        title: "Tradeoff",
        body: "A fully comprehensive briefing captures more information but quickly becomes overwhelming to read. A shorter briefing is easier to consume but risks losing nuance on complex topics. There is also a practical cost: more content means more token usage and longer processing time.\n\nThe decision was a priority-based format with a defined token budget — high-signal updates get full treatment, lower-priority items are either compressed or excluded. Conciseness was treated as a design constraint, not an afterthought.",
      },
      {
        title: "System designed",
        body: "Selected sources defined → articles collected via RSS and APIs → topic classification → relevance scoring and filtering → summary generated per article → \"why it matters\" and \"who is affected\" analysis added → Actionable Learnings and Forward Outlook sections appended → HTML formatting applied → daily briefing delivered.",
      },
      {
        title: "Iteration and debugging",
        body: "Three failure points emerged during build and were each addressed:\n\nDuplicate coverage across sources. Early outputs surfaced the same event multiple times from different outlets. The fix was shifting from article-level to event-level grouping — clustering by entity, time window, and key fact, then merging multiple sources into a single consolidated output.\n\nSummaries too generic. Initial prompts produced surface-level recaps with no analytical layer. The fix was rewriting the prompt around a fixed structure: what changed, what the key metric or signal was if available, and why it matters — rather than leaving the model to decide what to emphasize.\n\nIrrelevant articles passing through. Without an explicit filtering step, low-priority content made it into the briefing. The fix was adding a relevance scoring gate before summarization, so only articles meeting the threshold proceed to output.\n\nEach iteration made the briefing more structured, more signal-dense, and easier to read end to end.",
      },
      {
        title: "Outcome",
        body: "The system turned scattered daily news into a concise, structured briefing that made information review faster and more purposeful. Important updates became easier to identify, the \"so what\" layer was built into the output by default, and the workflow created a repeatable habit around processing information — not just consuming it.",
      },
      {
        title: "What this demonstrates",
        body: [
          "Information workflow design",
          "Automation thinking",
          "Prompt engineering",
          "Prioritization logic",
          "Product thinking",
          "Ability to turn fragmented inputs into a reusable decision-support system",
        ],
      },
      {
        title: "Stack",
        body: "n8n · RSS feeds and news APIs · LLM prompt engineering · HTML email formatting · Relevance scoring logic · Workflow automation",
      },
    ],
    video: "/daily_news_vid.mp4",
  },
  {
    id: "partner-reporting",
    n: "02",
    title: "Partner Reporting System",
    impact: "Standardizing handoffs through workflow mapping and SOP design",
    tags: ["Automation", "Operations", "Apps Script"],
    year: "2026",
    metric: "↓ 4 hrs / week",
    gradient: "linear-gradient(135deg, oklch(0.46 0.18 248), oklch(0.18 0.06 268))",
    content: [
      {
        isFullWidth: true,
        comparisonDemos: {
          left: { url: "https://embed.figma.com/board/GuAmF01Ybaxcido7OtJGWV/Partner-Reporting-Automation-System?node-id=1-738&embed-host=share", title: "As-Is Flowchart" },
          right: { url: "https://embed.figma.com/board/GuAmF01Ybaxcido7OtJGWV/Partner-Reporting-Automation-System?node-id=2-110&embed-host=share", title: "To-Be Flowchart" },
          aspectRatio: "800 / 450",
          caption: "This flowchart illustrates the transition from manual partner reporting workflows to an automated, scalable system."
        }
      },
      {
        title: "Overview",
        body: "A process documentation and reporting workflow improvement project for Project X Vietnam — mapping existing workflows, identifying operational bottlenecks, redesigning the process end-to-end, and producing both visual flowcharts and written SOP documentation for the team.",
      },
      {
        title: "Context",
        body: "The team managed partner-facing reporting and candidate handoffs across a high-volume recruitment cycle — approximately 300 applicants, each submitting 6 to 7 job applications. With that volume, operational clarity was not optional. The team needed a structured, repeatable way to manage reporting workflows and ensure nothing was missed during handoffs.",
      },
      {
        title: "Problem",
        body: "Existing workflows were heavily manual, inconsistently executed, and undocumented. This created two compounding problems: internally, the team spent significant time correcting errors and chasing missing information; externally, partners received inconsistent or delayed reports, which eroded trust and satisfaction over time.\n\nBeyond the immediate errors, there was no SOP documentation — meaning every new team member had to learn the process from scratch, and the organization had no reliable foundation to scale from. Each cohort effectively started over.",
      },
      {
        title: "Why it mattered",
        body: "Partner reporting sits at the intersection of communication quality, accountability, and execution consistency. Errors in this layer do not stay internal — they surface directly to partners and affect how the program is perceived. At the volume Project X operates, even a small error rate compounds quickly. Fixing this also meant building something that future generations of the team could actually use, not just the people who were there when it was built.",
      },
      {
        title: "Decision-making",
        body: "Before choosing a format, I considered what different stakeholders actually needed. A flowchart alone is fast to read but too high-level for execution. A written SOP is thorough but slow to scan in the middle of a task. I chose to combine both: visual workflow maps for quick orientation and shared understanding, written SOPs for step-by-step execution guidance. Different people use documentation differently — the system needed to work for both.",
      },
      {
        title: "Tradeoff",
        body: "Apps Script runs natively under a Google account — no OAuth setup, no token refresh, no credential storage. Getting n8n connected to Gmail and Sheets requires OAuth verification, which adds significant setup time before anything can be tested.\n\nThe tradeoff: Apps Script has trigger frequency caps, execution time limits, and quota constraints that make it unsuitable for high-volume workflows like confirmation email systems. For this use case — moderate-volume, periodic reporting runs — it was the right call to validate the workflow fast before investing in a more scalable orchestration layer.",
      },
      {
        title: "System designed",
        body: "As-Is workflow mapped → bottlenecks and error points identified → To-Be workflow redesigned → SOP documentation written → visual flowcharts embedded as quick reference → SOP packaged as downloadable execution guide for the team.",
      },
      {
        title: "Iteration",
        body: "The first version of the documentation was more technical than it needed to be. After reviewing it against the perspective of a new team member encountering the process for the first time, I revised the SOP to prioritize clarity over completeness — simpler language, clearer step sequencing, and explicit notes on the decisions that are easy to get wrong. The goal was documentation that a beginner could follow without needing someone to explain it in person.",
      },
      {
        title: "Outcome",
        body: "The redesigned system eliminated reporting errors for partners, improved handoff consistency across the team, and gave Project X a standardized process it could carry forward into future cohorts. Partner satisfaction improved as communication became more reliable and predictable. Internally, the team spent less time on corrections and more time on execution. Most importantly, the knowledge was no longer locked in people's heads — it was documented, accessible, and ready to be handed off.",
      },
      {
        title: "What this demonstrates",
        body: [
          "Process design",
          "Documentation thinking",
          "Operational clarity",
          "Stakeholder communication",
          "Ability to turn ambiguous workflows into executable systems that outlast the people who built them",
        ],
      },
      {
        title: "Stack",
        body: "Figma · Google Docs · Google Apps Script · Google Sheets · SOP Documentation · Workflow Mapping",
      }
    ],
    video: "/Partner%20Sheets%20Splitter.mp4",
    headerDownload: {
      url: "/Partner Reporting Automation System_SOP.docx",
      label: "Download SOP Documentation",
      caption: "Detailed step-by-step documentation of the system design, automation logic, and implementation workflow."
    }
  },
  {
    id: "project-x-workflow",
    n: "03",
    title: "Partnership Campaign System",
    impact: "Turning manual outreach into a repeatable operating workflow",
    tags: ["Automation", "Marketing Campaign", "Communication"],
    year: "2025 - 2026",
    metric: "",
    gradient: "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.16 0.05 260))",
    content: [
      {
        image: "/PJX%20Outreach%20Email.png",
      },
      {
        title: "Overview",
        body: "A semi-automated media partnership outreach system built for Project X Vietnam — managing partner leads, personalized email campaigns, follow-up logic, and campaign status tracking across the full outreach cycle.",
      },
      {
        title: "Context",
        body: "Project X Vietnam needed to reach out to potential media partners across universities, clubs, and communities while managing multiple leads, follow-up windows, and response statuses simultaneously. At scale, manual outreach made it difficult to maintain consistency, track who had responded, and ensure no lead fell through the cracks.",
      },
      {
        title: "Problem",
        body: "Without a structured system, outreach risked becoming inconsistent — emails sent at different times, follow-ups missed, and campaign ownership unclear across the team. Beyond logistics, sending generic emails without personalizing partner names signals low priority and reduces response rates. The team needed a repeatable process that could handle volume without sacrificing quality.",
      },
      {
        title: "Why it mattered",
        body: "Partnership outreach directly affected program execution. Delayed or inconsistent communication could reduce confirmation rates, slow down partner onboarding, and create unnecessary coordination work for the Growth team down the line. Getting this right early meant fewer follow-up problems later.",
      },
      {
        title: "Decision-making",
        body: "Before building, I considered two approaches: fully manual tracking versus full end-to-end automation. Full automation would save the most time but risked sending incorrect follow-ups if response classification was wrong — the system would have no way to distinguish a \"yes\" reply from an out-of-office or a soft decline without human review.\n\nI chose a semi-automated system instead. Automation handles the repetitive, error-prone parts — generating personalized emails, triggering sends, managing follow-up timing — while the team retains control over the judgment call: reading each response and updating the status before the next action triggers.",
      },
      {
        title: "Tradeoff",
        body: "The main tradeoff was speed versus reliability. A fully automated response-tracking system could technically reduce more manual work, but misclassifying a partner reply — especially at the confirmation stage — could send an inappropriate follow-up to someone who had already agreed or declined. The cost of that mistake outweighed the time saved.\n\nThe decision was to keep response review manual: the Growth team reads incoming replies and updates the tracking sheet accordingly. Automation then picks up from there — filtering by response status and triggering the next action only when the status is confirmed. This kept the system fast where speed was safe and human where judgment was needed.",
      },
      {
        title: "System designed",
        body: "Partner lead sheet populated → status fields initialized → personalized email generated per lead (name, organization) → sent via Gmail → team manually reviews incoming responses → tracking sheet updated with response status → follow-up email triggered for non-responders based on status filter → campaign progress visible in centralized tracker.",
      },
      {
        title: "Iteration and debugging",
        body: "One critical design decision came from thinking through failure points before they happened. The main risk was incomplete or incorrectly formatted lead data — a wrong email format or missing field could interrupt the send flow mid-campaign.\n\nThe naive approach would be to send all emails in a batch and then update statuses. The problem: if the flow breaks halfway, there is no clean way to resume without risking duplicate sends or skipped leads.\n\nInstead, I designed the workflow as a loop: send one email → update that record's status → move to the next. This way, if the flow is interrupted for any reason, it can resume from exactly where it stopped rather than starting over. Each record's status acts as a checkpoint, making the system recoverable by default.",
      },
      {
        title: "Outcome",
        body: "The system reduced manual tracking work for the Growth team, improved communication consistency across leads, and made follow-up management easier to oversee. The centralized tracker gave the team a real-time view of campaign progress — who had been contacted, who had responded, and who needed a follow-up — without relying on memory or separate spreadsheets.",
      },
      {
        title: "What this demonstrates",
        body: [
          "Workflow design",
          "Automation thinking",
          "Stakeholder communication",
          "Operational ownership",
          "Ability to scale a repeatable process without losing quality control",
        ],
      },
      {
        title: "Stack",
        body: "n8n · Google Sheets · Gmail · Conditional routing · Email personalization · Campaign status tracking",
      },
    ],
  },
  {
    id: "dashboards-data-vis",
    n: "04",
    title: "Sales Performance Dashboard",
    impact: "From raw data to decision-ready insights",
    tags: ["Data Visualization", "Personal Project"],
    year: "2025",
    metric: "Faster decisions with live dashboards",
    gradient: "linear-gradient(135deg, oklch(0.4 0.17 270), oklch(0.16 0.05 250))",
    content: [
      {
        title: "Interactive Dashboards",
        isFullWidth: true,
        comparisonVideos: {
          left: { url: "/vid.mp4", title: "Adidas Sales Performance (Power BI)" },
          right: { url: "/vid1.mp4", title: "PepsiCo Sales Performance (Excel)" },
          aspectRatio: "16 / 9"
        }
      },
      {
        title: "Overview",
        body: "An Excel and Power BI dashboard built to track revenue, profitability, product performance, retailer contributions, and geographic trends — using pivot tables, slicers, KPI cards, and dynamic charts.",
      },
      {
        title: "Context",
        body: "The organization needed a clearer way to monitor sales performance across products, retailers, and regions. Raw sales data existed but was not decision-ready — scattered across records with no centralized view.",
      },
      {
        title: "Problem",
        body: "Managers could see individual sales records, but had no structured way to compare revenue, profitability, top-performing products, retailer contribution, and geographic trends in one place. This made it harder to identify what was actually driving performance and where attention was needed.",
      },
      {
        title: "Why it mattered",
        body: "Without a structured performance view, decisions risk becoming reactive or overly dependent on manual checks. The goal was to turn raw sales data into a reusable decision-support system — one that could be filtered, compared, and shared without rebuilding from scratch each time.",
      },
      {
        title: "Decision-making",
        body: "Before touching any data, I started by defining the key business questions the dashboard needed to answer:\n\n- Which products are driving revenue?\n- Which products are actually profitable?\n- Which retailers contribute the most to overall performance?\n- Which regions show stronger or weaker results?\n\nThis framing shaped every metric and layout decision that followed — ensuring the dashboard was built around real questions, not just available data.",
      },
      {
        title: "Tradeoff",
        body: "The main tension was between completeness and readability. It would have been easy to surface every available metric, but an overcrowded dashboard creates noise rather than clarity.\n\nThe decision was to group insights into four focused views — KPI summary, product-level performance, retailer contribution, and geographic trends — each answering a specific question. This kept the dashboard scannable and purposeful rather than exhaustive.\n\nIt's also worth noting what this dashboard is and is not: it's a descriptive snapshot of current performance, designed to support review conversations. It was not built for inferential analysis or predictive modeling — and scoping it that way kept the design honest.",
      },
      {
        title: "System designed",
        body: "Raw data → cleaned and structured tables → KPI logic defined → dashboard layout planned → pivot tables built → slicers added for dynamic filtering → final dashboard view assembled and tested.",
      },
      {
        title: "Iteration",
        body: "One key insight during build: revenue alone can be misleading. A high-volume product with thin margins can look like a win until profitability is layered in. To address this, revenue and margin views were kept separate, so users could identify not just what sold — but what actually contributed to the bottom line.",
      },
      {
        title: "Outcome",
        body: "The dashboard turned scattered sales records into an executive-friendly view that made performance easier to monitor, compare, and explain. Business reviews that previously required manual data pulls could instead start from a single, filterable source of truth.",
      },
      {
        title: "What this demonstrates",
        body: [
          "Operations thinking",
          "Data structuring",
          "KPI design",
          "Business analysis",
          "Ability to turn raw data into a decision-ready system",
        ],
      },
      {
        title: "Stack",
        body: "Power BI, Excel",
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
