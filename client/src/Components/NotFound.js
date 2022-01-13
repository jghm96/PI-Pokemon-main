import React from "react";
import notFound from "../images/notFound.png"
import styleNotFound from "../Styles/NotFound.module.css"

export default function NotFound(){
  return (
    <div className={styleNotFound.container}>
      <img alt = "notFound" src = {notFound} />
      <h1>Not Found</h1>
    </div>
  )
}