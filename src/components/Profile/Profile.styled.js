import styled from 'styled-components';

export const ProfileContainer = styled.div` 
display: flex; 
flex-direction: column; 
width: 400px; 
margin-left: auto; 
margin-right: auto; 
margin-top: 20px; 
background-color: #f7ebfa; 
}`;

export const ProfileDescription = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #9986ca;
`;

export const ProfileImage = styled.img`
  display: block;
  width: 250px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(235, 52, 213, 0.12),
    0px 1px 1px rgba(235, 52, 213, 0.14), 0px 2px 1px rgba(235, 52, 213, 0.2);
`;

export const ProfileName = styled.p`
  color: #351c75;
  font-size: 24px;
  font-weight: 700;
`;

export const ProfileTag = styled.p`
  color: #351c75;
`;

export const ProfileLocation = styled.p`
  color: #351c75;
  font-weight: 700;
`;

export const ProfileList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
`;

export const ProfileItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  width: calc(100% / 3);
  border: 1px solid #9986ca;
  background-color: #d1cdcd;
`;

export const ProfileSubtitle = styled.span`
  color: #504471;
  display: block;
`;

export const ProfileInfo = styled.span`
  color: #504471;
  font-weight: 700;
`;
