// test getting time keydown
// document.addEventListener('keydown', (event) => {
//   const keyName = event.key;
//   console.log('keydown event\n\n' + 'key: ' + keyName);
// 	var start = Date.now();
// 	console.log(start);
// });

// document.addEventListener('keypress', (event) => {
//   const keyName = event.key;
//   console.log('keypress event\n\n' + 'key: ' + keyName);
// 	var start = Date.now();
// 	console.log(start);
// });

// document.addEventListener('keyup', (event) => {
//   const keyName = event.key;
//   console.log('keyup event\n\n' + 'key: ' + keyName);
// 	var start = Date.now();
// 	console.log(start);
// });

// initialize start
let start = null;
let end = null;
let timebetween = null;


// Function to capture keypress start time
function captureStart() {
  var start = Date.now();
	console.log(start);
	return start;
}
 
// Function to add keypress event listener to time input
var first = document.getElementById("time");
first.addEventListener("keypress", function(){captureStart()}, false);


// Function to capture keyup start time
function captureEnd() {
  var end = Date.now();
	// console.log(end);
	return end;
}
 
// Function to add keyup event listener to time input
var first = document.getElementById("time");
first.addEventListener("keyup", function(){captureEnd()}, false);
 

console.log(`start is ${start}`);
console.log(`end is ${end}`);


// first.addEventListener("keypress", function() { time.getTime()} );

// var count = null;
// $("time").keydown(function(){
//     timebetween = 0;
//     count = setInterval(function(){
//         timebetween++;
//     }, 1);
// });

// $("time").keyup(function(){
//     clearInterval(count);
//     $("body").append("<br>Time between keydown and keyup is " + timebetween + "ms"); //current key 
// });


// //latency 

// function duration(timestamps) {
//         var last = timestamps.pop();
//         var durations = [];
//         while (timestamps.length) {
//             durations.push(last - (last = timestamps.pop()));
//         }
//         return durations.reverse();
//     }

//    function display(mills) {
//         if (mills > 1000)
//             return (mills / 1000) + ' s';
//         return mills + ' ms';
//     }

//    var durations = [];

//    $('#in').keydown(function (e) {
//         durations.push($.now());
//     }).keyup(function (e) {
//         var current = durations;
//         current.push($.now());
//         durations = [];
//         var timeElapsed = current[current.length - 1] - current[0];

//        console.log([
//             ['time elapsed:', display(timeElapsed)].join(' '),
//             ['keys duration:', duration(current).map(display)].join(' ')
//         ].join(' --- '));
//     });
