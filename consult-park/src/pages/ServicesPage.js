// src/pages/ServicesPage.js

import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import "./ServicesPage.css";

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
      <h1 className="services-page__title">Our Core Services</h1>
      <p className="services-page_paragraph">
        At Consult Park, we simplify your journey to global talent by offering
        strategic outsourcing services across multiple verticals.
      </p>

      {/* Optional image section */}
      <img
        src="..\assets\Consult-Park-Logo.png"
        alt="Remote services illustration"
        style={{
          width: "100%",
          marginBottom: "2rem",
          borderRadius: "8px",
        }}
      />

      <div className="services-page__accordion">
        {services.map((service, index) => (
          <Accordion
            key={index}
            title={service.title}
            content={service.description}
          />
        ))}
      </div>

      {/* Bottom Contact Section */}
      <section className="services__bottom-cta">
        <h2>Ready to power your growth?</h2>
        <Link to="/contact" className="services__bottom-cta-button">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;
