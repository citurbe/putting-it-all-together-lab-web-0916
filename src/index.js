import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from './store.js'
import blackjackReducer from './reducers/blackjack_reducer'
import App from './components/app'
import {fetchDeck} from './actions/blackjack_actions'
import {setAICards} from './actions/blackjack_actions'
import {setUserCards} from './actions/blackjack_actions'
import {hitUser} from './actions/blackjack_actions'
import {hitAI} from './actions/blackjack_actions'
const store = createStore(blackjackReducer)
const render = () => {ReactDOM.render(<App store={store}/>, document.getElementById('container'))}

store.subscribe(render)
store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))

require('../test/index-test.js')  // Leave this in!
