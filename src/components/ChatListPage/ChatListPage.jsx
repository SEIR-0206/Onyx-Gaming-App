import React, { useState, useEffect, useRef } from "react";


function ChatListPage({ chats, user, handleChat}) {
  return (
    <div className="user-chat">
        {chats && console.log(chats[1].users)}
        {chats &&
            chats.map((chat) => {
                return (
                    <div className="individual-chat">
                        <div className="chat-users">
                            {chat.users.map((user) => {
                                return (
                                    <h1>{user.name}</h1>
                                )
                            })
                            }
                        </div>
                        <form onSubmit={handleChat} value={chat._id}>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                )
            })
        }
    </div>
  );
}

export default ChatListPage;