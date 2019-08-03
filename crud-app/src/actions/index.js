export const addCampus = (Campus) => {
	return {
		type: 'ADD_CAMPUS',
		payload: Campus
	};
};

export const removeCampus = (Campus) => {
	return {
		type: 'REMOVE_CAMPUS',
		payload: Campus
	};
};

export const selectCampus = (Campus) => {
	return {
		type: "SELECT_CAMPUS",
		payload: Campus
	}
}