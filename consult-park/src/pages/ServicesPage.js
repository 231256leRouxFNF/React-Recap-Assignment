import React from "react";
import Accordion from "../components/Accordion";

const services = [
    {
        title: "Virtual Staffing Solutions",
        description: "We offer scalable virtual staffing tailored to your business needs. Access global talent across multiple industries with flexible hiring options."
      },
      {
        title: "Admin Support",
        description: "Free up your core team by outsourcing administrative tasks such as email management, data entry, scheduling, and document processing."
      },
      {
        title: "Sales & Lead Generation",
        description: "Boost your pipeline with expert remote sales representatives and lead generation specialists to help your business grow."
      },
      {
        title: "Accounting & Bookkeeping",
        description: "Certified accountants and bookkeepers provide reliable financial tracking, invoicing, payroll support, and reconciliation services."
      },
      {
        title: "Social Media & Digital Marketing",
        description: "Creative digital marketers and content specialists help manage your online presence and execute growth-focused campaigns."
      }
];

const ServicesPage = () => {
  return (
    <div className="services-page" style={{ padding: "2rem" }}>
      <h1>Our Services</h1>
      <p style={{ maxWidth: "600px", marginBottom: "2rem" }}>
        Explore our core service categories designed to help you scale your team and grow your business remotely.
      </p>

      <div className="accordion-wrapper">
        {services.map((service, index) => (
          <Accordion key={index} title={service.title} content={service.description} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;