import React, { useState } from "react";
import FileBase from "react-file-base64";
import "./style.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/post/postSlice";

const Forms = () => {
  const dispatch = useDispatch();
  const [posts, setPost] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(posts));
    setPost({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  const clear = () => {
    setPost({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <div className="form">
      <h2 className="title">Create a memory</h2>
      <form className="forms">
        <input
          type="text"
          name="creator"
          placeholder="your name...."
          onChange={(e) => {
            setPost({ ...posts, creator: e.target.value });
          }}
        />
        <input
          type="text"
          name="title"
          placeholder="title ...."
          onChange={(e) => {
            setPost({ ...posts, title: e.target.value });
          }}
        />
        <textarea
          type="text"
          name="message"
          placeholder="write your message here"
          onChange={(e) => {
            setPost({ ...posts, message: e.target.value });
          }}
        />
        <input
          type="text"
          name="tags"
          placeholder="tags ..."
          onChange={(e) => {
            setPost({ ...posts, tags: e.target.value });
          }}
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPost({ ...posts, selectedFile: base64 });
            }}
          />
        </div>
        <button onClick={onSubmit} className="btn-create">
          create a memory
        </button>
        <button className="btn-clear" onClick={clear}>
          clear
        </button>
      </form>
    </div>
  );
};

export default Forms;
