//alert('hi');
const firstSection = document.getElementById('firstSection');
const formNote = document.getElementById('note');
const sectionKey = document.getElementById('sectionKey');
const btnNewNote = document.getElementById('btnNewNote');
const btnEncryptOne = document.getElementById('btnEncryptOne');
const btnSaveNote = document.getElementById('btnSaveNote');
const btnEncryptDone = document.getElementById('btnEncryptDone');
const textTitle = document.getElementById('textTitle');
const textNote = document.getElementById('textNote');
const key = document.getElementById('key');
const keyValue = key.value;
let noteSecretsSection;
let stringEncrypt;
//const titleNote = document.getElementById('titleNote');
//const textEncrypt = document.getElementById('textEncrypt');
const noteSecrets = document.getElementById('noteSecrets');

sectionKey.classList.add('hide');
formNote.classList.add('hide');

const createNewNote = () => {
  btnEncryptOne.classList.remove('hide');
  btnSaveNote.classList.remove('hide');
  firstSection.classList.add('hide');
  formNote.classList.remove('hide');
}

const encryptConfig = () => {
  sectionKey.classList.remove('hide');
  btnEncryptOne.classList.add('hide');
  btnSaveNote.classList.add('hide');
}

const encryptNote = () => {
  btnEncryptDone.addEventListener('click', cipherNote);
  sectionKey.classList.add('hide');
  formNote.classList.add('hide');
  firstSection.classList.remove('hide');
  noteSecretsSection = document.createElement('section');
  //noteSecretsSection.innerHTML = '<section id="noteCreate" class="note"><form action="index.html" method="post"><textarea id="titleNote" class="titleNote" n ame="name" rows="1" cols="80"></textarea><textarea id="textEncrypt" class="textNote" rows="8" name="name" rows="8" cols="80"></textarea></form></section>';
  //noteSecrets.appendChild(noteSecretsSection);
  noteSecretsSection.innerHTML= '<form id="noteBack" class="note" action="index.html" method="post"><textarea disabled class="textTitleDisable" id="titleNote" name="name" rows="1" cols="80"></textarea><textarea disabled class="textDisable" id="noteText" name="name" rows="1" cols="80">' +stringEncrypt+'</textarea><button id="btnEdit" class="btnEdit" type="button" name="button">Editar</button><button id="btnCancel" class="btnEdit" type="button" name="button">Borrar</button></form>';
  noteSecretsSection.setAttribute('id', 'noteCreate');
  noteSecrets.appendChild(noteSecretsSection);
  titleNote.value = textTitle.value;
  //noteText.value = stringEncrypt;
  console.log(titleNote.value);
  document.getElementById('btnEdit').addEventListener('click', editNote);
  //document.getElementById('btnEncryptOne').addEventListener('click', alert('hi'));
}

const editNote = () => {
  document.getElementById('titleNote').disabled = false;
  //document.getElementById('noteBack').innerHTML = '<textarea value="Hola" id="textTitle" placeholder="Título" class="titleNote" name="name" rows="1" cols="80"></textarea><textarea id="textNote" placeholder="Escribe aquí..." class="textNote" rows="8" name="name" rows="8" cols="80"></textarea><button id="btnEncryptOne" class="buttonFunction" type="button" name="button">Encriptar</button><button id="btnSaveNote" class="buttonFunction" type="button"  name="button">Guardar</button>';
  document.getElementById('noteBack').innerHTML = '<form id="insertKey" class="note" action="index.html" method="post"><input id="keyDecipher" class="keyInput" type="text" name="" value=""><button id="btnDecipher" class="buttonFunction" type="button" name="button">Desencriptar</button></form>';
  const btnDecipher = document.getElementById('btnDecipher');
  btnDecipher.addEventListener('click', please);
  btnDecipher.addEventListener('click', decipherNote);
}

const please = () => {
  alert('hi');
  //document.getElementById('noteCreate').removeChild(noteBack);
  btnEncryptOne.classList.remove('hide');
  btnSaveNote.classList.remove('hide');
  firstSection.classList.add('hide');
  formNote.classList.remove('hide');
}

const saveRegularNote = () => {
  firstSection.classList.remove('hide');
  sectionKey.classList.add('hide');
  formNote.classList.add('hide');
}

btnNewNote.addEventListener('click', createNewNote);
btnEncryptOne.addEventListener('click', encryptConfig);
btnSaveNote.addEventListener('click', saveRegularNote);
//btnEncryptDone.addEventListener('click', cipherNote);
btnEncryptDone.addEventListener('click', encryptNote);
