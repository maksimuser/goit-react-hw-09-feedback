import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, children }) => (
  <div className={styles.Section}>
    <h1 className={styles.Section__title}> {title}</h1>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
