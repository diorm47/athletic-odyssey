import React, { useEffect } from "react";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0); // Переместить окно просмотра страницы в начало
  }, []);

  return (
    <div className="empty_page">
      <h1>Blog</h1>
    </div>
  );
}

export default Blog;
