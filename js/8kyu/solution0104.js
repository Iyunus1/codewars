function correct(string)
{
	let newString = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] === '5'){
      newString += 'S'
    } else if (string[i] === '0'){
      newString += 'O'
    } else if (string[i] === '1'){
      newString += 'I'
    } else {
      newString += string[i]
    }
  }
  return newString
}