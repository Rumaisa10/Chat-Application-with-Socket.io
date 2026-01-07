import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function ChatRoom({ username, room }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("join_room", room);
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [room]);

  const sendMessage = () => {};

  return (
    <>
      <div>
        <h1>
          Room : {room}
          {username}
        </h1>
        {messages.map((msg) => (
          <div key={msg.id}>
            <span>{msg.author}:</span> {msg.message}
            <div>{msg.time}</div>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        ></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
}

ChatRoom.PropTypes = {
  username: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
};
