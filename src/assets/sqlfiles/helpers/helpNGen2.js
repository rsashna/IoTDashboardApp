var i;
var onPkYear=[0.00,0.00,0.00];//will generate 3 years of data
var offPkYear=[0.00,0.00,0.00];
var midPkYear=[0.00,0.00,0.00];

// FRIDGE
rate = 300 //W per hour for fridge
time = 6
weekmin = (time) * 7 * (rate - 100); //2hr per day x 7 * W perhour
weekmax = time * 7* (rate + 100);
monthmin = (time) * 30* (rate - 100);
monthmax = time * 30 * (rate + 100);
yearmin = (time) * 365 * (rate - 100);
yearmax = time * 365 * (rate + 100);

for (i = 0; i < 3; i++) {
  onPkYear[i] = (Math.random() * (yearmax - yearmin + yearmin) + yearmin).toFixed(2);
  offPkYear[i] = (Math.random() * (yearmax - yearmin + yearmin) + yearmin).toFixed(2);
  midPkYear[i] = (Math.random() * (yearmax - yearmin + yearmin) + yearmin).toFixed(2);
  console.log("onPkYear " + onPkYear[i]);
  console.log("offPkYear " + offPkYear[i]);
  console.log("midPkYear " + midPkYear[i]);
}
