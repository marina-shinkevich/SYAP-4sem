
//Задание 1

interface IArray{
    id:number;
    name:string;
    group:number;
}

const array:IArray[]= [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

//Задание 2

type CarsType ={
    manufacturer?: string;
    model?: string;
}

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';

//Задание 3
console.log("Задание 3");
const car1: CarsType = {
    manufacturer: "",
    model: ""
}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
console.log(car1);


const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';



type ArrayCarsType ={
    cars: CarsType[];
}

const arrayCars: ArrayCarsType[] = [
    {
        cars: [car1, car2]
    }
];

console.log(arrayCars);

//Задание 4

type DoneType=boolean;
type GroupFilterType = 1|2|3|4|5|6|7|8|9|10|11|12;
type MarkFilterType = 1|2|3|4|5|6|7|8|9|10;
type MarkType = {
    subject: string,
    mark: MarkFilterType, 
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, 
    marks: MarkType[] ,
}


// Данные студентов
const students: StudentType[] = [
    { id: 1, name: "Alex", group: 5, marks: [{ subject: "Math", mark: 8, done: true }] },
    { id: 2, name: "Maria", group: 3, marks: [{ subject: "Physics", mark: 10, done: true }] },
    { id: 3, name: "John", group: 5, marks: [{ subject: "Chemistry", mark: 7, done: false }] },
    { id: 4, name: "Kate", group: 7, marks: [{ subject: "Biology", mark: 6, done: true }] }
];

type GroupType = {
    students:StudentType[] ,
    studentsFilter: (group: number) => StudentType[], 
    marksFilter: (mark: number) => StudentType[], 
    deleteStudent: (id: number) => void, 
    
    
}

const group: GroupType = {
    students,
   

    
    studentsFilter(group) {
        const result: StudentType[] = [];
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].group === group) {
                result.push(this.students[i]);
            }
        }
        return result;
    },

    
    marksFilter(mark) {
        const result: StudentType[] = [];
        for (let i = 0; i < this.students.length; i++) {
            for (let j = 0; j < this.students[i].marks.length; j++) {
                if (this.students[i].marks[j].mark === mark) {
                    result.push(this.students[i]);
                    break; 
                }
            }
        }
        return result;
    },

    
    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }
};

// Примеры использования
console.log("Студенты группы 5:", group.studentsFilter(5));
console.log("Студенты с оценкой 10:", group.marksFilter(10));

group.deleteStudent(2); // Удаляем студента с ID 2
console.log("Студенты после удаления:", group.students);