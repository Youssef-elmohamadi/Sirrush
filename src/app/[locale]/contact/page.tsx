import React from "react";
import ContactHero from "../../_components/contact/ContactHero";
import ContactInfo from "../../_components/contact/ContactInfo";
import ContactForm from "../../_components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
