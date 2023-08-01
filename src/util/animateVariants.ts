const variant = {
  initialState: {
    y: 10,
    opacity: 0,
  },
  animateState: {
    y: 0,
    opacity: 1,
  },
  existState: {
    y: 10,
    opacity: 0,
  },
};

const rightslide = {
  initialState: {
    x: 100,
    opacity: 0,
  },
  animateState: {
    x: 0,
    opacity: 1,
  },
  existState: {
    x: 100,
    opacity: 0,
  },
};

const leftslide = {
  initialState: {
    x: -100,
    opacity: 0,
  },
  animateState: {
    x: 0,
    opacity: 1,
  },
  existState: {
    x: -100,
    opacity: 0,
  },
};

export { variant, rightslide, leftslide };
