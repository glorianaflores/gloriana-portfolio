import cx from "classnames";
import styles from "./text.module.scss";

export default function Text({ value, style = "body1", tag = "p", className }) {
    const Tag = tag;

    return (
        <Tag className={cx(styles.root, className, { [styles[style]]: style })}>
            {value}
        </Tag>
    );
}
