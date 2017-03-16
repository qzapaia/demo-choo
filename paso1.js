var html = require('choo/html')
var choo = require('choo')
var app = choo()


function mainView (state, prev, send) {
  return html`
    <main>
      <h1>Username: Hola</h1>
    </main>
  `
}

app.router(['/', mainView])

var tree = app.start()
document.body.appendChild(tree)
