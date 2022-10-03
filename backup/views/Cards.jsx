const React = require("react");

class Cards extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="indexPage">
        <link rel="stylesheet" href="/app.css" />
        <div className="header">
          <div className="headerText">
            <h1>Cards</h1>
            <a href="http://localhost:8000/">
              <p>Home</p>
            </a>
          </div>
        </div>
        <div className="cards">
          {cards.map((card, i) => {
            return (
              <div id="cardMap" key={i}>
                  <h2>{card.name}</h2>
                Condition: {card.condition}
                <br />
                Price: {card.price}
                <br />
                Negotiable: {card.negotiable ? "True" : "False"}
                <br />
                Description: {card.description}
                <br />
                Image: {`<image src="${card.image}"></image>`}
                <div id="cardBtns">
                  <a href={`http://localhost:8000/cards/${card.id}/edit`}>
                    <button className="Btn">Edit</button>
                  </a>
                  <form
                    action={`/cards/${card.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input className="Btn" type="submit" value="Delete" />
                  </form>
                </div>
              </div>
            );
          })}
          <a href="http://localhost:8000/cards/new">
            <button>New Card</button>
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

module.exports = Cards;
