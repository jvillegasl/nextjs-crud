import { createTodo } from "@/actions";
import { redirect } from "next/navigation";
import Link from "next/link";

async function handleForm(data: FormData) {
    "use server";

    const title = data.get("title")?.valueOf();
    const description = data.get("description")?.valueOf();

    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title");
    }

    if (typeof description !== "string" || description.length === 0) {
        throw new Error("Invalid Description");
    }

    await createTodo(title, description);

    redirect("/");
}

export default function Page() {
    return (
        <>
            <form action={handleForm} className="grid gap-4">
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            className="rounded text-black p-2"
                        />
                    </div>

                    <div className="grid gap-1">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows={5}
                            className="resize-none rounded text-black p-2"
                        />
                    </div>
                </div>

                <div className="flex gap-2 justify-end">
                    <Link className="btn-secondary" href="..">
                        Cancel
                    </Link>

                    <button className="btn-primary" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </>
    );
}
