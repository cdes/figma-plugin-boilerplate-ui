export const until = conditionFunction => {
  const poll = resolve => {
    if (conditionFunction()) resolve();
    else setTimeout(() => poll(resolve), 10);
  };

  return new Promise(poll);
};

export const getDomNode = selector => {
  return document.querySelector(selector);
};