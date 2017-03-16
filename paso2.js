var html = require('choo/html')
var choo = require('choo')
var app = choo()


app.model({
  state: {
    username: 'Not set yet',
  }
})

function mainView (state, prev, send) {
  return html`
    <main>
      <h1>Username: ${state.username}</h1>
    </main>
  `
}

app.router(['/', mainView])

var tree = app.start()
document.body.appendChild(tree)
