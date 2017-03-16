var html = require('choo/html')
var choo = require('choo')
var app = choo()

app.model({
  state: {
    username: 'Not set yet',
    repos:[]
  },
  effects:{
    getRepos(state, username, send,done){
      send('setUsername',username,done);

      fetch(`https://api.github.com/users/${username}/repos`).then(function(repos){
        return repos.json();
      }).then(repos=>{
        send('setRepos',repos,done);
      })
    }
  },
  reducers: {
    setUsername: function (state, username) {
      return { username };
    },
    setRepos: function (state, repos) {
      return { repos };
    }
  }
})

function mainView (state, prev, send) {
  return html`
    <main>
      <h1>Username: ${state.username}</h1>
      <input type="text" onchange=${update} />

      <ul>
      ${state.repos.map(r=>html`
        <li>
          <a target="_blank" href=${r.html_url}>${r.name}</a>
        </li>
      `)}
      </ul>
    </main>
  `

  function update (e) {
    send('getRepos', e.target.value)
  }
}

app.router(['/', mainView])

var tree = app.start()
document.body.appendChild(tree)
