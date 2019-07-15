// import objectifyValues from './csv-converter.js';
const objectifyValues = require('./csv-converter.js')

test('converts csv to an object', () => {
  const csv = `
    GraphQL,trial,languages & frameworks,ACTIVE,,FALSE
    Solo Programming,hold,techniques,INACTIVE,www.example.com,TRUE
  `
  const obj = [{ 
    quadrant: 0,
    ring: 1,
    label: "GraphQL",
    active: true,
    link: "",
    moved: 0
  },
  {
    quadrant: 3,
    ring: 3,
    label: "Solo Programming",
    active: false,
    link: "www.example.com",
    moved: 1
  }]

  expect(objectifyValues(csv).length).toEqual(2);
  expect(objectifyValues(csv)).toEqual(obj);
});