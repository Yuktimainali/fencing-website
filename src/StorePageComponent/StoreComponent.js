import { useState } from "react";
import EquipmentStore from "./Equipment";
import RepairsPage from "./Repair";

// Updated store sections data - only Equipment and Repairs
const storeSections = [
  {
    id: "equipment",
    label: "Equipment",
    description: "Shop for high-quality fencing gear and supplies.",
    image: null,
    link: "#!/Equipment/c/28047909",
  },
  {
    id: "repairs",
    label: "Repairs", 
    description: "Professional repairs for all your fencing equipment.",
    image: null,
    link: "#!/Repairs/c/28160371",
  },
];

export default function StoreContainer() {
  const [selectedSection, setSelectedSection] = useState("equipment"); // Default to equipment
  const currentSection = storeSections.find((sec) => sec.id === selectedSection);

  // Render equipment or repairs components
  const renderSectionContent = () => {
    switch (selectedSection) {
      case "equipment":
        return <EquipmentStore />;
      case "repairs":
        return <RepairsPage />;
      default:
        return <EquipmentStore />;
    }
  };

  return (
    <section className="relative min-h-screen bg-primary-900 text-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        {/* Left Vertical Navbar */}
        <aside className="w-64 py-16 px-6 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 shadow-xl rounded-tr-3xl rounded-br-3xl z-20 animate-slide-up">
          <h2 className="mb-10 text-3xl font-bold tracking-wide text-accent-400 select-none">Store</h2>
          <nav className="flex flex-col gap-2">
            {storeSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`text-left group py-3 px-5 rounded-l-lg transition-all duration-300
                            font-semibold tracking-wide
                            ${selectedSection === sec.id
                    ? "bg-accent-400/20 text-accent-400 shadow-lg scale-105"
                    : "text-primary-200 hover:bg-primary-800/80 hover:text-accent-400"
                  }`}
              >
                <span className="block">{sec.label}</span>
                {selectedSection === sec.id && (
                  <span className="block w-10 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mt-2 animate-fade-in" />
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area - Full Width */}
        <main className="flex-1">
          {renderSectionContent()}
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Mobile navbar */}
        <nav className="w-full sticky top-0 z-30 bg-primary-900 py-4 px-3 flex gap-2 border-b border-primary-700 animate-slide-up justify-center">
          {storeSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-6 py-2 rounded-full transition-all font-semibold text-sm
                          ${selectedSection === sec.id
                  ? "bg-accent-400/20 text-accent-400 scale-105"
                  : "text-primary-200 hover:bg-primary-800/80 hover:text-accent-400"
                }`}
            >
              {sec.label}
            </button>
          ))}
        </nav>

        {/* Mobile Content */}
        <main>
          {renderSectionContent()}
        </main>
      </div>
    </section>
  );
}
