import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMessage, fetchMessages } from '../redux/users/messages';

const Chat = ({ receiverUserId, senderId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const messages = useSelector((state) => state.messages.messages);

  const [messageContent, setMessageContent] = useState('');

  useEffect(() => {
    if (user && receiverUserId) {
      dispatch(fetchMessages(receiverUserId));
    }
  }, [dispatch, user, receiverUserId]);

  const filteredMessages = messages.filter(
    (message) => (message.sender === user.user_id && message.receiver === receiverUserId)
      || (message.sender === receiverUserId && message.receiver === user.user_id),
  );

  const formatTime = (timestamp) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    return new Date(timestamp).toLocaleTimeString([], options);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!messageContent.trim()) {
      return;
    }

    const messageData = {
      sender: senderId,
      receiver: receiverUserId,
      content: messageContent,
    };

    dispatch(sendMessage(messageData));
    setMessageContent('');
  };

  return (
    <div className="ChatSection">
      <div className="ChatBox">
        {filteredMessages.map((message) => (
          <div key={message.id}>
            <p>{message.content}</p>
            <p>{formatTime(message.timestamp)}</p>
          </div>
        ))}
      </div>
      <div className="SenderChatBox">
        {/* Display the messages sent by the current user */}
      </div>
      <div>
        <form onSubmit={handleSendMessage}>
          {/* Hidden input field for senderId */}
          <input type="hidden" name="senderId" value={senderId} />

          {/* Visible text area for message */}
          <textarea
            id="messageContent"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

Chat.propTypes = {
  receiverUserId: PropTypes.number.isRequired,
  senderId: PropTypes.number.isRequired,
};

export default Chat;
