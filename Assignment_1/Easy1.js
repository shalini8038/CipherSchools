function charCount(str, letter){
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
   {
    if (str.charAt(position) == letter) 
    {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

document.write(charCount('edabit', 'a')+"</br>");
document.write(charCount('Chamber of secrets', 'c')+"</br>");
document.write(charCount('big fat bubble', 'b')+"</br>");
