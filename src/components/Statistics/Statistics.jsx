import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <div>
        <p>Good : {good}</p>
        <p>Neutral : {neutral}</p>
        <p>Bad : {bad}</p>
        <p>Total : {total}</p>
        <p>Procenmt : {countPositiveFeedbackPercentage}%</p>
      </div>
    </div>
  );
};

export default Statistics;
