import styles from './styles.module.scss';

import workSvg from '../../assets/icon-work.svg';
import playSvg from '../../assets/icon-play.svg';
import studySvg from '../../assets/icon-study.svg'
import exerciseSvg from '../../assets/icon-exercise.svg'
import socialSvg from '../../assets/icon-social.svg'
import selfCareSvg from '../../assets/icon-self-care.svg'

import ellipsis from '../../assets/icon-ellipsis.svg';

interface cardProps {
    title: string;
    timeframe: string;
    currentTime: number;
    previousTime: number;
}


export function Card(props: cardProps) {
    const svg: {[key:string]:string} = {
        "Work": workSvg,
        "Play": playSvg,
        "Study": studySvg,
        "Exercise": exerciseSvg,
        "Social": socialSvg,
        "Self Care": selfCareSvg
    }
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
            <div className={`${styles.header} ${titleToStyle[props.title]}`}>
                <img src={svg[props.title]} />
            </div>
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