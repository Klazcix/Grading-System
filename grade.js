function calculateGrade (score) {
    if (score >= 80) {
      return "A. You have an Excellent Grade, Welldone! Keep it up.";
    } else if (score >= 70) {
      return "B. You have a Very Good Grade, Put more effort next time.";
    } else if (score >= 60) {
      return "C, You have a Good Grade, Put more effort next time. ";
    } else if (score >= 50) {
        return "D. You have an Average Grade, Put more effort next time.";
    } else if (score >= 40) {
        return "E, You have a poor Grade, Put more effort next time.";
    } 
    else (score <= 40) 
        return "F, Your have a very Poor Grade, Put more Effort to Archieve the Best.";
    }
        

function showResult () {
    var stuname = document.getElementById("stuname").value;
    var scores = {
        Subject1: parseInt(document.getElementById("Subject1").value),
        Subject2: parseInt(document.getElementById("Subject2").value),
        Subject3: parseInt(document.getElementById("Subject3").value),
        Subject4: parseInt(document.getElementById("Subject4").value)
    };
    var totalScore = scores.Subject1 + scores.Subject2 + scores.Subject3 + scores.Subject4 
    var percentage = (totalScore / 400) * 100
    var message = "Dear " +  stuname + ", Your total score is " + totalScore + "/400, while your percentage obtain is " + percentage + " % ," +  " Your Grade is "  +  calculateGrade(percentage);  
    document.getElementById("result").innerHTML = message
};