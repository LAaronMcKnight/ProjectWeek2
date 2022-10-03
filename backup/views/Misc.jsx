const React = require("react");

class Misc extends React.Component {
  render() {
    const { misc } = this.props;
    return (
      <div className="indexPage">
        <link rel="stylesheet" href="/app.css" />
        <div className="header">
          <div className="headerText">
            <h1>Misc Items</h1>
            <a href="http://localhost:8000/">
              <p>Home</p>
            </a>
          </div>
        </div>
        <div className="misc">
          {misc.map((misc, i) => {
            return (
              <div id="miscMap" key={i}>
                  <h2>{misc.name}</h2>
                Condition: {misc.condition}
                <br />
                Price: {misc.price}
                <br />
                Negotiable: {misc.negotiable ? "True" : "False"}
                <br />
                Description: {misc.description}
                <br />
                Image: {`<image src="${misc.image}"></image>`}
                <div id="miscBtns">
                  <a href={`http://localhost:8000/misc/${misc.id}/edit`}>
                    <button className="Btn">Edit</button>
                  </a>
                  <form
                    action={`/misc/${misc.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input className="Btn" type="submit" value="Delete" />
                  </form>
                </div>
              </div>
            );
          })}
          <a href="http://localhost:8000/misc/new">
            <button>New Item</button>
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

module.exports = Misc;
