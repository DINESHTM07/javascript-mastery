let students = [
  { name: "Dinesh", grade: [92, 98, 96] },
  { name: "mathy", grade: [98, 98, 99] },
  { name: "Deepa", grade: [99, 99, 100] },
];

function addStudent(name, grade) {
  students.push({ name: name, grade: grade });
}

function listStudents() {
  students.forEach((student) => {
    console.log(student.name, student.grade);
  });
}

function averageGrade(name) {
  let student = students.find((s) => s.name === name);
  if (!student) return "student not found";
  let sum = student.grade.reduce((acc, curr) => acc + curr, 0);
  return sum/student.grade.length;
}

addStudent("Arun", [88, 92, 79]);
listStudents();

console.log("Dinesh average:", averageGrade("Dinesh")); // 89
console.log("Arun average:", averageGrade("Arun")); // 86.33
