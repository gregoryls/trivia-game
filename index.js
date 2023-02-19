//TODO dynamically create 5 columns of 6 rows of boxes
//to be clicked on and open a modal with the question
//TODO create player iife
//https://stackoverflow.com/questions/56427009/how-to-return-papa-parsed-csv-via-promise-async-await
//https://stackoverflow.com/questions/62905933/iterating-over-results-of-papa-parse-object
//review these for persuing await/promises with papaparse


const getQuestionData = (() =>{
    let questions = [];
    //TODO wrap parse into it's own function
    Papa.parse('questions/Trivia - Questions.csv', 
        {   
            download:true,
            complete: function(results){
                getQuestionData.questions = results.data;
                triviaBoard.createQuestionGrid(36)
                console.log(results.data);
            }
        }
    );

    return {questions,}
})();

const triviaBoard = (() => {
    let gridArea = document.querySelector('#gridWrapper');
    
    console.log(gridArea)
    const createQuestionGrid = (questionTotal) =>{
        //TODO consider adding point values later as a separate function
        //point values for rows 1-5 on the question grid. 
        let questionValues = [100,100,100,100,100,100,
                              200,200,200,200,200,200,
                              300,300,300,300,300,300,
                              400,400,400,400,400,400,
                              500,500,500,500,500,500]
        for (let i=0;i<questionTotal;i++){
            // for (i;i<6;i++){
            //     console.log(i);
            // }
            let questionDiv = document.createElement('div');
            //treat the first six boxes differently to turn them into topic headers. 
            if (i<6) {
                //00,20,40,60,80,100
                questionDiv.classList.add('questionTopic');
                //use every second array to account for spreadsheet format
                questionDiv.textContent = getQuestionData.questions[2*i][0];
            } else {
                questionDiv.classList.add('question');
                questionDiv.textContent = questionValues[i-6];
            }
            
            gridArea.appendChild(questionDiv);
        }
    }

    return {
        createQuestionGrid,
    }
})();

const player = (name,number) =>{
    const displayPlayerName = function (playerNumber) {
        document.querySelector(`#player${playerNumber}`).textContent = this.name + ':';
        
    }
    const displayPlayerScore = function (playerNumber) {
        document.querySelector(`#player${playerNumber}Score`).textContent = this.score;
    }
    this.name = name;
    this.score = 0;
    this.number = number;
return {name, number, score, displayPlayerName, displayPlayerScore};
}


//Initialize the player objects
const player1 = player('Chase',1);
const player2 = player('Ethan',2);
const player3 = player('Stan',3);
const player4 = player('Taylor',4);

const playerSetup = (() => {
    //display default usernames
    player1.displayPlayerName(1);
    player2.displayPlayerName(2);
    player3.displayPlayerName(3);
    player4.displayPlayerName(4);
    //display intial (zero) player scores
    player1.displayPlayerScore(1);
    player2.displayPlayerScore(2);
    player3.displayPlayerScore(3);
    player4.displayPlayerScore(4);
    //allow players to change their displayed name
    const userName = (player) =>{
        let tempName = player.name;
        player.name = prompt('Please Enter your name','Josh Gunson');
        //prevent player name from disappearing by using previous name
        if (player.name === null) player.name = tempName;
        player.displayPlayerName(player.number);
    }
    //player names can be clicked to open the change dialogue
    document.querySelector('#player1').addEventListener('click',() =>{
        userName(player1)
    });
    document.querySelector('#player2').addEventListener('click',() =>{
        userName(player2)
    });
    document.querySelector('#player3').addEventListener('click',() =>{
        userName(player3)
    });
    document.querySelector('#player4').addEventListener('click',() =>{
        userName(player4)
    });
})();

const questionModal = (()=>{
    //create a modal that contains general help information on playing the game
    // TODO convert button to question square div
    // const openModalButton = document.querySelector('#helpModal');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    const removeClass = (element,className) =>{
        element.classList.remove(className);
    }

    const addClass = (element,className) =>{
        element.classList.add(className);
    }
    //overlay provides a semi-transparent blur behind the modal to help focus attention on modal
    //when the overlay background is clicked anywhere, the modal regains the hidden class and disappears
    overlay.addEventListener('click', ()=>{
        addClass(modal,'hidden');
        addClass(overlay,'hidden');
    });

    // TODO convert this into working when a question square is clicked
    // openModalButton.addEventListener('click',()=> {
    //     removeClass(modal,'hidden');
    //     removeClass(overlay,'hidden');
    // });
})();

// triviaBoard.createQuestionGrid(36)

// document.querySelector('h1').innerHTML = '<img src=\'/img/Lunar-Eclipse-Leona.webp\'>';