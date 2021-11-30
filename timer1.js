const array = process.argv.slice(2);
console.log(array);

// Edge Cases
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

const timer1 = function (array) {
  if (array !== []) {
    for (let i = 0; i < array.length; i++) {
      let item = Number(array[i]);
      console.log(item);
      if (!(item===NaN)){
        let timer = item * 1000
        if (timer>0) {
          setTimeout(() => process.stdout.write('\x07'), timer)
        }
      }

    }

  }

}

timer1(array);