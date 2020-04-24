var word = "Hello"

function deleteFirstWord(string) {
  let arrayOfString = string.split("");
  arrayOfString.shift();
  string = arrayOfString.join("");
  return string;
}

function stringWithSpaces(string) {
  const string_array = [];
  const len = string.length;
  for (let i = 0; i < len; i++) {
    string_array.push(string);
    string = " " + string;
  }
  string = deleteFirstWord(string);
  for (let i = 0; i < len - 1; i++) {
    string = deleteFirstWord(string);
    string_array.push(string);
  }
  return string_array;
}

result = stringWithSpaces(word);
for (let i = 0; i < result.length; i++)
  console.log(result[i]);

stringWithSpaces(word);