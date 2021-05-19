import { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import './styles.scss';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const obj = {
    good,
    neutral,
    bad,
  };

  const handleFeedback = obj => {
    switch (obj) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        throw new Error('ERROR!');
    }
  };

  const countTotalFeedback = () => {
    const values = Object.values(obj);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const keys = Object.keys(obj);

  return (
    <div className="Container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
