import { createServerFn } from "@tanstack/react-start";
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon'


export const getPokemonFn = createServerFn({ method: 'GET'}).handler(async () => {
    console.log('Executing a secure database/API call on the server...')
    
    const response = await fetch(POKE_API_URL);
    const data = await response.json();
    
    console.log('Data succesfully fetched from the Server!', data)

    return data;
})