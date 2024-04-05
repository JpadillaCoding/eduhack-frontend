import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      "Insert text on the left text box such as a speech or news article to find logical fallacies!"
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "purple",
    },
    chatButton: {
      backgroundColor: 'red'
    },
  },
};

export default config;
