"use server";

import { prisma } from "@/db";

export async function createTodo(title: string, description: string) {
    await prisma.todo.create({
        data: {
            title,
            description,
            complete: false,
        },
    });
}
