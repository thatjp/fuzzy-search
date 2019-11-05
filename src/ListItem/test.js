const formatedText = (text, indicies) => {
  const highlightedInputValue = text.split('')
  highlightedInputValue.splice(indicies[0], 0, '<span className="match">', text[indicies[0]], '</span>');
  console.log(highlightedInputValue.join(''));
  }

  formatedText("things", [2,2])