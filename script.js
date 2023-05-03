function createGrid(gridSize){
  let drawing = false;

  for (let i = 0; i < gridSize; i++){
    const verticalUnit = document.createElement('div');

    //change verticalUnit class list
    if (gridSize >= 65){
      verticalUnit.style.gap = '1px';
      grid2.style.gap = '1px'
    } else if (gridSize >= 37){
      verticalUnit.style.gap = '4px';
      grid2.style.gap = '4px'
    } else {
      grid2.style.gap = ''
    }
      // console.log(grid2.classList.gap);
     //.verticalUnitCSS.gap = 1px
    verticalUnit.classList.add('verticalUnitCSS');
      for (let j = 0; j<gridSize; j++){
        let box2 = document.createElement('div');
        box2.classList.add('box2CSS');

        //add box2
        verticalUnit.appendChild(box2);

        //add a change color function over here
        box2.addEventListener('mousedown', () =>{
          drawing = true;
          draw(event)
        });

        box2.addEventListener('mousemove', ()=>{
          if (drawing){
            draw(event);
          }
        })

        box2.addEventListener('mouseup', (event)=>{
          drawing = false;
        })

        // box2.addEventListener('mouseleave', (event)=>{
        //   drawing = false;
        // })
      }
    grid2.appendChild(verticalUnit);
  }
}

function draw(event){
  console.log('drawing')
  event.target.classList.add('box2CSSdrawn')
}

//main


const grid2 = document.querySelector('#grid2');
const slider = document.getElementById("mySlider");
let sliderValue = document.querySelector('#value');
// let valueContent = document.create('div');

// let boxProperty;
createGrid(16);
sliderValue.textContent = 16 + ' px';


// add an event listener for the slider to create grid
slider.addEventListener("input", () => {
  // get the current gridSize
  //clear previous grid
  grid2.innerHTML = "";
  let gridSize = slider.value;
  // call a function that creates a grid
  sliderValue.textContent = gridSize + ' px';
  createGrid(gridSize);
});



