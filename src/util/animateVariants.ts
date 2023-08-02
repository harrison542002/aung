const variant = {
  initialState: {
    y: 10,
    opacity: 0,
  },
  animateState: {
    y: 0,
    opacity: 1,
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
};

export { variant, rightslide, leftslide };
