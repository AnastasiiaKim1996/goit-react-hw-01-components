import PropTypes from 'prop-types';
import { getRandomHexColor } from './RandomBgColor';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.list}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={id}
          >
            <span className={css.label}>.{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};
