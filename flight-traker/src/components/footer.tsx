import styles from '../styles/footer.module.css'; 

export const Footer = () => {
    return (
        <div className={styles.foot}>
            <div className={styles.container}>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>blogs</p>
            </div>
            <p>&copy; 2023 mani&co.  All rights reserved.</p>
        </div>
    );
};
