import React from "react";
import ContentSection from "../components/ContentSection";

export default function VideoPage() {
  const sortOption = "releaseDate";
  const filter = {
    genre: "All Genre",
    ageGroup: "Any age group",
  };

  return (
    <div className="bg-[#181818] min-h-screen font-['Archivo']">
      <ContentSection filter={filter} sortOption={sortOption} />
    </div>
  );
}
