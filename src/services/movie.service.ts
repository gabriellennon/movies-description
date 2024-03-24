import { api } from "./api";

const apiKey = import.meta.env.VITE_API_KEY;

export function getMovieDetails(searchQuery: string){
    return api.get(`/?t=${searchQuery}&apikey=${apiKey}`);
}