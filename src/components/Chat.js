import { Avatar } from "@material-ui/core";

import './../resources/styles/Chat.css'

function Chat() {
    return (
        <div className="chat">
            <Avatar />
            <div className="chat-info">
                <h2>John Doe</h2>
                <p>Unrivaled Champion</p>
            </div>
        </div>
    );
}

export default Chat;