import { useState } from 'react';

import { Card } from './components/Card';

import styles from './App.module.scss';

import profilePic from './assets/image-jeremy.png';
import data from './data.json';

function App() {
  const [timeFrame, setTimeFrame] = useState<string>("weekly");

  function handletimeFrame(link: string) {
    setTimeFrame(link);
  }

  return (
    <main className={styles.content}>

      <div className={styles.profileCard}>
        <div className={styles.cardContent}>
          <div className={styles.profile}>
            <img src={profilePic} alt="Jeremy" />
            <div className={styles.report}>
              <span>Report for</span>
              <strong>Jeremy Robson</strong>
            </div>
          </div>
          <nav>
            <button
              className={timeFrame === 'daily' ? styles.activeLink : ''}
              onClick={() => handletimeFrame('daily')}
            >
              Daily
            </button>
            <button
              className={timeFrame === 'weekly' ? styles.activeLink : ''}
              onClick={() => handletimeFrame('weekly')}
            >
              Weekly
            </button>
            <button
              className={timeFrame === 'monthly' ? styles.activeLink : ''}
              onClick={() => handletimeFrame('monthly')}
            >
              Monthly
            </button>
          </nav>
        </div>
      </div>

      {data.map((activity) => {
        return (
          <Card
            key={activity.title}
            title={activity.title}
            timeframe={timeFrame}
            currentTime={activity.timeframes[timeFrame].current}
            previousTime={activity.timeframes[timeFrame].previous}
          />
        )
      })}
    </main>
  )
}

export default App