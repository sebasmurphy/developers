import React from "react";

export let images = [];
const imgNumArray = [
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
  "14",
  "15"
];

imgNumArray.forEach(num => {
  images = [...images, require(`./assets/img/ballmer/png/ballmer-${num}.png`)];
});

export const Ballmer = ({ image, imgStyle }) => {
  return <img style={imgStyle} src={image} alt="" />;
};

export const Developers = ({ ballmers }) => {
  return <div>{ballmers}</div>;
};
