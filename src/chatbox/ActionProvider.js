import React from "react";

export const HandleAiResponse = (userInput) => {
  console.log("i am in in user input" + userInput);
  // handle when a openAI message is recieved
};
export const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello, HandleAiResponse },
        });
      })}
    </div>
  );
};
