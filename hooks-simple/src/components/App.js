import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList"


const App = () => {
  // array destructuring
  // const colors = ["red", "green"]
  // const [mycolor1, mycolor2] = colors;
  const [resource, setResource] = useState('posts');
  return (
      <div>
        <div>
          <UserList/>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={() => setResource('todos')}>Todos</button>
        </div>
        <ResourceList resource={resource}/>
      </div>
  );
};

export default App;
