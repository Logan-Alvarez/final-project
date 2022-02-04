import axios from 'axios';
import Trivia from '../models/Trivia';

export function fetchTrivia(): Promise<Trivia[]>{
    const apiKey = process.env.TRIVIA_API_KEY;
    return axios.get('https://api.api-ninjas.com/v1/trivia?category=', {
        headers: {
            'X-Api-Key': 'k0oavaV3QHHSU6dHS42jPw==brteR2986ZEA5ZGN'
        }
    })
    .then((res) => res.data[0])
    
}