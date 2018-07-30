import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {
  // const CardComponents = friends.map((robot, i) => <Card key={i} id={friends[i].id} name={friends[i].name} email={friends[i].email} />);

  // if (true) {
  //   throw new Error('Oops!');
  // }
  return (
    <div>
      {
        friends.map((robot, i) =>
          <Card key={i} id={friends[i].id} name={friends[i].name} email={friends[i].email} />
        )
      }
    </div>
  );
}

export default CardList;