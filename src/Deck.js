class Deck {
  constructor() {
    this.cards = [
      {
        id: 0,
        reversed: false,
        numeral: 'O',
        title: 'The Bard',
        image: 'https://i.imgur.com/QBKZRaT.jpg',
        Theme: 'New Experiences',
        Description: 'The carefree Bard symbolizes the beginning of a new adventure. Perhaps you are learning something new, meeting new people, or looking at a challenge with a newfound perspective.',
      },
      {
        id: 1,
        reversed: true,
        numeral: 'O',
        title: 'The Bard',
        image: 'https://i.imgur.com/QBKZRaT.jpg',
        Theme: 'Recklessness',
        Description: 'Now is the time to start something new, even if you are unsure of the outcome. Trust in your performance, but also take time to make sure that you are well prepared.'
      },
      {
        id: 2,
        reversed: false,
        numeral: 'I',
        title: 'The Ranger',
        image: 'https://i.imgur.com/Oapu2gB.jpg',
        Theme: 'Self-Reliance',
        Description: 'The independent Ranger shines a light into the darkness. Although you walk alone, you are not afraid. You have a trusted companion who supports you on your journey, whether you know it or not.',
      },
      {
        id: 3,
        reversed: true,
        numeral: 'I',
        title: 'The Ranger',
        image: 'https://i.imgur.com/Oapu2gB.jpg',
        Theme: 'Isolation',
        Description: 'Solitude has become desolation. Take the time and effort to reconnect with someone who has been a positive part of your journey.'
      },
      {
        id: 4,
        reversed: false,
        numeral: 'II',
        title: 'The Monk',
        image: 'https://i.imgur.com/T08I2Dp.jpg',
        Theme: 'Balance',
        Description: 'The duality of the Monk brings forces into balance. If you meditate on the inner truth, you can bring your mind and body into focus. Whatever challenge you face is intuitively achievable.',
        reversedTheme: 'Withdrawl',
      },
      {
        id: 5,
        reversed: true,
        numeral: 'II',
        title: 'The Monk',
        image: 'https://i.imgur.com/T08I2Dp.jpg',
        Theme: 'Withdrawl',
        Description: 'When your world is out of balance, withdraw into your inner sanctum in order to clear your mind and quiet the storm. You will be ready to face the tempest with renewed calm energy.'
      },
      {
        id: 6,
        reversed: false,
        numeral: 'III',
        title: 'The Fighter',
        image: 'https://i.imgur.com/hXdVi8B.jpg',
        Theme: 'Commander',
        Description: 'The Fighter is a natural leader and protector. You are unafraid of conflict, and your life experience grows because of it. You seek fairness and peace, although there is often turmoil in your path.',
      },
      {
        id: 7,
        reversed: true,
        numeral: 'III',
        title: 'The Fighter',
        image: 'https://i.imgur.com/hXdVi8B.jpg',
        reversedTheme: 'Warmaker',
        reversedDescription: 'Beware an ascent into tyranny. Are you restricting the freedoms of another for your own benefit? Or perhaps there is a different figure of authority in your life that you must fight to dethrone.'
      },
    ];
  }

  getRandomCard() {
    let randomindex = Math.floor((Math.random() * this.cards.length));
    return this.cards[randomindex]
  }
}

export default Deck;
