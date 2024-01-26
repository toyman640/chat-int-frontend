import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/users';

const MainSection = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="MainContainer">
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>
          {user.username}
            {user.username}
            {user.email}
          </p>

        </div>
      ))}
    </div>
  );
};

export default MainSection;
