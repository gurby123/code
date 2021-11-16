//exercise 1

  
  function add(n1, n2) {
    return n1 + n2;
  }
  function mult(n1, n2) {
    return n1 * n2;
  }
  function sub(n1, n2) {
    return n1 - n2;
  }
  
  console.log(add(1,2)); // not using add()
  console.log(mult(1,2));
  console.log(sub(1,2));

 a = 2004;
  let leap_year = function(leap){
      if (a%100 == 0)
      return console.log("its not a leepa year");
   else if (a%400 == 0)
  return console.log("its a leepa year");
  else if(a%4 ==0)
  return console.log("Its is a loop year");
  else 
  return console.log("its not a leap year");
  }

  leap_year(2000);

  