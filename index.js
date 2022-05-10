/* YOUR CODE HERE! */
let boxes = document.getElementsByClassName('box');
let num = 2;

function moveProc (event) {
    if (event.button === 0) {
        let element = event.target;
        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;
      
      
        function moveAt(pageX, pageY) {
          element.style.left = pageX - shiftX + 'px';
          element.style.top = pageY - shiftY + 'px';
        }
      
        function move(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        element.addEventListener('mousemove', move);
      
        function cancelMove() {
          element.removeEventListener('mousemove', move);
        };
        element.addEventListener('mouseup', cancelMove)
      
    }
    
  };


function changeColor(event) {
    let colors = ['red', 'green', 'blue', 'purple', 'black'];
    event.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    event.preventDefault();
}

function resize(event) {
    if (event.shiftKey === true) {
        event.target.classList.toggle('box-large');
    }
}

function createDelete(event) {
    if (event.altKey == false) {
        
        let containe = document.getElementsByClassName('box-container')[0];
        let newDiv = document.createElement('div');
 
        let text = document.createTextNode(num);
        
        newDiv.classList.add('box');
        newDiv.appendChild(text);
        newDiv.addEventListener('mousedown', moveProc);
        newDiv.addEventListener('contextmenu', changeColor);
        newDiv.addEventListener('click', resize);
        newDiv.addEventListener('dblclick', createDelete);
        newDiv.style.top = parseInt(event.target.style.top) + event.target.offsetHeight + 'px';
        newDiv.style.left = parseInt(event.target.style.left) + event.target.offsetWidth + 'px';
        newDiv.style.zIndex = num;
        ++num;

        containe.appendChild(newDiv);
    }
    else if (boxes.length > 1){
        event.target.remove();
    }
    
}


[...boxes].forEach(element => {
    element.addEventListener('mousedown', moveProc);
    element.addEventListener('contextmenu', changeColor);
    element.addEventListener('click', resize);
    element.addEventListener('dblclick', createDelete);
})
