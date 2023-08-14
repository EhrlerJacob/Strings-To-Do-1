// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlank(str) {
    let newStr = " "

    for(let i =0; i < str.length; i++) {
        if(str[i] != " ") (
            newStr += str[i]
        )
    }
    return newStr
}
console.log(removeBlank("b l a n ks H ave Bee n R e mo ve d"))

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigis(str) {
    let nums = " "

    for(let char in str) {
        if(!isNaN(str[char])) {
            nums += str[char]
        }
    }
        return Number(nums)
}
console.log(getDigis("0s1s2s3s4s5s6s7s8s?9"))

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str) {
    let wordArr = str.split(" ")
    let acronymStr = " "

    for( let word in wordArr) {

        if(wordArr[word].length > 0) {
            acronymStr += wordArr[word][0].toUpperCase()
        }

    }
    return acronymStr
}
console.log(acronym("If You Know What I Mean"))
console.log(acronym("Thank God It's Friday"))


// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11



function count(str) {
    let counter = 0

    for(let char in str) {
        if(str[char] != " ") {
            counter++
        }
    }
    return counter
}
console.log(count("Hello Darkness My Old Friend"))
console.log(count("Never Gonna Give You Up!"))

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShortStr(arr, len) {
    let noMoreShortStr = []

    let idx = 0

    for(let value in arr) {
        if(arr[value].length >= len) {
            noMoreShortStr[idx++] = arr[value]
        }
    }
    return noMoreShortStr
}
console.log(removeShortStr(["Good morning", "starshine", "the", "Earth", "says", "Hello!"], 4))





