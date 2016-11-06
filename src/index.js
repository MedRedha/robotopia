// TODO: replace this later with require
if (!window.__loaded) {
  document.write('<script src="./node_modules/blockly/blockly_compressed.js"></script>')
  document.write('<script src="./node_modules/blockly/blocks_compressed.js"></script>')
  document.write('<script src="./node_modules/blockly/msg/js/en.js"></script>')
  document.write('<script src="./node_modules/blockly/javascript_compressed.js"></script>')
  document.write('<script src="../lib/blocks.js"></script>')
  document.write('<script src="../lib/javascript-commands.js" onload="startApp()"}></script>')
}
window.__loaded = true

const assets = require('./utils/assets')
const choo = require('choo')
const hotModuleReplacement = require('./utils/hot-module-replacement')
const app = choo()

app.model(require('./model'))

app.router((route) => [
  route('/', require('./components/main'))
])

hotModuleReplacement(app)

window.startApp = () => {
  assets.load({
    GRASS_BLOCK: '../assets/img/grass-block.png',
    PLAIN_BLOCK: '../assets/img/plain-block.png',
    GEM: '../assets/img/gem-blue.png',
    ROBOT: '../assets/img/character-girl.png'
  }).then(() => {
    document.body.innerHTML = ''
    document.body.appendChild(app.start())
  })
}
