import React from 'react';
import PropTypes from 'prop-types';

import style from './User-Card.module.scss';

const UserCard = ({ className }) => {
  return (
    <div className={`${className} ${style.usercard}`}>
      <span className="icon">Icon</span>
      <dl>
        <dt>First name</dt>
        <dt>Mr.</dt>

        <dt>Last name</dt>
        <dt>Meowgy</dt>
      </dl>
    </div>
  );
};

UserCard.propTypes = {
  className: PropTypes.string.isRequired,
};

export default UserCard;
