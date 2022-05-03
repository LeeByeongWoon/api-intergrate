import React, { useState } from "react";
import User from "./User";
import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";

function Users() {
  const [UserId, SetUserId] = useState<number | null>(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, data: users, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러가 발생 했습니다.</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              SetUserId(user.id);
            }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {UserId && <User id={UserId} />}
    </>
  );
}

export default Users;
