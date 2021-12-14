import React from 'react';

function LoginHeader(props) {
  return (
    <div>
      <h3><i className="fas fa-baby-carriage"></i>{props.icon}</h3>
      <h1>{props.appName}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}

export default LoginHeader;
