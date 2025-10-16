import PropTypes from "prop-types";
import style from './Account.css'
import Button from '../Button/Button'
import Transaction from '../Transaction/Transaction'
import Icon from '../Icons/Icon'
import { useState } from "react";

/**
 * Composant Account - Affiche les informations d'un compte bancaire
 * @param {Object} props
 * @param {string} props.title - Titre du compte (ex: "Argent Bank Checking")
 * @param {string} props.accountNumber - Numéro du compte (ex: "x8349")
 * @param {string} props.amount - Montant du compte
 * @param {string} props.description - Description (ex: "Available Balance")
 * @param {function} props.onTransactionView - Callback pour afficher/masquer les transactions
 * @param {boolean} props.isActive - Indique si le compte est actif
 */


const Account = ({title, accountNumber, amount, description, onTransactionView, isActive}) => {
    const [showTransaction, setShowTransaction] = useState(false)

    const handleTransactionToggle = () => {
        const newState = !showTransaction;
        setShowTransaction(newState);
        onTransactionView && onTransactionView(newState)
    }
    return (
        <section className={`${style.accoutn} ${isActive ? style.active : ''}`}>
            <div className={style.accountContentWrapper}>
                <h3 className={style.accountTitle}>
                    {title}
                </h3>
                <p className={style.accountNumber}>{accountNumber}</p>
                <p className={style.accountAmount}>{amount}</p>
                <p className={style.accountAmountDescription}>{description}</p> 
            </div>
            <div className={style.accountContentWrapperCta}>
                <Button
                text={showTransaction ? 'Hide Transaction' : 'View Transaction'}
                className={style.transactionButton}
                onClick={handleTransactionToggle}
                />
            </div>
        </section>
    )
}

Account.PropTypes = {
    title: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Account