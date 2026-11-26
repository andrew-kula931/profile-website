export interface ProjectSlide {
  src: string;
  alt: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: "industry" | "research";
  organization: string;
  logo?: string;
  logoAlt?: string;
  summary: string;
  highlights: string[];
  tags: string[];
  aspectRatio: string;
  slides: ProjectSlide[];
}

export const projects: ProjectItem[] = [
  {
    id: "lotrecords",
    index: "01",
    title: "Client Data Records",
    subtitle: "Data-Focused Record Keeping",
    category: "industry",
    organization: "2Mation Solutions Inc.",
    logo: "/profile-website/2mation.png",
    logoAlt: "2Mation Solutions Inc. Logo",
    summary:
      "Complex, client-focused record keeping application delivering a spreadsheet-like feel while keeping the user experience simple, streamlined, and largely automated.",
    highlights: [
      "Features a data-efficient version control system, basic document and chart editors, change tracking, and keyboard shortcuts.",
      "Modularized for custom fit for client usage so that data adheres cleanly to any client's workflow.",
    ],
    tags: ["Version Control", "Chart & Doc Editors", "Change Tracking", "Modular Architecture"],
    aspectRatio: "16 / 10",
    slides: [
      { src: "/profile-website/lot_lwcf.png", alt: "Record data page" },
      { src: "/profile-website/lot_charts.png", alt: "Record chart editor page" },
      { src: "/profile-website/lot_document_editor.png", alt: "Record document editor page" },
      { src: "/profile-website/lot_export_all.png", alt: "Record export all modal" },
    ],
  },
  {
    id: "poSystem",
    index: "02",
    title: "Inventory Management System",
    subtitle: "Network of Inventory Software",
    category: "industry",
    organization: "2Mation Solutions Inc.",
    logo: "/profile-website/2mation.png",
    logoAlt: "2Mation Solutions Inc. Logo",
    summary:
      "A network of multiple applications segmenting financial documentation, organization record tracking, and operations into focused sub-applications.",
    highlights: [
      "Provides users with a streamlined experience to handle tedious, repetitive operational tasks.",
      "Covers Invoices, Order Receipts, Staff Requests, and Inventories across dedicated workflows.",
    ],
    tags: ["Invoices", "Order Receipts", "Staff Requests", "Multi-App Suite"],
    aspectRatio: "16 / 10",
    slides: [
      { src: "/profile-website/PurchaseOrder.png", alt: "Purchase Order Details Page" },
      { src: "/profile-website/po_main_list.png", alt: "Purchase Order Main List Page" },
      { src: "/profile-website/po_add_ticket.png", alt: "Purchase Order Add Ticket Page" },
    ],
  },
  {
    id: "admin",
    index: "03",
    title: "Administration Application",
    subtitle: "Organization Facilitation App",
    category: "industry",
    organization: "2Mation Solutions Inc.",
    logo: "/profile-website/2mation.png",
    logoAlt: "2Mation Solutions Inc. Logo",
    summary:
      "Facilitates organization-level configurations such as user access control, organization settings, and automated backend services.",
    highlights: [
      "Centralizes user access management, scheduled cron jobs, and line-item maintenance.",
      "Supports a wide breadth of configuration options across every application an organization subscribes to.",
    ],
    tags: ["Access Control", "Cron Jobs", "Org Settings", "Backend Automation"],
    aspectRatio: "16 / 10",
    slides: [
      { src: "/profile-website/admin_team.png", alt: "Administration team management page" },
      { src: "/profile-website/admin_cron_job.png", alt: "Administration cron job management page" },
      { src: "/profile-website/admin_line_items.png", alt: "Administration line item maintenance page" },
    ],
  },
  {
    id: "liftup",
    index: "04",
    title: "Lift Up",
    subtitle: "Social Media Application",
    category: "industry",
    organization: "2Mation Solutions Inc.",
    logo: "/profile-website/2mation.png",
    logoAlt: "2Mation Solutions Inc. Logo",
    summary:
      "A mobile-first social platform built for individuals in a community to connect and help one another.",
    highlights: [
      "Includes realtime features, a built-in image editor, and community feeds.",
      "Engineered around a team, group, and individual messaging architecture.",
    ],
    tags: ["Mobile-First", "Realtime Messaging", "Image Editor", "Team Architecture"],
    aspectRatio: "12 / 10",
    slides: [
      { src: "/profile-website/lift_up_home.png", alt: "Lift Up Home page" },
      { src: "/profile-website/LiftUp.png", alt: "Lift Up messaging page" },
      { src: "/profile-website/lift_up_teams.png", alt: "Lift Up teams menu" },
      { src: "/profile-website/lift_up_image_editor.png", alt: "Lift Up image editor" },
    ],
  },
  {
    id: "webVis",
    index: "05",
    title: "Algorithm Visualization",
    subtitle: "Runtime Visualization for Cutting-Edge Solvers",
    category: "research",
    organization: "UNL Constraint Processing Lab",
    summary:
      "Internal algorithm visualization software built for the University of Nebraska-Lincoln Constraint Processing Lab.",
    highlights: [
      "Renders realtime visualizations of output data from a custom satisfiability solver.",
      "Supports multi-chart grid comparisons for metrics like backtracks and instantiations per depth.",
    ],
    tags: ["Data Visualization", "CSP / SAT Solver", "Multi-Chart Grid", "Research Tooling"],
    aspectRatio: "12 / 10",
    slides: [
      {
        src: "/profile-website/webVis_bpd.png",
        alt: "Algorithm Visualization Backtracks Per Depth Editor Page",
      },
      {
        src: "/profile-website/webVis_ipd.png",
        alt: "Algorithm Visualization Instantiations Per Depth Editor Page",
      },
      {
        src: "/profile-website/webVis_multi_page.png",
        alt: "Algorithm Visualization editor with a grid of charts",
      },
    ],
  },
];
