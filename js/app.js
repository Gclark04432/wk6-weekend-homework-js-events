document.addEventListener('DOMContentLoaded', () => {

  const newStudentForm = document.querySelector('#new-student-form');
  newStudentForm.addEventListener('submit', handleNewStudentFormSubmit);

  const deleteAllButton = document.querySelector('#deleteButton');
  deleteAllButton.addEventListener('click', handleDeleteAllButtonClick)

});

const getStudentFirstName = function (form) {
  const studentFirstName = form.studentFirstName.value;
  return studentFirstName;
};

const getStudentLastName = function (form) {
  const studentLastName = form.studentLastName.value;
  return studentLastName;
};

const getStudentDanceAbility = function (form) {
  const danceAbility = form.danceAbility.value;
  return danceAbility;
};

const handleNewStudentFormSubmit = function (event) {
  event.preventDefault();

  const studentList = document.querySelector('#student-list')

  const firstName = getStudentFirstName(event.target);
  const lastName = getStudentLastName(event.target);
  const danceAbility = getStudentDanceAbility(event.target);

  const newStudent = document.createElement('li');
  newStudent.textContent = `${firstName} ${lastName} has a dance ability of ${danceAbility}!`;
  studentList.appendChild(newStudent);

  event.target.reset();
};

const handleDeleteAllButtonClick = function () {

  const studentList = document.querySelector('#student-list')
  studentList.innerHTML = "";

};
