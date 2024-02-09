import React, { useEffect } from "react";

function Recipes() {
  useEffect(() => {
    window.scrollTo(0, 0); // Переместить окно просмотра страницы в начало
  }, []);
  
  return (
    <div className="empty_page">
      <h1>Recipes</h1>
    </div>
  );
}

export default Recipes;
