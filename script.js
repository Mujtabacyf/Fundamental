var pics;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


pics = ['https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg', 'https://i.pinimg.com/originals/fe/1f/40/fe1f402f03f4398be3a9f018c5ddc249.jpg', 'https://images.pexels.com/photos/3654869/pexels-photo-3654869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/3489072/pexels-photo-3489072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvOBB4R0RX78pnoU1PHpE8zkSvGC3E_WKXA&usqp=CAU', 'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg'];
let element_picture = document.getElementById('picture');
element_picture.setAttribute("src", pics[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_picture2 = document.getElementById('picture');
  pics.unshift(pics.pop());
  element_picture2.setAttribute("src", pics[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  pics.push(pics.shift());
  let element_picture3 = document.getElementById('picture');
  element_picture3.setAttribute("src", pics[0]);

});

document.getElementById('submit').addEventListener('click', (event) => {
  let element_comments = document.getElementById('comments');
  let new_div = document.createElement('div');
  new_div.innerText = getNumberOrString(document.getElementById('add comment').value);

  element_comments.appendChild(new_div);

});

