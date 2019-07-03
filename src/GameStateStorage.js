const STORAGE_KEY = 'super-smash-is-the-best'

function getGamesState () {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY))
}

function setGameState (state) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  return true
}

export { setGameState, getGamesState }
