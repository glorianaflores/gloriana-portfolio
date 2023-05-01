import cx from "classnames";
import styles from "./text.module.scss";

export default function Text({
    value,
    style = "body1",
    tag = "p",
    color,
    className,
}) {
    const Tag = tag;

    return (
        <Tag
            className={cx(styles.root, className, {
                [styles[style]]: style,
                [`color-${color}`]: color,
            })}
        >
            {value}
        </Tag>
    );
}
