import { API } from "../api/api";

export type PokemonEntry = {
    name: string;
    description: string;
    isFavourite: boolean;
};

/**
 * Fetches a Shakespearean description for a given Pokémon.
 * @param pokemon - The name of the Pokémon.
 * @param entries - The current list of Pokémon entries for caching.
 * @returns The Shakespearean description.
 * @throws Error if fetching or translation fails.
 */
export async function fetchDescription(
    pokemon: string,
    entries: PokemonEntry[]
): Promise<string> {

    // Checks the cache first before making API calls.
    const cached = entries.find(
        (e) => e.name.toLowerCase() === pokemon.toLowerCase()
    );
    if (cached && cached.description) return cached.description;

    const species = await API.pokemon.getSpecies(pokemon);

    // Extract English flavor text
    const englishEntry = species.flavor_text_entries.find(
        (e: any) => e.language.name === "en"
    );
    const flavorText = englishEntry?.flavor_text?.replace(/\s+/g, " ").trim();
    if (!flavorText) throw new Error("No English flavor text found.");

    // Translate text into Shakespearean style
    const result = await API.translate.asShakespeare(flavorText);
    if (result.error) throw new Error(result.error.message);

    const translated = result?.contents?.translated;
    if (!translated) throw new Error("Translation not available");

    return translated;
}
