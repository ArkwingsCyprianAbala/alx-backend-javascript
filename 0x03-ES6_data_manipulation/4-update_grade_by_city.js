/**
 * Updates the grades of students based on their city.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter the students by.
 * @param {Array} newGrades - The array of new grades to update.
 * @returns {Array} - The updated array of student objects.
 */

/* eslint-disable */
function updateStudentGradeByCity(students, city, newGrades) {
    const studentsInCity = students.filter((student) => student.location === city);
    return studentsInCity.map((student) => {
      const filteredGrades = newGrades.filter((grade) => grade.studentId === student.id);
      if (filteredGrades.length > 0) {
        return {
          ...student,
          grade: filteredGrades[0].grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
  }
  
  export default updateStudentGradeByCity;

