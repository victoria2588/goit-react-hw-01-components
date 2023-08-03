import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  background-color: #f7ebfa;
  border: 1px solid #9986ca;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px 10px 5px 20px;
  border-bottom: 1px solid #9986ca;
`;

export const FriendListImage = styled.img`
  width: 70px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(235, 52, 213, 0.12),
    0px 1px 1px rgba(235, 52, 213, 0.14), 0px 2px 1px rgba(235, 52, 213, 0.2);
`;

export const FriendListName = styled.p`
  color: #351c75;
  font-size: 24px;
  font-weight: 700;
`;

export const StatusOff = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const StatusOn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;
