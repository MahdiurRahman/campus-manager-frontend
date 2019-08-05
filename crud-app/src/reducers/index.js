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

let students = [
    {
        id: 0,
        name: "Neil Tyson",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.0,
        college: 0
    },
    {
        id: 1,
        name: "Mike Tyson",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.2,
        college: 0
     },
     {
        id: 2,
        name: "Elon Musk",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.7,
        college: 0
     },
     {
        id: 3,
        name: "Elizabeth Ryler",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 2.9,
        college: 1
    },
    {
        id: 4,
        name: "Harold Kimp",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 3.3,
        college: 1
    },
    {
         id: 5,
        name: "Michelle Rubin",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 1.0,
        college: 1
    },
    {
        id: 6,
        name: "Kenneth Di",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 0.1,
        college: 1
    },
    {
        id: 7,
        name: "Lolita Lopez",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 3.7,
        college: 1
    },
    {
        id: 8,
        name: "Rain Man",
        img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
        gpa: 4.0,
        college: 0
    }
];

const campusesReducer = (oldListofCampus = campuses, action) => {
	switch(action.type) {
		case "ADD_CAMPUS":
			return oldListofCampus.concat(action.payload);
		case "REMOVE_CAMPUS":
            return oldListofCampus.filter(Campus => (Campus.id !== action.payload.id));
        case "EDIT_CAMPUS":
            let newListOfCampus = oldListofCampus
            newListOfCampus[action.payload.id] = action.payload
            return newListOfCampus
		default:
			return oldListofCampus;
	}
};

const studentsReducer = (oldListOfStudents = students, action) => {
    let newListOfStudents = oldListOfStudents
    switch(action.type){
        case "ADD_STUDENT":
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
                }
            }
            return newListOfStudents
        case 'REMOVE_STUDENT_FROM_CAMPUS':
            for (let i = 0; newListOfStudents.length; i++) {
                if (newListOfStudents[i].id == action.payload.id) {
                    newListOfStudents[i].college = undefined
                }
                return newListOfStudents
            }
        default:
            return oldListOfStudents;
    }
};

export default combineReducers({
	campuses: campusesReducer,
    students: studentsReducer
});
