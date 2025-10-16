import PropTypes from "prop-types";
import Subtitle from "../Subtitle/Subtitle";
import "../../style/Hero/Hero.css";

/**
 * Composant Hero - Banner principal de la page d'accueil
 * Utilise Subtitle pour afficher plusieurs lignes de sous-titres
 * @param {Object} props
 * @param {string[]} props.subtitles - Liste des sous-titres à afficher
 * @param {string} props.text - Texte principal du hero
 */

function Hero({ subtitles, text }) {
  return (
    <div className="{style.hero}">
      <section className="{style.heroContent}">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((subtitles, index) => (
          <Subtitle key={`subtitle-${index}`} text={subtitles} />
        ))}
        <p className="style.text">{text}</p>
      </section>
    </div>
  );
}
Hero.PropTypes = {
  subtitles: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string.isRequired,
};

export default Hero;
