import { useState } from 'react';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage);
  };

  const total = countTotalFeedback();

  return (
    <div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
      />
      <div>
        <div>
          <button onClick={() => setGood(good + 1)}>good</button>
          <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
          <button onClick={() => setBad(bad + 1)}>bad</button>
        </div>
      </div>
    </div>
  );
};
