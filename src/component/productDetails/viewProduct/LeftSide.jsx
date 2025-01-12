import { useState } from "react";

const LeftSide = () => {
  const [showAllCollections, setShowAllCollections] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const collections = [
    { name: "Abligurition", count: 45 },
    { name: "Amore", count: 21 },
    { name: "Ailurophilia", count: 32 },
    { name: "Anaxiphilia", count: 129 },
  ];
  const categories = [
    { name: "Dictionary", count: 45 },
    { name: "Dot", count: 21 },
    { name: "Double", count: 32 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-0 md:p-4">
      {/* Dropdown for mobile */}
      <div className="block md:hidden">
        <button
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg "
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? "Close Menu" : "Open Menu"}
        </button>

        {isDropdownOpen && (
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* All Collections */}
            <Section
              title="All Collection"
              items={collections}
              showAll={showAllCollections}
              toggleShowAll={() => setShowAllCollections(!showAllCollections)}
            />
            {/* Categories */}
            <Section title="Categories" items={categories} />
            {/* Language */}
            <LanguageSection />
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <Section
          title="All Collection"
          items={collections}
          showAll={showAllCollections}
          toggleShowAll={() => setShowAllCollections(!showAllCollections)}
        />
        <Section title="Categories" items={categories} />
        <LanguageSection />
      </div>
    </div>
  );
};

const Section = ({ title, items, showAll = false, toggleShowAll }) => (
  <div className="mb-8">
    <h3 className="text-lg font-bold border-b pb-2 mb-4">{title}</h3>
    {items
      .slice(0, showAll ? items.length : 4)
      .map((item, index) => (
        <p
          key={index}
          className={`text-sm flex justify-between items-center mb-2 ${index === 0 ? "text-red-600 font-semibold" : "text-gray-600"
            }`}
        >
          <span>{item.name}</span>
          <span>({item.count})</span>
        </p>
      ))}
    {toggleShowAll && (
      <button
        onClick={toggleShowAll}
        className="text-red-600 text-sm mt-4 flex items-center"
      >
        {showAll ? "SHOW LESS -" : "SHOW ALL +"}
      </button>
    )}
  </div>
);

const LanguageSection = () => (
  <div>
    <h3 className="text-lg font-bold border-b pb-2 mb-4">Language</h3>
    <div className="flex gap-4">
      <button className="text-sm border px-4 py-2 rounded-md hover:bg-gray-200">
        Italic
      </button>
      <button className="text-sm border px-4 py-2 rounded-md hover:bg-gray-200">
        English
      </button>
    </div>
  </div>
);

export default LeftSide;
