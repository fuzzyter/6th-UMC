let nameV;
let emailV;
let ageV;
let passwordV;
let pwcheckV;

function nameCheck(name){
    const name = document.getElementById("name");
    if (name.trim() === ''){
        nameV = false;
        document.getElementById('nameError').textContent = '필수 입력 항목입니다.';
    }
    else{
        nameV = true;
        document.getElementById('nameError').textContent = '멋진 이름이네요!';
    }

}

function emailCheck(){
    const email = document.getElementById("email");
    if (email.trim() === ''){
        emailV = false;
        document.getElementById('emailError').textContent = '필수 입력 항목입니다.';
    }
    else{
        emailV = true;
        document.getElementById('emailError').textContent = '멋진 이메일이네요!';
    }
}
function ageCheck(){

}
function passwordCheck(){

}
function pwcheckCheck(){

}