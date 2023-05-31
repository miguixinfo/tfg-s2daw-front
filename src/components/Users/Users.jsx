/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  function deleteUser(id) {
    axios.delete(`http://localhost:8080/api/users/${id}`);
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center my-3">Gestión de usuarios</h1>
      <table className="table table-primary table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">NOMBRE</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ACCIONES</th>
          </tr>
        </thead>
        {users?.map((item) => (
          <tbody>
            <tr>
              <td key={item.name} className="px-2">{item.name}</td>
              <td key={item.email} className="px-2">{item.email}</td>
              <td key={item.id} className="px-2">
                <a href="/users" onClick={() => deleteUser(item.id)}><i className="fa-solid fa-trash" /></a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Users;
