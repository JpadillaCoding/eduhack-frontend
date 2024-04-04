import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./chatbox/config";
import MessageParser from "./chatbox/MessageParser";
import ActionProvider from "./chatbox/ActionProvidere";

function App() {
  return (
    <div className="main">
      <header className="main-header"></header>
      <main className="main-body">
        <div class="p-5">
          <div class="row">
            <div class="form-outline, col-lg">
              <textarea class="form-control" rows="30"></textarea>
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
