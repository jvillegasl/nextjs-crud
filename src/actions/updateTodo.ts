import { prisma } from "@/db";
import { Todo } from "@prisma/client";

type UpdatedTodo = Partial<Omit<Todo, "id" | "createdAt" | "updatedAt">>;

export async function updateTodo(id: string, data: UpdatedTodo) {
    await prisma.todo.update({ where: { id }, data });
}
