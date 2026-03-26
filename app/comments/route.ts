import { headers } from "next/headers";
import { commments } from "./data";
export async function GET() {
    return Response.json(commments);
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

