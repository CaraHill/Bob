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
  if(message == message.toUpperCase() && message.includes("?") && /[a-zA-Z]/.test(message)) {
    return 3;
  } else if(message == message.toUpperCase() && /[a-zA-Z]/.test(message)) {
    return 1;
  } else if (message.includes("?") && message[message.length -1] == "?") {
    return 2;
  } else if (message == "" || (message.includes("  ") && !/[\S]+/.test(message)) || message.includes("\t")) {
    return 4;
  } else {
    return 0;
  }
};
