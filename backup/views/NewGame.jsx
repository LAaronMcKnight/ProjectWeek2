const React = require('react')

class NewGame extends React.Component {
    render() {
        return (
            <div className="indexPage">
                <link rel="stylesheet" href="/app.css" />
                <div className="header">
                    <div className="headerText">
                    <h1>Sell your games with Vintage Nerd!</h1>
                    
                    </div>
                </div>
                <div className="body">
                    <div className="bodyMain">
                    <form action="/games" method="POST">
                        Game Title:  <input type="text" name="name" required />
                        <br />
                        Condition: <select name="condition">
                            <option value="New">New</option>
                            <option value="Like New">Like New</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </select>
                        <br />
                        Price?: <input type="text" name="price" required />
                        <br />
                        Negotiable?: <input type="checkbox" name="negotiable" required />
                        <br />
                        Description: <input type="textarea" name="description" required />
                        <br />
                        Image: <input type="text" name="image" />
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

module.exports = NewGame