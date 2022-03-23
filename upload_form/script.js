/*let counter = 1;

document.getElementById('addButt').addEventListener('click', () => {
  const li = document.createElement('li');
  const label = document.createElement('label');
  label.innerHTML = 'Имя фотографии(оционально)';
  label.htmlFor = `name_${counter}`;
  label.className = 'description';

  li.appendChild(label);

  const div = document.createElement('div');
  const inputName = document.createElement('input');
  inputName.id = `name_${counter}`;
  inputName.name = `name_${counter}`;
  inputName.className = 'element text medium';
  inputName.type = 'text';
  inputName.maxlength = '255';
  inputName.value = '';

  const inputFile = document.createElement('input');
  inputFile.id = `file_${counter}`;
  inputFile.name = `file_${counter}`;
  inputFile.className = 'element file';
  inputFile.type = 'file';
  inputFile.value = '';

  div.appendChild(inputName);
  div.appendChild(inputFile);

  li.appendChild(div);

  document.getElementById('ul').appendChild(li);
  ++counter;
});

document.getElementById('removeButt').addEventListener('click', () => {
  document.getElementById('ul').removeChild(document.getElementById('ul').lastChild);
  --counter;
});*/
