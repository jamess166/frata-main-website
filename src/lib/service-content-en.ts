import type { ServiceContent, ServiceSlug } from "@/lib/service-content";

export const serviceContentEn: Record<ServiceSlug, ServiceContent> = {
  "global-remote-bim-teams": {
    slug: "global-remote-bim-teams",
    title: "Remote BIM teams for operations that need immediate capacity",
    shortTitle: "Remote BIM teams",
    description:
      "We integrate remote BIM modelers, coordinators and support profiles to expand production capacity without disrupting operations.",
    intro:
      "When a company needs to scale BIM production without losing technical control, the problem is not only hiring more people. It requires an integrated team that understands your standards, deadlines and coordination workflow.",
    image: "/images/equipoBIM.webp",
    imageAlt: "Remote BIM team collaborating",
    pillars: [
      {
        title: "Operational integration",
        description: "We adapt to your processes, software stack, BEP, templates and coordination dynamics.",
      },
      {
        title: "Flexible scaling",
        description: "You can add targeted capacity or build a stable BIM cell depending on your project pipeline.",
      },
      {
        title: "Quality control",
        description: "Production is managed with follow-up and measurable criteria, not delivered as a black box.",
      },
    ],
    process: [
      { title: "Assessment", description: "We review scope, deliverables, workload and current team gaps." },
      { title: "Team setup", description: "We define profiles, responsibilities and coordination channels." },
      { title: "Onboarding", description: "We align naming conventions, templates, standards and CDE practices." },
      { title: "Continuous delivery", description: "We operate with technical follow-up, reporting and process improvement." },
    ],
    outcomes: [
      "Higher BIM production capacity without growing fixed structure at the same speed.",
      "Better continuity between modeling, coordination and documentation.",
      "Less friction when external resources join demanding projects.",
    ],
  },
  "custom-bim-software-development": {
    slug: "custom-bim-software-development",
    title: "BIM software development for Revit, Tekla and technical workflows",
    shortTitle: "BIM software development",
    description:
      "We create add-ins, automations and technical applications that reduce manual work and improve BIM productivity.",
    intro:
      "The difference between a traditional consultancy and one with its own software capability is significant. At Frata, we turn operational problems into practical tools for Revit, Tekla and connected technical workflows.",
    image: "/images/softwareDeveloper.webp",
    imageAlt: "BIM software development for Revit and Tekla",
    pillars: [
      {
        title: "Engineering plus software",
        description: "We do not code blindly; we understand modeling, coordination, site work and fabrication realities.",
      },
      {
        title: "Meaningful automation",
        description: "We target repetitive tasks, validations, exports and parameter control that consume valuable hours.",
      },
      {
        title: "Scalable solutions",
        description: "We can build anything from a focused utility to a connected suite of BIM tools.",
      },
    ],
    process: [
      { title: "Discovery", description: "We map the technical problem and its real impact on the client workflow." },
      { title: "Functional design", description: "We define experience, rules, edge cases and product scope." },
      { title: "Development and testing", description: "We build, validate and refine against real use cases." },
      { title: "Deployment and support", description: "We deliver a working version, documentation and iterative improvement." },
    ],
    outcomes: [
      "Less manual work and fewer errors in high-volume tasks.",
      "More consistency in exports, data structures and BIM deliverables.",
      "In-house software capability aligned with the client business.",
    ],
  },
  "on-site-bim-construction-support": {
    slug: "on-site-bim-construction-support",
    title: "On-site BIM support to connect model and execution",
    shortTitle: "On-site BIM support",
    description:
      "We bring BIM criteria to the jobsite to solve clashes, validate information and accelerate technical decisions.",
    intro:
      "A model has limited value if it does not connect with what happens on site. Our on-site BIM support translates digital information into practical action for supervision, production and control teams.",
    image: "/images/BIMObra.webp",
    imageAlt: "On-site BIM support",
    pillars: [
      {
        title: "Immediate response",
        description: "Faster technical resolution when clashes, questions or inconsistencies appear.",
      },
      {
        title: "Coordination across teams",
        description: "The model becomes a real communication tool between design, technical office and field execution.",
      },
      {
        title: "Continuous validation",
        description: "We detect inconsistencies before they become rework or delay.",
      },
    ],
    process: [
      { title: "Context review", description: "We analyze milestones, teams, available model and main project risks." },
      { title: "Deployment", description: "We define presence, responsibilities and support dynamics with the client." },
      { title: "Field support", description: "We resolve incidents and coordinate according to real project progress." },
      { title: "Feedback loop", description: "We document adjustments to strengthen future processes." },
    ],
    outcomes: [
      "Less friction between modeled intent and field execution.",
      "Better technical decision-making in critical moments.",
      "Higher value extracted from the BIM model during construction.",
    ],
  },
  "bim-for-manufacturing": {
    slug: "bim-for-manufacturing",
    title: "BIM detailing for fabrication and rebar with strong technical control",
    shortTitle: "BIM for fabrication",
    description:
      "Detailed modeling and fabrication-ready documentation focused on reinforcement, traceability and prefabrication.",
    intro:
      "In fabrication, errors are far more expensive. That is why we develop models and deliverables oriented to precision, sequence and real usefulness in workshop and assembly environments.",
    image: "/images/Ingenieria_Detalle.webp",
    imageAlt: "BIM detailing for fabrication",
    pillars: [
      {
        title: "Modeling precision",
        description: "We produce models with constructability logic and the level of detail required for production.",
      },
      {
        title: "Traceable documentation",
        description: "Drawings, listings and outputs that support fabrication and assembly control with less ambiguity.",
      },
      {
        title: "Operational compatibility",
        description: "We prepare information for client requirements, workshop workflows or associated machinery.",
      },
    ],
    process: [
      { title: "Technical analysis", description: "We study drawings, constraints and fabrication objectives." },
      { title: "Modeling and detailing", description: "We build geometry, reinforcement logic and documentation structure." },
      { title: "Coordination", description: "We review clashes and consistency with other disciplines." },
      { title: "Production delivery", description: "We issue outputs ready for fabrication, control or assembly." },
    ],
    outcomes: [
      "Less uncertainty before workshop or assembly starts.",
      "Better control of quantities, pieces and documentation.",
      "More value extracted from the model during real production phases.",
    ],
  },
  "bim-training-and-implementation": {
    slug: "bim-training-and-implementation",
    title: "BIM implementation and training for a sustainable operation",
    shortTitle: "BIM implementation",
    description:
      "We help companies and institutions adopt BIM with method, standards and training tied to their real operational context.",
    intro:
      "Implementing BIM is not just delivering a course. It requires diagnosis, process definition, team alignment and a clear roadmap so adoption becomes sustainable over time.",
    image: "/images/Capacitacion.webp",
    imageAlt: "BIM training and implementation",
    pillars: [
      {
        title: "Maturity assessment",
        description: "We identify where the organization stands and what should be prioritized first.",
      },
      {
        title: "Applied training",
        description: "We train through cases, processes and tools connected to real projects.",
      },
      {
        title: "Progressive implementation",
        description: "We land BIM through operational decisions, not only theory.",
      },
    ],
    process: [
      { title: "Assessment", description: "We review capabilities, gaps and organizational goals." },
      { title: "Plan design", description: "We define standards, priorities and the adoption structure." },
      { title: "Training", description: "We train technical and management profiles with a practical focus." },
      { title: "Support", description: "We follow implementation until it becomes an operational routine." },
    ],
    outcomes: [
      "More clarity in BIM roles, workflows and standards.",
      "Stronger internal capability to sustain the methodology.",
      "A less chaotic and more business-aligned adoption process.",
    ],
  },
  "comprehensive-bim-modeling": {
    slug: "comprehensive-bim-modeling",
    title: "Comprehensive BIM modeling for architecture, structure and MEP",
    shortTitle: "Comprehensive BIM modeling",
    description:
      "We develop coordinated models that support design, documentation, control and multidisciplinary collaboration.",
    intro:
      "A good BIM model should do more than look correct: it should organize information, support clash detection and help teams make better technical decisions. Our approach focuses on operational value.",
    image: "/images/Ingenieria_Detalle.webp",
    imageAlt: "Comprehensive BIM modeling",
    pillars: [
      {
        title: "Multidisciplinary coordination",
        description: "We integrate architecture, structure and MEP to identify conflicts earlier.",
      },
      {
        title: "Information-rich models",
        description: "We work beyond geometry, structuring data useful for documentation and control.",
      },
      {
        title: "Decision-ready base",
        description: "The model becomes a platform to review, measure and plan more effectively.",
      },
    ],
    process: [
      { title: "Input gathering", description: "We collect base information, modeling criteria and project goals." },
      { title: "Model development", description: "We build disciplined models with consistency and structure." },
      { title: "Coordination", description: "We review clashes and adjust the federated model." },
      { title: "Delivery", description: "We issue a model ready for documentation, control and downstream phases." },
    ],
    outcomes: [
      "Lower risk of late-stage clashes.",
      "Better information quality for coordination and documentation.",
      "Higher model value for clients, designers and construction teams.",
    ],
  },
};
