import PropTypes from 'prop-types'
import style from './CheckBoxField.css'

/**
 * Composant CheckBoxField - Champ de type checkbox réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.id - ID unique du champ
 * @param {string} props.label - Label de la checkbox
 * @param {boolean} props.checked - État de la checkbox
 * @param {function} props.onChange - Fonction appelée lors du changement d'état
 * @returns {JSX.Element} Checkbox avec son label
 */

function CheckBoxField({id, label, checked, onChange}) {
    return(
        <div className={style.inputRemmber}>
            <input
            type="checkbox"
            id={id}
            name={id}
            checked={checked}
            onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

CheckBoxField.PropTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired
}

export default CheckBoxField