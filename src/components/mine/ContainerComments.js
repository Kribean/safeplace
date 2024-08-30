import { Button } from "../ui/button";
import { Comment } from "./Comment";

export const ContainerComments = ({ tabComments }) => {


  return (
    <div className="flex flex-col w-full">
      <Button>Ecrire un commentaire</Button>
      <div className="w-full flex flex-col gap-2  pt-4">
        {tabComments?.map((e, index) => {
         return <Comment key={index} content={e.content} author={e.author} />;
        })}
      </div>
    </div>
  );
};
