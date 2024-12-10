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
    <div id="mentionslegales" className="min-h-[90vh] pt-40 max-w-6xl mx-auto space-y-2 space-x-2">
      <h1  className="text-2xl mb-5">Mentions l&eacute;gales <br /> <br /></h1>
      <div>
        <p className="font-bold">&Eacute;diteur :</p>

        Lolita Garnier repr&eacute;sentante l&eacute;gal sous la d&eacute;nomination :

        <br />

        Entreprise Individuelle My baby love

        <br /> <br />
        <p className="font-bold">Num&eacute;ro de Siret :</p> 97962048100015
        <br /> <br />
        <p className="font-bold">Si&egrave;ge social :</p> 1 Rue Pythagore, 33140 Villenave-d&apos;Ornon
        <br /> <br />
        <p className="font-bold">Contact :</p> <a href="tel:+33782384003">t&eacute;l&eacute;phone 07.82.38.40.03</a>
        <br /> <br />
        <a
          href="https://www.instagram.com/mybabylove_doula/"
          // className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mail : mybabylove.doula@gmail.com
        </a>
        <br /> <br />
      </div>
      {/* <p>
        En vertu de l&apos;article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;&eacute;conomie num&eacute;rique, il est pr&eacute;cis&eacute; aux utilisateurs du site internet douceurdeclore.fr l&apos;identit&eacute; des diff&eacute;rents intervenants dans le cadre de sa r&eacute;alisation et de son suivi :<br /> <br />
      </p> */}


