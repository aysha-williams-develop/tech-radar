const objectifyValues = require('./csv-converter.js');

test('converts csv to an object', () => {
  const csv = `
    3,2,"GraphQL",true,"", false\r\n
    4,1,"Javascript",false,"www.example.com",true\r\n
  `
  const obj = [{ 
    quadrant: 3,
    ring: 2,
    label: "GraphQL",
    active: true,
    link: "",
    moved: 0
  },
  {
    quadrant: 4,
    ring: 1,
    label: "Javascript",
    active: false,
    link: "www.example.com",
    moved: 1
  }]

  expect(objectifyValues(csv).length).toEqual(2);
  expect(objectifyValues(csv)).toEqual(obj);
});