var html = require('choo/html')
var choo = require('choo')
var app = choo()

app.model({
  state: {
    username: 'Not set yet',
  },
  reducers: {
    setUsername: function (state, username) {
      return { username };
    }
  }
})

function mainView (state, prev, send) {
  return html`
    <main>
      <h1>Username: ${state.username}</h1>
      <input type="text" onchange=${update} />
    </main>
  `

  function update(e){
    send('setUsername', e.target.value)
  }
}

app.router(['/', mainView])
var tree = app.start()
document.body.appendChild(tree)
