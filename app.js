

let button = document.getElementById("findButton")
button.onclick = function () {
  let typedText = document.getElementById("input").value
  getAnagramsOf(typedText)
}

function alphabetize(input) {
  return input.toLowerCase().split("").sort().join("").trim()
}

function getAnagramsOf(input) {
  let currentWord = alphabetize(input)
  let matchWord = []
  for (let i = 0; i < words.length; i++) {
    let wordWord = alphabetize(words[i])
    if (currentWord === wordWord) {
      matchWord.push(words[i])
    }
  }
  for (let word in matchWord) {
    const span = document.createElement("span")
    const textcontent = document.createTextNode(" " + matchWord[word] + " ")
    span.appendChild(textcontent)
    document.getElementById("wordDiv").appendChild(span)
  }
}
//console.log(words[5])
//ex:input "steal" return ["least","slate","stale","steal"]
