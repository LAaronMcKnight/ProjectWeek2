const React = require("react");

class Movies extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="indexPage">
        <link rel="stylesheet" href="/app.css" />
        <div className="header">
          <div className="headerText">
            <h1>Movies</h1>
            <a href="http://localhost:8000/">
              <p>Home</p>
            </a>
          </div>
        </div>
        <div className="movies">
          {movies.map((movie, i) => {
            return (
              <div id="movieMap" key={i}>
                  <h2>{movie.name}</h2>
                Condition: {movie.condition}
                <br />
                Price: {movie.price}
                <br />
                Negotiable: {movie.negotiable ? "True" : "False"}
                <br />
                Description: {movie.description}
                <br />
                Image: {`<image src="${movie.image}"></image>`}
                <div id="movieBtns">
                  <a href={`http://localhost:8000/movies/${movie.id}/edit`}>
                    <button className="Btn">Edit</button>
                  </a>
                  <form
                    action={`/movies/${movie.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input className="Btn" type="submit" value="Delete" />
                  </form>
                </div>
              </div>
            );
          })}
          <a href="http://localhost:8000/movies/new">
            <button>New Movie</button>
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

module.exports = Movies;
