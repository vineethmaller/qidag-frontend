import { Avatar, IconButton } from '@material-ui/core'
import { AttachFileOutlined, EmojiEmotions, MoreVertOutlined, SearchOutlined, Send } from '@material-ui/icons';

import './../resources/styles/MessageBox.css';

function MessageBox() {
    return (
    <div className="messagebox">
        <div className="header">
          <div className="header-left">
            <Avatar />
            <div className="message-info">
              <h2>Hi This works</h2>
              <p>Last seen Today, 10:00 am</p>
            </div>
          </div>  
          <div className="header-right">
            <IconButton>
              <SearchOutlined/>
            </IconButton>
            <IconButton>
              <AttachFileOutlined/>
            </IconButton>
            <IconButton>
              <MoreVertOutlined/>
            </IconButton>
          </div>
        </div>
        <div className="message-body">
          
        </div>
        <div className="message-fieldbar">
          <IconButton>
            <EmojiEmotions className="emoji" />
          </IconButton>  
          <div className="message-field">
            <input placeholder="Enter a message" type="text" />
          </div>
          <IconButton>
            <Send className="send-button" />
          </IconButton>
        </div>
    </div>
  );
}

export default MessageBox;
