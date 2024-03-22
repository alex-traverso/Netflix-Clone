import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const getData = async (userId) => {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          id: true,
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });

  return data;
};

export default async function Watchlist() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email);
  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your watchlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
        {data.map((movie) => (
          <div key={movie.Movie?.id} className="relative h-60">
            <Image
              src={movie.Movie?.imageString}
              alt="Movie"
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
            />
            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                <Image
                  src={movie.Movie?.imageString}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />

                <MovieCard
                  key={movie.Movie?.id}
                  movieId={movie.Movie?.id}
                  age={movie.Movie?.age}
                  overview={movie.Movie?.overview}
                  time={movie.Movie?.duration}
                  title={movie.Movie?.title}
                  watchListId={movie.Movie?.WatchLists[0]?.id}
                  watchList={movie.Movie?.WatchLists.length > 0 ? true : false}
                  year={movie.Movie?.release}
                  youtubeUrl={movie.Movie?.youtubeString}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
