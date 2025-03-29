import styles from './Transaction.module.css';
import KeyboardArrowDown from '../../assets/keyboard_arrow_down.svg'
import FilterIcon from '../../assets/filter-icon.svg'
import ReceiptIcon from '../../assets/receipt-icon.svg'
import DownloadIcon from '../../assets/download-icon.svg'
import BookmarkIcon from '../../assets/bookmark-icon.svg'
import { constants } from '../../utils/constants';
import Button from '../../components/Button/Button';
import { ButtonType } from '../../dataTypes/enums/ButtonType';
import { ButtonShape } from '../../dataTypes/enums/ButtonShape';
import TransactionTable from '../../components/TransactionTable/TransactionTable';

function Transaction() {
    return (
        <div className={styles.parent_container}>
            <div className={styles.main_container}>
                <div className={styles.content}>
                    <header>
                        <div>
                            {constants.Transaction.title}
                        </div>
                        <div className={styles.action_container}>
                            <Button title={constants.Common.Button.matchReceipts} type={ButtonType.SECONDARY} leftImageSrc={ReceiptIcon} />
                            <Button title={constants.Common.Button.exportAll} type={ButtonType.SECONDARY} leftImageSrc={DownloadIcon} />
                        </div>
                    </header>
                    <div className={styles.filters_section}>
                        <Button title={"Data Views"} type={ButtonType.PRIMARY} leftImageSrc={BookmarkIcon} rightImageSrc={KeyboardArrowDown} shape={ButtonShape.SQUARE} />
                        <hr />
                        <Button title={constants.Common.Button.filters} type={ButtonType.SECONDARY} leftImageSrc={FilterIcon} />
                        <Button title={"Date"} type={ButtonType.PRIMARY} rightImageSrc={KeyboardArrowDown} shape={ButtonShape.SQUARE} />
                        <Button title={"Keywords"} type={ButtonType.PRIMARY} rightImageSrc={KeyboardArrowDown} shape={ButtonShape.SQUARE} />
                        <Button title={"Amount"} type={ButtonType.PRIMARY} rightImageSrc={KeyboardArrowDown} shape={ButtonShape.SQUARE} />
                    </div>
                    <div className={styles.table_container}>
                        <TransactionTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction;
