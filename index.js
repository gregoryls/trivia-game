//TODO dynamically create 5 columns of 6 rows of boxes
//to be clicked on and open a modal with the question
//TODO create player iife

const triviaBoard = (() => {
    let gridArea = document.querySelector('#gridWrapper');
    
    console.log(gridArea)
    const createQuestionGrid = (questionTotal) =>{
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
                questionDiv.classList.add('questionTopic');
                questionDiv.textContent = 'topic';
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

triviaBoard.createQuestionGrid(36)

document.querySelector('h1').innerHTML = '<img src=\'/img/Lunar-Eclipse-Leona.webp\'>';