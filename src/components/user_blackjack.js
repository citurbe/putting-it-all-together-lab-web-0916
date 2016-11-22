import React from 'react';

const UserBlackjack = (props) => {
  return(
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {props.userCards.map(card => <li>{card.name}</li>)}
      </ul>
      <form onSubmit={props.hitMe}>
        <button type='submit'> Hit Me </button>
      </form>
      <form onSubmit={props.stay}>
        <button type='submit'> Stay </button>
      </form>
    </div>
  )

}
export default UserBlackjack
