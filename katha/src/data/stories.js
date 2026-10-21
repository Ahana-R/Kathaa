export const epics = [
  { id: 'ramayana', name: 'Ramayana', blurb: 'Rama, Sita, and the war against Ravana' },
  { id: 'mahabharata', name: 'Mahabharata', blurb: 'The Pandavas, the Kauravas, and Krishna' },
]

// To add a story, add an object here. `text` is an array of paragraphs.
export const stories = [
  {
    id: 'rama-exile',
    epic: 'ramayana',
    title: "Rama's exile",
    summary: 'Kaikeyi asks Dasharatha to honour two old promises, and Rama leaves for the forest for fourteen years.',
    text: [
      'On the eve of his crowning, Queen Kaikeyi asks King Dasharatha to honour two old promises: crown her son Bharata, and send Rama to the forest for fourteen years.',
      'Rama accepts calmly, and Sita and Lakshmana go with him.',
    ],
  },
  {
    id: 'hanuman-ocean',
    epic: 'ramayana',
    title: 'Hanuman crosses the ocean',
    summary: 'Hanuman leaps to Lanka to find Sita and sets the city ablaze.',
    text: [
      'To find the kidnapped Sita, Hanuman leaps across the sea to Lanka.',
      'He finds her in a garden, then sets the city ablaze with his burning tail before returning to Rama.',
    ],
  },
  {
    id: 'ekalavya',
    epic: 'mahabharata',
    title: "Ekalavya's thumb",
    summary: 'A self-taught archer gives Drona his right thumb as a fee.',
    text: [
      'Ekalavya teaches himself archery before a clay image of the teacher Drona.',
      'When Drona asks for his right thumb as a fee, Ekalavya gives it, a moment people still argue about.',
    ],
  },
  {
    id: 'gita',
    epic: 'mahabharata',
    title: 'Krishna and Arjuna on the battlefield',
    summary: 'Before the war, Krishna speaks to Arjuna about duty and action.',
    text: [
      'Before the war at Kurukshetra, Arjuna hesitates to fight his own family.',
      'Krishna, serving as his charioteer, speaks to him about duty and action. This talk is the Bhagavad Gita.',
    ],
  },
]