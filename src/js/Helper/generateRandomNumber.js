const generateRandomNumber = (min = 1, max) => {
  return Math.floor(Math.random() * max + 1);
};

export default generateRandomNumber;
