import Account from "../Account/Account";
import { AccountData } from "../../assets/Data/AccountData"; // importer les data de account depuis le dossier Data en attendant que les données viennent de l'api
import style from "./AccountSection.css";
import PropTypes from "prop-types";

import { useState } from "react";
import Transaction from "../Transactions/TransactionIndex";
import { transactionsData } from "../../assets/Data/TransactionsData";
/**
 * Composant AccountSection - Container liste des comptes
 * @param {Object} props
 * @param {Array} props.accounts - Liste des comptes
 */

const AccountSection = () => {
    const [activeAccountIndex, setActiveAccountIndex] = useState(null);

    const handleTransactionView = (index, isShowing) => {
        setActiveAccountIndex(isShowing ? index : null);
    };
    
    return (
        <div className={style.AccountSection}>
            <h2 className="sr-only">Accounts</h2>

            {AccountData.map((account, index) => (
                <div key={`account-container-${index}`}
                className={
                    activeAccountIndex !== null && activeAccountIndex !== index ? style.hidden : ""
                }
                >
            </div>
            ))}
            {activeAccountIndex !== null && (
                <Transaction
                transaction={transactionsData}
                onClose={() => handleTransactionView(activeAccountIndex, false)}
                />
            )}
        </div>
    );
};

AccountSection.PropTypes = {
    account: PropTypes.array.isRequired,
};

export default AccountSection; 