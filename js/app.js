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

const formatNewStudent = function (firstName, lastName, danceAbility, isAlcoholic, attendanceChance) {
  const studentList = document.querySelector('#student-list');

  const newStudent = document.createElement('li');
  const formattedName = document.createElement('h3');
  const formattedDanceAbility = document.createElement('h4');
  const alcoholic = document.createElement('h4');
  const chance = document.createElement('h4');

  newStudent.appendChild(formattedName);
  newStudent.appendChild(formattedDanceAbility);
  newStudent.appendChild(alcoholic);
  newStudent.appendChild(chance);
  studentList.appendChild(newStudent);

  formattedName.textContent = `${firstName} ${lastName}`;
  formattedDanceAbility.textContent = `Dance Ability: ${danceAbility} out of 10`;
  alcoholic.textContent = `Are they an alcoholic? ${isAlcoholic}`;
  chance.textContent = `They have a ${attendanceChance}% chance of making Friday stand-up`
};

const handleNewStudentFormSubmit = function (event) {
  event.preventDefault();

  const firstName = getStudentFirstName(event.target);
  const lastName = getStudentLastName(event.target);
  const danceAbility = getStudentDanceAbility(event.target);
  const isAlcoholic = event.target.alcoholic.value;
  const attendanceChance = event.target.chance.value;

  formatNewStudent(firstName, lastName, danceAbility, isAlcoholic, attendanceChance);

  event.target.reset();
};

const handleDeleteAllButtonClick = function () {

  const studentList = document.querySelector('#student-list')
  studentList.innerHTML = "";

};
