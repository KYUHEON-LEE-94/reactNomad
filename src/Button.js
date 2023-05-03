import PropTypes from "prop-types";
// css를 모듈화 - react의 기능중하나
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.title}>{text}</button>;
}

Button.prototype = {
    text: PropTypes.string.isRequired,
}

export default Button;