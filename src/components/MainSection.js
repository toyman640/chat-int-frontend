import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/users';
import Chat from './Chat';

const MainSection = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="MainContainer">
      <div>
        <p>
          The logged user is
          {user.user_id}
          {user.username}
          {user.name}
        </p>
        <h2>Users</h2>
        {users.map((currentUser) => (
          <div key={currentUser.id}>
            <div>
              <p>
                {currentUser.username}
                {currentUser.username}
                {currentUser.email}
              </p>

            </div>
            <div>
              {currentUser.id !== user.user_id ? (
                <Chat key={currentUser.id} receiverUserId={currentUser.id} />
              ) : (
                <div>No chat</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
