import PropTypes from 'prop-types'
import {
    ProfileCard,
    Description,
    UserAvatar,
    UserName,
    UserTag,
    UserLocation,
    StatsList,
    StatsItem,
    Label,
    Quantity
} from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<ProfileCard >
  <Description >
    <UserAvatar
      src={avatar}
      alt="User avatar"
    />
            <UserName >{username}</UserName>
            <UserTag >@{tag}</UserTag>
            <UserLocation >{location }</UserLocation>
  </Description>

  <StatsList >
    <StatsItem>
      <Label >Followers</Label>
      <Quantity >{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label >Views</Label>
      <Quantity >{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label >Likes</Label>
      <Quantity >{stats.likes}</Quantity>
    </StatsItem>
  </StatsList>
</ProfileCard>)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}