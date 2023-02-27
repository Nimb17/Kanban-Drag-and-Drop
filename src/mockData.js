import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "🌕 Por hacer",
    task: [
      {
        id: uuidv4(),
        description:"Product",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing, elit nam cursus nullam etiam",
      },

      {
        id: uuidv4(),
        description:"UI Design",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing, elit nam cursus nullam etiam tincidunt aliquet, mattis nisi primis mauris tortor.",
      },

      {
        id: uuidv4(),
        description:"Product",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing, elit nam.",
      },
    ],
  },

  {
    id: uuidv4(),
    title: "🌓 En Progreso",
    task: [
      {
        id: uuidv4(),
        description:"UI Design",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing, elit nam cursus nullam.",
      },

      {
        id: uuidv4(),
        description:"MockUp",
        title: "Lorem ipsum dolor sit.",
      },
    ],
  },

  {
    id: uuidv4(),
    title: "🌚 Completados",
    task: [
      {
        id: uuidv4(),
        description:"UI Design",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing, elit nam cursus nullam etiam tincidunt aliquet.",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "📑 Revisar",
    task: [
      {
        id: uuidv4(),
        description:"MockUp",
        title: "Lorem ipsum dolor sit amet consectetur adipiscing, elit nam cursus nullam etiam tincidunt.",
      },
    ],
  }
];

export default mockData