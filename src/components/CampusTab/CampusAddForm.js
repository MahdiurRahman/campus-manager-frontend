import React from "react";
import {connect} from 'react-redux';
import {addCampus} from '../../actions';
import {Redirect} from 'react-router';

class CampusAddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			nameIsCorrect: true,
			addressIsCorrect: true
		}
		this.addCampus = this.addCampus.bind(this);
	}

	addCampus (e) {
		e.preventDefault();

		let campus = {
			id: this.props.campuses.length.toString(),
			name: e.target.elements.name.value,
			bio: e.target.elements.bio.value,
			address: e.target.elements.address.value,
			img: 'https://png.pngtree.com/svg/20170616/22811e059c.svg'
		}

		let correctName = true;
        if (campus.name.length < 1){
            correctName = false;
        }
        for (let i = 0; i < campus.name.length; i++){
            if (!(campus.name[i].toLowerCase() != campus.name[i].toUpperCase() || campus.name[i] == " ")){
                correctName = false;
            }
        }
        let correctAddress = true;
        if (campus.address.length < 1){
            correctAddress = false;
        }
        for (let i = 0; i < campus.address.length; i++){
            if (!(campus.address[i].toLowerCase() != campus.address[i].toUpperCase() || campus.address[i] == " " || this.state.address[i] == "," || (campus.address[i] >= 0 && campus.address[i] <= 9))){
                correctAddress = false;
            }
        }
        this.setState({
        	nameIsCorrect: correctName,
        	addressIsCorrect: correctAddress
        })

        if (correctName && correctAddress){
			this.props.addCampus(campus);
			this.setState({redirect: true});
		}
	}

	render() {
		if (!this.state.redirect) {
			return (
				<div>
				<form onSubmit={this.addCampus}>
				  <label>
					Name:
					<input type="text" name="name" />
				  </label>
				  <label>
					Bio:
					<input type="text" name="bio" />
				  </label>
				  <label>
					Address:
					<input type="text" name="address" />
				  </label>
				  <input type="submit" value="Submit"/>
				</form>
				<div className="inputErrors">
					<div>
						{this.state.nameIsCorrect ? 
							"" :
							"Name must be at least one character long and must contain only letters and spaces"}
					</div>
						{this.state.addressIsCorrect ? 
							"" :
							"Address must not be empty, and can consist only of letters, numbers, and spaces"}
				</div>
				</div>
			);
		} else {
			return (
				<Redirect to="/campuses"/>
			);
		}
	}
}

const getStateToProps = state => {
	console.log(state)
	return {
		campuses: state.campuses
	};
}

export default connect(getStateToProps, {addCampus: addCampus})(CampusAddForm);