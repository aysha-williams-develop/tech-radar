function readCsvFile(filename) {
  let file = new XMLHttpRequest();
  let text = ""
  file.open("GET", `/${filename}`, false)
  file.onreadystatechange = function() {
    if (file.readyState === 4) {
      text = file.responseText
    }
  }
  file.send()
  return text
}

export default readCsvFile;
// module.exports = readCsvFile;