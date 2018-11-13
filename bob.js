export const hey = (message) => {
  let answers = ["Whatever.", "Whoa, chill out!", "Sure.", "Calm down, I know what I'm doing!", "Fine. Be that way!"];

  let newMessage = message.replace(/\s+$/, '');

  switch(sayingResult(newMessage)) {
    case 0:
      return answers[0];
    case 1:
      return answers[1];
    case 2:
      return answers[2];
    case 3:
      return answers[3];
    case 4:
      return answers[4];
  }
};

let sayingResult = (message) => {
  if(checkForInsolence(message)) {
    return 3;
  } else if(checkForDefensiveness(message)) {
    return 1;
  } else if (checkForAgreement(message)) {
    return 2;
  } else if (checkForAnger(message)) {
    return 4;
  } else {
    return 0;
  }
};

let checkForInsolence = (message) => {
  return message == message.toUpperCase() && message.includes("?") && /[a-zA-Z]/.test(message);
};

let checkForDefensiveness = (message) => {
  return message == message.toUpperCase() && /[a-zA-Z]/.test(message);
};

let checkForAgreement = (message) => {
  return message.includes("?") && message[message.length -1] == "?";
};

let checkForAnger = (message) => {
  return message == "" || (message.includes("  ") && !/[\S]+/.test(message)) || message.includes("\t");
};
