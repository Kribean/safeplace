import { Card, CardContent, CardTitle } from "../ui/card"

export const Comment=({content,author})=>{

    return(
        <Card className={"p-4"}>
            <CardTitle className="text-md">{author}</CardTitle>
            <CardContent className="text-md">{content}</CardContent>
        </Card>
    )
}