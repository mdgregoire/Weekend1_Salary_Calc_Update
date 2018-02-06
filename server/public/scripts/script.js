var employeeArray = []; //global Array for working with Employee Data
$(document).ready(function(){
  $('#submitButton').on('click', function(){
    var employeeInput = {
      eFirstName : $('#eFirstName').val(),
      eLastName : $('#eLastName').val(),
      idNumber : $('#idNumber').val(),
      jobTitle : $('#jobTitle').val(),
      annualSalary : $('#annualSalary').val(),
    };//end create employeeInput
    //if-else statement below is a check for all required data being inputed

if(employeeInput.eFirstName && employeeInput.eLastName && employeeInput.idNumber && employeeInput.jobTitle && employeeInput.annualSalary){
      employeeArray.push(employeeInput);
      $('#salaryCount').html(function(i, val) {
        var totalAnnualSalary = parseInt(val)+parseInt(employeeInput.annualSalary);
        calculateMonthlySalary (totalAnnualSalary);
        return parseInt(val)+parseInt(employeeInput.annualSalary);});//end salary count, calls calculateMonthlySalary function and converts salary to a number
      $('.inputField').each(function(){$(this).val("");});//resets the input fields after a sucessful creation
      appendInput (employeeArray);
    }//end data check -- true and if so write to the DOM
    else{
      alert ('Error! Please enter all required fields.');}//end data check -- false
  });//end on click submit

  $('#tbody').on('click', '.removeData', function(){
    removeEmployee ($(this).data('id'));
  });//end call to removeEmployee

  $('#clearAll').on('click', function (){
    $('#tbody').empty();
    $('#salaryCount').html(function(i, val) {
       return 0;});
       calculateMonthlySalary(0);//end salary clear
       employeeArray = [];//resetting employee array on clear all
  });//end clear all button
});//end document ready

function appendInput (arrayToWrite){
  $('#tbody').empty();//empties the table to avoid double entries
  arrayToWrite.forEach(function(employeeInfo){
    var stringToAppend = '';
    stringToAppend = '<tr><td>'+employeeInfo.eLastName;
    stringToAppend += '</td><td>'+employeeInfo.eFirstName;
    stringToAppend += '</td><td>'+employeeInfo.idNumber;
    stringToAppend += '</td><td>'+employeeInfo.jobTitle;
    stringToAppend += '</td><td>'+employeeInfo.annualSalary;
    stringToAppend += '</td><td><button class="removeData" data-id="' + employeeInfo.idNumber + '">Remove</button></td></tr>';
    $('.employeeTable').append(stringToAppend);
  });//end for loop that writes employee data
}//end appendInput function

function calculateMonthlySalary(salary){
$('#monthyCount').html(function(i, val){
    return (salary/12).toFixed(2);});//removes extra decimal places
}//end calculateMonthlySalary function

function removeEmployee (idToRemove){
  for (i=0; i<employeeArray.length; i++){
    if(idToRemove == employeeArray[i].idNumber){  //uses id number incase of duplicate last names
      $('#salaryCount').html(function(index, val){
        calculateMonthlySalary(val-employeeArray[i].annualSalary);//calls calculateMonthlySalary with the adjusted salary numbers
        return val-employeeArray[i].annualSalary;});
      employeeArray.splice(i, 1);
      appendInput (employeeArray);//calls the appendInput function, passing it the spliced array
    }//end if statement
  }//end for loop to check for and remove employee number
}//end removeEmployee function
