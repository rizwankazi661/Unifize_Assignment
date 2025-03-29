import styles from './TransactionTable.module.css';
import { useMemo } from 'react';
import TransactionRow from './TransactionRow';
import { constants } from '../../utils/constants';
import useTransactions from './Transaction.hook';

function TransactionTable() {
    const { transactions, formatDate } = useTransactions();

    const memoizedTransactions = useMemo(() => transactions, [transactions]);

    return (
        <table className={styles.main_container}>
            <thead>
                <tr>
                    <th>{constants.Table.tableheader.date}</th>
                    <th>{constants.Table.tableheader.toFrom}</th>
                    <th className={styles.amount}>{constants.Table.tableheader.amount}</th>
                    <th>{constants.Table.tableheader.account}</th>
                    <th>{constants.Table.tableheader.paymentMethod}</th>
                    <th>{constants.Table.tableheader.attachement}</th>
                </tr>
            </thead>
            <tbody>
                {memoizedTransactions.map((data, index, array) => (
                    <TransactionRow
                        key={index}
                        data={data}
                        showDate={index === 0 || formatDate(data.date) !== formatDate(array[index - 1].date)}
                        formatDate={formatDate}
                    />
                ))}
            </tbody>
        </table>
    );
}


export default TransactionTable;
