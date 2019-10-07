const arrayNotes = [];

const encode = (offset, string, title) => {
  console.log(arrayNotes);
  console.log(title);
  let numAlphabet;
  let arrayEncrypt = [];

  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
    console.log(string.charCodeAt(i));
    const numAscii = string.charCodeAt(i);
    if (numAscii === 32) {
      arrayEncrypt.push(' ');
    } else {
      numAlphabet = ((numAscii - 32 + parseInt(offset)) % 223) + 32;
      console.log(numAlphabet);
      const caracterEncrypt = String.fromCharCode(numAlphabet);
      console.log(caracterEncrypt);
      arrayEncrypt.push(caracterEncrypt);
      console.log(arrayEncrypt);
    }
  }
  stringEncrypt = arrayEncrypt.join('');
  console.log(stringEncrypt);
  return stringEncrypt;
}

const decode = (offset, string) => {
  let numAlphabet;
  let arrayDesEncrypt = [];

  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
    console.log(string.charCodeAt(i));
    const numAscii = string.charCodeAt(i);
    if (numAscii === 32) {
      arrayDesEncrypt.push(' ');
    } else {
      numAlphabet = ((numAscii - 255 - parseInt(offset)) % 223) + 255;
      console.log(numAlphabet);
      const caracterDesencrypt = String.fromCharCode(numAlphabet);
      console.log(caracterDesencrypt);
      arrayDesEncrypt.push(caracterDesencrypt);
      console.log(arrayDesEncrypt);
    }
  }
  const stringDesencrypt = arrayDesEncrypt.join('');
  console.log(stringDesencrypt);
  return stringDesencrypt;
}
