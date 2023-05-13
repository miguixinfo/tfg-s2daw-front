import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }, []);

  return (
    <div>
      <p>asdadmaksdaml</p>
    </div>
  );
}

export default Users;
