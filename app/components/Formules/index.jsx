const Formules = () => {
  const formules = [
    {
      title: "Parenthèse enchantée",
      prix: "160€",
      description: "Massage femme enceinte ET Douceur du rebozo",
    },
    {
      title: "Amour pour toujours",
      prix: "210€",
      description: "Un soin féminin au choix ET Un rituel du bain sensoriel®",
    },
    {
      title: "Tendre découverte",
      prix: "150€",
      description:
        "4 séances massage bébé : Apprentissage massage du corps complet de votre bébé + soulager les maux de bébé",
    },
    {
      title: "Instant infini",
      prix: "240€",
      description:
        "Rituel du bain sensoriel® photographié. Avec Amélie, Mayä Photographie.",
    },
  ];
  return (
    <div id="formules" className="bg-[#F2F3F5] min-h-[550px] flex items-center">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight pt-10">
          Formules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 my-12 text-[#3f3a36]">
          {formules.map((formule, index) => (
            <div key={index} className="max-w-80 bg-[#f3e9e7] p-2 rounded-lg">
              <h3 className="text-bold text-center py-4">{formule.title}</h3>
              <div className="flex items-center justify-center min-h-32">
                <p className="text-sm pr-1">{formule.prix}</p>
                <p className="text-base border-l pl-2">{formule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formules;
