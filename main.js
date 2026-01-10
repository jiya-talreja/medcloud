const patients = [
  { id: 1, name: "Sameera Tokekar", page: "patient.html", time: "10:00 AM", age: 32, gender: "Male", condition: "Fever, fatigue", nextAppointment: "14 Aug 2025", contact: "987-654-3210", bloodGroup: "A+", allergies: "None" },
  { id: 2, name: "Jiya Talreja", page: "patient.html", time: "11:30 AM", age: 28, gender: "Female", condition: "Headache", nextAppointment: "15 Aug 2025", contact: "987-123-4567", bloodGroup: "B-", allergies: "Penicillin" },
  { id: 3, name: "Manya Thakur", page: "patient.html", time: "1:00 PM", age: 45, gender: "Female", condition: "Cough", nextAppointment: "16 Aug 2025", contact: "987-987-6543", bloodGroup: "O+", allergies: "Pollen" }
];

const list = document.getElementById("patientList");

patients.forEach(p => {
  const li = document.createElement("li");
  li.className = "patient-item";

  const a = document.createElement("a");
  a.href = `patient.html?id=${p.id}`;
  a.textContent = p.name;

  const box = document.createElement("div");
  box.className = "appointment-box";
  box.textContent = p.time;

  li.appendChild(a);
  li.appendChild(box);
  list.appendChild(li);
});