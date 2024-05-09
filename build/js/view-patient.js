// get local storage
let json = localStorage.getItem("formData");

// parse json data to javascript object
let formData = JSON.parse(json);

const firstName = (document.querySelector("#firstName").value =
  formData.firstName);
const middleName = (document.querySelector("#middleName").value =
  formData.middleName);
const lastName = (document.querySelector("#lastName").value =
  formData.lastName);
const birthday = (document.querySelector("#birthday").value = formData.birth);
const age = (document.querySelector("#age").value = formData.age);
const address = (document.querySelector("#address").value = formData.address);
const civilStatus = (document.querySelector("#civilStatus").value =
  formData.civilStatus);
const religion = (document.querySelector("#religion").value =
  formData.religion);
const nationality = (document.querySelector("#nationality").value =
  formData.nationality);
const weight = (document.querySelector("#weight").value = formData.weight);
const height = (document.querySelector("#height").value = formData.height);
const complaint = (document.querySelector("#complaint").value =
  formData.complaint);
const scheduleDate = (document.querySelector("#scheduleDate").value =
  formData.scheduleDate);
const diagnosis = (document.querySelector("#diagnosis").value =
  formData.diagnosis);
const doctor = (document.querySelector("#doctor").value = formData.doctor);
