import { Button } from "./button";
import { CardBlog } from "../mine/CardBlog";
import Image from "next/image";

export const ContainerAllBlogCard = async ({blogData,children}) => {

  return (
    <diV className="container gap-4 flex flex-col pt-4 ">
{children}
      <div className="flex flex-wrap justify-center gap-0.5">
       {blogData?.map((e,index)=>{
        return <CardBlog 
        key={index}
        id={e.id} 
        title={e.title}
        description={e.description}
        nbrOfLike={e.nbrOfLike} 
        isMale={e.isMale} 
        isFemale={e.isFemale} 
        keywords={e.keywords} />
       })}
      </div>
    </diV>
  );
};
