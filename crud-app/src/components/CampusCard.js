import React from "react"
import "./CampusCard.css"

class CampusCard extends React.Component {
    render() {
        return(
            <div className="CampusCard">
              <img className="campus-card-img" src={this.props.campus.img}/>
              <div className="campus-card-info">
                <div className="campus-card-title">{this.props.campus.name}</div>
                <div className="campus-card-element">{this.props.campus.bio}</div>
                <button className="campus-card-element">edit</button>
                <button className="campus-card-element">remove</button>
              </div>
            </div>
        );
    }
}

export default CampusCard;