import axios from 'axios';
import Trivia from '../models/Trivia';

export function fetchTrivia(): Promise<Trivia[]>{
    const apiKey = process.env.TRIVIA_API_KEY as string;
    return axios.get('https://api.api-ninjas.com/v1/trivia?category=', {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then((res) => res.data[0])
    
}