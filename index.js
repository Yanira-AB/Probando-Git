const btnNewNote = document.getElementById('btnNewNote');
const notes = document.getElementById('notes');
let count = 0;

const startNote = () => {
  count++;
  const note = document.createElement('form');
  note.setAttribute('id', 'note'+ count);
  note.setAttribute('class', 'newNote');
  note.innerHTML = '<textarea value="Hola" id="textTitle'+ count+'" placeholder="Título" class="titleNote" name="name" rows="1" cols="80"></textarea>' +
  '<textarea id="textNote'+ count+'" placeholder="Escribe aquí..." class="textNote" rows="8" name="name" rows="8" cols="80"></textarea>'+
  '<button id="desencriptar'+count+'" class="buttonFunction hide" type="button" name="button">Desencriptar</button>'+
  '<div id="inputKeyNote'+count+'" class="textFunction hide">'+
    '<span>Clave :</span><input id="keyShow'+count+'" class="keyInput" type="text" name="" value="">'+
  '</div>'+
  '<button id="decodeBtn'+count+'" class="buttonFunction hide" type="button" name="button">Desencriptar</button>'+
  '<button id="encodeBtnTwo'+count+'" class="buttonFunction hide" type="button" name="button">Encriptar</button>'+
  '<section id="sectionKey'+count+'">'+
    '<div class="textFunction">'+
      '<p>* Escoge un número de 2 dígitos como clave única para ésta nota.</p>'+
      '<span>Clave :</span><input id="key'+count+'" class="keyInput" type="text" name="" value="">'+
    '</div>'+
    '<button id="btnEncryptDone'+count+'" class="buttonFunction" type="button" name="button">Encriptar</button>'+
  '</section>';
  notes.appendChild(note);
  const btnEncryptDone = document.getElementById('btnEncryptDone'+count);
  btnEncryptDone.addEventListener('click', encryptNote);
};

const encryptNote = () => {
  const btnDecipher = document.getElementById('desencriptar'+count);
  btnDecipher.classList.remove('hide');
  const title = document.getElementById('textTitle'+count);
  const textNote = document.getElementById('textNote'+count);
  const keyNote = document.getElementById('key'+count);
  arrayNotes.push([title.value, textNote.value, parseInt(keyNote.value)]);
  const stringEncrypt = encode(keyNote.value, textNote.value, title.value);
  textNote.value = stringEncrypt;
  textNote.setAttribute('rows', '2');
  title.classList.add('frozenNote');
  textNote.classList.add('frozenNote');
  const sectionKey = document.getElementById('sectionKey'+count);
  sectionKey.classList.add('hide');
  title.disabled = true;
  textNote.disabled = true;
  keyNote.value = '';
  btnDecipher.addEventListener('click', showNote);
}

const showNote = () => {
  const inputKeyNote = document.getElementById('inputKeyNote'+count);
  inputKeyNote.classList.remove('hide');
  const btnDecodeOne = document.getElementById('desencriptar'+count);
  btnDecodeOne.classList.add('hide');
  const formNote = document.getElementById('note'+count);
  const decodeBtn = document.getElementById('decodeBtn'+count);
  decodeBtn.classList.remove('hide');
  decodeBtn.addEventListener('click', decodeDone);
}

const decodeDone = () => {
  const textNote = document.getElementById('textNote'+count);
  let keyShow = document.getElementById('keyShow'+count);
  const msjShow = decode(parseInt(keyShow.value), textNote.value);
  textNote.value = msjShow;
  const inputKeyNote = document.getElementById('inputKeyNote'+count);
  inputKeyNote.classList.add('hide');
  const decodeBtn = document.getElementById('decodeBtn'+count);
  decodeBtn.classList.add('hide');
  const btnEncodeTwo = document.getElementById('encodeBtnTwo'+count);
  btnEncodeTwo.classList.remove('hide');
  btnEncodeTwo.addEventListener('click', encryptSave);
  keyShow.value = '';
}

const encryptSave = () => {
  const title = document.getElementById('textTitle'+count);
  const textNote = document.getElementById('textNote'+count);
  title.classList.remove('frozenNote');
  textNote.classList.remove('frozenNote');
  title.disabled = false;
  textNote.disabled = false;
  const btnEncodeTwo = document.getElementById('encodeBtnTwo'+count);
  btnEncodeTwo.classList.add('hide')
  const sectionKey = document.getElementById('sectionKey'+count);
  sectionKey.classList.remove('hide');
}

btnNewNote.addEventListener('click', startNote);
