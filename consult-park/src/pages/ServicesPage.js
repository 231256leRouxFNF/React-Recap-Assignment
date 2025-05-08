import React from "react";
import Accordion from "../components/Accordion";

const services = [
  {
    title: "Virtual Staffing Solutions",
    description: "Scale your team quickly with our vetted remote professionals. We offer flexible contracts and seamless onboarding across roles such as executive assistants, developers, and customer support agents."
  },
  {
    title: "Admin Support",
    description: "Delegate your time-consuming admin tasks like calendar management, inbox organisation, research, and CRM updates to trained virtual assistants."
  },
  {
    title: "Sales & Lead Generation",
    description: "Increase your revenue by outsourcing prospecting, outbound calls, email campaigns, and pipeline management to our remote sales experts."
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Our certified accounting team offers payroll services, invoicing, financial reporting, and tax preparation – all compliant with global standards."
  },
  {
    title: "Social Media & Digital Marketing",
    description: "Grow your brand online with help from content creators, social media managers, PPC experts, and SEO strategists working as an extension of your team."
  },
  {
    title: "Data Management & Analysis",
    description: "Get insights from your data. Our specialists can clean, organise, and analyse your business data using industry-standard tools and dashboards."
  },
  {
    title: "IT Support & Remote Desktop Assistance",
    description: "Ensure your staff and clients get technical support 24/7. We offer remote troubleshooting, system setup, and ongoing maintenance."
  },
  {
    title: "Project Coordination",
    description: "Let our remote coordinators manage timelines, task tracking, communication, and reporting for your ongoing projects."
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page" style={{ padding: "2rem" }}>
      <h1>Our Core Services</h1>
      <p style={{ maxWidth: "700px", marginBottom: "2rem" }}>
        At Consult Park, we simplify your journey to global talent by offering
        strategic outsourcing services across multiple verticals.
      </p>

      {/* Optional image section */}
      <img
        src="https://via.placeholder.com/900x300"
        alt="Remote services illustration"
        style={{ width: "100%", marginBottom: "2rem", borderRadius: "8px" }}
      />

      <div>
        {services.map((service, index) => (
          <Accordion key={index} title={service.title} content={service.description} />
        ))}
      </div>

      {/* Call to action */}
      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <h3>Ready to elevate your business?</h3>
        <p>Let’s talk about how our services can align with your goals.</p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#003366",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;
