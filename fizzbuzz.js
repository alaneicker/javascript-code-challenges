// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”. For numbers which
// are multiples of both three and five print “FizzBuzz”.

(function () {

  'use strict';

   // ES6 Class Way
  // -----------------------------------------------------------
  class FizzBuzz {
    constructor (opts = {}) {
      this.opts = opts;
    }
    print () {
      const { start, end } = this.opts;

      if (!parseInt(start) || !parseInt(end)) {
        return;
      }

      for (let i = start; i <= end; i++) {
        let output = '';

        if (i % 3 === 0) { output += 'Fizz' }
        if (i % 5 === 0) { output += 'Buzz' }
        if (output === '') { output += `The value of i is ${i}` }

        console.log(output);
      }
    }
  }

  //let fizzBuzz = new FizzBuzz({ start: 1, end: 100 });
  //fizzBuzz.print();

  // Functional Way
  // -----------------------------------------------------------
  const fizzBuzz = (opts = {}) => {

    const { start, end } = opts;

    if (!parseInt(start) || !parseInt(end)) {
      console.log('Only numbers please!');
      return;
    }

    for (let i = start; i <= end; i++) {
      let output = '';

      if (i % 3 === 0) { output += 'Fizz' }
      if (i % 5 === 0) { output += 'Buzz' }
      if (output === '') { output += `The value of i is ${i}` }

      console.log(output);
    }
  };

  fizzBuzz({ start: 1, end: 100 });

}());
