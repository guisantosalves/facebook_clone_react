import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

import db from "./firebase";
import { collection, query, onSnapshot, orderBy} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  //it's gonna set on post with the useEffect
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

  }, []);

  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />

      {/* MessageSender */}
      <MessageSender />

      {/* Post for feed */}
      {posts.map((post)=>(
        <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
