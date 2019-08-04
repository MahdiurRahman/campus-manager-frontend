import {combineReducers} from 'redux';

let campuses = [
	{
		id: "0",
		name: "hunter",
		bio: "Cuny",
		address: "123 Main St",
		img: "https://png.pngtree.com/svg/20170616/22811e059c.svg"},
	{
		id: "1",
		name: "baruch",
		bio: "Cuny",
		address: "456 Main St",
		img: "https://png.pngtree.com/svg/20170616/22811e059c.svg"
	},
];

const campusesReducer = (oldListofCampus = campuses, action) => {
	switch(action.type) {
		case "ADD_CAMPUS":
			return oldListofCampus.concat(action.payload);
		case "REMOVE_CAMPUS":
			return oldListofCampus.filter(Campus => (Campus.id !== action.payload.id));
		default:
			return oldListofCampus;
	}
};

const selectedCampusReducer = (selectedCampus = null, action) => {
	if (action.type === 'SELECT_CAMPUS') {
		return action.payload
	}
	return selectedCampus;
};

export default combineReducers({
	campuses: campusesReducer,
	selectedCampus: selectedCampusReducer
});