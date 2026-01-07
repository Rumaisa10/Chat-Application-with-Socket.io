import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);

  const joinRoom = () => {
    if (username && room) {
      setJoined(true);
    }
  };
  return (
    <div>
      {!joined ? (
        <div>
          <h1>Join Chat Room</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          ></input>
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <ChatRoom username={username} room={room}></ChatRoom>
      )}
    </div>
  );
}
