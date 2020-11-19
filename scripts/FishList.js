import { mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

// List the fish by those types
// 1) Holy Fish
// 2) soldiers
// 3) unworthy

export const FishList = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishList")

  const holyFish = mostHolyFish()
  const soldiers = soldierFish()
  const losers = nonHolyFish()

  // Ugh, this works but is not DRY. How could we reduce the repetition here?
  for (const fishObject of holyFish) {
    // console.log("one fish!", fishObject)
    const fishHTML = Fish(fishObject)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML
  }
  for (const fishObject of soldiers) {
    // console.log("one fish!", fishObject)
    const fishHTML = Fish(fishObject)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML
  }
  for (const fishObject of losers) {
    // console.log("one fish!", fishObject)
    const fishHTML = Fish(fishObject)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML
  }
}
