import { deleteTodo, getTodos, updateTodo } from "@/actions";
import { TodosTable } from "@/components";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { FaPlus as Plus } from "react-icons/fa";

async function handleDeleteTodo(id: string) {
    "use server";

    await deleteTodo(id);

    revalidatePath("/");
}

async function handleToggleTodo(id: string, complete: boolean) {
    "use server";

    await updateTodo(id, { complete });

    revalidatePath("/");
}

export default async function Page() {
    const todos = await getTodos();

    return (
        <>
            <div className="flex mb-3">
                <Link className="btn-success" href="/new">
                    <Plus />
                </Link>
            </div>

            {todos.length === 0 ? (
                <span className="italic text-gray-300">No todos available</span>
            ) : (
                <TodosTable
                    todos={todos}
                    deleteTodo={handleDeleteTodo}
                    toggleTodo={handleToggleTodo}
                />
            )}
        </>
    );
}
