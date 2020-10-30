export const fetchCards = () => {
    return fetch('https://empress-tarot-api.herokuapp.com/cards')
    .then(res => res.json())
}