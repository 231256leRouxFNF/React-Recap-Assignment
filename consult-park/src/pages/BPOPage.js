import React from "react";
import ServiceCard from "../components/ServiceCard";

const bpoSolutions = [
  {
    title: "Call Center & Help Desk Support",
    description: "Handle customer queries and technical issues efficiently with our 24/7 multilingual call center teams."
  },
  {
    title: "Back-Office & Data Processing",
    description: "Streamline your operations by outsourcing invoice processing, data entry, order fulfilment, and reporting."
  },
  {
    title: "Technical Support",
    description: "Get L1 and L2 technical support services, including software troubleshooting, product onboarding, and system monitoring."
  },
  {
    title: "Content Moderation",
    description: "Maintain quality and trust on your platform with trained teams that monitor, review, and manage user-generated content."
  },
  {
    title: "Document Verification & Compliance",
    description: "We handle KYC, documentation checks, and compliance audits with speed and accuracy."
  }
];

const businessOptimization = [
  {
    title: "HR & Payroll Management",
    description: "Outsource hiring, onboarding, payroll processing, benefits administration, and employee support with full confidentiality."
  },
  {
    title: "Workflow Automation & Efficiency Audits",
    description: "Identify bottlenecks and deploy automated workflows using tools like Zapier, Notion, Airtable, and custom APIs."
  },
  {
    title: "Training & Remote Team Enablement",
    description: "We build and deliver custom remote onboarding and training programmes to ensure productivity from day one."
  },
  {
    title: "Performance Tracking & Analytics",
    description: "Track KPIs and productivity metrics across departments with our custom dashboard and reporting tools."
  },
  {
    title: "Digital Transformation Consulting",
    description: "Plan and implement your journey to becoming a digital-first business with expert tech, people, and process guidance."
  }
];

const BPOPage = () => {
  return (
    <div className="bpo-page" style={{ padding: "2rem" }}>
      <h1>Business Process Outsourcing</h1>
      <p style={{ maxWidth: "700px", marginBottom: "2rem" }}>
        Our BPO and business optimisation solutions are designed to help businesses like yours reduce operational costs while improving efficiency, scalability, and customer experience.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2>BPO Solutions</h2>
        <div className="bpo-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {bpoSolutions.map((item, index) => (
            <ServiceCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section>
        <h2>Business Optimization</h2>
        <div className="bpo-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {businessOptimization.map((item, index) => (
            <ServiceCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BPOPage;
