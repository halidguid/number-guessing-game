export const generateRandomNumber = () => Math.floor(Math.random()*100) + 1;

export const getInitialState = () => ({
  actual: generateRandomNumber () ,
  guess: undefined,
  allGuesses: [],
  attempt: 10,
  feedbackMessage: 'Enter number..',
  block: false, 
  isVisible: false
});

export const getFeedback = absDiff => {
  let feedbackMessage;
  let feedbackColor;

  if (absDiff === "pogodio") {
    feedbackColor= '#000';
    feedbackMessage = 'Congratulations! You got it right!';
  } else if (absDiff === "vise") {
    feedbackColor= '#ff5722';
    feedbackMessage = 'UPS! The last guess was too high!';
  
  } else {
    feedbackColor= '#5bc0de';
    feedbackMessage = 'UPS! The last guess was too low!';
  } 

  return {
    feedbackMessage,
    feedbackColor
  };
}