import objectifyValues from './csv-converter.js';
import readCsvFile from './csv-retriever.js';

console.log(objectifyValues(readCsvFile('./data.csv')))
console.log( 
  [
    {
          quadrant: 1,
          ring: 0,
          label: "Ruby",
          active: true,
          link: " ",
          moved: 2
    }, 
    {
          quadrant: 1,
          ring: 3,
          label: "Backbone.js",
          active: true,
          link: " ",
          moved: 0
    }, 
    {
        quadrant: 3,
        ring: 2,
        label: "GraphQL",
        active: true,
        link: " ",
        moved: 0
    },
  
  ])

radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Zalando Tech Radar — 2018.10",
  quadrants: [
    { name: "Languages" },
    { name: "Infrastructure" },
    { name: "Tools" },
    { name: "Techniques" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: objectifyValues(readCsvFile('./data.csv'))
});