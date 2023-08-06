import cx from "classnames";
import styles from "./button.module.scss";

export function Button({ value, href, className }) {
    const Tag = "a";

    return (
        <a href={href} className={cx(styles.root, className)}>
            {value}
        </a>
    );
}
