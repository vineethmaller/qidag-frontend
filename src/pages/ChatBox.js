import ChatBar from '../components/ChatBar';
import MessageBox from '../components/MessageBox';

import './../resources/styles/ChatBox.css';

function ChatBox() {
  return (
    <div className="page-background">
      <div className="page-body">
        <ChatBar />
        <MessageBox />
      </div>
    </div>  
  );
}

export default ChatBox;
