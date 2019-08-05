import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as User } from '../../assets/user.svg';

import style from './User-Card.module.scss';

const UserCard = ({ user }) => {
  if (user.firstName === undefined || user.lastName === undefined) {
    return null;
  }

  return (
    <div className={style.usercard}>
      <User className={style.icon} />
      <dl className={style.userDetails}>
        <dt className="visually-hidden">First name</dt>
        <dt className={style.userDetailsValue}>{user.firstName}</dt>

        <dt className="visually-hidden">Last name</dt>
        <dt className={style.userDetailsValue}>{user.lastName}</dt>
      </dl>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default UserCard;
