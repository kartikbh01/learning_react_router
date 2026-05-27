interface Profile {
  id: string;
  name: string;
  age: number;
}

export const profiles: Profile[] = [
  {
    id: String(crypto.randomUUID()),
    name: "Kartik",
    age: 25,
  },
  {
    id: String(crypto.randomUUID()),
    name: "Kunal",
    age: 24,
  },
  {
    id: String(crypto.randomUUID()),
    name: "Karan",
    age: 23,
  },
  {
    id: String(crypto.randomUUID()),
    name: "Kabir",
    age: 26,
  },
  {
    id: String(crypto.randomUUID()),
    name: "",
    age: 21,
  },
];
