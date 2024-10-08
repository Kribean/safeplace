import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { v4 as uuidv4 } from "uuid";
import { Badge } from "../ui/badge";
import { Heart, MessageSquareMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const CardBlog = ({
  id,
  title,
  description,
  nbrOfLike,
  isMale,
  isFemale,
  keywords,
  numberOfComments,
  thematic,
}) => {
  return (
    <Card className="w-full lg:w-[350px] bg-white shadow-md transition-all ease-in-out duration-300 hover:shadow-xl">
      <Link href={"/blog/" + id}>
        <CardHeader>
          <CardTitle className={"text-sm lg:text-xl break-all"}>
            {title}
          </CardTitle>
          <div className="flex flex-row justify-end w-full">
            <Badge variant="outline">{thematic}</Badge>
          </div>
          <CardDescription
            className={"text-xs lg:text-md line-clamp-3 lg:line-clamp-5"}
          >
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-0.5 lg:gap-2">
            {isMale && (
              <Badge variant="outline">
                <Image
                  src={"/images/male.svg"}
                  width={16}
                  height={16}
                  className="lg:h-8 lg:w-8"
                  alt="symbole homme"
                />
              </Badge>
            )}
            {isFemale && (
              <Badge variant="outline">
                <Image
                  src={"/images/female.svg"}
                  width={16}
                  height={16}
                  className="lg:h-8 lg:w-8"
                  alt="symbole femme"
                />
              </Badge>
            )}
            {keywords.map((e) => {
              return (
                <Badge
                  key={uuidv4()}
                  variant="outline"
                  className={"break-all text-xs"}
                >
                  {e}
                </Badge>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/** à mettre lorsqu il y aura la fonctionnalité like <Badge variant="outline">
            <Heart />
            {nbrOfLike}
          </Badge>*/}
          <Badge variant="outline">
            <MessageSquareMore />
            {numberOfComments}
          </Badge>
        </CardFooter>
      </Link>
    </Card>
  );
};
