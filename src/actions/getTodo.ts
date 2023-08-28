"use server";

import { prisma } from "@/db";

export async function getTodo(id: string) {
    return await prisma.todo.findUnique({
        where: { id },
    });
}
