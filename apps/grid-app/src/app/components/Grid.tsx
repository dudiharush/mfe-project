// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useEffect, useState } from 'react';
import { useThemeContext } from 'MainApp/theme';
import { User } from '../types';
import styled from 'styled-components';

export default function Grid() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchAndSetUsers() {
      const usersInJson = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const loadedUsers = await usersInJson.json();
      setUsers(loadedUsers);
    }
    fetchAndSetUsers();
  }, []);

  const { theme } = useThemeContext();

  const StyledTable = styled.table`
    th,
    td {
      border: 1px solid black;
    }
  `;

  return (
    <div>
      {users.length === 0 ? (
        <span>Loading...</span>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
}
