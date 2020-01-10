document.addEventListener('DOMContentLoaded', () => {

  const newStudentForm = document.querySelector('#new-student-form');
  newStudentForm.addEventListener('submit', handleNewStudentFormSubmit);

});

  const handleNewStudentFormSubmit = function (event) {
    event.preventDefault();

    const studentFirstName = event.target.studentFirstName.value;
    const studentLastName = event.target.studentLastName.value;
    const danceAbility = event.target.danceAbility.value;

    const studentList = document.querySelector('#student-list')

    const newStudent = document.createElement('li');
    newStudent.textContent = `${studentFirstName} ${studentLastName} has adance ability of ${danceAbility}!`;
    studentList.appendChild(newStudent);


    console.log(studentFirstName);
    event.target.reset();
  };
