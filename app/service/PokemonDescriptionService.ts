import { API } from "../api/api";

export type PokemonEntry = {
    name: string;
    description: string;
    isFavourite: boolean;
};

export async function fetchDescription(
    pokemon: string,
    entries: PokemonEntry[]
): Promise<string> {
    const cached = entries.find(
        (e) => e.name.toLowerCase() === pokemon.toLowerCase()
    );
    if (cached && cached.description) return cached.description;

    const species = await API.pokemon.getSpecies(pokemon);
    const englishEntry = species.flavor_text_entries.find(
        (e: any) => e.language.name === "en"
    );
    const flavorText = englishEntry?.flavor_text?.replace(/\s+/g, " ").trim();
    if (!flavorText) throw new Error("No English flavor text found.");

    const result = await API.translate.asShakespeare(flavorText);
    if (result.error) throw new Error(result.error.message);

    const translated = result?.contents?.translated;
    if (!translated) throw new Error("Translation not available");

    return translated;
}
