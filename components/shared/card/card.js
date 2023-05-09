import cx from "classnames";
import styles from "./card.module.scss";
import Text from "../text/text";

export default function Card({
    position,
    description,
    startDate,
    endDate,
    place,
    bg = "primary",
    className,
}) {
    return (
        <div className={cx(styles.card, className, { [`bg-${bg}`]: bg })}>
            {(startDate || endDate) && (
                <div className={styles.text}>
                    {startDate && (
                        <Text
                            value={startDate}
                            tag="span"
                            style="body2"
                            color="terciary"
                        />
                    )}
                    {startDate && endDate && (
                        <Text
                            value=" - "
                            tag="span"
                            style="body2"
                            color="terciary"
                        />
                    )}
                    {endDate && (
                        <Text
                            value={endDate}
                            tag="span"
                            style="body2"
                            color="terciary"
                        />
                    )}
                </div>
            )}
            {position && (
                <Text
                    value={position}
                    tag="h3"
                    style="h3"
                    color="white"
                    className={styles.title}
                />
            )}
            {place && (
                <Text
                    value={place}
                    tag="span"
                    style="body1"
                    color="white"
                    className={styles.title}
                />
            )}
            {description && (
                <Text
                    value={description}
                    tag="p"
                    style="body1"
                    color="white"
                    className={styles.description}
                />
            )}
        </div>
    );
}
