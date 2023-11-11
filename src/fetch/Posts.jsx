import { useState } from "react";
import "./Posts.css";
export const Posts = () => {
  const [postData, setPostData] = useState(null);

  const getFetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPostData(data);
  };
  const clean = () => {
    setPostData(null);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <button onClick={getFetch}>
          <span>Get data</span>
        </button>
        {postData && (
          <button onClick={clean}>
            <span>Clean</span>
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {postData &&
          postData.map((post) => {
            return (
              <div
                class="card"
                key={post.id}
                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <p class="card-title">{post.title}</p>
                <p class="small-desc">{post.body}</p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
