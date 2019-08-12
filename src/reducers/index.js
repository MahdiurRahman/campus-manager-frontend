import {combineReducers} from 'redux';

let campuses = [

];

let students = [

];

//this value will be used to assign an ID to new students.
//after each student addition, this value increments, and its value never derceases
let curStudentId = 1;


const campusesReducer = (oldListofCampus = campuses, action) => {
    let newListOfCampus = oldListofCampus;
	switch(action.type) {
		case "ADD_CAMPUS":
			return oldListofCampus.concat(action.payload);
		case "REMOVE_CAMPUS":
            return oldListofCampus.filter(Campus => (Campus.id !== action.payload.id));
        case "EDIT_CAMPUS":
            for (let i = 0; i < newListOfCampus.length; i++) {
                if (newListOfCampus[i].id == action.payload.id) {
                    newListOfCampus[i] = action.payload;
                }
            }
            return newListOfCampus;
		default:
			return oldListofCampus;
	}
};

const studentsReducer = (oldListOfStudents = students, action) => {
    let newListOfStudents = oldListOfStudents
    switch(action.type){
        case "ADD_STUDENT":
            action.payload.id = curStudentId;
            curStudentId++;
            return oldListOfStudents.concat(action.payload);
		case "REMOVE_STUDENT":
            return oldListOfStudents.filter(Student => (Student.id !== action.payload.id));
        case "EDIT_STUDENT":
            for (let i = 0; i < newListOfStudents.length; i++) {
                if (newListOfStudents[i].id == action.payload.id) {
                    newListOfStudents[i] = action.payload
                }
            }
            return newListOfStudents
        case 'REMOVE_CAMPUS_FROM_STUDENT':
            for (let i = 0; i < newListOfStudents.length; i++) {
                if (newListOfStudents[i].campusId == action.payload.id) {
                    newListOfStudents[i].campusId = undefined
                }
            }
            return newListOfStudents
        case 'REMOVE_STUDENT_FROM_CAMPUS':
            for (let i = 0; newListOfStudents.length; i++) {
                if (newListOfStudents[i].id == action.payload.id) {
                    newListOfStudents[i].campusId = undefined
                    return newListOfStudents;
                }
            }
        default:
            return oldListOfStudents;
    }
};

const selectCampusReducer = (selectedCampus = null, action) => {
    switch(action.type) {
        case "SELECT_CAMPUS":
            return action.payload;
        default:
            return selectedCampus;
    }
}

export default combineReducers({
	campuses: campusesReducer,
	students: studentsReducer,
    selectedCampus: selectCampusReducer
});
