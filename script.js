console.log('js');

var employeeArray = [];


$(document).ready(function(){
  console.log('JQ');

//get employee data from DOM fields and Button click

$('#submitButton').on('click', function(){
  console.log('inbuttonclick');
  var employeeInput = {
    eFirstName : $('#eFirstName').val(),
    eLastName : $('#eLastName').val(),
    idNumber : $('#idNumber').val(),
    jobTitle : $('#jobTitle').val(),
    annualSalary : $('#annualSalary').val(),
  };//end create employeeInput
  employeeArray.push(employeeInput);//pushes to the employeeArray
  console.log(employeeArray);


  $('.inputField').each(function(){$(this).val("");});//end clear fields function





});//end on click submit


});
