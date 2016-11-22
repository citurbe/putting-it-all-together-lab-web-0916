export const fetchDeck = () => {return {type: 'FETCH_DECK'}}

export const setAICards = (state) => {
  let firstCardIndex = Math.floor(Math.random() * state.deck.length)
  let secondCardIndex = Math.floor(Math.random() * state.deck.length)
  while(secondCardIndex === firstCardIndex){
    secondCardIndex = Math.floor(Math.random() * state.deck.length)
  }
  let newDeck = state.deck.filter(card => {
    return card !== state.deck[firstCardIndex] && card !== state.deck[secondCardIndex]
  })
  return{type: 'SET_AI_CARDS', payload: {userCards: state.userCards, deck: newDeck, aiCards: [state.deck[firstCardIndex], state.deck[secondCardIndex]]}}
}

export const setUserCards = (state) => {
  let firstCardIndex = Math.floor(Math.random() * state.deck.length)
  let secondCardIndex = Math.floor(Math.random() * state.deck.length)
  while(secondCardIndex === firstCardIndex){
    secondCardIndex = Math.floor(Math.random() * state.deck.length)
  }
  let newDeck = state.deck.filter(card => {
    return card !== state.deck[firstCardIndex] && card !== state.deck[secondCardIndex]
  })
  return{type: 'SET_USER_CARDS', payload: {deck: newDeck, userCards: [state.deck[firstCardIndex], state.deck[secondCardIndex]]}}
}

export const hitUser = (state) => {
  let cardIndex = Math.floor(Math.random() * state.deck.length)
  let newDeck = state.deck.filter(card => {
    return card !== state.deck[cardIndex]
  })
  return{type: 'HIT_USER', payload: {deck: newDeck, userCards: [...state.userCards, state.deck[cardIndex]]}}
}

export const hitAI = (state) => {
  let cardIndex = Math.floor(Math.random() * state.deck.length)
  let newDeck = state.deck.filter(card => {
    return card !== state.deck[cardIndex]
  })
  return{type: 'HIT_AI', payload: {deck: newDeck, aiCards: [...state.aiCards, state.deck[cardIndex]]}}
}
