
import styles from './TransactionTable.module.css';
import AddIcon from '../../assets/add-icon.svg'
import LeftArrowIcon from '../../assets/left-arrow-icon.svg'
import RightArrowIcon from '../../assets/right-arrow-icon.svg'
import Button from '../Button/Button';
import { ButtonType } from '../../dataTypes/enums/ButtonType';
import { ButtonShape } from '../../dataTypes/enums/ButtonShape';
import Avatar from '../Avatar/Avatar';
import { TransactionType } from '../../dataTypes/enums/TransactionType';
import { Transaction } from '../../dataTypes/interfaces/Transaction';
import { constants } from '../../utils/constants';

interface TransactionRowProps {
    data: Transaction;
    showDate: boolean;
    formatDate: (timestamp: number) => string;
}

const TransactionRow = (props: TransactionRowProps) => {
    const { data, formatDate, showDate } = props;
    const [dollars, cents] = data.amount.split(".");

    return (
        <tr>
            <td className={`${showDate ? styles.show : styles.hide}`}>{formatDate(data.date)}</td>
            <td>
                <div className={styles.toFromContainer}>
                    <Avatar text={data.to} />
                    <span className={styles.toFromText}>{data.to}</span>
                    {!data.isPaymentSuccess && <span className={styles.failedChip}>{constants.Common.Other.failed}</span>}
                </div>
            </td>
            <td className={`${styles.amount} ${data.type !== TransactionType.DEBIT ? styles.profit : ""} ${!data.isPaymentSuccess ? styles.strike : ""}`}>
                {data.type === TransactionType.DEBIT && <span>&minus;</span>}
                ${dollars}<sup>.{cents}</sup>
            </td>
            <td>{data.account}</td>
            <td>
                <div className={styles.paymentContainer}>
                    <img
                        src={data.type === TransactionType.DEBIT ? LeftArrowIcon : RightArrowIcon}
                        className={styles.image}
                        alt="Payment Type Icon"
                    />
                    {data.paymentMethod}
                </div>
            </td>
            <td>
                <Button type={ButtonType.SECONDARY} leftImageSrc={AddIcon} shape={ButtonShape.CIRCLE} />
            </td>
        </tr>
    );
};


export default TransactionRow;