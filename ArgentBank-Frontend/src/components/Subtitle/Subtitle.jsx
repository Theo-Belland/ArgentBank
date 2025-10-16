import PropTypes from 'prop-types'
import '../../style/Subtitle/Subtitle.css'

/**
 * Composant Subtitle - Texte mis en évidence
 * Utilisé principalement dans le Hero banner
 * @param {Object} props
 * @param {string} props.text - Texte à afficher
   */

function Subtitle({text}){
    return <p className="subtitle">{text}</p>
}

Subtitle.PropTypes = {
    text: PropTypes.string.isRequired
}

export default Subtitle