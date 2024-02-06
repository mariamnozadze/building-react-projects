import React from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import ZonedOutCat from "./img/zonedoutcat.jpg";
import { useState } from "react";

function LikeMyPhoto() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1)
    } else {
      setLike(false);
      setCount(count - 1)
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like My Photo"} />
      <Title classes={"subtitle"} text={`Likes: ${count}`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: "pointer"}}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>Zoned Out</small>
        </div>
        <img
          src={ZonedOutCat}
          alt="img"
          style={{ height: "fit-content"}}
          onDoubleClick={toggleLike}
        ></img>

        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />{" "}
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikeMyPhoto;
