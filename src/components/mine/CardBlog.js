import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { v4 as uuidv4 } from 'uuid';
import { Badge } from "../ui/badge"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export const CardBlog = ({id,title,description,nbrOfLike,isMale,isFemale,keywords})=>{

    return(
        <Card className="w-[150px] lg:w-[350px] bg-white shadow-md transition-all ease-in-out duration-300 hover:shadow-xl">
<Link href={"/blog/"+id}>
<CardHeader>
          <CardTitle className={"text-sm lg:text-xl break-all"}>{title}</CardTitle>
          <CardDescription className={"text-xs lg:text-lg line-clamp-3 lg:line-clamp-5"}>{description}</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="flex flex-wrap gap-0.5 lg:gap-2">
        {isMale&&  <Badge variant="outline"><Image src={"/images/male.svg"} width={16} height={16} className="lg:h-8 lg:w-8" /></Badge>}
         {isFemale&& <Badge variant="outline"><Image src={"/images/female.svg"} width={16} height={16} className="lg:h-8 lg:w-8" /></Badge>}
         {keywords.map((e)=>{
           return <Badge key={uuidv4()} variant="outline" className={"break-all text-xs"}>{e}</Badge>
         }) }
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
        <Badge variant="outline"><Heart/>{nbrOfLike}</Badge>
        </CardFooter>
</Link>
      </Card>
    )
}