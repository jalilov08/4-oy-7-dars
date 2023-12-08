//Vazifa
/** 1-misol
 * Regular Function
  function first(a, b, c) {
  let res = 0;
  if (a > b){
    res = a;
  } else {
   res = b;
  }
  if ( c > res) {
   res = c;
  } 
  return res;
}
console.log(first(6, 9, 12));

 * Function Expression
const first = function (a, b, c) {
  if (a > b){
    res = a;
  } else {
   res = b;
  }
  if ( c > res) {
   res = c;
  } 
  return res;
} 
console.log(first(6, 9, 120));

 * Arrow Function
const first =  (a, b, c) => {
  if (a > b){
    res = a;
  } else {
   res = b;
  }
  if ( c > res) {
   res = c;
  } 
  return res;
}
console.log(first(6000, 999, 120));
 */

/** 2-misol
 * Regular Function
  function two(a, b) {
  let res = 0;
  for (let i = a; i <= b ; i += 2) {
    res += i;
  }
  return res;
}
console.log(two(20, 40));

 * Function Expression
const stwo = function (a, b) {
  let res = 0;
  for (let i = a; i <= b ; i += 2) {
    res += i;
  }
  return res;
}
console.log(two(20, 40));

 * Arrow Function
const two = (a, b) => {
  let res = 0;
  for (let i = a; i <= b ; i += 2) {
    res += i;
  }
  return res;
}
console.log(two(20, 40));
 */

/** 3-misol
 * Regular Function
  function three(a) {
  let b = a % 10;
  let o = ((a % 100) - b) / 10;
  let y = a / 100 - a % 100 / 100;
  let all = b + o + y;
    return all;
  }
  console.log(three(555));
  
  *Function Expression
  const three = function  (a)  {
  let b = a % 10;
  let o = ((a % 100) - b) / 10;
  let y = a / 100 - a % 100 / 100;
  let all = b + o + y;
  return all;
  }
  console.log(three(897));

 *Arrow Function
  const sum2 = (a) => {
  let b = a % 10;
  let o = ((a % 100) - b) / 10;
  let y = a / 100 - a % 100 / 100;
  let all = b + o + y;
  return all;
  }
 */

/** 4-misol
 * Regular Function
    function four (a) {
    let b = a % 10;
    let o = ((a % 100) - b) / 10;
    let y = a / 100 - a % 100 / 100;
    let total = 0;
    if (b % 2 ==0) {
      total += b;
    }
    if (o % 2 ==0) {
      total += o;
    }
    if (y % 2 ==0) {
      total += y;
    }
      return total;
    }
    console.log(four(864));
   
    *Function Expression
    const four = function (a) {
      let b = a % 10;
      let o = ((a % 100) - b) / 10;
      let y = a / 100 - a % 100 / 100;
      let total = 0;
      if (b % 2 ==0) {
        total += b;
      }
      if (o % 2 ==0) {
        total += o;
      }
      if (y % 2 ==0) {
        total += y;
      }
        return total;
      }
      console.log(four(665));   

  *Arrow Function
  const four = (a) => {
  let b = a % 10;
  let o = ((a % 100) - b) / 10;
  let y = a / 100 - a % 100 / 100;
  let total = 0;
  if (b % 2 ==0) {
    total += b;
  }
  if (o % 2 ==0) {
    total += o;
  }
  if (y % 2 ==0) {
    total += y;
  }
    return total;
  }
  console.log(four(665));   
 */

/** 6-misol
 * Regular Function
  function six(a) {
  let sum = 0;
  for (let i = 0; i <= a; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      sum++;
    }
  }
  return sum;
}
console.log(six(20));

* Function Expression
const six = function (a) {
  let sum = 0;
  for (let i = 0; i <= a; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      sum++;
    }
  }
  return sum;
}
console.log(six(20));

* Arrow Function
const six = (a) => {
  let sum = 0;
  for (let i = 0; i <= a; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      sum++;
    }
  }
  return sum;
}
console.log(six(20));
 */

/** 7-misol
 * Regular Function
    function seven(a) {
    let sum = 0;
    for (let i = 2; i <= a; i++) {
      let tub = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          tub = false;
        }
      }
      if (tub) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(seven(20));
  
  * Function Expression
  const seven = function (a) {
    let sum = 0;
    for (let i = 2; i <= a; i++) {
      let tub = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          tub = false;
        }
      }
      if (tub) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(seven(20));
  
 * Arrow Function
const seven = (a) => {
  let sum = 0;
  for (let i = 2; i <= a; i++) {
    let tub = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        tub = false;
      }
    }
    if (tub) {
      sum += i;
    }
  }
  return sum;
}
console.log(seven(25));
 */
