const u1_1 = document.querySelector(".option1");
const u1_2 = document.querySelector(".option2");
const u1_3 = document.querySelector(".option3");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

//first question
u1_1.addEventListener("click", function(){
    q1.style.display= "none";
    q2.style.display= "block";
});


//second question
u1_2.addEventListener("click", function(){
    q2.style.display= "none";
    q3.style.display= "block";
});


//Display thanks message
u1_3.addEventListener("click", function(){
    q3.style.display= "none";
    survey.style.display= "none";
    end.style.display= "block";

});