import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.isOnline : css.isOffline}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt={name} width="50" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar:
    'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
