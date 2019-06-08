// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    document.querySelector('#pixelCanvas').innerHTML='';
    for(let i=0;i<height;i++)
    {
      let row=document.createElement('tr');
  
      for(let j=0;j<width;j++)
      {
        let column=document.createElement('td');
        column.addEventListener('click',draw);
        row.appendChild(column);
      }
      document.querySelector('#pixelCanvas').appendChild(row);
    }
    
    }
    
    var form=document.querySelector('#sizePicker');
    var height;
    var width;
    var color;
  
    form.addEventListener('submit',function(e){
      e.preventDefault();
      height=document.getElementById('inputHeight').value;
      width=document.getElementById('inputWidth').value;
      color=document.getElementById('colorPicker').value;
      makeGrid();
    });
  
  function draw(e)
  {
    if(!e.target.style.backgroundColor||e.target.style.backgroundColor!=color)
    {
      e.target.style.backgroundColor=color;
    }
    else
    {
      e.target.style.backgroundColor=null;
    }
  }
  document.getElementById('colorPicker').addEventListener('change',function(){
    color=document.getElementById('colorPicker').value;
  
  });