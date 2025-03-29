import { ButtonShape } from '../../dataTypes/enums/ButtonShape';
import { ButtonType } from '../../dataTypes/enums/ButtonType';
import styles from './Button.module.css';

type ButtonProps = {
    title?: string;
    type?: ButtonType;
    leftImageSrc?: string;
    rightImageSrc?: string;
    shape?: ButtonShape;
    onClick?: () => void;
};

function Button(props: ButtonProps) {
    const { title, type = ButtonType.PRIMARY, leftImageSrc, rightImageSrc, shape = ButtonShape.CIRCLE, onClick } = props;

    return (
        <button
            className={`${styles.main_container} ${styles[type.toLowerCase()]} ${styles[shape.toLowerCase()]} ${!title ? styles.rounded : ""}`}
            onClick={onClick}
        >
            {leftImageSrc && <img src={leftImageSrc} className={styles.image} />}
            {title && <span>{title}</span>}
            {rightImageSrc && <img src={rightImageSrc} className={styles.image} />}
        </button>
    );
}

export default Button;
