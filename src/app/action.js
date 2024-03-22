"use server";

import { revalidatePath } from "next/cache";
import prisma from "./utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

export async function addToWatchList(formData) {
  "use server";

  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname");
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email,
      movieId: Number(movieId),
      /* Si pongo un numero ya existente toma ese nro como id, por default toma el 0 por eso siempre pone la pelicula de gran turismo */
    },
  });

  revalidatePath(pathname);
  console.log(data);
}

export async function deleteFromWatchList(formData) {
  "use server";

  const watchListId = formData.get("watchListId");
  const pathname = formData.get("pathname");

  const data = await prisma.watchList.delete({
    where: {
      id: watchListId,
    },
  });

  revalidatePath(pathname);
}
