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

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = []

  for (const fish of fishCollection) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish)
    }
  }

  return holyFish
}

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldiers = []

  for (const fish of fishCollection) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
      soldiers.push(fish)
    }
  }

  return soldiers
}

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = []

  for (const fish of fishCollection) {
    if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
      regularFish.push(fish)
    }
  }

  return regularFish
}
