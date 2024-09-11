import { Button } from "./button";
import { CardBlog } from "../mine/CardBlog";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

export const ContainerBlogAccueil = async ({blogData}) => {

  return (
    <div className="container gap-4 flex flex-col items-center pt-4  ">
      <h2 className="text-2xl">Nos articles les plus récents</h2>
      <div className="flex flex-wrap lg:flex-row justify-center gap-4">
        <Button><Image alt="symbole femme" src={"/images/female.svg"} width={16} height={16} className="lg:h-8 lg:w-8" />
        <p className="hidden lg:block">Dédiés aux femmes</p>
        </Button>
        <Button><Image alt="symbole femme" src={"/images/female.svg"} width={16} height={16} className="lg:h-8 lg:w-8" />
        <p className="hidden lg:block">Tous les articles
          </p><Image src={"/images/male.svg"} width={16} height={16} className="lg:h-8 lg:w-8" alt="symbole homme" /></Button>
        <Button>
        <p className="hidden lg:block">
          Dédiés aux hommes
          </p>
          <Image src={"/images/male.svg"} width={16} height={16} className="lg:h-8 lg:w-8" alt="symbole homme"/></Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
       {blogData?.map((e)=>{
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
