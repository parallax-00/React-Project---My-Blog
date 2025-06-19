import React, { useState, useEffect, use } from "react";
import dbServices from "../appwrite/dbServices/dbServices";
import { PostCard, Container } from "../components/index.js";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dbServices.getPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      {" "}
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
