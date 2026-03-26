import { commments } from "../data";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment = commments.find((c) => c.id === parseInt(id));

    if (!comment) {
        return new Response("Comment not found", { status: 404 });
    }
    return new Response(JSON.stringify(comment), {
        headers: {
            "Content-Type": "application/json",
        },
    });

}
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;
    const index= commments.findIndex((c) => c.id === parseInt(id));
    commments[index].text = text;
    return new Response(JSON.stringify(commments[index]), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const index= commments.findIndex((c) => c.id === parseInt(id));
    const deleteComment = commments.splice(index, 1);
    return new Response(JSON.stringify(deleteComment[0]), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}