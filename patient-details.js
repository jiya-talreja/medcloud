const patients = [
  { id: 1, name: "Sameera Tokekar", page: "patient.html", time: "10:00 AM", age: 32, gender: "Male", condition: "Fever, fatigue", nextAppointment: "14 Aug 2025", contact: "987-654-3210", bloodGroup: "A+", allergies: "None" },
  { id: 2, name: "Jiya Talreja", page: "patient.html", time: "11:30 AM", age: 28, gender: "Female", condition: "Headache", nextAppointment: "15 Aug 2025", contact: "987-123-4567", bloodGroup: "B-", allergies: "Penicillin" },
  { id: 3, name: "Manya Thakur", page: "patient.html", time: "1:00 PM", age: 45, gender: "Female", condition: "Cough", nextAppointment: "16 Aug 2025", contact: "987-987-6543", bloodGroup: "O+", allergies: "Pollen" }
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const patientId = parseInt(urlParams.get('id'));

  const patient = patients.find(p => p.id === patientId);

  if (patient) {
    document.getElementById("patientName").textContent = patient.name;
    document.getElementById("patientAge").textContent = patient.age;
    document.getElementById("patientGender").textContent = patient.gender;
    document.getElementById("patientCondition").textContent = patient.condition;
    document.getElementById("patientAppointment").textContent = patient.nextAppointment;
    document.getElementById("patientContact").textContent = patient.contact;
    document.getElementById("patientBloodGroup").textContent = patient.bloodGroup;
    document.getElementById("patientAllergies").textContent = patient.allergies;
  } else {
    document.getElementById("patientName").textContent = "Patient Not Found";
    document.querySelector(".details").innerHTML = "<p>The requested patient could not be found. Please return to the main page.</p>";
  }
});