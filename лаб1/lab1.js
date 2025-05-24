console.log("Задание 1");
function createPhoneNumber(numbers) {
    return "(".concat(numbers[0]).concat(numbers[1]).concat(numbers[2], ")").concat(numbers[3]).concat(numbers[4]).concat(numbers[5], "-").concat(numbers[6]).concat(numbers[7]).concat(numbers[8]).concat(numbers[9]);
}
var phone = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phone);
console.log("Задание 2");
var Chall = /** @class */ (function () {
    function Chall() {
    }
    Chall.solution = function (number) {
        if (number < 0)
            return 0;
        var sum = 0;
        for (var i = 1; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Chall;
}());
console.log(Chall.solution(10));
console.log(Chall.solution(20));
console.log(Chall.solution(-5));
console.log("Задание 3");
function shiftRight(arr, steps) {
    var length = arr.length;
    if (steps === 0)
        return;
    for (var i = 0; i < steps; i++) {
        var last = arr[length - 1];
        for (var j = length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }
}
var arr = [1, 2, 3, 4, 5, 6, 7];
var steps = 5;
shiftRight(arr, steps);
console.log(arr);
console.log("Задание 4");
function findMedianSortedArrays(nums1, nums2) {
    var merged = nums1.concat(nums2).sort(function (a, b) { return a - b; });
    var mid = Math.floor(merged.length / 2);
    if (merged.length % 2 == 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    }
    else {
        return merged[mid];
    }
}
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
