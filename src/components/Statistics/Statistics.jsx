import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercentage>{percentage}%</StatisticsPercentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
