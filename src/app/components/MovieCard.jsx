"use client";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import PlayVideoModel from "./PlayVideoModal";

const MovieCard = ({
  title,
  overview,
  movieId,
  watchList,
  watchListId,
  youtubeUrl,
  year,
  age,
  time,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>
      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form action="">
            <Button variant="ghost" size="icon">
              <Heart className="w-4 h-4 text-red-50" />
            </Button>
          </form>
        ) : (
          <Button variant="ghost" size="icon">
            <Heart className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-400 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>
      <PlayVideoModel
        youtubeUrl={youtubeUrl}
        key={movieId}
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        age={age}
        duration={time}
        release={year}
      />
    </>
  );
};

export default MovieCard;
