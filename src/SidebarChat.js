import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";
import "./SidebarChat.css";
import { useStateValue } from "./StateProvider";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function SidebarChat({ id, name, addNewChat,userId }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [setUser] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      // db
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };



  // console.log("User is---->>>>",user.email);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
        <PersonAddIcon className='add_icon' />
        <div className='add_text'>
          <h2>Add Chat Room</h2>
        </div>
    </div>
  );
}

export default SidebarChat;
