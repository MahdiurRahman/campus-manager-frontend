import React from "react";
import {connect} from 'react-redux';
import {addCampus} from '../../actions';
import {Redirect} from 'react-router';
import axios from 'axios'
import './CampusAddForm.css'

class CampusAddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			nameIsCorrect: true,
			addressIsCorrect: true,
			name: '',
			bio: '',
			address: '',
			image: ''
		}
		this.addCampus = this.addCampus.bind(this);
	}

	async addCampus (e) {
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
            if (!(campus.address[i].toLowerCase() != campus.address[i].toUpperCase() || campus.address[i] == " " || campus.address[i] == "," || (campus.address[i] >= 0 && campus.address[i] <= 9))){
                correctAddress = false;
            }
        }
        this.setState({
        	nameIsCorrect: correctName,
        	addressIsCorrect: correctAddress
        })

        if (correctName && correctAddress){
			console.log(this.state.id);
            let url ='http://localhost:5000/api/campuses';
			console.log(url);
			console.log(this.props.campuses);
            await axios.post(url,{
                name: this.state.name,
				img: this.state.image,
				address: this.state.address,
				bio: this.state.bio
            })
            .then (res => {
				console.log(res)
				this.props.addCampus({
					name: this.state.name,
					img: this.state.image,
					address: this.state.address,
					bio: this.state.bio
				})
            })
            .catch(err => console.log(err));
			
			this.setState({redirect: true});
			window.location.reload(true)
		}
	}

	onChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value 
		})
		console.log(this.state)
	}

	render() {
		if (!this.state.redirect) {
			return (
			  <div className="CampusAddForm">
				<form className="campus-addform" onSubmit={this.addCampus}>
				  <div className="campus-addform-element">
				    <label className="campus-addform-label">
  					  Name:
  					  <input className="campus-addform-input" type="text" name="name" onChange={this.onChangeHandler} />
  				    </label>
				  </div>
				  <div className="campus-addform-element">
				    <label className="campus-addform-label">
				  	  Bio:
					  <input className="campus-addform-input" type="text" name="bio" onChange={this.onChangeHandler} />
				    </label>
					</div>
				  <div className="campus-addform-element">
				    <label className="campus-addform-label">
					  Address:
					  <input className="campus-addform-input" type="text" name="address" onChange={this.onChangeHandler} />
				    </label>
					</div>
				  <div className="campus-addform-element">
				    <label className="campus-addform-label">
					  image:
					  <input className="campus-addform-input" type="text" name="image" onChange={this.onChangeHandler} />
				    </label>
				  </div>
				  <div className="campus-addform-element">
				    <button className="campus-addform-button">Submit</button>
				  </div>
				</form>
				<div className="campus-addform-label color-red">
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
