import PropTypes from 'prop-types'
import { FriendItem, Status, Avatar, Name } from './FriendListItem.styled'

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendItem >
            <Status status={isOnline}></Status>
  <Avatar src={avatar} alt="User avatar"/>
            <Name>{name}</Name>
</FriendItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}