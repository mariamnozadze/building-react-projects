import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa"
import {BiCommentDetail} from "react-icons/bi"
 
const Testimonials = () => {
    const handleClick = () => {

    }
  return (
    <div className="container m-auto">
      <Title text={"Testimonials"} />
      <Button
        text={"Posts"}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill className="mr-1"/>} onClick={handleClick}
      />
      <Button
        text={"Users"}
        btnClass="btn-info"
        icon={<FaUserAlt className="mr-1"/>}  onClick={handleClick}
      />
      <Button
        text={"Comments"}
        btnClass="btn-info"
        icon={<BiCommentDetail className="mr-1"/>}  onClick={handleClick}
      />
    </div>
  );
};

export default Testimonials;
