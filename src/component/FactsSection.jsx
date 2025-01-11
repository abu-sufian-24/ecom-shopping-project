import { useLocation } from "react-router";


const FactsSection = () => {
  const location = useLocation()

  const facts = [
    {
      title: "Artigianale",
      description:
        "Sono fatta a mano in Italia. Eventuali imperfezioni non sono da considerarsi difetti, ma dimostrazione della lavorazione artigianale.",
    },
    {
      title: "Eco Friendly",
      description:
        "Sono fatta con materiali organici e naturali. Quel poco di plastica che troverai in me è plastica riciclata con processi sostenibili e riciclabile.",
    },
    {
      title: "Durevole",
      description:
        "Sono fatto per durare a lungo, per diventare la tua seconda pelle. Utilizzo solo materiali di primissima qualità. Prenditi cura di me.",
    },
  ];

  return (
    <section className="py-4 md:py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-6 md:mb-12">
        {location.pathname === "/product-details" ? (<h2 className="text-2xl md:text-5xl font-bold font-gilroy">Perchè Scegliere Wortees.</h2>) : (<h2 className="text-2xl md:text-5xl font-bold font-gilroy">3 Facts About WORTEES</h2>)}

      </div>

      {/* Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              {fact.title}
            </h3>
            <p className="text-gray-600 text-center">{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FactsSection;
