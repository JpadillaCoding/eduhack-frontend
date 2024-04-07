import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbox/config";
import MessageParser from "./chatbox/MessageParser";
import { ActionProvider } from "./chatbox/ActionProvider";
import { useState } from "react";
import { MyContext } from "./chatbox/MyContext";

function App() {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleInputSubmit = () => {
    // get request to ai backend, send response to ActionProvider file to respond to user
    setAiResponse("ayoooo ai responsible");
  };

  return (
    <div className="main">
      <header className="main-header"></header>
      <main className="main-body">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </main>
    </div>
  );
}

export default App;
