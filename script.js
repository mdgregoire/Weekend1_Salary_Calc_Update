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
    //if-else statement below is a check for all required data being inputed and if it is the correct type
    if (isNaN(employeeInput.annualSalary)){
      alert ('Error! Please enter a number for the Annual Salary.');}
      //end check for number in the salary field
    else if(employeeInput.eFirstName && employeeInput.eLastName && employeeInput.idNumber && employeeInput.jobTitle && employeeInput.annualSalary){
      employeeArray.push(employeeInput);
      $('#salaryCount').html(function(i, val) {
         return parseInt(val)+parseInt(employeeInput.annualSalary);});//end salary count, converts salary to a number
      $('.inputField').each(function(){$(this).val("");});//resets the input fields after a sucessful creation
      appendInput (employeeArray);
    }//end data check -- true and if so write to the DOM
    else{
      alert ('Error! Please enter all required fields.');
    }//end data check -- false
  });//end on click submit

  $('#tbody').on('click', '.removeData', function(){
    removeEmployee ($(this).data('id'));
  });//end call to removeEmployee

  $('#clearAll').on('click', function (){
    $('#tbody').empty();
    $('#salaryCount').html(function(i, val) {
       return 0;});//end salary clear
       employeeArray = [];//resetting employee array
  });//end clear all button
});//end document ready

function appendInput (arrayToWrite){
  $('#tbody').empty();//empties the table to avoid double entries
  for(i=0; i<arrayToWrite.length; i++){
    var stringToAppend = '';
    stringToAppend = '<tr><td>'+arrayToWrite[i].eLastName;
    stringToAppend += '</td><td>'+arrayToWrite[i].eFirstName;
    stringToAppend += '</td><td>'+arrayToWrite[i].idNumber;
    stringToAppend += '</td><td>'+arrayToWrite[i].jobTitle;
    stringToAppend += '</td><td>'+arrayToWrite[i].annualSalary;
    stringToAppend += '</td><td><button class="removeData" data-id="' + arrayToWrite[i].idNumber + '">Remove</button></td></tr>';
    $('.employeeTable').append(stringToAppend);
  }//end for loop that writes employee data
}//end appendInput function

function removeEmployee (idToRemove){
  for (i=0; i<employeeArray.length; i++){
    if(idToRemove == employeeArray[i].idNumber){  //uses id number incase of duplicate last names
      $('#salaryCount').html(function(index, val){
        return val-employeeArray[i].annualSalary;});
      employeeArray.splice(i, 1);
      appendInput (employeeArray);//calls the appendInput function, passing it the spliced array
    }//end if statement
  }//end for loop to check for and remove employee number
}//end removeEmployee
