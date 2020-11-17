import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

export const FishList = () => {
  debugger;

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishList")
  const allTheFish = useFish()

  for (const fishObject of allTheFish) {
    // console.log("one fish!", fishObject)
    const fishHTML = Fish(fishObject)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTML
  }
}
