import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.Statistics}>
    {total > 0 ? (
      <>
        <span className={styles.Statistics__item}>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        {good ? <span>Positive feedback: {positivePercentage}%</span> : null}
      </>
    ) : (
      <Notification text="No feedback given" />
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
