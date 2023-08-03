import PropTypes from 'prop-types';

import {
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileName,
  ProfileLocation,
  ProfileList,
  ProfileItem,
  ProfileSubtitle,
  ProfileInfo,
  ProfileTag,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const {
    username,

    tag,

    location,

    avatar,

    stats: { followers, views, likes },
  } = user;

  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileImage src={avatar} alt={username} />

        <ProfileName>{username}</ProfileName>

        <ProfileTag>@{tag}</ProfileTag>

        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileList>
        <ProfileItem>
          <ProfileSubtitle>Followers</ProfileSubtitle>

          <ProfileInfo>{followers}</ProfileInfo>
        </ProfileItem>

        <ProfileItem>
          <ProfileSubtitle>Views</ProfileSubtitle>

          <ProfileInfo>{views}</ProfileInfo>
        </ProfileItem>

        <ProfileItem>
          <ProfileSubtitle>Likes</ProfileSubtitle>

          <ProfileInfo>{likes}</ProfileInfo>
        </ProfileItem>
      </ProfileList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
