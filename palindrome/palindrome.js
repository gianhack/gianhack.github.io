function is_palindrome(word){
    return word == word.split('').reverse().join('');
}
if (is_palindrome(prompt('Palavra:'))){
    alert("É palindrome");
} else {
    alert("Não é palindrome");
}