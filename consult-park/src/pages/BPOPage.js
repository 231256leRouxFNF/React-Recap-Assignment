import React from "react";
import ServiceCard from "../components/ServiceCard";

const bpoSolutions = [
    {
      title: "Call Center & Help Desk Support",
      description: "Provide your customers with reliable, round-the-clock support via inbound and outbound call services."
    },
    {
      title: "Back-Office & Data Processing",
      description: "Efficient handling of data entry, document management, and back-office tasks to reduce overhead and improve accuracy."
    },
    {
      title: "Technical Support",
      description: "Access expert remote IT technicians to assist your users with troubleshooting, onboarding, and software support."
    }
  ];

  const businessOptimization = [
    {
      title: "HR & Payroll Management",
      description: "Streamline your workforce operations by outsourcing HR functions including payroll processing, benefits, and compliance."
    },
    {
      title: "Workflow Automation & Efficiency Audits",
      description: "Identify bottlenecks and implement tech-driven solutions to improve efficiency across your organisation’s workflows."
    }
  ];

  const BPOPage = () => {
    return (
      <div className="bpo-page" style={{ padding: "2rem" }}>
        <h1>Business Process Outsourcing</h1>
        <p style={{ maxWidth: "600px", marginBottom: "2rem" }}>
          Our BPO and business optimisation solutions are designed to take the weight off your team while improving performance and scalability.
        </p>
  
        <section style={{ marginBottom: "3rem" }}>
          <h2>🚀 BPO Solutions</h2>
          <div className="bpo-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {bpoSolutions.map((item, index) => (
              <ServiceCard key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </section>
  
        <section>
          <h2>🧠 Business Optimization</h2>
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