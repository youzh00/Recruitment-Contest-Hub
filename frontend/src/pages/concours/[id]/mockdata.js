export const contest = {
  id: "hjdsjnfkdsiu3238owej0",
  schoolName: "Sample School",
  contestName: "Sample Contest",
  description: "This is a sample contest",
  deadline: "2023-06-30",
  startingTime: "2023-06-04T22:39:31.000Z",
  duration: 1000 * 60 * 60 * 2,
  type: "MASTER",
  docTypes: [
    {
      name: "Document Type 1",
    },
    {
      name: "Document Type 2",
    },
  ],
  registrations: [
    {
      firstName: "John",
      secondName: "Doe",
      firstBacGrade: 90.5,
      secondBacGrade: 85.0,
      person: {
        name: "John Smith",
        age: 25,
        email: "johnsmith@example.com",
      },
      documents: [
        {
          docLink: "https://example.com/document",
          type: {
            name: "Document Type 1",
          },
        },
      ],
    },
    {
      firstName: "Jane",
      secondName: "Smith",
      firstBacGrade: 88.0,
      secondBacGrade: 92.5,
      person: {
        name: "John Smith",
        age: 25,
        email: "johnsmith@example.com",
      },
      documents: [
        {
          docLink: "https://example.com/document",
          type: {
            name: "Document Type 2",
          },
        },
      ],
    },
  ],
  questions: [
    {
      question: "What is the capital of France?",
      options: [
        {
          optionText: "Paris",
          isCorrect: true,
        },
        {
          optionText: "London",
          isCorrect: false,
        },
        {
          optionText: "Berlin",
          isCorrect: false,
        },
        {
          optionText: "Rome",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        {
          optionText: "Leonardo da Vinci",
          isCorrect: true,
        },
        {
          optionText: "Vincent van Gogh",
          isCorrect: false,
        },
        {
          optionText: "Pablo Picasso",
          isCorrect: false,
        },
        {
          optionText: "Michelangelo",
          isCorrect: false,
        },
      ],
    },
  ],
  requiredDocs: [
    {
      name: "Required Document 1",
    },
    {
      name: "Required Document 2",
    },
  ],
  results: [
    {
      person: {
        name: "John Smith",
        age: 25,
        email: "johnsmith@example.com",
      },
      score: 85,
    },
    {
      person: {
        name: "John Smith",
        age: 25,
        email: "johnsmith@example.com",
      },
      score: 92,
    },
  ],
};
