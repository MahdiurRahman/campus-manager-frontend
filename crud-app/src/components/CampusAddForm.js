import React from "react"
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {addCampus} from '../actions/index.js';
import {Redirect} from 'react-router';

class CampusAddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		}
		this.addCampus = this.addCampus.bind(this);
	}

	addCampus (e) {
		e.preventDefault();

		let campus = {
			id: e.target.elements.id.value,
			name: e.target.elements.name.value,
			bio: e.target.elements.bio.value,
			address: e.target.elements.address.value,
			img: 'https://png.pngtree.com/svg/20170616/22811e059c.svg'
		}
		this.props.addCampus(campus);
		this.setState({redirect: true});
	}

	render() {
		if (!this.state.redirect) {
			return (
				<form onSubmit={this.addCampus}>
				  <label>
					ID:
					<input type="text" name="id" />
				  </label>
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
			);
		} else {
			return (
				<Redirect to="/campuses"/>
			);
		}
	}
}

const getStateToProps = (State) => {
	return {};
}

export default connect(getStateToProps, {addCampus: addCampus})(CampusAddForm);