import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../@types/pokemon";
import { API } from "../configs/api";

async function getPokemon(name: string)  {
    const { data } = await API.get(`/pokemon/${name}`);
    return data as Pokemon;
}

export function useQueryPokemonDetails(name: string) {
    const query = useQuery({
        queryKey: [`getPokemon${name}`],
        queryFn: () => getPokemon(name),
    });

    return query; 
}
