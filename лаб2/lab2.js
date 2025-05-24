//Задание 1
var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {
    manufacturer: "",
    model: ""
}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
//Задание 3
console.log("Задание 3");
var car1 = {
    manufacturer: "",
    model: ""
}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
console.log(car1);
var car2 = {
    manufacturer: "",
    model: ""
}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [
    {
        cars: [car1, car2]
    }
];
console.log(arrayCars);
// Данные студентов
var students = [
    { id: 1, name: "Alex", group: 5, marks: [{ subject: "Math", mark: 8, done: true }] },
    { id: 2, name: "Maria", group: 3, marks: [{ subject: "Physics", mark: 10, done: true }] },
    { id: 3, name: "John", group: 5, marks: [{ subject: "Chemistry", mark: 7, done: false }] },
    { id: 4, name: "Kate", group: 7, marks: [{ subject: "Biology", mark: 6, done: true }] }
];
var group = {
    students: students,
    studentsFilter: function (group) {
        var result = [];
        for (var i = 0; i < this.students.length; i++) {
            if (this.students[i].group === group) {
                result.push(this.students[i]);
            }
        }
        return result;
    },
    marksFilter: function (mark) {
        var result = [];
        for (var i = 0; i < this.students.length; i++) {
            for (var j = 0; j < this.students[i].marks.length; j++) {
                if (this.students[i].marks[j].mark === mark) {
                    result.push(this.students[i]);
                    break;
                }
            }
        }
        return result;
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    }
};
// Примеры использования
console.log("Студенты группы 5:", group.studentsFilter(5));
console.log("Студенты с оценкой 10:", group.marksFilter(10));
group.deleteStudent(2); // Удаляем студента с ID 2
console.log("Студенты после удаления:", group.students);
