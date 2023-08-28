"use server";

import { prisma } from "@/db";

export async function getTodos() {
    return await prisma.todo.findMany();
}
