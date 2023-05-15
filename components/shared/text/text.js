import cx from "classnames";
import styles from "./text.module.scss";

export function Text({
    value,
    style = "body1",
    tag = "p",
    color,
    alignment,
    className,
}) {
    const Tag = tag;

    return (
        <Tag
            className={cx(styles.root, className, {
                [styles[style]]: style,
                [`color-${color}`]: color,
                [styles[`alignment-${alignment}`]]: alignment,
            })}
        >
            {value}
        </Tag>
    );
}
