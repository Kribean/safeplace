import { CardBlog } from "../mine/CardBlog";
import { v4 as uuidv4 } from 'uuid';
export const ContainerAllBlogCard = async ({blogData,children}) => {

  return (
    <div className="container gap-4 flex flex-col pt-4 ">
{children}
      <div className="flex flex-wrap justify-center gap-0.5">
       {blogData?.map((e,index)=>{
        return <CardBlog 
        key={uuidv4()}
        id={e.id} 
        title={e.title}
        description={e.description}
        nbrOfLike={e.nbrOfLike} 
        isMale={e.isMale} 
        isFemale={e.isFemale} 
        keywords={e.keywords} />
       })}
      </div>
    </div>
  );
};
