console.log("Задание 1");
function createPhoneNumber(numbers: number[]): string {
    
    return `(${numbers[0]}${numbers[1]}${numbers[2]})${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}


const phone = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phone); 


console.log("Задание 2");
class Chall {
    static solution(number: number): number {
        if (number < 0) return 0; 
        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    }
}


console.log(Chall.solution(10)); 
console.log(Chall.solution(20)); 
console.log(Chall.solution(-5)); 

console.log("Задание 3");

function shiftRight(arr: number[], steps: number): void {
    const length = arr.length;
    if (steps === 0) return;
    for (let i = 0; i < steps; i++) {
        let last = arr[length - 1];
        for (let j = length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }
}


const arr = [1, 2, 3, 4, 5, 6, 7];
const steps = 5;
shiftRight(arr, steps);
console.log(arr); 

console.log("Задание 4");

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 == 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}


console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays([1, 2], [3, 4])); 
