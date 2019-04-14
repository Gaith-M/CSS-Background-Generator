var subBG = document.getElementById("subDisplay");
var mainBG = document.getElementById("mainDisplay");
var color1 = document.getElementById("firstColor");
var color2 = document.getElementById("secondColor");
var color3 = document.getElementById("thirdColor");
var randGeneBtn = document.getElementById("randomGenerator");
var mainGeneBtn = document.getElementById("mainGenerator");
var typeOfGradient = document.getElementById("graidentType");
var CSSrule = document.getElementById("generatedValue");
var fallBackCSSrule = document.getElementById("normalBG");
var toggleDashBtn = document.getElementById("toggleBtn");




//Deciding the direction of gradient
function shapeOfGrade   ()  {
    if(typeOfGradient.value === "linear-gradient"){
        return "to right";
    }else{
        return "circle";
    }
}

//random opacity generator
function randOpacityGene    ()  {
    var randOpacity = Math.round(Math.random()*11)/10;
    if  (randOpacity === 0){
        return 0.1;
    }else if    (randOpacity > 1){
        return 1;
    }else   {
        return randOpacity;
    }
}

// Gradient generator function
function generateGradient   ()   {
    var direction = shapeOfGrade();
    var userGradient = "background:" + typeOfGradient.value + "(" + direction + ", "+ color1.value + ", " + color2.value + ", " + color3.value + ");";
    // mainBG.style = userGradient;
    subBG.style = userGradient;
    CSSrule.textContent = userGradient;
}



//random gradient generator 
function randGradientGene   ()  {
    var roundNum = Math.round;
    var randNum = Math.random; 
    var direction = shapeOfGrade();
    var randBg = "background:" + typeOfGradient.value + "(" + direction + ", " 
    + "rgba(" + roundNum(randNum()*255) + ", " + roundNum(randNum()*255) + ", " + roundNum(randNum()*255) + ", " + randOpacityGene() +"), " 
    + "rgba(" + roundNum(randNum()*255) + ", " + roundNum(randNum()*255) + ", " + roundNum(randNum()*255) + ", " + randOpacityGene() +"), "
    + "rgba(" + roundNum(randNum()*255) + ", " + roundNum(randNum()*255) + ", " + roundNum(randNum()*255) + ", " + randOpacityGene() +")";

    // mainBG.style = randBg;
    subBG.style = randBg;
    CSSrule.textContent = randBg + ";";

}

//Toggle dashboard function
function toggleDash ()  {
    mainBG.classList.toggle("closeDashboard");
}


//E-listeners
mainGeneBtn.addEventListener("click", generateGradient);
randGeneBtn.addEventListener("click", randGradientGene);
toggleDashBtn.addEventListener("click", toggleDash);