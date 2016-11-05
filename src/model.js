const gameEngine = require('./game/game-engine')
const reducers = require('./reducers')
const effects = require('./effects')
const gameGrid = require('./utils/gamegrid')

const gameState = gameEngine.init({
  tiles: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  entities: [
    {
      id: 'robot',
      components: {
        position: { x: 4, y: 5 },
        sprite: { url: 'assets/robot.png' }
      }
    },
    {
      components: {
        position: { x: 2, y: 8 },
        item: { type: 'gem' },
        sprite: { url: 'assets/gem.png' }
      }
    },
    {
      components: {
        position: { x: 7, y: 2 },
        item: { type: 'gem' },
        sprite: { url: 'assets/gem.png' }
      }
    }
  ]
})

const initialState = {
  robot: { x: 0, y: 0 },
  running: false,
  srcCode: '',
  game: gameState
}

module.exports = {
  state: initialState,
  effects,
  reducers
}
