function add (x, y, f) {
	return f(x) + f(y);
}

let res = add(-5, 6, Math.abs);
console.log(res);

// map
// function pow (x) {
// 	return x * x;
// }

// var arr = [1,2,3,4,5,6,7];
// let map = arr.map(pow);
// console.log(map);

// no map
// var f = function (x) {
// 	return x * x;
// };
// var arr = [1,2,3,4,5,6,7];
// var result = [];
// for (let i = 0; i < arr.length; i++) {
// 	result.push(f(arr[i]));
// }
// console.log(result);

// 将数组的数字转为字符串
// var arr = [1,2,3,4,5,6,7];
// let map = arr.map(String);
// console.log(map);

// myself
function f (c) {
	var a = 0,
		b = 1;
	if (c(a, b)) {
		return c(a+b);
	}
}
f(function (a) {
	console.log(a);
});