"use client";

import { Todo } from "@prisma/client";
import Link from "next/link";
import { FaTrashAlt as Delete, FaEdit as Edit } from "react-icons/fa";

type TodosTableProps = {
    todos: Todo[];
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string, complete: boolean) => void;
};

export function TodosTable({ todos, deleteTodo, toggleTodo }: TodosTableProps) {
    return (
        <table className="w-full table-auto border-separate border-spacing-2">
            <thead className="text-left">
                <tr>
                    <th>Status</th>
                    <th>Title</th>
                    <th className="w-full">Description</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {todos.map((todo) => {
                    return (
                        <tr key={todo.id}>
                            <td className="text-center">
                                <input
                                    className="cursor-pointer"
                                    type="checkbox"
                                    defaultChecked={todo.complete}
                                    title={
                                        todo.complete ? "Completed" : "Pending"
                                    }
                                    onChange={(e) =>
                                        toggleTodo(todo.id, e.target.checked)
                                    }
                                />
                            </td>
                            <td className={todo.complete ? "opacity-50" : ""}>
                                {todo.title}
                            </td>
                            <td className={todo.complete ? "opacity-50" : ""}>
                                {todo.description}
                            </td>
                            <td>
                                <div className="flex gap-1">
                                    <button
                                        className="btn-danger p-2"
                                        title="Delete"
                                        onClick={() => deleteTodo(todo.id)}
                                    >
                                        <Delete />
                                    </button>

                                    <Link
                                        className="btn-primary p-2"
                                        title="Edit"
                                        href={`/edit/${todo.id}`}
                                    >
                                        <Edit />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
