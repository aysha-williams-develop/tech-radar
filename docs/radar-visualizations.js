import objectifyValues from './csv-converter.js';
import readCsvFile from './csv-retriever.js';

radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Mavenlink Tech Radar - 2019",
  quadrants: [
    { name: "Tools" },
    { name: "Infrastructure" },
    { name: "Languages & Frameworks" },
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
  entries: objectifyValues(readCsvFile('./data.csv'))
});