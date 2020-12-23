
//capitalize each letter of each word in the string
function capitalize(str) {
  return str.split(' ').map(el=>el[0].toUpperCase()+el.slice(1)).join(' ');
}

//solution2
function capitalize(str) {
    let result = str[0].toUpperCase();
    for(let i=1;i<str.length;i++)
    {
        if(str[i-1]===' ')
           result+= str[i].toUpperCase();
        else
            result+=str[i];
    }
    return result;
}