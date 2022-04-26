
$("button").click(function(){
  
    let questionOne = $("#questionOneResponse").val();
    console.log(`q1: ${questionOne}`);
    
    let questionTwo = $("#questionTwoResponse").val();
    console.log(`q2: ${questionTwo}`);
    
    let questionThree = $("#questionThreeResponse").val();
    console.log(`q3: ${questionThree}`);

    
    let calculation = (365 * questionThree) * (2050 - 2024);
    let img = "https://media.giphy.com/media/5aY6weoALCAu1qHXpq/giphy.gif";
    
    $(".fortune-display").append("<strong>" + questionOne + "</strong>" + ", by 2050, you listened to " + "<strong>" + calculation + "</strong>" + " hours of music through " + "<strong>" +questionTwo + "</strong>" + "<br>" + "<br?");
    $(".image").attr("src", img);

});