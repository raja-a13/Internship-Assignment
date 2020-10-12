import React, { useState,useContext ,useStyles} from "react";

import LessonsContextApi from "./LessonsContextApi"
import "./LoadFromJSON.css"
function Upload() {
  const {items,upateItems} = useContext(LessonsContextApi)

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
    //   console.log("e.target.result", e.target.result);
      upateItems(JSON.parse(e.target.result));
    };
  };
  return (
    <>
    <label for="file-upload" class="custom-file-upload">
    Load JSON
    </label>
      <input type="file" onChange={handleChange} id="file-upload"/>
    </>
  );
}

export default Upload;