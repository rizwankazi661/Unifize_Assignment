import styles from './Avatar.module.css'

const Avatar = ({ text }: { text: string }) => {
    const getInitial = (name: string) => {
        return name && name.length > 0 ? name.charAt(0).toUpperCase() : "?";
    };

    return (
        <div className={styles.main_container}>
            {getInitial(text)}
        </div>
    );
};

export default Avatar;