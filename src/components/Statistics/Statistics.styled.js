import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 500px;
  margin: 20px auto;
  background-color: #f7ebfa;
  border: 1px solid #9986ca;
`;

export const StatisticsTitle = styled.h2`
  color: #351c75;
  font-size: 30px;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% / 5);
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #9986ca;
  background-color: ${getRandomHexColor};
`;

export const StatisticsLabel = styled.span`
  color: white;
`;

export const StatisticsPercentage = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: white;
`;
