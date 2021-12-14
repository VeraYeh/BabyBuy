import React from 'react';

// temp homepage//
function HomeHeader(props) {
  return (
    <div>
      <div>
        <h3><i className="fas fa-baby-carriage"></i>{props.icon}</h3>
        <h1>Noah&#39;s shopping list</h1>
        <h3>Counting down! 123 days left to get ready for Noah&#39;s arrival!</h3>
      </div>
      <a href='#login'>return to login</a>
    </div>
  );
}

export default HomeHeader;
