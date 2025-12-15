"use client";
import { useState } from "react";

export default function PokemonInput({
    onSearch,
    onAddFavourite,
}: {
    onSearch: (name: string) => void;
    onAddFavourite: (name: string) => void;
}) {
    const [pokemon, setPokemon] = useState("");

    const handleSubmit = () => {
        if (pokemon) onSearch(pokemon);
    };

    const handleAddFavourite = () => {
        if (pokemon) onAddFavourite(pokemon);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex items-center w-full max-w-md border-2 border-black rounded-md bg-yellow-50">
                <input
                    type="text"
                    value={pokemon}
                    onChange={(e) => setPokemon(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="e.g. Pikachu"
                    className="flex-1 px-4 py-2 bg-yellow-50 text-black focus:outline-none"
                />
                <button
                    onClick={handleAddFavourite}
                    className="px-3 text-2xl text-gray-500 hover:text-yellow-500 transition"
                    title="Add to favourites"
                >
                    ⭐
                </button>
            </div>

            <button
                className="mt-4 px-6 py-2 bg-black text-yellow-300 font-bold rounded-md 
                   hover:bg-yellow-400 hover:text-black transition"
                onClick={handleSubmit}
            >
                Search
            </button>
        </div>
    );
}
