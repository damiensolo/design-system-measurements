
export default {
  "metrics": {
    sections: [
      {
        id: "business-financial",
        title: "Business & Financial Impact",
        description: "Metrics that connect the design system directly to financial and strategic business goals.",
        checklist: [
          { id: "metrics-roi", title: "Return on Investment (ROI)", description: "Measure the overall financial gains of the design system against the cost of its investment." },
          { id: "metrics-time-to-value", title: "Time to Value", description: "Track the time from the initial investment to when the system begins delivering measurable returns, such as cost savings or revenue boosts." },
          { id: "metrics-cost-savings", title: "Cost Savings", description: "Calculate savings from increased efficiency, reduced refactoring, and fewer design/development hours spent on redundant work." },
          { id: "metrics-conversion-rate", title: "Conversion Rate Improvement", description: "Analyze how a more consistent and usable interface impacts user conversion rates." },
          { id: "metrics-brand-reputation", title: "Brand Reputation & Consistency", description: "Track improvements in brand recognition and trust, driven by a consistent visual identity across all products." },
          { id: "metrics-company-scalability", title: "Company Scalability", description: "Measure the increase in team capacity and the ability to build and launch new products or features more quickly." }
        ]
      },
      {
        id: "adoption-engagement",
        title: "Adoption & Engagement",
        description: "Track how teams and products are adopting and engaging with your design system.",
        checklist: [
          { id: "metrics-adoption-rate", title: "Adoption Rate", description: "Calculate the percentage of products, teams, or projects actively using the design system's libraries and components." },
          { id: "metrics-component-usage", title: "Component & Library Usage", description: "Use tools like Figma analytics to track how many components and libraries are being used and how frequently." },
          { id: "metrics-contributions", title: "Contributions to the System", description: "Monitor the number of contributions (e.g., new components, bug fixes) from various teams, indicating a collaborative and valued system." },
          { id: "metrics-documentation-visits", title: "Documentation Visits", description: "Measure engagement with the design system's documentation to see if it's a helpful and frequently used resource." },
          { id: "metrics-team-satisfaction", title: "Team Satisfaction Surveys", description: "Collect qualitative feedback from design, development, and product teams to gauge their satisfaction and identify areas for improvement." },
          { id: "metrics-participation-support", title: "Participation & Support", description: "Track attendance at design system meetings ('office hours') and the number of support questions, which should decrease as the system matures." }
        ]
      },
      {
        id: "product-design-efficiency",
        title: "Product & Design Efficiency",
        description: "Measure improvements in design and product development workflows.",
        checklist: [
          { id: "metrics-time-to-market", title: "Time to Market", description: "Measure the reduction in time it takes to go from an initial idea to a launched product or feature." },
          { id: "metrics-prototype-speed", title: "Prototype Speed", description: "Track the acceleration in how quickly new feature prototypes can be created and tested." },
          { id: "metrics-component-library-health", title: "Component Library Health", description: "Monitor the growth of reusable components in the system and track total components available." },
          { id: "metrics-component-detachments", title: "Component Detachments (Figma)", description: "Track how often designers detach from components, which can signal gaps or usability issues in the system." },
          { id: "metrics-design-review-time", title: "Design Review Time", description: "Measure the reduction in time spent in design review cycles due to a shared understanding of patterns and components." },
          { id: "metrics-onboarding-time", title: "Onboarding Time", description: "Monitor the time saved when onboarding new designers and developers, as they can get up to speed with established patterns quickly." }
        ]
      },
      {
        id: "development-efficiency",
        title: "Development & Engineering Efficiency",
        description: "Track improvements in development speed and engineering workflows.",
        checklist: [
          { id: "metrics-handoff-time", title: "Design-to-Development Handoff Time", description: "Measure the speed and efficiency of the handoff process between design and development teams." },
          { id: "metrics-task-completion", title: "Average Task Completion Time", description: "Compare the time developers spend on UI-related tasks before and after the design system's implementation." },
          { id: "metrics-tech-debt", title: "Reduction in Technical Debt", description: "Track the decrease in UI-related technical debt by measuring the reuse of standardized, pre-vetted code." },
          { id: "metrics-code-complexity", title: "Code Complexity", description: "Monitor for a reduction in code complexity and the need for refactoring, thanks to component reuse." },
          { id: "metrics-linter-warnings", title: "Linter Warnings", description: "Track the number of UI-related linter warnings, which should decrease significantly with a standardized codebase." },
          { id: "metrics-system-update-efficiency", title: "System-Wide Update Efficiency", description: "Measure the reduction in time and effort required to implement system-wide design changes or platform upgrades." }
        ]
      },
      {
        id: "quality-ux",
        title: "Quality & User Experience",
        description: "Monitor the impact on product quality and user experience.",
        checklist: [
          { id: "metrics-ui-consistency", title: "UI Consistency", description: "Track and measure the reduction in visual inconsistencies, UI bugs, and user-reported discrepancies across products." },
          { id: "metrics-accessibility", title: "Accessibility Issues", description: "Measure the decrease in accessibility-related bugs found during QA testing." },
          { id: "metrics-support-tickets", title: "Support Ticket Reduction", description: "Track the decrease in support tickets related to UI confusion or usability problems." },
          { id: "metrics-design-debt", title: "Reduction in Design Debt", description: "Monitor the decrease in the number of design debt tickets and 'snowflake' components (one-off designs)." },
          { id: "metrics-accessibility-score", title: "Accessibility Score", description: "Track improvements in automated accessibility audit scores (e.g., WCAG compliance)." },
          { id: "metrics-user-satisfaction", title: "User Satisfaction", description: "Monitor changes in user satisfaction scores (e.g., CSAT, NPS) related to the product's interface and usability." },
          { id: "metrics-task-completion-rates", title: "Task Completion Rates", description: "Measure improvements in the success rate of users completing key tasks within the product." }
        ]
      }
    ]
  }
};
