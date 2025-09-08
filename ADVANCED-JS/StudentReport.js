function createStudentReport() {
  students = [];

  return {
    addStudent(name, grade) {
      students.push({ name: name, grades: grade });
      console.log("student report added");
    },
    getAverage(name) {
      student = students.find((student) => student.name === name);
      if (!student) {
        console.log("student not found");
      } 
      const marks = Object.values(student.grades);
      const total = marks.reduce((a,b)=> a + b,0);
      return total/marks.length;
    },
    getTopStudent(){
        if(students.lenght === 0) return null;
        let topStudent = students[0];
        let topAverage = this.getAverage(topStudent.name);

        for(let i=0;i<students.length;i++){
            const avg = this.getAverage(students[i].name);
        if (avg > topAverage){
            topAverage = avg;
            topStudent = students[i];
        }
        }
        return topStudent.name;
    }
  };
}


const report = createStudentReport();
report.addStudent("Alice", { math: 90, english: 85 });
report.addStudent("Bob", { math: 70, english: 95 });
report.addStudent("Charlie", { math: 100, english: 80 });

console.log(report.getAverage("Alice"));  
console.log(report.getAverage("Bob"));    
console.log(report.getTopStudent());       