import PropTypes from 'prop-types';
import {
  FriendListItem,
  FriendListImage,
  FriendListName,
  StatusOff,
  StatusOn,
} from './FriendList.styled';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendListItem>
      {isOnline ? <StatusOff></StatusOff> : <StatusOn></StatusOn>}
      <FriendListImage src={avatar} alt={name} width="48" />
      <FriendListName>{name}</FriendListName>
    </FriendListItem>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
