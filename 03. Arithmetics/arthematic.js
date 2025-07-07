/*
  Operands (Values, variables, etc..,)
  operators (+ - * /)
*/

let students = 69;

students = students + 20; 
//as we are taking variable twice and it can be lengthy to write we can write it otherwise as:
students -= 20;
students *= 20;
students /= 20;
students %= 5; //gives the remainder % is known as modulas
students++; //increment (increases by 1)
students--; //decrement(decreases by 1)

console.log(students)

/*
  level of importance
  1. parenthesis (brackets me hai so)
  2. Exponents
  3. multiply & div & modulo
  4. add & sub
*/

let friends = 6 + 1 * (1+2*3) / 2 - 1 ** 5;

console.log(friends);