import React, { useState } from "react";
import Navbar from "./components/Navbar";
import EmailProviders from "./components/EmailProviders";
import Footer from "./components/Footer";
import ColdEmailFeatures from "./components/ColdEmailFeatures";
import FeaturesSection from "./FeaturesSection";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "How does email warm-up work?",
    answer:
      "Email warm-up is a mechanism of gradually sending more emails from a newly created email account, in order to establish a trustworthy sender reputation with email providers and bypass spam filters.",
  },
  {
    question: "Who should use email warm-up?",
    answer:
      "Anyone who sends cold emails for a wide range of use cases, such as marketing, and lead generation purposes. Outreach specialists, recruiters, marketers, salespeople, etc can benefit from email warm-ups.",
  },
  {
    question: "What email providers does TrulyInbox support?",
    answer: (
      <div>
        <p>
          TrulyInbox email warmup tool supports the below-mentioned Email
          service providers (ESPs):
        </p>
        <ul>
          <li>Gmail/Gsuite</li>
          <li>Office 365</li>
          <li>Outlook.com/Hotmail.com/Live.com</li>
          <li>Yahoo Mail</li>
          <li>Zoho</li>
          <li>GoDaddy</li>
          <li>Yandex</li>
        </ul>
      </div>
    ),
  },
];


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <ColdEmailFeatures/>
            <FeaturesSection/>
      <EmailProviders />
     <section className="faq-section">
  <div className="container">
    <div className="faq-left">
      <h2>Frequently Asked Questions</h2>
    </div>
    <div className="faq-right">
      {faqs.map((item, index) => (
        <div className="accordion" key={index}>
          <div
            className="accordion-head"
            onClick={() => toggleAccordion(index)}
          >
            <label>{item.question}</label>
            <span className="icon">
              {openIndex === index ? (
                <img
                  src="https://www.trulyinbox.com/wp-content/uploads/2025/01/minus_acc.svg"
                  alt="Minus"
                />
              ) : (
                <img
                  src="https://www.trulyinbox.com/wp-content/uploads/2025/01/plus_acc.svg"
                  alt="Plus"
                />
              )}
            </span>
          </div>
        {openIndex === index && (
  <div className={`accordion-body ${openIndex === index ? "open" : ""}`}>
    {item.answer}
  </div>
)}

        </div>
      ))}
    </div>
  </div>
</section>

{/* highlight session */}
   <div className="main-highlight-container">
  <div className="container">
    <section className="highlight-section">
      <img
        decoding="async"
        src="https://www.trulyinbox.com/wp-content/uploads/elementor/thumbs/email-inbox-shape-social-media-7ik9qq41l9vp447sf8gtftk2vf6yiz7te4c4v9ic8qs.webp"
        title="email-inbox-shape-social-media"
        alt="Email inbox"
        loading="lazy"
      />
      <h2 className="highlight-heading">
        Improve your sender reputation <br /> with real email interactions
      </h2>
      <div className='boost-btn'>
        <button className='getBtn'>
          Boost your deliverability now!
        </button>
      </div>
    </section>
  </div>
</div>
<Footer/>

    </div>
  );
};

export default App;

