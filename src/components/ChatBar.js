import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

import Chat from './Chat';

import './../resources/styles/ChatBar.css'

function ChatBar() {
    return (
      <div className="chatbar">
        <div className="header">
          <div className="header-left">
            <IconButton>
              <Avatar src="https://avatars2.githubusercontent.com/u/37846597?s=60&v=4" /> 
            </IconButton>
          </div>
          <div className="header-right">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
        </div>
        <div className="search">
          <div className="search-body">
            <SearchOutlined />
            <input placeholder="Search or start a new chat" type="text"/>
          </div>
        </div>
        <div className="chatlist">
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </div>
      </div>
  );
}

export default ChatBar;
