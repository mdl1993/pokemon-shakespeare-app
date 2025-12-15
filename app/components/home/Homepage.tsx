"use client";
import { fetchDescription, PokemonEntry } from "@/app/service/PokemonDescriptionService";
import { useEffect, useState } from "react";
import Favourites from "../favourites/Favourites";
import PokemonDescription from "../pokemonDescription/PokemonDescription";
import PokemonInput from "../pokemonInput/PokemonInput";

export default function Homepage() {
    const [entries, setEntries] = useState<PokemonEntry[]>([]);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("entries");
        if (saved) setEntries(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries));
    }, [entries]);

    const handleSearch = async (pokemon: string) => {
        setLoading(true);
        setError("");
        setDescription("");

        try {
            const translated = await fetchDescription(pokemon, entries);
            setDescription(translated);

            setEntries((prev) => {
                const existing = prev.find(
                    (e) => e.name.toLowerCase() === pokemon.toLowerCase()
                );
                if (existing) {
                    return prev.map((e) =>
                        e.name.toLowerCase() === pokemon.toLowerCase()
                            ? { ...e, description: translated }
                            : e
                    );
                }
                return [...prev, { name: pokemon, description: translated, isFavourite: false }];
            });
        } catch (err: any) {
            setError(err.message || "Translation failed.");
        } finally {
            setLoading(false);
        }
    };

    const addFavourite = (name: string) => {
        setEntries((prev) => {
            const existing = prev.find(
                (e) => e.name.toLowerCase() === name.toLowerCase()
            );
            if (existing) {
                return prev.map((e) =>
                    e.name.toLowerCase() === name.toLowerCase()
                        ? { ...e, isFavourite: true }
                        : e
                );
            }
            return [...prev, { name, description: "", isFavourite: true }];
        });
    };

    const removeFavourite = (name: string) => {
        setEntries((prev) =>
            prev.map((e) =>
                e.name.toLowerCase() === name.toLowerCase()
                    ? { ...e, isFavourite: false }
                    : e
            )
        );
    };

    return (
        <div className="w-full">
            <h1 className="text-4xl font-extrabold text-black text-center mb-3">
                Pokémon Shakespearean description
            </h1>
            <PokemonInput onSearch={handleSearch} onAddFavourite={addFavourite} />
            <PokemonDescription description={description} loading={loading} error={error} />
            <Favourites
                favourites={entries.filter((e) => e.isFavourite).map((e) => e.name)}
                removeFavourite={removeFavourite}
                onSearch={handleSearch}
            />
        </div>
    );


}
