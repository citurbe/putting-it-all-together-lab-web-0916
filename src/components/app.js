import React from 'react';
import UserBlackjack from './user_blackjack'
import AIBlackjack from './ai_blackjack'
import {hitUser} from '../actions/blackjack_actions'
import {hitAI} from '../actions/blackjack_actions'
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.hitMe = this.hitMe.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.stay = this.stay.bind(this)
  }

  hitMe(e) {
    e.preventDefault()
    this.props.store.dispatch(hitUser(this.props.store.getState()))
  }

  calculateAiScore () {
     return this.props.store.getState().aiCards.reduce((prev, curr)=> {return prev + curr.value}, 0)
  }

  calculateUserScore(e) {
    let userScore = this.props.store.getState().userCards.reduce((prev, curr)=> {return prev + curr.value}, 0)
    if(userScore > 21){alert('you lose!')}
    return userScore > 21 ? 'BUST' : userScore
  }

  stay(e) {
    if (e !== undefined)
    {e.preventDefault()}
    
    if(this.calculateAiScore() > 21){
      alert('You win!')
      return 0
    }
    else if(this.calculateUserScore() === 'BUST' || this.calculateAiScore() > this.calculateUserScore()){
      alert('You lose!')
      return 0
    }
    else {
      this.props.store.dispatch(hitAI(this.props.store.getState()))
      this.stay()
    }
  }

  render() {
    let userCards = this.props.store.getState().userCards
    let aiCards = this.props.store.getState().aiCards
    return(
      <div>
        <UserBlackjack userCards={userCards} score={this.calculateUserScore} hitMe={this.hitMe} stay={this.stay} />
        <AIBlackjack aiCards={aiCards} score={this.calculateAiScore} />
      </div>
    )
  }
}
