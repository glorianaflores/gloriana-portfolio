import cx from "classnames";
import styles from "./container.module.scss";

export function Container({ bg, className, children }) {
    return (
        <div className={cx(styles.containerWrapper, { [`bg-${bg}`]: bg })}>
            <div className={cx(styles.container, className)}>{children}</div>
        </div>
    );
}
