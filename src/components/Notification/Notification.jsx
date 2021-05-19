import PropTypes from 'prop-types';

const Notification = ({ text }) => <p className="text">{text}</p>;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
