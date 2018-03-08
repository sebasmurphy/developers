let sounds = [];
const audioNumArray = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14"
];

audioNumArray.forEach(num => {
  const sound = require(`./assets/mp3/developers-${num}.mp3`);
  sounds = [...sounds, new Audio(sound)];
});

export default sounds;
