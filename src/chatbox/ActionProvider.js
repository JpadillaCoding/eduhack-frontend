import React, { useContext } from "react";
import { MyContext } from "./MyContext";

export const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  const { aiResponse } = useContext(MyContext);

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
          actions: { handleHello },
        });
      })}
    </div>
  );
};
