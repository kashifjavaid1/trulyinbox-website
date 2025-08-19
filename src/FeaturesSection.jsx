import React from "react";
import FeatureCard from "./FeatureCard";
import { FaUsers, FaShieldAlt, FaServer, FaInbox, FaCogs, FaProjectDiagram } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: FaInbox,
      title: "10-Min Onboarding",
      description: "Set up in just 10 minutes! Follow simple steps to create your workspace and configure settings."
    },
    {
      icon: FaServer,
      title: "Instant Domain Setup",
      description: "Connect your existing domains or set up new ones quickly with AI-powered domain finder."
    },
    {
      icon: FaShieldAlt,
      title: "Managing DNS Records",
      description: "Easily manage DNS records for your domains with a user-friendly interface."
    },
    {
      icon: FaUsers,
      title: "Separate Workspace Accounts",
      description: "Manage multiple clients or teams easily. Keep everything organized and focused."
    },
    {
      icon: FaCogs,
      title: "Automated DKIM, DMARC & SPF Setup",
      description: "Ensure better deliverability and compliance with automated configurations."
    },
    {
      icon: FaProjectDiagram,
      title: "Bulk Mailbox Purchase",
      description: "Buy multiple mailboxes to scale outreach. Save time with AI-powered autofill setup."
    }
  ];

  return (
    <section className="features-container">
     <div className="container">
         <h2 className="features-heading">Features</h2>
      <p className="features-subtitle">
        Automated email infrastructure optimized for deliverability and <br /> super easy to set up
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
     </div>
    </section>
  );
};

export default FeaturesSection;
