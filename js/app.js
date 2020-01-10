document.addEventListener('DOMContentLoaded', () => {

  const newStudentForm = document.querySelector('#new-student-form');
  form.addEventListener('submit', handleNewStudentFormSubmit);

};

  const handleNewStudentFormSubmit = function (event) => {
    event.preventDefault();

    const newStudent = document.createElement('li');

    const studentFirstName = event.target.studentFirstName.value;
    const studentLastName = event.target.studentLastName.value;
    const danceAbility = event.target.danceAbility.value;

  };
