
// var i;
// var year=[0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00];
// min = 877.00-72.00;
// max = 877.00 + 89.00;
// for (i = 0; i < 12; i++) {
//   year[i] = (Math.random() * (max - min + min) + min).toFixed(2);
//   console.log(year[i]);
// }


// var i;
// var month=[0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00];
// min = 29.00 - 10.00;
// max = 29.00 + 10.00;
// for (i = 0; i < 30; i++) {
//   month[i] = (Math.random() * (max - min + min) + min).toFixed(2);
//   console.log(month[i]);
// }


// Bulb
var i;
var onPkWeek=[0.00,0.00,0.00];//will generate 3 weeks of data
var offPkWeek=[0.00,0.00,0.00];
var midPkWeek=[0.00,0.00,0.00];
// rate = 6 //W per hour for bulb
// time = 6 //peakhour brackets
// // BULB
// weekmin = (time-4) * 7 * rate; //2hr per day x 7 * W perhour
// weekmax = time * 7* rate;
// monthmin = (time-4) * 30* rate;
// monthmax = time * 30 * rate;
// yearmin = (time-4) * 365 * rate;
// yearmax = time * 365 * rate;

// // FRIDGE
// rate = 300 //W per hour for fridge
// time = 6
// weekmin = (time) * 7 * (rate - 100); //2hr per day x 7 * W perhour
// weekmax = time * 7* (rate + 100);
// monthmin = (time) * 30* (rate - 100);
// monthmax = time * 30 * (rate + 100);
// yearmin = (time) * 365 * (rate - 100);
// yearmax = time * 365 * (rate + 100);


// HVAC
rate = 3500 //W per hour for HVAC averaged (not taking to account the summer/winter)
time = 6
weekmin = (time) * 7 * (rate - 100); //2hr per day x 7 * W perhour
weekmax = time * 7* (rate + 100);
monthmin = (time) * 30* (rate - 100);
monthmax = time * 30 * (rate + 100);
yearmin = (time) * 365 * (rate - 100);
yearmax = time * 365 * (rate + 100);
// offWmin = 2;
// offWmax = 6;
// midWmin = 2;
// midWmax = 6;

for (i = 0; i < 3; i++) {
  onPkWeek[i] = (Math.random() * (weekmax - weekmin + weekmin) + weekmin).toFixed(2);
  offPkWeek[i] = (Math.random() * (weekmax - weekmin + weekmin) + weekmin).toFixed(2);
  midPkWeek[i] = (Math.random() * (weekmax - weekmin + weekmin) + weekmin).toFixed(2);
  console.log("onPkWeek " + onPkWeek[i]);
  console.log("offPkWeek " + offPkWeek[i]);
  console.log("midPkWeek " + midPkWeek[i]);
}
