function objectifyValues (csv) {
  return csv.split(/\r\n/)
    .filter((row) => row.trim().length > 0)
    .map((row) => {
      const column = row.split(",").map( (value) => { return removeDoubleQuotes(value).trim() })

      return {
        quadrant: parseInt(column[0]),
        ring: parseInt(column[1]),
        label: column[2],
        active: convertToBoolean(column[3]),
        link: column[4],
        moved: convertBooleanToInt(column[5]),
      }
    })
}

function removeDoubleQuotes(str) {
 return str.replace(/"/g, "")
}

function convertToBoolean(str) {
  return str === "true"
}

function convertBooleanToInt(str) {
  return !convertToBoolean(str) ? 0 : 1 
}

module.exports = objectifyValues;