"use client";

export default function PokemonDescription({
    description,
    loading,
    error,
}: {
    description: string;
    loading: boolean;
    error: string;
}) {
    if (loading) {
        return (
            <div className="mt-3 flex justify-center">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <p className="mt-3 text-red-700 font-semibold">{error}</p>;
    }

    if (!description) return null;

    return (
        <div className="mt-6 w-full max-w-2xl bg-gray-100 border-2 border-black rounded-lg p-4">
            <h2 className="text-xl font-bold text-black mb-2">Shakespearean description</h2>
            <p className="text-black">{description}</p>
        </div>
    );
}
