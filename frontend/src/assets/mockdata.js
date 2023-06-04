export const contests = [
  {
    id: "1",
    schoolName: "INPT School",
    contestName: "Concours d'entrée Master à l'INPT",
    description: `La présélection des candidats, selon l'ordre de mérite, se base sur les critères ci-après:

    -  Obtention de Licence dans les disciplines de Mathématique et/ou Physique et/ou Informatique, après un diplôme de DEUG, DEUST, DEUP, DUT;
    -  Obtention de Cinq mentions au moins «Bien» durant les 5 premiers semestres à la date de dépôt du dossier;
    
    -  Une moyenne supérieure ou égale à 14/20 (Quatorze/vingt) est considérée comme une mention «Bien»;
    
    -  Être né(e) après le 15 septembre 1999.`,
    deadline: "2023-06-30",
    startingTime: "2023-06-04T22:39:31.000Z",
    duration: 1000 * 60 * 60 * 2,
    type: "MASTER",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Logo_inpt.PNG",
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
        firstName: "Hassan",
        secondName: "Al Meftah",
        firstBacGrade: 15.63,
        secondBacGrade: 16.25,
        person: {
          name: "Hassan Al Meftah",
          age: 21,
          email: "hassan.almeftah@gmail.com",
        },
        documents: [
          {
            docLink: "https://example.com/BAC",
            type: {
              name: "BAC",
            },
          },
          {
            docLink: "https://example.com/RN",
            type: {
              name: "Relevé de notes",
            },
          },
        ],
      },
      {
        firstName: "Youssef",
        secondName: "Zahi",
        firstBacGrade: 16.32,
        secondBacGrade: 15.32,
        person: {
          name: "Youssef Zahi",
          age: 21,
          email: "youssef.zahi@gmail.com",
        },
        documents: [
          {
            docLink: "https://example.com/BAC",
            type: {
              name: "BAC",
            },
          },
          {
            docLink: "https://example.com/RN",
            type: {
              name: "Relevé de notes",
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
        name: "BAC",
      },
      {
        name: "Relevé de notes",
      },
    ],
  },
  // Exam 2
  {
    id: "2",
    schoolName: "ENSIAS",
    contestName: "Concours d'entrée à l'ENSIAS",
    description:
      "L'examen d'entrée à l'ENSIAS est un test de compétences en mathématiques, physique et informatique. Il évalue les connaissances et les aptitudes des candidats dans ces domaines.",
    deadline: "2023-07-15",
    startingTime: "2023-07-01T09:00:00.000Z",
    duration: 1000 * 60 * 60 * 3,
    type: "BACHELOR",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Ensias2.jpg",
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
        firstName: "Karim",
        secondName: "Bensalah",
        firstBacGrade: 17.52,
        secondBacGrade: 15.87,
        person: {
          name: "Karim Bensalah",
          age: 19,
          email: "karim.bensalah@gmail.com",
        },
        documents: [
          {
            docLink: "https://example.com/BAC",
            type: {
              name: "BAC",
            },
          },
          {
            docLink: "https://example.com/RN",
            type: {
              name: "Relevé de notes",
            },
          },
        ],
      },
      {
        firstName: "Sara",
        secondName: "Ahmed",
        firstBacGrade: 18.75,
        secondBacGrade: 17.92,
        person: {
          name: "Sara Ahmed",
          age: 18,
          email: "sara.ahmed@gmail.com",
        },
        documents: [
          {
            docLink: "https://example.com/BAC",
            type: {
              name: "BAC",
            },
          },
          {
            docLink: "https://example.com/RN",
            type: {
              name: "Relevé de notes",
            },
          },
        ],
      },
    ],
    questions: [
      {
        question: "What is the capital of Morocco?",
        options: [
          {
            optionText: "Rabat",
            isCorrect: true,
          },
          {
            optionText: "Casablanca",
            isCorrect: false,
          },
          {
            optionText: "Marrakech",
            isCorrect: false,
          },
          {
            optionText: "Fez",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Who is the founder of Apple Inc.?",
        options: [
          {
            optionText: "Steve Jobs",
            isCorrect: true,
          },
          {
            optionText: "Bill Gates",
            isCorrect: false,
          },
          {
            optionText: "Mark Zuckerberg",
            isCorrect: false,
          },
          {
            optionText: "Larry Page",
            isCorrect: false,
          },
        ],
      },
    ],
    requiredDocs: [
      {
        name: "BAC",
      },
      {
        name: "Relevé de notes",
      },
    ],
  },
  // Exam 3
  {
    id: "3",
    schoolName: "EMI School",
    contestName: "Concours d'entrée à l'EMI",
    description:
      "L'examen d'entrée à l'EMI est un test qui évalue les connaissances et les compétences des candidats en mathématiques, physique et informatique.",
    deadline: "2023-07-10",
    startingTime: "2023-07-03T14:00:00.000Z",
    duration: 1000 * 60 * 60 * 2.5,
    type: "BACHELOR",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/EMI_logo.svg/1200px-EMI_logo.svg.png",
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
        firstName: "Ahmed",
        secondName: "Khalid",
        firstBacGrade: 16.88,
        secondBacGrade: 17.42,
        person: {
          name: "Ahmed Khalid",
          age: 20,
          email: "ahmed.khalid@gmail.com",
        },
        documents: [
          {
            docLink: "https://example.com/BAC",
            type: {
              name: "BAC",
            },
          },
          {
            docLink: "https://example.com/RN",
            type: {
              name: "Relevé de notes",
            },
          },
        ],
      },
      {
        firstName: "Fatima",
        secondName: "Ait Amrane",
        firstBacGrade: 17.92,
        secondBacGrade: 18.45,
        person: {
          name: "Fatima Ait Amrane",
          age: 19,
          email: "fatima.amrane@gmail.com",
        },
        documents: [
          {
            docLink: "https://example.com/BAC",
            type: {
              name: "BAC",
            },
          },
          {
            docLink: "https://example.com/RN",
            type: {
              name: "Relevé de notes",
            },
          },
        ],
      },
    ],
    questions: [
      {
        question: "What is the square root of 81?",
        options: [
          {
            optionText: "9",
            isCorrect: true,
          },
          {
            optionText: "6",
            isCorrect: false,
          },
          {
            optionText: "7",
            isCorrect: false,
          },
          {
            optionText: "8",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Who wrote the play Romeo and Juliet?",
        options: [
          {
            optionText: "William Shakespeare",
            isCorrect: true,
          },
          {
            optionText: "Charles Dickens",
            isCorrect: false,
          },
          {
            optionText: "Jane Austen",
            isCorrect: false,
          },
          {
            optionText: "George Orwell",
            isCorrect: false,
          },
        ],
      },
    ],
    requiredDocs: [
      {
        name: "BAC",
      },
      {
        name: "Relevé de notes",
      },
    ],
  },
  // Exam 4
  {
    id: "4",
    schoolName: "INSEA School",
    contestName: "Concours d'entrée Doctorat à l'INSEA",
    description:
      "L'examen d'entrée à l'INSEA est un test qui évalue les connaissances et les compétences des candidats en mathématiques, statistiques, informatique et économie.",
    deadline: "2023-07-20",
    startingTime: "2023-07-05T13:30:00.000Z",
    duration: 1000 * 60 * 60 * 2.5,
    type: "BACHELOR",
    image: "https://insea.ac.ma/images/Doctorat_2022_2023.PNG",
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
        firstName: "Mohammed",
        secondName: "Ali",
        firstBacGrade: 17.28,
        secondBacGrade: 16.75,
        person: {
          name: "Mohammed Ali",
          age: 19,
          email: "mohammed.ali@gmail.com",
        },
        documents: [
          {
            docLink: "https://example.com/BAC",
            type: {
              name: "BAC",
            },
          },
          {
            docLink: "https://example.com/RN",
            type: {
              name: "Relevé de notes",
            },
          },
        ],
      },
      {
        firstName: "Amina",
        secondName: "Ouahbi",
        firstBacGrade: 18.42,
        secondBacGrade: 17.92,
        person: {
          name: "Amina Ouahbi",
          age: 20,
          email: "amina.ouahbi@gmail.com",
        },
        documents: [
          {
            docLink: "https://example.com/BAC",
            type: {
              name: "BAC",
            },
          },
          {
            docLink: "https://example.com/RN",
            type: {
              name: "Relevé de notes",
            },
          },
        ],
      },
    ],
    questions: [
      {
        question: "What is the value of π (pi)?",
        options: [
          {
            optionText: "3.14159",
            isCorrect: true,
          },
          {
            optionText: "2.71828",
            isCorrect: false,
          },
          {
            optionText: "1.61803",
            isCorrect: false,
          },
          {
            optionText: "4.66920",
            isCorrect: false,
          },
        ],
      },
      {
        question: "Who is the author of the novel '1984'?",
        options: [
          {
            optionText: "George Orwell",
            isCorrect: true,
          },
          {
            optionText: "J.R.R. Tolkien",
            isCorrect: false,
          },
          {
            optionText: "Ernest Hemingway",
            isCorrect: false,
          },
          {
            optionText: "Jane Austen",
            isCorrect: false,
          },
        ],
      },
    ],
    requiredDocs: [
      {
        name: "BAC",
      },
      {
        name: "Relevé de notes",
      },
    ],
  },
];
