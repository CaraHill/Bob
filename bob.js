export const hey = (message) => {
  if(message.includes(".")) {
    return "Whatever.";
  }

  if(message == message.toUpperCase()) {
    return "Whoa, chill out!";
  }

  if(message.includes("?")) {
    return "Sure.";
  }
};
