import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/users';
import { fetchMessages } from '../redux/users/messages';
import avatar from '../user-avatar.svg';

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

  return (
    <div className="MainContainer">
      <div>
        <p>
          The logged user is
          {user.user_id}
          {user.username}
          {user.name}
        </p>
        <h2>Messages</h2>
        <div className="InboxSection">
          <p className="InboxTitle">Inbox</p>
          <input type="text" placeholder="Search for message" />
          <div>
            {filteredMessages.map((message) => (
              <div key={message.id} className="MessageBar">
                <img src={avatar} alt="logo" className="AvatarImg" />
                <div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

MainSection.propTypes = {
  receiverUserId: PropTypes.number.isRequired,
};

export default MainSection;
