import PropTypes from 'prop-types';
import { FriendListItem } from './FriendItem/FriendItem';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
