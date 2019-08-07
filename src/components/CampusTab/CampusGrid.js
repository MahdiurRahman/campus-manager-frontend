import React from "react"
import CampusCard from "./CampusCard.js"

class CampusGrid extends React.Component {
    render() {
        return (
            <div className="campus-grid">
              {this.props.campuses.map(campus => (
                  <CampusCard campus={campus}/>
              ))}
            </div>
        );
    }
}

export default CampusGrid;