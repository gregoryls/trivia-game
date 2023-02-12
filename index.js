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

triviaBoard.createQuestionGrid(36)

document.querySelector('h1').innerHTML = '<img src=\'/img/Lunar-Eclipse-Leona.webp\'>';