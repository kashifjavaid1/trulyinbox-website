import React from "react";

const providers = [
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/gmail_logo.webp", alt: "Gmail" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/workspace_logo.webp", alt: "Workspace" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/outlook_logo.webp", alt: "Outlook" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/microsoft_logo.webp", alt: "Microsoft 365" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/zoho_logo.webp", alt: "Zoho" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/yahoo_logo.webp", alt: "Yahoo" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/aol_logo.webp", alt: "AOL" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/sendgrid_logo.webp", alt: "Sendgrid" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/smtp_logo.webp", alt: "SMTP" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/mailgun_logo.webp", alt: "Mailgun" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/brevo_loog.webp", alt: "Brevo" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/elastic_email_logo.webp", alt: "Elastic Email" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/mailchimp_logo.webp", alt: "Mailchimp" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/icloud_loog.webp", alt: "iCloud" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/gmx_logo.webp", alt: "GMX" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/amazon_loog.webp", alt: "Amazon SES" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/sendplus_loog.webp", alt: "SendPulse" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/mailjet_logo.webp", alt: "Mailjet" },
  { src: "https://www.trulyinbox.com/wp-content/uploads/2025/01/getResponse_logo.webp", alt: "GetResponse" }
];

const EmailProviders = () => {
  return (
    <section className="email-providers-section">
        <h2 className="heading">Compatible with all top email <br /> service providers</h2>

       

        <div className="providers-logos">
          {providers.map((provider, index) => (
            <span key={index} className="provider-logo">
              <img decoding="async" src={provider.src} alt={provider.alt} />
            </span>
          ))}
      </div>
    </section>
  );
};

export default EmailProviders;
