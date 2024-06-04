const getStudentsByLocation = (students, city) => students.filter((student) => student.location === city); // eslint-disable-line  max-len
export default getStudentsByLocation;
