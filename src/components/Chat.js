import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { sendMessage, fetchMessages } from '../redux/users/messages';

const Chat = ({ receiverUserId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.users.users);
  const messages = useSelector((state) => state.messages.messages);

  const [messageContent, setMessageContent] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');

  useEffect(() => {
    if (user && receiverUserId) {
      dispatch(fetchMessages(receiverUserId));
    }
  }, [dispatch, user, receiverUserId]);

  const filteredMessages = messages.filter(
    (message) => (message.sender === user.user_id && message.receiver === receiverUserId)
      || (message.sender === receiverUserId && message.receiver === user.user_id),
  );

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!selectedRecipient || !messageContent.trim()) {
      return;
    }

    const messageData = {
      sender: user.user_id,
      receiver: selectedRecipient,
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
            <p>{message.timestamp}</p>
          </div>
        ))}
      </div>
      <div className="SenderChatBox">
        {/* Display the messages sent by the current user */}
      </div>
      <div>
        <form onSubmit={handleSendMessage}>
          <select
            id="recipient"
            value={selectedRecipient}
            onChange={(e) => setSelectedRecipient(e.target.value)}
          >
            <option value="" disabled>Select a recipient</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.username}</option>
            ))}
          </select>

          <input
            type="text"
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
};

export default Chat;
