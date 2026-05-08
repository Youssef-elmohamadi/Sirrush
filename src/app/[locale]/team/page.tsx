import React from "react";
import TeamHero from "../../_components/team/TeamHero";
import TeamGrid from "../../_components/team/TeamGrid";

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <TeamHero />
      <TeamGrid />
    </div>
  );
}
