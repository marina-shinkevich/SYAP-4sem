//задание 2

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10); 
        resolve(randomNumber);
      }, 3000); 
});

myPromise.then(result => {
    console.log("Задание 2");
    console.log(result);
});

//задание 3
function retProm(delay:number){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const num = Math.floor(Math.random() * 10);
            resolve(num);
        }, delay);
    });
}
Promise.all([
    retProm(3000),
    retProm(2000),
    retProm(1000)
])
.then(
    result1 => {
        console.log("Задание 3")
        console.log(result1)
    }
);


//задание 4

let pr = new Promise((res, rej) => {
    setTimeout(() => {
        rej('ku') // Отклоняем промис через 3 секунды
    }, 1000);
})

console.log("Задание 4")
pr

    .then(() => console.log(1)) 
    .catch(() => console.log(2)) 
    .catch(() => console.log(3)) 
    .then(() => console.log(4)) 
    .then(() => console.log(5))

    //Задание 5
    let prom:Promise<number> = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Задание 5")
            resolve(21)
        }, 5000);
    })
    prom.then(
        result => {
            console.log(result);
            return result;
        }
    )
    .then(
        result2 =>{
            console.log(result2 * 2);
        }
    )
    //Задание 6
    async function runTask() {
        let prom: Promise<number> = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Задание 6");
                resolve(21);
            }, 5000);
        });
    
        const result = await prom;
        console.log(result);
    
        const result2 = result * 2;
        console.log(result2);
    }
    
    runTask();
    
//Задание 7

