"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Comment } from "./Comment";
import { useRouter } from "next/navigation";

export const ContainerComments = ({ tabComments,idArticle }) => {
  const [isEdit,setIsEdit]=useState(false);
  const [textComment,setTextComment]=useState("");
  const router = useRouter();
  const handleSubmitComment = ()=>{

    (textComment?.length>1)&&fetch(`/api/comment/${idArticle}`,{
      method:"POST",
      body:JSON.stringify({
        content:textComment
      })
    }).then((res)=>res.json())
    .then((data)=>{setTextComment("");return router.refresh()})
    .catch((error)=>{
      console.error("Failed to submit comment", error);
    })
  }
  return (
    <div className="flex flex-col w-full">
      <Button onClick={()=>{setIsEdit(!isEdit)}}>Ecrire un commentaire</Button>
      <div className={(isEdit?" block ": " hidden ")+" container my-4 "}>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Votre message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ecrivez votre commentaire..."
          value={textComment}
          onChange={(e)=>{setTextComment(e.target.value)}}
        ></textarea>
        <Button onClick={()=>{handleSubmitComment()}} className="mt-4">Envoyer</Button>
      </div>
      <div className="w-full flex flex-col gap-2  pt-4">
        {tabComments?.map((e, index) => {
          return (
            <Comment
              key={index}
              content={e.content}
              author={"Commentaire anonymisé"}
            />
          );
        })}
      </div>
    </div>
  );
};
