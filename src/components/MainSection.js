import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/users';
import { fetchMessages } from '../redux/users/messages';
import avatar from '../user-avatar.svg';
import ChatHouse from './ChatHouse';
import Chat from './Chat';

const MainSection = ({ receiverUserId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const messages = useSelector((state) => state.messages.messages);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchUsers());
      if (user && receiverUserId) {
        await dispatch(fetchMessages(receiverUserId));
      }
    };

    fetchData();
  }, [dispatch, user, receiverUserId]);

  // Filter messages where the current user is the receiver
  const filteredMessages = messages.filter(
    (message) => message.receiver === user.user_id,
  );

  const formatTime = (timestamp) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    return new Date(timestamp).toLocaleTimeString([], options);
  };

  // Function to get sender's username
  const getSenderUsername = (senderId) => {
    const sender = users.find((u) => u.id === senderId);
    return sender ? sender.username : 'Unknown Sender';
  };

  // Local state to manage whether to display ChatHouse or Chat
  const [showChat, setShowChat] = useState(false);

  // Local state to store the senderId when a message is clicked
  const [clickedMessageSenderId, setClickedMessageSenderId] = useState(null);

  // Function to handle message click
  const handleMessageClick = (senderId) => {
    setShowChat(true);
    setClickedMessageSenderId(senderId);
  };

  // Function to get the latest message from each sender
  const getLatestMessages = () => {
    const latestMessages = [];
    const senderIds = new Set();

    // Iterate over messages in reverse order to get the latest message from each sender
    for (let i = filteredMessages.length - 1; i >= 0; i -= 1) {
      const message = filteredMessages[i];
      if (!senderIds.has(message.sender)) {
        senderIds.add(message.sender);
        latestMessages.unshift(message);
      }
    }

    return latestMessages;
  };

  const latestMessages = getLatestMessages();

  return (
    <div className="MainContainer">
      <div className="InboxSection">
        <p>
          The logged user is
          {user.user_id}
          {user.username}
          {user.name}
        </p>
        <h2>Messages</h2>
        <div>
          <p className="InboxTitle">Inbox</p>
          <input type="text" placeholder="Search for message" />
          <div>
            {latestMessages.map((message) => (
              <button
                key={message.id}
                type="button"
                className="MessageBar"
                onClick={() => handleMessageClick(message.sender)}
              >
                <img src={avatar} alt="logo" className="AvatarImg" />
                <div className="MessageMiddle">
                  <p className="MessageName">
                    {getSenderUsername(message.sender)}
                  </p>
                  <p className="MessageContent">
                    {message.content}
                  </p>
                </div>
                <div>
                  <p className="TimeStamp">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="ChatPart">
        {showChat ? (
          <Chat receiverUserId={clickedMessageSenderId} senderId={user.user_id} />
        ) : (
          <ChatHouse />
        )}
      </div>
    </div>
  );
};

MainSection.propTypes = {
  receiverUserId: PropTypes.number.isRequired,
};

export default MainSection;
