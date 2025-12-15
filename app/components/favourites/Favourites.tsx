"use client";


export default function Favourites({
    favourites,
    removeFavourite,
    onSearch,
}: {
    favourites: string[];
    removeFavourite: (name: string) => void;
    onSearch: (name: string) => void;
}) {
    return (
        <div className="mt-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold text-black mb-2">Your favourites</h2>
            {favourites.length === 0 ? (
                <p className="text-black">No favourites yet.</p>
            ) : (
                <ul className="list-disc pl-6 text-black">
                    {favourites.map((name) => (
                        <li key={name} className="flex justify-between items-center">
                            <span>{name}</span>
                            <div className="flex gap-2 ml-4">
                                <button
                                    className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-800"
                                    onClick={() => onSearch(name)}
                                    title="Search this Pokémon"
                                >
                                    🔍
                                </button>

                                <button
                                    className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-800 font-bold"
                                    onClick={() => removeFavourite(name)}
                                    title="Remove from favourites"
                                >
                                    ✕
                                </button>

                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
