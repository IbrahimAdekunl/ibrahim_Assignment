//1.
let emailAddress = prompt ("input your valid email")
let emailValid = emailAddress.endsWith("@yahoo.com") || emailAddress.endsWith("@gmail.com") || emailAddress.endsWith("@hotmail.com")
if(emailValid){
     console.log("valid email")
}else{
     console.log("invalid email")
}


//  // //2.
let pass = prompt ("input your password")
let lowerCase = pass.charAt(0).toLowerCase() === pass.charAt(0)
let upperCase = pass.charAt(pass.length - 1).toUpperCase() === pass.charAt(pass.length - 1)
let password = lowerCase && upperCase && pass.includes(0)
if(password){
    console.log("Strong password")
}else{
    console.log("Weak password")
}


//3.
let url = prompt ("insert a valid url")
let validUrl = url.startsWith("http://") || url.startsWith("https://")
if(validUrl){
    console.log("you are welcome")
}else{
    console.log("Invalid url")
}


// //4.
let Palindrome = prompt ("input the palindrome")
let Word = Palindrome.toLowerCase()
let rewindWord = Word.split('').reverse().join('')
let outcome = Word === rewindWord
console.log(outcome)

// //5.
let userName = prompt ("input the username") 
if(5 <= userName.length && 15 >= userName.length){
    console.log("input your password")
}else{
    console.log("revisit the input")
}


// //6.
let names = prompt("input the name") 
let firstName = names.charAt(0).toUpperCase().concat(names.slice(1))
console.log(firstName)


// //9.
let word = prompt ("input a sentence that includes bad and spam")
let placeWord = word.replaceAll("bad", "good").replaceAll("spam", "inbox")
console.log(placeWord)