import React from "react";
import { FaEnvelope, FaChartBar, FaCog, FaChartLine } from "react-icons/fa";

const ColdEmailFeatures = () => {
  return (
    <div className="email-container">
      <h3 className="email-title">Because Cold Emails Should Feel Warm</h3>
      <div className="email-features">
        <div className="email-feature">
          <FaEnvelope className="email-icon" />
          <div>
            <h3 className="email-heading">Get Into More Inboxes</h3>
            <p className="email-desc">
              Intelligent pacing builds reputation naturally
            </p>
          </div>
        </div>

        <div className="email-feature">
          <FaChartBar className="email-icon" />
          <div>
            <h3 className="email-heading">Book Opens & Replies</h3>
            <p className="email-desc">Authentic patterns, better placement</p>
          </div>
        </div>

        <div className="email-feature">
          <FaCog className="email-icon" />
          <div>
            <h3 className="email-heading">Totally Automated, Totally You</h3>
            <p className="email-desc">
              You focus on messaging, we handle the logistics
            </p>
          </div>
        </div>

        <div className="email-feature">
          <FaChartLine className="email-icon" />
          <div>
            <h3 className="email-heading">Real-Time Insight</h3>
            <p className="email-desc">
              Track reputation and inbox rate as it rises
            </p>
          </div>
        </div>
      </div>
      
    
    </div>
  );
};

export default ColdEmailFeatures;