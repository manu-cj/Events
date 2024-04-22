const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');

const clickOnSquare = (e) => {
  displayedsquareWrapper.appendChild(document.createElement('div'));

  let newForm = displayedsquareWrapper.lastChild;
  newForm.classList.add('displayedsquare', e.target.classList[1]);
    
    
  
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

