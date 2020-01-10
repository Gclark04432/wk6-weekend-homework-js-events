document.addEventListener('DOMContentLoaded', () => {

  const newStudentForm = document.querySelector('#new-student-form');
  newStudentForm.addEventListener('submit', handleNewStudentFormSubmit);

  const deleteAllButton = document.querySelector('#deleteButton');
  deleteAllButton.addEventListener('click', handleDeleteAllButtonClick)

});

  const getStudentFirstName = function (form) {
    const studentFirstName = form.studentFirstName.value;
    // const studentLastName = form.studentLastName.value;
    // const danceAbility = form.danceAbility.value;

    return studentFirstName;
  };

  const handleNewStudentFormSubmit = function (event) {
    event.preventDefault();

    // const studentFirstName = event.target.studentFirstName.value;
    // const studentLastName = event.target.studentLastName.value;
    // const danceAbility = event.target.danceAbility.value;

    const studentList = document.querySelector('#student-list')

    studentFirstName = getStudentFirstName(event.target);

    const newStudent = document.createElement('li');
    newStudent.textContent = `${studentFirstName}`;
    studentList.appendChild(newStudent);

    event.target.reset();
  };

  const handleDeleteAllButtonClick = function () {

    const studentList = document.querySelector('#student-list')
    studentList.innerHTML = "";

  };
