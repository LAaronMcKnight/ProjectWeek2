const React = require('react')

class Index extends React.Component {
  render() {
      return (
          <div className="indexPage">
              <link rel="stylesheet" href="/app.css" />
              <div className="header">
                  <div className="headerText">
                    <h1>Vintage Nerd</h1>
                    <br />
                    <p>Shop for vintage nerd items</p>
                  </div>
              </div>
              <div className="body">
                  <div className="bodyMain">
                  </div>
                  <div className="bodyExtra">
                    <a href="http://localhost:8000/games"><button>Games</button></a>
                    <a href="http://localhost:8000/movies"><button>Movies</button></a>
                    <a href="http://localhost:8000/comics"><button>Comics</button></a>
                    <a href="http://localhost:8000/cards"><button>Trading Cards</button></a>
                    <a href="http://localhost:8000/misc"><button>Misc</button></a>
                  </div>
              </div>
          </div>
      )
  }
}

module.exports = Index