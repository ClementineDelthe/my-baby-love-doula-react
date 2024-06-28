import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Image from "next/image";
import Link from "next/link";
import LogoLolita from "../../assets/Lolita_Doula.png";
import PresentationRounded from "../../assets/presentation-contact.jpg";
// import Portrait from "../../assets/portrait-zoomout.jpg";
import Portrait from "../../assets/portrait.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const aProposImage = require('../../assets/a_propos.png');

const MentionsLegales = () => {
  return (
    <div id="mentionslegales" className="min-h-[90vh] pt-40 max-w-6xl mx-auto space-y-2">
      <h1>Mentions légales <br /> <br /></h1>
      <p>
        En vertu de l'article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet douceurdeclore.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :<br /> <br />
      </p>


{/* Site réalisé par Clémentine Delthé

Siret : 89041866800012
Tél. : 06 40 31 30 37
www.camille-patteeuw.fr */}
      <div>
        Éditeur : Mme Lolita Garnier
        <br /> <br />
        Entrepreneur individuel
        <br /> <br />
        Siret : 97962048100015
        <br /> <br />
        Siège social : 1 Rue Pythagore, 33140 Villenave-d'Ornon
        <br /> <br />
      </div>

{/* Hébergement :

SAS au capital de 10 174 560€ RCS Lille Métropole 424 761 419 00045
Code APE 2620Z
N° TVA : FR 22 424 761 419
Siège social : 2 rue Kellermann – 59100 Roubaix – France Président : Michel Paulin

OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix. */}
      <div>
        Propriété intellectuelle :
        <br /> <br />
        L'ensemble de ce site relève des législations Françaises et Internationales sur les droits d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés pour les textes et les photographies de ce site. La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit, est formellement interdite sauf autorisation écrite de l'auteur, conformément à l'article L 122-4 du Code de la Propriété intellectuelle.
        <br /> <br />
        Liens hypertextes & droit de réponse :
        <br /> <br />
        Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet, et notamment vers ses partenaires ont fait l'objet d'une autorisation préalable, expresse et écrite auprès de l'éditeur. - Toute personne citée sur le site peut faire valoir un droit de réponse. Une simple demande sera adressée par courrier.
      </div>

    </div>
  );
};

export default MentionsLegales;
