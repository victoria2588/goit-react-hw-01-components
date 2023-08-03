import { FriendItem } from './FriendItem';
import PropTypes from 'prop-types';
import { FriendListContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
