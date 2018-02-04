var employeeArray = []; //global Array for working with Employee Data

$(document).ready(function(){
//get employee data from DOM fields and Button click
$('#submitButton').on('click', function(){
  var employeeInput = {
    eFirstName : $('#eFirstName').val(),
    eLastName : $('#eLastName').val(),
    idNumber : $('#idNumber').val(),
    jobTitle : $('#jobTitle').val(),
    annualSalary : $('#annualSalary').val(),
  };//end create employeeInput


if(employeeInput.eFirstName && employeeInput.eLastName && employeeInput.idNumber && employeeInput.jobTitle && employeeInput.annualSalary){
  employeeArray.push(employeeInput);//pushes to the employeeArray
  $('#salaryCount').html(function(i, val) {
     return val*1+parseInt(employeeInput.annualSalary);});//end salary count
  $('.inputField').each(function(){$(this).val("");});//end clear fields function

  appendInput (employeeInput);//calls appendInput function
}//end data check -- true
else{
  alert ('Error! Please enter all required fields.');
}//end data check -- false
});//end on click submit

function appendInput (newData){
console.log(newData);
$('.employeeTable').append('<tr><td>'+newData.eLastName+'</td><td>'+newData.eFirstName+'</td><td>'+newData.idNumber+'</td><td>'+newData.jobTitle+'</td><td>'+newData.annualSalary+'</td><td><button class="removeData" data-eLastName="' + newData.eLastName + '">Remove</button></td></tr>');
}//end appendInput function

});//end document ready
