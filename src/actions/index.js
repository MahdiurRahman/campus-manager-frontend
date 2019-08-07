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

export const selectCampus = (Campus) => {
    return {
        type: "SELECT_CAMPUS",
        payload: Campus
    }
};

export const addStudent = (Student) =>{
    return {
    	type: 'ADD_STUDENT',
    	payload: Student
    };
};

export const removeStudent = student => {
	return {
		type: 'REMOVE_STUDENT',
		payload: student
	}
}

export const selectStudent = (Student) => {
    return {
      type: "Select Student",
      payload: Student
    }
};

export const editStudent = newStudent => {
	return {
		type: 'EDIT_STUDENT',
		payload: newStudent
	};
};

export const removeCampusFromStudent = campus => {
	return {
		type: 'REMOVE_CAMPUS_FROM_STUDENT',
		payload: campus
	}
}

export const removeStudentFromCampus = student => {
	console.log(student)
	return {
		type: 'REMOVE_STUDENT_FROM_CAMPUS',
		payload: student
	}
}