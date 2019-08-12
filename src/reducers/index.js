import {combineReducers} from 'redux';
import {axios} from 'axios';

const campusesReducer = (oldListOfCampus = campuses, action) => {
	switch(action.type) {
		case "ADD_CAMPUS":
            let newListOfCampus = [];
            axios.post('http://localhost:3003/api/campuses/', {
                name: action.payload.name,
                bio: action.payload.bio,
                address: action.payload.address,
                img: action.payload.img
            })
            .then(result => {
                newListOfCampus = result.data;
            })
            .catch(error => console.log(error));
			return newListOfCampus;
		case "REMOVE_CAMPUS":
            let newListOfCampus = [];
            axios.delete('http://localhost:3003/api/campuses/' + 'action.payload.id')
        case "EDIT_CAMPUS":
            let newListOfCampus = oldListofCampus
            newListOfCampus[action.payload.id] = action.payload
            return newListOfCampus;
		default:
            let newListOfCampus = [];
            axios.get('http://localhost:3003/api/campuses/')
            .then(result => {
                newListOfCampus = result.data;
            })
            .catch(error => console.log(error));
			return newListofCampus;
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
                if (newListOfStudents[i].college == action.payload.id) {
                    newListOfStudents[i].college = undefined
                    console.log("removing")
                }
            }
            return newListOfStudents
        case 'REMOVE_STUDENT_FROM_CAMPUS':
            for (let i = 0; newListOfStudents.length; i++) {
                if (newListOfStudents[i].id == action.payload.id) {
                    newListOfStudents[i].college = undefined
                    console.log("yee")
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
