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

const formatNewStudent = function (firstName, lastName, danceAbility, isAlcoholic) {
  const studentList = document.querySelector('#student-list')

  const newStudent = document.createElement('li');
  const formattedName = document.createElement('h2');
  const formattedDanceAbility = document.createElement('h3');
  const alcoholic = document.createElement('h4');

  newStudent.appendChild(formattedName);
  newStudent.appendChild(formattedDanceAbility);
  newStudent.appendChild(alcoholic);
  studentList.appendChild(newStudent);

  formattedName.textContent = `${firstName} ${lastName}`;
  formattedDanceAbility.textContent = `Dance Ability: ${danceAbility} out of 10`;
  alcoholic.textContent = `Are they an alcoholic? ${isAlcoholic}`;
};

const handleNewStudentFormSubmit = function (event) {
  event.preventDefault();

  const firstName = getStudentFirstName(event.target);
  const lastName = getStudentLastName(event.target);
  const danceAbility = getStudentDanceAbility(event.target);
  const isAlcoholic = event.target.alcoholic.value;

  formatNewStudent(firstName, lastName, danceAbility, isAlcoholic);

  event.target.reset();
};

const handleDeleteAllButtonClick = function () {

  const studentList = document.querySelector('#student-list')
  studentList.innerHTML = "";

};
