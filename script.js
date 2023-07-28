// FOUR PILLERS OF OOPS
/**
 * Encapsulation: data protection(Hiding data), no one can access it from outside
 * Abstraction: not showing the complexity of the code, only showing the necessery part(here user can see the complexity)
 */
const User1 = {
    userName:"nitish",
    lastName:"kumar",
    age:20,
    userAge:function(){
      return  new Date().getFullYear() - User1.age;
    }
}
// console.log(User1.userAge());
// do it also in console and see the same result( write User1.userAge()) => 2003 do same  with User2

const User2 = {
  userName:"kargil",
  lastName:"kumar",
  age:40,
  userAge:function(){
    return  new Date().getFullYear() - User2.age;
  }
}
// console.log(User2.userAge());

//  like this if we have to create many users then we have to write the same peace of code again and again which will take extra memory which is not recommended

// To solve this problem we developed a concept called factory function.so now let's understand what is factory function.
//                                             FACTORY FUNCTION
function createUser(){
  const user = {
    name : "mukesh",
    lastName:"mukesh choudhery",
    age:"30years"

  }
  return user;
}
// it solve some problems like in prvious we are copying the same code but here we are calling only the function and we get all the data so there is some improvement but still some problem

// NOW, here if we go inside the browser console and call the createUser() function then we will get all the data of user object but i want that  in every call the data should change so now how to achieve this because here whenever we are calling the createUser the same data we found again and again so to solve this problem see below code

function createFirstUser(firstName,lastName,age){
  const firstUser = {
    firstName:firstName,
    lastName:lastName,
    age:age
  }
  return firstUser;
}
// console.log(createFirstUser('ram','siyaram',30))

// now this function return a object which full fill our recuirement, when we are calling this function and passing the argument then it give us a newly created object on the basis of given argument.

//  Now we have an idea that how to return an object at every time with new data without copying and pasting the same code again and again , so let's improve this code further

function createFirstUser(firstName,lastName,age){
  const firstUser = {
    firstName:firstName,
    lastName:lastName,
    age:age,
    userAge:function(){
      return  new Date().getFullYear() - firstUser.age;
    }
  }
  return firstUser;
}
// console.log( createFirstUser('a','b',20).userAge());
        
 const user1 = createFirstUser("mohit","kumar",23);
 const user2 = createFirstUser("anshu","mishra",20);

 // Congratulations we have created object with different arguments but here is a problem that the function is storing in all the object like here we have created two objects user1 and user2 and we can easily see in the console that it storing the same function in diff-diff object which should not be stored

 //  To solve this problem constructor came in picture
 // before moving to the constructor function we will do it manually it's not good approach but we will do it for understanding purpose

 function userAge(){
  return  new Date().getFullYear() - this.age;
}
 function createFirstUser(firstName,lastName,age){
  const firstUser = {
    firstName:firstName,
    lastName:lastName,
    age:age,
    userAge
  }
  return firstUser;
}
createFirstUser.commonMethod = {}
// console.log( createFirstUser('a','b',20).userAge());
        
 const user3 = createFirstUser("mohit","kumar",203);
 const user4 = createFirstUser("anshu","mishra",200);

 // here we achieve the polyphormism means we have one function but it refers to the diff-diff object, but we loose the first two principle of the oops 1)Encapsulation and 2)Abstraction by defining the function in the global scope

 // let's solve this one

 
 function createSecondUser(firstName,lastName,age){
  const secondUser = {
    firstName:firstName,
    lastName:lastName,
    age:age,
    getBirthYear: createSecondUser.commonMethod.getBirthYear
  }
  return secondUser;
}
createSecondUser.commonMethod = {
  getBirthYear:function(){  // getBirthYear(){} it's also right
    return  new Date().getFullYear() - this.age;
  }
}       
 const user5 = createSecondUser("mohit","kumar",203);
 const user6 = createSecondUser("anshu","mishra",200);

 // here we have achieve Encapsulation, abstraction and polymorphoism but the problem is that here we have to write to much code and one piller is also missing which is "inheretence" so let's achieve this
 

 function createThirdUser(firstName,lastName,age){
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
}
createThirdUser.prototype.getBirthYear = function(){  
  return new Date().getFullYear() - this.age;
}
createThirdUser.prototype.getFullName = function(){  
  return this.firstName + ' ' + this.lastName
}

// console.log(new createThirdUser())
const user7 = new createThirdUser("mohit","kumar",43);
const user8 = new createThirdUser("anshu","mishra",20);
// console.log(user7.getFullName());
// console.log(user7.getBirthYear());
// From the above code we can understand that whenever we are using a new keyword with the function it always retun a object and with that object function named is attached which is indicating that the object is created using the given function name

// here we don't have to create object manually because using the new keyword with the function name create the object automitically and that is why it is called constructor function because it construct a object with the help of function.

// whenever we are creating a object using the function then the prototype of the function is attached to that object but his name will be __proto__

// so here i have achieved the inheretence How? whenever we are adding any method to the createThirdUser function prototype then they are accessible to the every object which is created by using the same function.

// here we have some problems  that for each method we have to create a seperate method which is un-necesserely increasing our code, so to solve this problem a concept is introduced name "CLASS", see the class file

// classes is nothing but a syntatical sugar it do the same thing that we are doing above but it decrease our code length and do easy our work  and here we do not have to create a method on every time manually on the prototype it does it own.









      

