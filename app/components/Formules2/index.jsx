
const Formules2 = () => {
  const formules = [
    {
      title1: "Parenthèse enchantée",
      prix: "160€",
      description: "Massage femme enceinte ET Douceur du rebozo",
    },
    {
      title1: "Amour pour toujours",
      prix: "210€",
      description: "Un soin féminin au choix ET Un rituel du bain sensoriel®",
    },
    {
      title1: "Tendre découverte",
      prix: "150€",
      description:
        "4 séances massage bébé : Apprentissage massage du corps complet de votre bébé + soulager les maux de bébé",
    },
    {
      title1: "Instant infini",
      prix: "240€",
      description:
        "Rituel du bain sensoriel® photographié. Avec Amélie, Mayä Photographie.",
    },
  ];
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="grid grid-cols-4">
        {formules.map((formule, index) => (
          <div key={index}>
            <h3>{formule.title}</h3>
            <p>{formule.prix}</p>
            <p>{formule.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Formules2
