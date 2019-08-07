const FETCH_STUDENTS = "FETCH STUDENTS";

const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
}

//THUNK CREATOR;
const fetchStudentsThunk = () => (dispatch) => {
    const students = [
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
    dispatch()
}