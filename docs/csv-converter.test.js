// import objectifyValues from './csv-converter.js';
const objectifyValues = require('./csv-converter.js')

test('converts csv to an object', () => {
  const csv = `
    GraphQL,trial,languages & frameworks,ACTIVE,,FALSE
    Solo Programming,hold,techniques,INACTIVE,www.example.com,TRUE
    thing1,adopt,tools,INACTIVE,www.example.com,TRUE
    thing2,assess,infrastructure,ACTIVE,www.example.com,FALSE
  `
  const obj = [{ 
    quadrant: 2,
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
  },
  {
    quadrant: 0,
    ring: 0,
    label: "thing1",
    active: false,
    link: "www.example.com",
    moved: 1
  },
  {
    quadrant: 1,
    ring: 2,
    label: "thing2",
    active: true,
    link: "www.example.com",
    moved: 0
  }]

  expect(objectifyValues(csv).length).toEqual(4);
  expect(objectifyValues(csv)).toEqual(obj);
});