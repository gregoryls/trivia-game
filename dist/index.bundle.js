/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

//https://stackoverflow.com/questions/56427009/how-to-return-papa-parsed-csv-via-promise-async-await
//https://stackoverflow.com/questions/62905933/iterating-over-results-of-papa-parse-object
//review these for persuing await/promises with papaparse
//TODO remove text instead of setting it to body color

//TODO remove the various console.log debugging lines

//TODO change file from source document to user uploaded via button
//take away upload section after upload button pressed

const fileInput = document.getElementById('fileInput');
const upload = document.getElementById('upload');

upload.addEventListener('click',() => {
    getQuestionData.csvParse(fileInput);
    document.getElementById('uploadWrapper').remove();
});

const getQuestionData = (() =>{
    let questions = [];
    //TODO wrap parse into it's own function

    const csvParse = (csvFile) =>{
        Papa.parse(csvFile.files[0], 
            {   
                download:true,
                complete: function(results){
                    getQuestionData.questions = results.data;
                    triviaBoard.createQuestionGrid(42);
                    questionModal.addModalEventListener();
                    console.log(results.data);
                }
            }
        );
    }
    

    return {questions,csvParse,}
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
                              500,500,500,500,500,500,
                              600,600,600,600,600,600]
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
                questionDiv.innerHTML = getQuestionData.questions[2*i][0];
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
    const displayPlayerScore = function (playerNumber, scoreToAdd) {
        //thank about splitting this function into two functions
        this.score += scoreToAdd;
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
 
const playerNames = [player1.name,player2.name,player3.name,player4.name];

const playerSetup = (() => {
    //display default usernames
    player1.displayPlayerName(1);
    player2.displayPlayerName(2);
    player3.displayPlayerName(3);
    player4.displayPlayerName(4);
    //display intial (zero) player scores
    player1.displayPlayerScore(1,0);
    player2.displayPlayerScore(2,0);
    player3.displayPlayerScore(3,0);
    player4.displayPlayerScore(4,0);
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
    //create a modal that contains a question based on the clicked question tile
    // TODO convert button to question square div
    // const openModalButton = document.querySelector('#helpModal');
    let currentScore = 0;
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
    const addModalEventListener = ()=>{
        let questions = document.querySelectorAll('.question');
        console.log(questions); 

        for (let i=0;i<questions.length;i++){
            questions[i].addEventListener('click',()=> {
                //prevent tile from being opened twice
                if (questions[i].classList.contains('taken')) return;
                //associated array numbers are due to the format of question csv input
                if (i<6) modal.innerHTML = getQuestionData.questions[2*i][1];
                if (i<12 && i>5) modal.innerHTML = getQuestionData.questions[2*i-12][2];
                if (i<18 && i>11) modal.innerHTML = getQuestionData.questions[2*i-24][3];
                if (i<24 && i>17) modal.innerHTML = getQuestionData.questions[2*i-36][4];
                if (i<30 && i>23) modal.innerHTML = getQuestionData.questions[2*i-48][5];
                if (i<36 && i>29) modal.innerHTML = getQuestionData.questions[2*i-60][6];

                currentScore = parseInt(questions[i].textContent,10);
                console.log(currentScore)
                
                

                //add an answer button to the modal that reveals the answer when clicked, button 
                //adds before the user buttons, answer adds to bottom of modal
                const btn = document.createElement('button');
                btn.textContent = 'Answer';
                btn.addEventListener('click',()=>{
                    //associated array numbers are due to the format of question csv input
                if (i<6) modal.innerHTML += getQuestionData.questions[2*i+1][1];
                if (i<12 && i>5) modal.innerHTML += getQuestionData.questions[2*i-11][2];
                if (i<18 && i>11) modal.innerHTML += getQuestionData.questions[2*i-23][3];
                if (i<24 && i>17) modal.innerHTML += getQuestionData.questions[2*i-35][4];
                if (i<30 && i>23) modal.innerHTML += getQuestionData.questions[2*i-47][5];
                if (i<36 && i>29) modal.innerHTML += getQuestionData.questions[2*i-59][6];

                let div = document.createElement('div')
                div.classList.add('scoreButtons')
                for (let j=0;j<4;j++){
                    //set loop length to number of players
                    //add buttons to the modal that will award points to the correct player(s)
                    const btn = document.createElement('button');
                    btn.textContent = playerNames[j];
                    btn.addEventListener('click',()=>{
                        //checks for clicked class added later to prevent awarding points more than once
                        if (btn.classList.contains('clicked')) return;
                        //get question value from the clicked tile
                        currentScore = parseInt(questions[i].textContent,10);
                        //add current score to the appropriate player when clicked
                        j===0 ? player1.displayPlayerScore(1,currentScore)
                        : j===1? player2.displayPlayerScore(2,currentScore)
                        : j===2? player3.displayPlayerScore(3,currentScore)
                        : player4.displayPlayerScore(4,currentScore);
                        btn.classList.add('clicked');
                    })
                    div.appendChild(btn);
                }
                modal.appendChild(div);

                });
                
                modal.appendChild(btn);
                
                

                addClass(questions[i], 'taken');

                removeClass(modal,'hidden');
                removeClass(overlay,'hidden');

                
            });
        }
        
        
        
    }
    return {addModalEventListener,
            currentScore,
        }
})();

// triviaBoard.createQuestionGrid(36)

// document.querySelector('h1').innerHTML = '<img src=\'/img/Lunar-Eclipse-Leona.webp\'>';
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQyxzQkFBc0IsSUFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsYUFBYTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQSxJQUFJLFNBQVM7QUFDYixJQUFJLFVBQVU7QUFDZCxJQUFJLFdBQVc7QUFDZixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDBGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpdmlhLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTY0MjcwMDkvaG93LXRvLXJldHVybi1wYXBhLXBhcnNlZC1jc3YtdmlhLXByb21pc2UtYXN5bmMtYXdhaXRcclxuLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MjkwNTkzMy9pdGVyYXRpbmctb3Zlci1yZXN1bHRzLW9mLXBhcGEtcGFyc2Utb2JqZWN0XHJcbi8vcmV2aWV3IHRoZXNlIGZvciBwZXJzdWluZyBhd2FpdC9wcm9taXNlcyB3aXRoIHBhcGFwYXJzZVxyXG4vL1RPRE8gcmVtb3ZlIHRleHQgaW5zdGVhZCBvZiBzZXR0aW5nIGl0IHRvIGJvZHkgY29sb3JcclxuXHJcbi8vVE9ETyByZW1vdmUgdGhlIHZhcmlvdXMgY29uc29sZS5sb2cgZGVidWdnaW5nIGxpbmVzXHJcblxyXG4vL1RPRE8gY2hhbmdlIGZpbGUgZnJvbSBzb3VyY2UgZG9jdW1lbnQgdG8gdXNlciB1cGxvYWRlZCB2aWEgYnV0dG9uXHJcbi8vdGFrZSBhd2F5IHVwbG9hZCBzZWN0aW9uIGFmdGVyIHVwbG9hZCBidXR0b24gcHJlc3NlZFxyXG5cclxuY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVJbnB1dCcpO1xyXG5jb25zdCB1cGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkJyk7XHJcblxyXG51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICAgIGdldFF1ZXN0aW9uRGF0YS5jc3ZQYXJzZShmaWxlSW5wdXQpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwbG9hZFdyYXBwZXInKS5yZW1vdmUoKTtcclxufSk7XHJcblxyXG5jb25zdCBnZXRRdWVzdGlvbkRhdGEgPSAoKCkgPT57XHJcbiAgICBsZXQgcXVlc3Rpb25zID0gW107XHJcbiAgICAvL1RPRE8gd3JhcCBwYXJzZSBpbnRvIGl0J3Mgb3duIGZ1bmN0aW9uXHJcblxyXG4gICAgY29uc3QgY3N2UGFyc2UgPSAoY3N2RmlsZSkgPT57XHJcbiAgICAgICAgUGFwYS5wYXJzZShjc3ZGaWxlLmZpbGVzWzBdLCBcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWQ6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZXN1bHRzKXtcclxuICAgICAgICAgICAgICAgICAgICBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zID0gcmVzdWx0cy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaXZpYUJvYXJkLmNyZWF0ZVF1ZXN0aW9uR3JpZCg0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25Nb2RhbC5hZGRNb2RhbEV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiB7cXVlc3Rpb25zLGNzdlBhcnNlLH1cclxufSkoKTtcclxuXHJcbmNvbnN0IHRyaXZpYUJvYXJkID0gKCgpID0+IHtcclxuICAgIGxldCBncmlkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmlkV3JhcHBlcicpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhncmlkQXJlYSlcclxuICAgIGNvbnN0IGNyZWF0ZVF1ZXN0aW9uR3JpZCA9IChxdWVzdGlvblRvdGFsKSA9PntcclxuICAgICAgICAvL1RPRE8gY29uc2lkZXIgYWRkaW5nIHBvaW50IHZhbHVlcyBsYXRlciBhcyBhIHNlcGFyYXRlIGZ1bmN0aW9uXHJcbiAgICAgICAgLy9wb2ludCB2YWx1ZXMgZm9yIHJvd3MgMS01IG9uIHRoZSBxdWVzdGlvbiBncmlkLiBcclxuICAgICAgICBsZXQgcXVlc3Rpb25WYWx1ZXMgPSBbMTAwLDEwMCwxMDAsMTAwLDEwMCwxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMCwyMDAsMjAwLDIwMCwyMDAsMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAsMzAwLDMwMCwzMDAsMzAwLDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDAwLDQwMCw0MDAsNDAwLDQwMCw0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMCw1MDAsNTAwLDUwMCw1MDAsNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2MDAsNjAwLDYwMCw2MDAsNjAwLDYwMF1cclxuICAgICAgICBmb3IgKGxldCBpPTA7aTxxdWVzdGlvblRvdGFsO2krKyl7XHJcbiAgICAgICAgICAgIC8vIGZvciAoaTtpPDY7aSsrKXtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAvL3RyZWF0IHRoZSBmaXJzdCBzaXggYm94ZXMgZGlmZmVyZW50bHkgdG8gdHVybiB0aGVtIGludG8gdG9waWMgaGVhZGVycy4gXHJcbiAgICAgICAgICAgIGlmIChpPDYpIHtcclxuICAgICAgICAgICAgICAgIC8vMDAsMjAsNDAsNjAsODAsMTAwXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdxdWVzdGlvblRvcGljJyk7XHJcbiAgICAgICAgICAgICAgICAvL3VzZSBldmVyeSBzZWNvbmQgYXJyYXkgdG8gYWNjb3VudCBmb3Igc3ByZWFkc2hlZXQgZm9ybWF0XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkRpdi5pbm5lckhUTUwgPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIqaV1bMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdxdWVzdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25EaXYudGV4dENvbnRlbnQgPSBxdWVzdGlvblZhbHVlc1tpLTZdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBncmlkQXJlYS5hcHBlbmRDaGlsZChxdWVzdGlvbkRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlUXVlc3Rpb25HcmlkLFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuY29uc3QgcGxheWVyID0gKG5hbWUsbnVtYmVyKSA9PntcclxuICAgIGNvbnN0IGRpc3BsYXlQbGF5ZXJOYW1lID0gZnVuY3Rpb24gKHBsYXllck51bWJlcikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIke3BsYXllck51bWJlcn1gKS50ZXh0Q29udGVudCA9IHRoaXMubmFtZSArICc6JztcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlQbGF5ZXJTY29yZSA9IGZ1bmN0aW9uIChwbGF5ZXJOdW1iZXIsIHNjb3JlVG9BZGQpIHtcclxuICAgICAgICAvL3RoYW5rIGFib3V0IHNwbGl0dGluZyB0aGlzIGZ1bmN0aW9uIGludG8gdHdvIGZ1bmN0aW9uc1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gc2NvcmVUb0FkZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyJHtwbGF5ZXJOdW1iZXJ9U2NvcmVgKS50ZXh0Q29udGVudCA9IHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxucmV0dXJuIHtuYW1lLCBudW1iZXIsIHNjb3JlLCBkaXNwbGF5UGxheWVyTmFtZSwgZGlzcGxheVBsYXllclNjb3JlfTtcclxufVxyXG5cclxuXHJcbi8vSW5pdGlhbGl6ZSB0aGUgcGxheWVyIG9iamVjdHNcclxuY29uc3QgcGxheWVyMSA9IHBsYXllcignQ2hhc2UnLDEpO1xyXG5jb25zdCBwbGF5ZXIyID0gcGxheWVyKCdFdGhhbicsMik7XHJcbmNvbnN0IHBsYXllcjMgPSBwbGF5ZXIoJ1N0YW4nLDMpO1xyXG5jb25zdCBwbGF5ZXI0ID0gcGxheWVyKCdUYXlsb3InLDQpO1xyXG4gXHJcbmNvbnN0IHBsYXllck5hbWVzID0gW3BsYXllcjEubmFtZSxwbGF5ZXIyLm5hbWUscGxheWVyMy5uYW1lLHBsYXllcjQubmFtZV07XHJcblxyXG5jb25zdCBwbGF5ZXJTZXR1cCA9ICgoKSA9PiB7XHJcbiAgICAvL2Rpc3BsYXkgZGVmYXVsdCB1c2VybmFtZXNcclxuICAgIHBsYXllcjEuZGlzcGxheVBsYXllck5hbWUoMSk7XHJcbiAgICBwbGF5ZXIyLmRpc3BsYXlQbGF5ZXJOYW1lKDIpO1xyXG4gICAgcGxheWVyMy5kaXNwbGF5UGxheWVyTmFtZSgzKTtcclxuICAgIHBsYXllcjQuZGlzcGxheVBsYXllck5hbWUoNCk7XHJcbiAgICAvL2Rpc3BsYXkgaW50aWFsICh6ZXJvKSBwbGF5ZXIgc2NvcmVzXHJcbiAgICBwbGF5ZXIxLmRpc3BsYXlQbGF5ZXJTY29yZSgxLDApO1xyXG4gICAgcGxheWVyMi5kaXNwbGF5UGxheWVyU2NvcmUoMiwwKTtcclxuICAgIHBsYXllcjMuZGlzcGxheVBsYXllclNjb3JlKDMsMCk7XHJcbiAgICBwbGF5ZXI0LmRpc3BsYXlQbGF5ZXJTY29yZSg0LDApO1xyXG4gICAgLy9hbGxvdyBwbGF5ZXJzIHRvIGNoYW5nZSB0aGVpciBkaXNwbGF5ZWQgbmFtZVxyXG4gICAgY29uc3QgdXNlck5hbWUgPSAocGxheWVyKSA9PntcclxuICAgICAgICBsZXQgdGVtcE5hbWUgPSBwbGF5ZXIubmFtZTtcclxuICAgICAgICBwbGF5ZXIubmFtZSA9IHByb21wdCgnUGxlYXNlIEVudGVyIHlvdXIgbmFtZScsJ0pvc2ggR3Vuc29uJyk7XHJcbiAgICAgICAgLy9wcmV2ZW50IHBsYXllciBuYW1lIGZyb20gZGlzYXBwZWFyaW5nIGJ5IHVzaW5nIHByZXZpb3VzIG5hbWVcclxuICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09IG51bGwpIHBsYXllci5uYW1lID0gdGVtcE5hbWU7XHJcbiAgICAgICAgcGxheWVyLmRpc3BsYXlQbGF5ZXJOYW1lKHBsYXllci5udW1iZXIpO1xyXG4gICAgfVxyXG4gICAgLy9wbGF5ZXIgbmFtZXMgY2FuIGJlIGNsaWNrZWQgdG8gb3BlbiB0aGUgY2hhbmdlIGRpYWxvZ3VlXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcclxuICAgICAgICB1c2VyTmFtZShwbGF5ZXIxKVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcclxuICAgICAgICB1c2VyTmFtZShwbGF5ZXIyKVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcclxuICAgICAgICB1c2VyTmFtZShwbGF5ZXIzKVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyNCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcclxuICAgICAgICB1c2VyTmFtZShwbGF5ZXI0KVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBxdWVzdGlvbk1vZGFsID0gKCgpPT57XHJcbiAgICAvL2NyZWF0ZSBhIG1vZGFsIHRoYXQgY29udGFpbnMgYSBxdWVzdGlvbiBiYXNlZCBvbiB0aGUgY2xpY2tlZCBxdWVzdGlvbiB0aWxlXHJcbiAgICAvLyBUT0RPIGNvbnZlcnQgYnV0dG9uIHRvIHF1ZXN0aW9uIHNxdWFyZSBkaXZcclxuICAgIC8vIGNvbnN0IG9wZW5Nb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWxwTW9kYWwnKTtcclxuICAgIGxldCBjdXJyZW50U2NvcmUgPSAwO1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoZWxlbWVudCxjbGFzc05hbWUpID0+e1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZENsYXNzID0gKGVsZW1lbnQsY2xhc3NOYW1lKSA9PntcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vb3ZlcmxheSBwcm92aWRlcyBhIHNlbWktdHJhbnNwYXJlbnQgYmx1ciBiZWhpbmQgdGhlIG1vZGFsIHRvIGhlbHAgZm9jdXMgYXR0ZW50aW9uIG9uIG1vZGFsXHJcbiAgICAvL3doZW4gdGhlIG92ZXJsYXkgYmFja2dyb3VuZCBpcyBjbGlja2VkIGFueXdoZXJlLCB0aGUgbW9kYWwgcmVnYWlucyB0aGUgaGlkZGVuIGNsYXNzIGFuZCBkaXNhcHBlYXJzXHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBhZGRDbGFzcyhtb2RhbCwnaGlkZGVuJyk7XHJcbiAgICAgICAgYWRkQ2xhc3Mob3ZlcmxheSwnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUT0RPIGNvbnZlcnQgdGhpcyBpbnRvIHdvcmtpbmcgd2hlbiBhIHF1ZXN0aW9uIHNxdWFyZSBpcyBjbGlja2VkXHJcbiAgICBjb25zdCBhZGRNb2RhbEV2ZW50TGlzdGVuZXIgPSAoKT0+e1xyXG4gICAgICAgIGxldCBxdWVzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVlc3Rpb24nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpOyBcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8cXVlc3Rpb25zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBxdWVzdGlvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50IHRpbGUgZnJvbSBiZWluZyBvcGVuZWQgdHdpY2VcclxuICAgICAgICAgICAgICAgIGlmIChxdWVzdGlvbnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWtlbicpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvL2Fzc29jaWF0ZWQgYXJyYXkgbnVtYmVycyBhcmUgZHVlIHRvIHRoZSBmb3JtYXQgb2YgcXVlc3Rpb24gY3N2IGlucHV0XHJcbiAgICAgICAgICAgICAgICBpZiAoaTw2KSBtb2RhbC5pbm5lckhUTUwgPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIqaV1bMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaTwxMiAmJiBpPjUpIG1vZGFsLmlubmVySFRNTCA9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMippLTEyXVsyXTtcclxuICAgICAgICAgICAgICAgIGlmIChpPDE4ICYmIGk+MTEpIG1vZGFsLmlubmVySFRNTCA9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMippLTI0XVszXTtcclxuICAgICAgICAgICAgICAgIGlmIChpPDI0ICYmIGk+MTcpIG1vZGFsLmlubmVySFRNTCA9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMippLTM2XVs0XTtcclxuICAgICAgICAgICAgICAgIGlmIChpPDMwICYmIGk+MjMpIG1vZGFsLmlubmVySFRNTCA9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMippLTQ4XVs1XTtcclxuICAgICAgICAgICAgICAgIGlmIChpPDM2ICYmIGk+MjkpIG1vZGFsLmlubmVySFRNTCA9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMippLTYwXVs2XTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmUgPSBwYXJzZUludChxdWVzdGlvbnNbaV0udGV4dENvbnRlbnQsMTApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNjb3JlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FkZCBhbiBhbnN3ZXIgYnV0dG9uIHRvIHRoZSBtb2RhbCB0aGF0IHJldmVhbHMgdGhlIGFuc3dlciB3aGVuIGNsaWNrZWQsIGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIC8vYWRkcyBiZWZvcmUgdGhlIHVzZXIgYnV0dG9ucywgYW5zd2VyIGFkZHMgdG8gYm90dG9tIG9mIG1vZGFsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICdBbnN3ZXInO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYXNzb2NpYXRlZCBhcnJheSBudW1iZXJzIGFyZSBkdWUgdG8gdGhlIGZvcm1hdCBvZiBxdWVzdGlvbiBjc3YgaW5wdXRcclxuICAgICAgICAgICAgICAgIGlmIChpPDYpIG1vZGFsLmlubmVySFRNTCArPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIqaSsxXVsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChpPDEyICYmIGk+NSkgbW9kYWwuaW5uZXJIVE1MICs9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMippLTExXVsyXTtcclxuICAgICAgICAgICAgICAgIGlmIChpPDE4ICYmIGk+MTEpIG1vZGFsLmlubmVySFRNTCArPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIqaS0yM11bM107XHJcbiAgICAgICAgICAgICAgICBpZiAoaTwyNCAmJiBpPjE3KSBtb2RhbC5pbm5lckhUTUwgKz0gZ2V0UXVlc3Rpb25EYXRhLnF1ZXN0aW9uc1syKmktMzVdWzRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGk8MzAgJiYgaT4yMykgbW9kYWwuaW5uZXJIVE1MICs9IGdldFF1ZXN0aW9uRGF0YS5xdWVzdGlvbnNbMippLTQ3XVs1XTtcclxuICAgICAgICAgICAgICAgIGlmIChpPDM2ICYmIGk+MjkpIG1vZGFsLmlubmVySFRNTCArPSBnZXRRdWVzdGlvbkRhdGEucXVlc3Rpb25zWzIqaS01OV1bNl07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2NvcmVCdXR0b25zJylcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGo9MDtqPDQ7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL3NldCBsb29wIGxlbmd0aCB0byBudW1iZXIgb2YgcGxheWVyc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWRkIGJ1dHRvbnMgdG8gdGhlIG1vZGFsIHRoYXQgd2lsbCBhd2FyZCBwb2ludHMgdG8gdGhlIGNvcnJlY3QgcGxheWVyKHMpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gcGxheWVyTmFtZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrcyBmb3IgY2xpY2tlZCBjbGFzcyBhZGRlZCBsYXRlciB0byBwcmV2ZW50IGF3YXJkaW5nIHBvaW50cyBtb3JlIHRoYW4gb25jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0IHF1ZXN0aW9uIHZhbHVlIGZyb20gdGhlIGNsaWNrZWQgdGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmUgPSBwYXJzZUludChxdWVzdGlvbnNbaV0udGV4dENvbnRlbnQsMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBjdXJyZW50IHNjb3JlIHRvIHRoZSBhcHByb3ByaWF0ZSBwbGF5ZXIgd2hlbiBjbGlja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGo9PT0wID8gcGxheWVyMS5kaXNwbGF5UGxheWVyU2NvcmUoMSxjdXJyZW50U2NvcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaj09PTE/IHBsYXllcjIuZGlzcGxheVBsYXllclNjb3JlKDIsY3VycmVudFNjb3JlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGo9PT0yPyBwbGF5ZXIzLmRpc3BsYXlQbGF5ZXJTY29yZSgzLGN1cnJlbnRTY29yZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwbGF5ZXI0LmRpc3BsYXlQbGF5ZXJTY29yZSg0LGN1cnJlbnRTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKHF1ZXN0aW9uc1tpXSwgJ3Rha2VuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MobW9kYWwsJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Mob3ZlcmxheSwnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiB7YWRkTW9kYWxFdmVudExpc3RlbmVyLFxyXG4gICAgICAgICAgICBjdXJyZW50U2NvcmUsXHJcbiAgICAgICAgfVxyXG59KSgpO1xyXG5cclxuLy8gdHJpdmlhQm9hcmQuY3JlYXRlUXVlc3Rpb25HcmlkKDM2KVxyXG5cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lckhUTUwgPSAnPGltZyBzcmM9XFwnL2ltZy9MdW5hci1FY2xpcHNlLUxlb25hLndlYnBcXCc+JzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=