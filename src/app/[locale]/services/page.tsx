import React from "react";
import ServicesHero from "../../_components/services/ServicesHero";
import ServicesList from "../../_components/services/ServicesList";
import WorkProcess from "../../_components/services/WorkProcess";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesList />
      <WorkProcess />
    </div>
  );
}
