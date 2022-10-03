const React = require('react')

class EditMovie extends React.Component {
    render() {
        return (
            <div className="indexPage">
                <link rel="stylesheet" href="/app.css" />
                <div className="header">
                    <div className="headerText">
                    <h1>Entry Editor</h1>
                    
                    </div>
                </div>
                <div className="body">
                    <div className="bodyMain">
                    <form action={`/movies/${this.props.movie._id}?_method=PUT`} method="POST">
                        Title:  <input defaultValue={this.props.movie.name} type="text" name="name" required />
                        <br />
                        Condition: <select defaultValue={this.props.movie.condition} name="condition">
                            <option value="New">New</option>
                            <option value="Like New">Like New</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </select>
                        <br />
                        Price: <input defaultValue={this.props.movie.price} type="text" name="price" required />
                        <br />
                        Negotiable?: {this.props.movie.negotiable ? (
                            <input type="checkbox" name="negotiable" defaultChecked />) : (
                                <input type="checkbox" name="negotiable" />
                            )}
                        
                        <br />
                        Description: <input type="textarea" defaultValue={this.props.movie.description} name="description" required />
                        <br />
                        Image: <input type="text" defaultValue={this.props.movie.image} name="image" />
                        <input type="submit" value="Submit Movie"></input>
                    </form>
                    </div>
                    <div className="bodyExtra">

                    </div>

                </div>

            </div>
        )
    }
}

module.exports = EditPlanet