{/* Site r&eacute;alis&eacute; par Cl&eacute;mentine Delth&eacute;

Siret : 89041866800012
T&eacute;l. : 06 40 31 30 37
www.camille-patteeuw.fr */}

      <div>
      <p className="font-bold">H&eacute;bergement :</p> Vercel Inc
      <br /> <br />
      <p className="font-bold">Donn&eacute;es personnelles :</p> Aucunes donn&eacute;es personnelles ne sont collect&eacute;es lors de votre utilisation du site internet.
      <br /> <br />
      </div>
      <div>
        <p className="text-2xl mt-10 mb-5">Propri&eacute;t&eacute; intellectuelle :</p>
        L&apos;ensemble de ce site rel&egrave;ve des l&eacute;gislations Françaises et Internationales sur les droits d&apos;auteur et la propri&eacute;t&eacute; intellectuelle. Tous les droits de reproduction sont r&eacute;serv&eacute;s pour les textes et les photographies de ce site. La reproduction de tout ou partie de ce site sur un support &eacute;lectronique ou autre quel qu&apos;il soit, est formellement interdite sauf autorisation &eacute;crite de l&apos;auteur, conform&eacute;ment &agrave; l&apos;article L 122-4 du Code de la Propri&eacute;t&eacute; intellectuelle.
        <br /> <br />
        Liens hypertextes & droit de r&eacute;ponse :
        <br /> <br />
        Les liens hypertextes mis en place dans le cadre du pr&eacute;sent site internet en direction d&apos;autres ressources pr&eacute;sentes sur le r&eacute;seau Internet, et notamment vers ses partenaires ont fait l&apos;objet d&apos;une autorisation pr&eacute;alable, expresse et &eacute;crite aupr&egrave;s de l&apos;&eacute;diteur.
        <br /> <br />
        Toute personne cit&eacute;e sur le site peut faire valoir un droit de r&eacute;ponse. Une simple demande sera adress&eacute;e par courrier.
      </div>
      <div>
        <p className="text-2xl mt-10 mb-5">Conditions g&eacute;n&eacute;rales de vente et de prestations :</p>
        <p>Les prix :</p>
        <br />
        <p>Les prix sont fermes et d&eacute;finitifs. Ils correspondent aux prix sur le site. Les prix propos&eacute;s pour les promotions sont valables uniquement pendant la dur&eacute;e de la promotion.
        <br /><br />
        Les prix sont nomm&eacute;s en monnaie l&eacute;gales et stipul&eacute;s toutes taxes comprises.
        <br /><br />
        Conform&eacute;ment &agrave; la loi, la TVA n&apos;est pas applicable sur les prestations propos&eacute;es par E.I. My baby love.</p>
        <br />

        <p>Indemnit&eacute;s kilom&eacute;triques :</p>
        <br />
        <p>L&apos;indemnit&eacute; kilom&eacute;trique est calcul&eacute;e en fonction des bar&egrave;mes disponible sur le site du service public soit distance*0,636 pour l&apos;ann&eacute;e 2024.
        <br /><br />
        Le prix de la prestation s&apos;ajoute aux indemnit&eacute;s kilom&eacute;triques au del&agrave; de 20 kilom&egrave;tres de Villenave d&apos;ornon.
        <br /><br />
        Lolita Garnier se r&eacute;serve le droit de refuser une prestation au domicile.
        </p>
        <br />

        <p className="text-2xl mt-10 mb-5">Frais suppl&eacute;mentaires :</p>
        <p>Des frais suppl&eacute;mentaires peuvent &ecirc;tre applicables et seront convenus et accept&eacute;s par avance par l&apos;acheteur et le vendeur tels que :
        <br /><br />
        - des frais de parking
        <br /><br />
        - de stationnement
        <br /><br />
        - de jours d&apos;ex&eacute;cution du contrat tels que dimanche ou jours f&eacute;ri&eacute;s
        </p>
        <br />

        <p className="text-2xl mt-10 mb-5">Mise en application des prestations :</p>
        <p>Lolita Garnier se r&eacute;serve le droit de refuser de faire une pr&eacute;sentation si les conditions optimales ne sont pas r&eacute;unies. Les contre-indications sont notifi&eacute;s sur le site internet. Un accord pourra &ecirc;tre trouv&eacute; pour une date ult&eacute;rieure si la prestation ne peut &ecirc;tre faite le jour m&ecirc;me.
        <br /><br />
        Si une prestation est annul&eacute;e pour le jour m&ecirc;me, le client devra payer la prestation dans son int&eacute;gralit&eacute; pour replanifier une nouvelle date sans suppl&eacute;ment.
        <br /><br />
        Au bout de deux s&eacute;ances annul&eacute;es le jour m&ecirc;me, la prestation est d&ucirc;e.
        </p>
        <br />

        <p className="text-2xl mt-10 mb-5">Conditions particuli&egrave;res de mise en application :</p>
        <p>
        - Les bains b&eacute;b&eacute; ne sont valables que 2 mois apr&egrave;s la naissance de l&apos;enfant.
        <br /><br />
        Cas particulier pour les b&eacute;b&eacute;s pr&eacute;matur&eacute;s : le d&eacute;lai est plus important, il est &agrave; valider en amont avec le vendeur.
        <br /><br />
        - La r&eacute;alisation du bain b&eacute;b&eacute; est effectu&eacute; avec deux adultes et la fratrie peut &ecirc;tre pr&eacute;sente. En amont de la prestation, le b&eacute;n&eacute;ficiaire doit explicitement dire les personnes qui seront pr&eacute;sentes. Le vendeur peut refuser de faire la prestation s&apos;il n&apos;a pas &eacute;t&eacute; concert&eacute; et la prestation sera due.
        <br /><br />
        - Les massages b&eacute;b&eacute; concerne les enfants de 0 &agrave; 9 mois.
        <br /><br />
        - Les massages femme enceinte concerne seulement les femmes enceintes.
        <br /><br />
        - La prestation "douceur du rebozo" concerne les femmes en post partum imm&eacute;diat. Elle est applicable de la naissance de l&apos;enfant jusqu&apos;&agrave; deux mois apr&egrave;s l&apos;accouchement si les conditions sont r&eacute;unies.
        <br /><br />
        En dehors de ces &eacute;l&eacute;ments, la prestation ne peut &ecirc;tre exig&eacute;e d&apos;&ecirc;tre appliqu&eacute;e. Aucun remboursement ou &eacute;change ne sera ex&eacute;cut&eacute; si l&apos;acheteur ne remplit pas les conditions et que le d&eacute;lais est d&eacute;pass&eacute;.
        </p>
        <br />

        <p className="text-2xl mt-10 mb-5">Carte cadeau :</p>
        <p>L&apos;achat de carte cadeau est possible et r&eacute;alisable en pr&eacute;sentiel ou &agrave; distance.
        <br /><br />
        - En pr&eacute;sentiel, l&apos;acheteur paye le montant de la prestation voulue et repart avec une carte cadeau avec le choix de la prestation d&eacute;sign&eacute;e dessus.
        <br /><br />
        - En distanciel, l&apos;acheteur paye par virement bancaire la prestation voulue. En contrepartie, d&egrave;s r&eacute;ceptions du virement, il reçoit soit de façon d&eacute;mat&eacute;rialis&eacute;e la carte cadeau, soit le vendeur, Lolita Garnier, envoie par voie postale la carte cadeau sans frais suppl&eacute;mentaires, &agrave; la personne d&eacute;sign&eacute;e.
        </p>
        <br />


        <p className="text-2xl mt-10 mb-5">Mise en application de la carte cadeau :</p>
        <p>
        D&egrave;s l&apos;achat de la carte cadeau elle est valable 6 mois pour les massages f&eacute;minins.
        <br /><br />
        La d&eacute;signation de la carte pr&eacute;cise le motif de la prestation et donc le d&eacute;lai. Vous r&eacute;f&eacute;rez &agrave; la partie application des prestations.
        <br /><br />
        Les cartes cadeaux ne sont pas remboursables et sont &eacute;changeables seulement avec accord du vendeur.
        <br /><br />
        Le vendeur se r&eacute;serve le droit de refuser l&apos;&eacute;change.
        <br /><br />
        Pour les cas possibles et dans certaines conditions, le vendeur se r&eacute;serve  la possibilit&eacute; d&apos;augmenter le d&eacute;lai de la carte cadeau.
        <br /><br />
        Sans cet accord &eacute;crit, aucun d&eacute;passement de temps ne sera accord&eacute;.
        <br /><br />
        Une fois le d&eacute;lai mentionn&eacute;, sauf pour raison de force majeure, la somme totale de la commande revient de droit au vendeur pour int&eacute;r&ecirc;ts et dommages en r&eacute;paration du pr&eacute;judice subi et aucune contestation de quelques natures qu&apos;&apos;elles soient ne peut-&ecirc;tre admises.
        </p>
        <br />


        <p className="text-2xl mt-10 mb-5">Formules :</p>
        <p>
        Les formules correspondent &agrave; l&apos;achat de plusieurs prestations avec un prix plus avantageux.
        <br /><br />
        La formule ne peut &ecirc;tre modifi&eacute;e, ni &eacute;chang&eacute;e, ni substitu&eacute;e.
        <br /><br />
        Si elle ne peut &ecirc;tre ex&eacute;cut&eacute;e dans son enti&egrave;ret&eacute;, le vendeur ne peut &ecirc;tre mis en cause et aucun remboursement ou &eacute;change ne peut &ecirc;tre exig&eacute;.
        <br /><br />
        L&apos;acheteur a six mois pour faire la derni&egrave;re prestation conclue dans la formule si cela concerne le massage post-partum.
        <br /><br />
        Pour les autres prestations, elles sont &eacute;nonc&eacute;es avec la date de validit&eacute; pour les faire. Aucun d&eacute;passement ne peut &ecirc;tre exig&eacute;.
        </p>
        <br />

        <p className="text-2xl mt-10 mb-5">Paiement :</p>
        <p>
        Le paiement est d&ucirc; comptant lors de la prestation ou de l&apos;achat de la carte cadeau. Il s&apos;effectue soit en esp&egrave;ces, soit par virement bancaire. Dans ce dernier cas, il peut &ecirc;tre fait en avance ou une preuve d&apos;ex&eacute;cution peut &ecirc;tre demand&eacute;e.
        <br /><br />
        Sur votre demande seulement, le vendeur vous remettra une facture.
        <br /><br />
        Pour rappel, le vendeur est exon&eacute;r&eacute; de TVA.
        </p>
        <br />


        <p className="text-2xl mt-10 mb-5">Accompte :</p>
        <p>
        Un accompte est demand&eacute; pour la prestation suivante : le rituel autour du rebozo. Cette prestation mobilisant deux praticiennes, sur un temps important, un acompte de la moiti&eacute; de somme, un acompte de la moiti&eacute; de la somme vous ai demand&eacute;. Sans cet acompte, la prestation ne peut-&ecirc;tre r&eacute;serv&eacute;e, ni ex&eacute;cut&eacute;e.
        </p>
        <br />

        <p className="text-2xl mt-10 mb-5">Photographies :</p>
        <p>
        L&apos;ensemble des photographies pr&eacute;sente sur le site internet sont au seul droit de Lolita Garnier. Aucune reproduction ou utilisation sans demande et accord pr&eacute;alable ne pourra &ecirc;tre tol&eacute;r&eacute; et sera sous peine de poursuites judiciaires.
        <br /><br />
        Lolita Garnier se r&eacute;serve le droit d&apos;utiliser ses photographies &agrave; son bon usage.
        <br /><br />
        L&apos;ensemble des photographies, sauf mention contraire, sont r&eacute;alis&eacute;es par Am&eacute;lie, May&auml; Photographie.
        </p>
        <br />


        <p className="text-2xl mt-10 mb-5">Responsabilit&eacute; :</p>
        <p>
        Lolita Garnier agit en qualit&eacute; d&apos;&apos;accompagnante p&eacute;rinatale. Elle propose des soins f&eacute;minins, tels que des massages ou des resserrage qu&apos;elle a appris sur des formations certifiantes. Elle coordonne des ateliers parentaux tel que les massages b&eacute;b&eacute;s ou le rituel du bain sensoriel®, du fait des formations qu&apos;elle a effectu&eacute;. Elle propose &eacute;galement un soutien &eacute;motionnel aux familles qu&apos;elle rencontre par l&apos;&eacute;coute active, le soutien &eacute;motionnel, la dispense d&apos;informations et conseils qui sont &agrave; sa mesure.
        <br /><br />
        Aucun conseil ou informations se dispense d&apos;un avis m&eacute;dical et ne pr&eacute;valent sur un avis m&eacute;dical d&eacute;j&agrave; donn&eacute;.
        <br /><br />
        Malgr&eacute; sa formation d&apos;infirmi&egrave;re, Lolita Garnier ne dispense pas de soins m&eacute;dicaux ou param&eacute;dicaux, d&apos;expertise infirmi&egrave;re ou d&apos;&eacute;valuation de plaie.
        <br /><br />
        Lolita Garnier d&eacute;cline toute responsabilit&eacute; concernant une &eacute;ventuelle complication m&eacute;dicale ou de probl&egrave;me de sant&eacute; &agrave; la suite d&apos;une prestation faite avec elle.
        <br /><br />
        Si le client n&apos;a pas respect&eacute;, les contre-indications visibles sur le site internet et mentionn&eacute; par Lolita Garnier, elle ne peut &ecirc;tre retenue responsable si le client a quand m&ecirc;me r&eacute;alis&eacute; la prestation et en subi des cons&eacute;quences.
        <br /><br />
        Il est de devoir du client de consulter, un m&eacute;decin ou un th&eacute;rapeute qualifi&eacute; pour tout probl&egrave;me m&eacute;dical ou pour toute pr&eacute;vention et surveillance d&apos;un possible probl&egrave;me m&eacute;dical.
        <br /><br />
        Elle ne peut &ecirc;tre tenu responsable &eacute;galement si le client, une fois seul, ne r&eacute;alise pas correctement les gestes appris lors des ateliers parentaux.
        <br /><br />
        En aucun cas, Lolita Garnier ne pourra &ecirc;tre tenue responsable des cons&eacute;quences directes ou indirectes sur la sant&eacute; physique, mentale ou &eacute;motionnelle des adultes ou des enfants b&eacute;n&eacute;ficiaires de ses services.
        <br /><br />
        En acceptant ces conditions g&eacute;n&eacute;rales de vente et de prestations, les clients confirment avoir pris connaissance de la nature des services propos&eacute;s par Lolita Garnier, My baby love et acceptent pleinement les limitations de responsabilit&eacute; d&eacute;finies dans le texte ci-dessus.
        </p>
        <br />


        <p className="text-2xl mt-10 mb-5">D&eacute;lai de r&eacute;tractation et remboursement :</p>
        <p className="">
          L&apos;article L221-18 du code de la consommation dispose que le d&eacute;lai de r&eacute;tractation de 14 jours court &agrave; compter du jour : de la conclusion du contrat, pour les contrats de prestation des services tes qu&apos;ils sont mentionn&eacute;s sur le site de My baby love.
          <br /><br />
          Le consommateur dispose d&apos;un d&eacute;lai de quatorze jours pour exercer son droit de r&eacute;tractation d&apos;un contrat conclu &eacute;galement &agrave; distance, sans avoir &agrave; motiver sa d&eacute;cision ni &agrave; supporter d&apos;autres co&ucirc;ts que ceux pr&eacute;vus aux articles L. 121-21-3 &agrave; L. 121-21-5. Toute clause par laquelle le consommateur abandonne son droit de r&eacute;tractation est nulle.
          <br /><br />
          Le d&eacute;lai mentionn&eacute; court &agrave; compter de la conclusion du contrat, pour les contrats de prestation de services et ceux mentionn&eacute;s &agrave; l&apos;article L. 121-16-2 du code de la consommation.
          <br />
          Si la prestation est effectu&eacute;e, le d&eacute;lai de r&eacute;tractation est donc caduque.
          <br /><br />
          Une fois le d&eacute;lai de r&eacute;tractation d&eacute;pass&eacute; soit les 14 jours mentionn&eacute;es, l&apos;acheteur pour quelques raisons que ce soit souhaite se r&eacute;tracter du contrat, sauf pour raison de force majeure, la somme totale de la commande revient de droit au vendeur pour int&eacute;r&ecirc;ts et dommages en r&eacute;paration du pr&eacute;judice subi et aucune contestation de quelques natures qu&apos;elles soient ne peut-&ecirc;tre admises.
          <br /><br />
          En cas de remboursement, lorsque les conditions sont respect&eacute;es, Lolita Garnier, My baby love, proc&eacute;dera au remboursement en fonction du moyen qu&apos;elle souhaite et au prix de l&apos;achat initial. Une prestation achet&eacute;e en promotion ne pourra &ecirc;tre rembours&eacute; au prix sans la promotion.
        </p>
        <br />


        <p className="text-2xl mt-10 mb-5">Loi applicable :</p>
        <p className="">
          L&apos;application du droit français et de l&apos;ensemble de ces r&eacute;glementations pr&eacute;vaut pour les conditions g&eacute;n&eacute;rales d&eacute;taill&eacute;es ci-apr&egrave;s.
        </p>
        <br />
      </div>

    </div>
  );
};

export default MentionsLegales;
