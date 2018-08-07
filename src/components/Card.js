import React from 'react';

const Card = ({ id, name, email }) => {
  // const { id, name, email } = props;
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc' >
      <img src={`https://robohash.org/${id}?size=200x200`} alt='avatar' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;