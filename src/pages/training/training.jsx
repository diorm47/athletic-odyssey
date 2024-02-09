import React, { useEffect } from "react";

function Training() {
  useEffect(() => {
    window.scrollTo(0, 0); // Переместить окно просмотра страницы в начало
  }, []);
  
  
  return (
    <div className="empty_page">
      <h1>Training</h1>
    </div>
  );
}

export default Training;
