export const fetchCards = () => {
    return fetch('https://empress-tarot-api.herokuapp.com/cards')
    .then(res => res.json())
}

export const fetchCard = (id) => {
    return fetch(`https://empress-tarot-api.herokuapp.com/cards/${id}`)
    .then(res => res.json())
}