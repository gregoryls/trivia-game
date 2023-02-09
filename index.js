//TODO dynamically create 5 columns of 6 rows of boxes
//to be clicked on and open a modal with the question

const triviaBoard = (() => {
    let gridArea = document.querySelector('#gridWrapper');
    
    console.log(gridArea)
    const createQuestionGrid = (questionTotal) =>{
        let array = [1,2,3,4,5,6,7,8,9,10]
        for (let i=0;i<questionTotal;i++){
            let questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.textContent = array[i];
            gridArea.appendChild(questionDiv);
        }
    }


    return {
        createQuestionGrid,
    }
})();

triviaBoard.createQuestionGrid(36)