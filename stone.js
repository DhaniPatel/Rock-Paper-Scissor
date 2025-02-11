let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    const userchoiceid = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        console.log("your choice is ", userchoiceid);
        let userimg = document.querySelectorAll("img")[3];
        var img2 = "./" + userchoiceid + ".png";
        userimg.setAttribute("src", img2);
        condition(userchoiceid);
    });
});
document.addEventListener("keypress", function (event) {
    makesound(event.key);
});
function makesound(key) {
    let userchoiceid;
    switch (key) {
        case "r":
            userchoiceid="rock";
            break;
        case "p":
            userchoiceid="paper";
            break;
        case "s":
            userchoiceid="scissors";
            break;
        default:
            console.log("wrong");
    }
    console.log("Your choice is", userchoiceid);
    let userimg = document.querySelectorAll("img")[3];
    let imgSrc = "./" + userchoiceid + ".png";
    userimg.setAttribute("src", imgSrc);
    condition(userchoiceid);

}

let msg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

let condition = (userchoiceid) => {
    let options = ["rock", "paper", "scissors"];
    let compchoiceid = Math.floor(Math.random() * 3);
    let compchoice = options[compchoiceid];
    console.log("comp choice is ", compchoice);
    let userimg1 = document.querySelectorAll("img")[4];
    var img2 = "./" + compchoice + ".png";
    userimg1.setAttribute("src", img2);
    if (userchoiceid === compchoice) {
        msg.innerText = "Game is draw!!!";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
        return;
    }
    if ((userchoiceid === "rock" && compchoice === "scissors") ||
        (userchoiceid === "paper" && compchoice === "rock") ||
        (userchoiceid === "scissors" && compchoice === "paper")) {
        msg.innerText = "You won the game!";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        msg.innerText = "Computer won the game!";
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compScore++;
        compScorePara.innerText = compScore;
    }
}