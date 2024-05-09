const form = document
  .querySelector("#addPatient")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    // get form data
    let formData = {
      name: document.querySelector("#firstName").value,
    };

    // convert formData to json
    let json = JSON.stringify(formData);

    // Save JSON to localStorage
    localStorage.setItem("formData", json);

    //Redirect to display page
    window.location.href = "/pages/patients/patients.html";
  });
