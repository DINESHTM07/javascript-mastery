function createStudent(name) {
  return {
    name: name,
    grades: [],

    addGrade(grade) {
      this.grades.push(grade);
    },

    getAverage() {
      avg = this.grades.reduce((a, b) => a + b, 0);
      return avg / this.grades.length;
    },

    getReport() {
      return ({name:name,grades:[...this.grades]})
    },
  };
}

const student1 = createStudent("Alice");
student1.addGrade(90);
student1.addGrade(85);

console.log(student1.getAverage());
console.log(student1.getReport());
