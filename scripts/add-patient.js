const form = document
  .querySelector("#addPatient")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.querySelector("#firstName").value;
    const middleName = document.querySelector("#middleName").value;
    const lastName = document.querySelector("#lastName").value;
    const name = firstName.concat(" ", middleName, " ", lastName);

    const sex = document.querySelector("#sex").value;
    const birthday = document.querySelector("#birthday").value;
    const age = document.querySelector("#age").value;
    const address = document.querySelector("#address").value;
    const civilStatus = document.querySelector("#civilStatus").value;
    const religion = document.querySelector("#religion").value;
    const nationality = document.querySelector("#nationality").value;
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const scheduleDate = document.querySelector("#scheduleDate").value;
    const diagnosis = document.querySelector("#diagnosis").value;
    const doctor = document.querySelector("#doctor").value;

    // get form data
    let formData = {
      name: name,
      sex: sex,
      birth: birthday,
      age: age,
      address: address,
      civil: civilStatus,
      religion: religion,
      nationality: nationality,
      weight: weight,
      height: height,
      scheduleDate: scheduleDate,
      diagnosis: diagnosis,
      doctor: doctor,
    };

    // convert formData to json
    let json = JSON.stringify(formData);

    // Save JSON to localStorage
    localStorage.setItem("formData", json);

    //Redirect to display page
    window.location.href = "/pages/patients.html";
  });
