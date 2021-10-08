import * as React from 'react';
import { IRobot } from '../containers/App.js';
import Card from './Card';

// type props = { robots: IRobot[]}; /*one way of doing it (just put props in instead of the object*/
/*JSX.Element does not have to be there*/
const CardList = ({ robots }:{robots: IRobot[]} ): JSX.Element => {
  return (
    <div>
      {
        robots.map((user: IRobot, i: number) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;