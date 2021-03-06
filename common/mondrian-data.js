export const pieces = [
  {
    name: "cube1",
    color: 0x0384fc,
    dimension: { w: 1, h: 2 },
    position: { x: 0, y: 0 },
  },
  {
    name: "cube2",
    color: 0xffffff,
    dimension: { w: 2, h: 2 },
    position: { x: "cube1", y: 0 },
  },
  {
    name: "cube3",
    color: 0xeefe00,
    dimension: { w: 2, h: 1 },
    position: { x: "cube2", y: 0 },
  },
  {
    name: "cube4",
    color: 0xffffff,
    dimension: { w: 2, h: 4 },
    position: { x: "cube3", y: 0 },
  },
  {
    name: "cube5",
    color: 0xffffff,
    dimension: { w: 2, h: 1 },
    position: { x: "cube2", y: "cube3" },
  },
  {
    name: "cube6",
    color: 0xffffff,
    dimension: { w: 1, h: 2 },
    position: { x: 0, y: "cube1" },
  },
  {
    name: "cube7",
    color: 0xff0303,
    dimension: { w: 4, h: 2 },
    position: { x: "cube6", y: "cube1" },
  },
  {
    name: "cube8",
    color: 0xffffff,
    dimension: { w: 1, h: 4 },
    position: { x: 0, y: "cube6" },
  },
  {
    name: "huge-white",
    color: 0xffffff,
    dimension: { w: 4, h: 4 },
    position: { x: "cube8", y: "cube6" },
  },
  {
    name: "cube10",
    color: 0x0384fc,
    dimension: { w: 2, h: 2 },
    position: { x: "huge-white", y: "cube6" },
  },
  {
    name: "cube11",
    color: 0xffffff,
    dimension: { w: 2, h: 2 },
    position: { x: "huge-white", y: "cube10" },
  },
  {
    name: "small-blue",
    color: 0x0384fc,
    dimension: { w: 1, h: 1 },
    position: { x: 0, y: "cube11" },
  },
  {
    name: "small-white",
    color: 0xffffff,
    dimension: { w: 2, h: 1 },
    position: { x: "small-blue", y: "cube11" },
  },
  {
    name: "big-yellow",
    color: 0xeefe00,
    dimension: { w: 4, h: 2 },
    position: { x: "small-white", y: "cube11" },
  },
  {
    name: "medium-white",
    color: 0xffffff,
    dimension: { w: 3, h: 1 },
    position: { x: 0, y: "small-blue" },
  },
];
