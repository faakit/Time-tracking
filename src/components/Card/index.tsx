import styles from './styles.module.scss';

import ellipsis from '../../assets/icon-ellipsis.svg';

interface cardProps {
    title: string;
    timeframe: string;
    currentTime: number;
    previousTime: number;
}


export function Card(props: cardProps) {
    const titleToStyle: {[key:string]:string} = {
        "Work": styles.work,
        "Play": styles.play,
        "Study": styles.study,
        "Exercise": styles.exercise,
        "Social": styles.social,
        "Self Care": styles.selfCare
    }

    return (
        <div className={styles.card}>
            <div className={`${styles.header} ${titleToStyle[props.title]}`} />
            <div className={styles.cardContent}>
                <div className={styles.upperContent}>
                    <strong>{props.title[0].toUpperCase() + props.title.substring(1)}</strong>
                    <img src={ellipsis} alt="More" />
                </div>
                <div className={styles.lowerContent}>
                    <time>{props.currentTime}hrs</time>
                    <span>Last {props.timeframe} - {props.previousTime}hrs</span>
                </div>
            </div>
        </div>
    )
}