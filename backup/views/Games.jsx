const React = require("react");

class Games extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <div className="indexPage">
        <link rel="stylesheet" href="/app.css" />
        <div className="header">
          <div className="headerText">
            <h1>Games</h1>
            <a href="http://localhost:8000/">
              <p>Home</p>
            </a>
          </div>
        </div>
        <div className="games">
          {games.map((game, i) => {
            return (
              <div id="gameMap" key={i}>
                  <h2>{game.name}</h2>
                Condition: {game.condition}
                <br />
                Price: {game.price}
                <br />
                Negotiable: {game.negotiable ? "True" : "False"}
                <br />
                Description: {game.description}
                <br />
                Image: {`<image src="${game.image}"></image>`}
                <div id="gameBtns">
                  <a href={`http://localhost:8000/games/${game.id}/edit`}>
                    <button className="Btn">Edit</button>
                  </a>
                  <form
                    action={`/games/${game.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input className="Btn" type="submit" value="Delete" />
                  </form>
                </div>
              </div>
            );
          })}
          <a href="http://localhost:8000/games/new">
            <button>New Game</button>
          </a>
        </div>
        <div className="body">
          <div className="bodyMain"></div>
          <div className="bodyExtra"></div>
        </div>
      </div>
    );
  }
}

module.exports = Games;
