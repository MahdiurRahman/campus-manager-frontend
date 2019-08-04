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

export const editCampus = newCampus => {
	return {
		type: 'EDIT_CAMPUS',
		payload: newCampus
	};
};

export const addStudent = (Student) =>{
    return {
    	type: 'ADD_STUDENT',
    	payload: Student
    };
};

export const removeStudent = (Student) => {
	return {
		type: 'REMOVE_STUDENT',
		payload: Student
	};
};

export const editStudent = newStudent => {
	return {
		type: 'EDIT_STUDENT',
		payload: newStudent
	};
};