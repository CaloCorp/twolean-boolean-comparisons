/********************
 * YOUR CODE BELOW! *
 ********************/

const moreThan5 = function (num){

return num > 5
}

const topScore = function (num1,num2){

  return num1 > num2
}

const isInDanger = function(num){

return 60 <= num && num  <= 71
}

const isCoasting = function(num){
 return 72 <= num && num  <= 83

}

 const isSucceeding = function(num){
  return 84 <= num && num  <= 92
 }
  const isFailing = function (num){

return num < 60
  }

  const isAcing = function (num){

    return num > 92 
  }

  const isStudent = function(str){

return str === 'student'

  }

  const isTeacher = function (str){
return str === 'teacher'
  }

  const isAdmin = function(str){

return str === 'admin'
  }

  const isElementary = function (str){

    return str === 'elementary'
  }

  const areDifferentPeople = function (name1,name2){

    return name1 !== name2
  }

const isMiddleSchoolTeacher = function (str,num){

  return str === 'teacher' && num >= 6 && num <= 8
}

const notAnElementarySchoolAdministrator = function (str1,str2){

  return str1 !== 'elementary' || str2 !== 'admin' 
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
