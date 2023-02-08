//TODO dynamically create 5 columns of 6 rows of boxes
//to be clicked on and open a modal with the question

const triviaBoard = (() => {
    let gridArea = document.querySelector('#gridWrapper');
    
    console.log(gridArea)
    const createQuestionGrid = (questionTotal) =>{
        for (let i=0;i<questionTotal;i++){
            let questionDiv = document.createElement('div');
            questionDiv.classList.add('class');
            questionDiv.textContent = 'test';
            gridArea.appendChild(questionDiv);
        }
    }


    return {
        createQuestionGrid,
    }
})();