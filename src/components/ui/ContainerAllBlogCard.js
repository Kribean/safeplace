
"use client"
import { CardBlog } from "../mine/CardBlog";
import { v4 as uuidv4 } from 'uuid';
import { SearchBar } from "../mine/SearchBar";
import { useState } from "react";
export const ContainerAllBlogCard = async ({blogData,children}) => {
const [blogDataDisplay,setBlogDataDisplay]=useState(blogData)
  return (
    <div className="flex gap-4 flex flex-col pt-4 px-4 ">
      <SearchBar/>
{children}
      <div className="flex flex-wrap w-full justify-start gap-0.5 lg:gap-4">
       {blogDataDisplay?.map((e,index)=>{
        return <CardBlog 
        key={uuidv4()}
        id={e.id} 
        title={e.title}
        description={e.summary}
        nbrOfLike={e.likes} 
        isMale={e.isForMale} 
        isFemale={e.isForFemale} 
        keywords={e.keywords} 
        numberOfComments={e.numberOfComments}
        thematic={e.thematic}/>
       })}
      </div>
    </div>
  );
};
