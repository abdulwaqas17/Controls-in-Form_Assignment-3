// create arrays for multiple input fields
var forFullName = [];
var forEmail = [];
var forPhoneNumber = [];
var forPassword = [];



// write a function for doing multiple work/task
function takeInupts(){


    // get the value of Inupts by id, and store in variables
    var fullName = document.getElementById('fullName').value;

    var YourEmail = document.getElementById('YourEmail').value;

    var PhoneNumber = document.getElementById('PhoneNumber').value;

    var YourPassword = document.getElementById('YourPassword').value;



    // push the value of inputs from respective variables to the respective arrays
    forFullName.push(fullName);
    forEmail.push(YourEmail);
    forPhoneNumber.push(PhoneNumber);
    forPassword.push(YourPassword);


    // // select the showText
    // var showText  = document.getElementById('showText');

    // // putting the content in showText box in html browser view
    // showText.innerHTML = `
    // <h2>Your Details is here</h2>
    // <p><b>Full Name:</b> ${forFullName}</p>
    // <p><b>Email :</b> ${forEmail}</p>
    // <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    // <p><b>Password :</b> ${forPassword}</p>
    // <p class='last'><strong>Design by Muhammad Waqas,  Roll No. 263696</strong></p>`;


    // short way to get id and direct innerhtml = 'text'
    document.getElementById('showText').innerHTML = `
    <h2>Your Details is here</h2>
    <p><b>Full Name:</b> ${forFullName}</p>
    <p><b>Email :</b> ${forEmail}</p>
    <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    <p><b>Password :</b> ${forPassword}</p>
    <p class='last'><strong>Design by Muhammad Waqas | Roll No. 263696</strong></p>`;
    
};


// function form delete from end
function pop(){

    forFullName.pop();
    forEmail.pop();
    forPhoneNumber.pop();
    forPassword.pop();


    // // putting the content in showText box in html browser view
    // showText.innerHTML = `
    // <h2>Your Details is here</h2>
    // <p><b>Full Name:</b> ${forFullName}</p>
    // <p><b>Email :</b> ${forEmail}</p>
    // <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    // <p><b>Password :</b> ${forPassword}</p>
    // <p class='last'><strong>Design by Muhammad Waqas,  Roll No. 263696</strong></p>`;


    document.getElementById('showText').innerHTML = `
    <h2>Your Details is here</h2>
    <p><b>Full Name:</b> ${forFullName}</p>
    <p><b>Email :</b> ${forEmail}</p>
    <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    <p><b>Password :</b> ${forPassword}</p>
    <p class='last'><strong>Design by Muhammad Waqas,  Roll No. 263696</strong></p>`;
  
};


// function form delete from start
function shift(){

    forFullName.shift();
    forEmail.shift();
    forPhoneNumber.shift();
    forPassword.shift();

    // // putting the content in showText box in html browser view
    // showText.innerHTML = `
    // <h2>Your Details is here</h2>
    // <p><b>Full Name:</b> ${forFullName}</p>
    // <p><b>Email :</b> ${forEmail}</p>
    // <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    // <p><b>Password :</b> ${forPassword}</p>
    // <p class='last'><strong>Design by Muhammad Waqas,  Roll No. 263696</strong></p>`;


    document.getElementById('showText').innerHTML = `
    <h2>Your Details is here</h2>
    <p><b>Full Name:</b> ${forFullName}</p>
    <p><b>Email :</b> ${forEmail}</p>
    <p><b>Phone Number :</b>  ${forPhoneNumber}</p>
    <p><b>Password :</b> ${forPassword}</p>
    <p class='last'><strong>Design by Muhammad Waqas,  Roll No. 263696</strong></p>`;
  
}

