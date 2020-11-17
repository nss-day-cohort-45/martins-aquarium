const fishCollection = [
  {
    name: "Farley",
    species: "Goldfish",
    food: "flakes",
    location: "neighbor's pond",
    length: 7,
    image: "goldfish.jpg"
  },
  {
    name: "Mona",
    species: "Black Molly",
    food: "floaty bits",
    location: "Maui",
    length: 3,
    image: "molly.jpg"
  },
  {
    name: "Bubba",
    species: "Grass Carp",
    food: "all the things",
    location: "Harpeth River",
    length: 24,
    image: "carp.jpg"
  },
  {
    name: "Felicia",
    species: "Angel Fish",
    food: "angel hair pasta",
    location: "Amazon River",
    length: 4,
    image: "angel.jpg"
  }
]

export const useFish = () => {
  return fishCollection.slice()
}
