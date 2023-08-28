import { getTodo, updateTodo } from "@/actions";
import { redirect } from "next/navigation";
import Link from "next/link";

type PageProps = {
    params: {
        id: string;
    };
};

async function handleForm(data: FormData) {
    "use server";

    const id = data.get("id")?.valueOf();
    const title = data.get("title")?.valueOf();
    const description = data.get("description")?.valueOf();

    if (typeof id !== "string" || id.length === 0) {
        throw new Error("Invalid ID");
    }

    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title");
    }

    if (typeof description !== "string" || description.length === 0) {
        throw new Error("Invalid Description");
    }

    await updateTodo(id, { title, description });

    redirect("/");
}

export default async function Page({ params: { id } }: PageProps) {
    const todo = await getTodo(id);

    if (!todo) throw Error("Todo not found");

    return (
        <form action={handleForm} className="grid gap-4">
            <div className="grid gap-2">
                <div className="grid gap-1">
                    <label htmlFor="id">ID:</label>
                    <input
                        id="id"
                        type="text"
                        name="id"
                        className="rounded text-black bg-gray-500 p-2"
                        value={todo.id}
                        readOnly
                    />
                </div>
                <div className="grid gap-1">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        className="rounded text-black p-2"
                        defaultValue={todo.title}
                    />
                </div>
                <div className="grid gap-1">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        className="resize-none rounded text-black p-2"
                        defaultValue={todo.description}
                    />
                </div>
            </div>

            <div className="flex gap-2 justify-end">
                <Link className="btn-secondary" href="..">
                    Cancel
                </Link>

                <button className="btn-primary" type="submit">
                    Edit
                </button>
            </div>
        </form>
    );
}
