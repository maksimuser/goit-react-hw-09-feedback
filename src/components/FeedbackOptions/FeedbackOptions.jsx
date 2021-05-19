import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.FeedbackOptions}>
      {options.map(option => {
        const handleFeedback = () => onLeaveFeedback(option);
        return (
          <button
            key={option}
            className={styles.FeedbackOptions__btn}
            type="button"
            onClick={handleFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
