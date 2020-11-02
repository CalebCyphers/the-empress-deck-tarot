export const fetchCards = () => {
    console.log('fetchCard IS RUNNING');
    return fetch('https://empress-tarot-api.herokuapp.com/cards')
    .then(res => res.json());
    
}