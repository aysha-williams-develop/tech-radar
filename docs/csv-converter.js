function objectifyValues (csv) {
  let newline = /[\r\n]/
  return csv.split(newline)
    .filter((row) => row.trim().length > 0)
    .map((row) => {
      const column = row.split(",").map((value) => { return removeDoubleQuotes(value).trim() })

      return {
        quadrant: parseInt(getQuadrant(column[2])),
        ring: getRing(column[1]),
        label: column[0],
        active: isActive(column[3]),
        link: column[4].trim(),
        moved: convertBooleanToInt(column[5]),
      }
    })
}

function removeDoubleQuotes(str) {
 return str.replace(/"/g, "")
}

function convertToBoolean(str) {
  return str.toLowerCase().trim() === "true"
}

function isActive(str) {
  return str.toLowerCase().trim() === "active"
}

function convertBooleanToInt(str) {
  return !convertToBoolean(str) ? 0 : 1 
}

function getQuadrant(str) {
  return {
    "languages & frameworks": 2,
    "tools": 0,
    "techniques": 3,
    "infrastructure": 1
  }[str.toLowerCase().trim()]
}

function getRing(str) {
  return {
    "adopt": 0,
    "trial": 1,
    "assess": 2,
    "hold": 3
  }[str.toLowerCase().trim()]
}

export default objectifyValues;
// module.exports = objectifyValues;