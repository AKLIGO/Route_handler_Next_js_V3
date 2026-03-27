import { headers } from "next/headers";
import { commments } from "./data";
import { NextRequest } from "next/server";


// export async function GET() {
//     return Response.json(commments);
// }

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query= searchParams.get("query");
    const filteredComments = query 
                 ? commments.filter(comment => comment.text.toLowerCase().includes(query.toLowerCase()))
                 : commments;
    return Response.json(filteredComments);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment ={
        id: commments.length + 1,
        text: comment.text,
    }
    commments.push(newComment);
    return new Response(JSON.stringify(newComment), 
    
{headers: {
    "Content-Type": "application/json", },status: 201});
}

