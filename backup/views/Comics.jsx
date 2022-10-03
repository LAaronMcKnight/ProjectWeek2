const React = require("react");

class Comics extends React.Component {
  render() {
    const { comics } = this.props;
    return (
      <div className="indexPage">
        <link rel="stylesheet" href="/app.css" />
        <div className="header">
          <div className="headerText">
            <h1>Comics</h1>
            <a href="http://localhost:8000/">
              <p>Home</p>
            </a>
          </div>
        </div>
        <div className="comics">
          {comics.map((comic, i) => {
            return (
              <div id="comicMap" key={i}>
                  <h2>{comic.name}</h2>
                Condition: {comic.condition}
                <br />
                Price: {comic.price}
                <br />
                Negotiable: {comic.negotiable ? "True" : "False"}
                <br />
                Description: {comic.description}
                <br />
                Image: {`<image src="${comic.image}"></image>`}
                <div id="comicBtns">
                  <a href={`http://localhost:8000/comics/${comic.id}/edit`}>
                    <button className="Btn">Edit</button>
                  </a>
                  <form
                    action={`/comics/${comic.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input className="Btn" type="submit" value="Delete" />
                  </form>
                </div>
              </div>
            );
          })}
          <a href="http://localhost:8000/comics/new">
            <button>New Comic</button>
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

module.exports = Comics;
