import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbox/config";
import MessageParser from "./chatbox/MessageParser";
import { ActionProvider, HandleAiResponse } from "./chatbox/ActionProvider";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleInputSubmit = () => {
    console.log(userInput);
    HandleAiResponse(userInput);
    // Send to openAI
  };
  return (
    <div className="main">
      <header className="main-header"></header>
      <main className="main-body">
        <div class="p-5">
          <div class="row">
            <div class="form-outline, col-lg">
              <textarea
                class="form-control"
                rows="30"
                value={userInput}
                onChange={handleInputChange}
              ></textarea>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleInputSubmit}
              >
                Submit to AI
              </button>
            </div>
            <div class="col-lg">
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
