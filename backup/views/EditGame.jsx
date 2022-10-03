const React = require('react')

class EditGame extends React.Component {
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
                    <form action={`/games/${this.props.game._id}?_method=PUT`} method="POST">
                        Title:  <input defaultValue={this.props.game.name} type="text" name="name" required />
                        <br />
                        Condition: <select defaultValue={this.props.game.condition} name="condition">
                            <option value="New">New</option>
                            <option value="Like New">Like New</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </select>
                        <br />
                        Price: <input defaultValue={this.props.game.price} type="text" name="price" required />
                        <br />
                        Negotiable?: {this.props.game.negotiable ? (
                            <input type="checkbox" name="negotiable" defaultChecked />) : (
                                <input type="checkbox" name="negotiable" />
                            )}
                        
                        <br />
                        Description: <input type="textarea" defaultValue={this.props.game.description} name="description" required />
                        <br />
                        Image: <input type="text" defaultValue={this.props.game.image} name="image" />
                        <input type="submit" value="Submit Game"></input>
                    </form>
                    </div>
                    <div className="bodyExtra">

                    </div>

                </div>

            </div>
        )
    }
}

module.exports = EditGame