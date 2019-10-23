
// PARKS
const buildParksHtml = parksDisplay => `
<article>
  <h4>${parksDisplay.title}</h4>
  <p>
      <a href="${parksDisplay.source_url}">Click here to see the park</a>
  </p>
</article>
`


const displayParksHTML = allParksDisplay => {
  let parksResultsHtml = ""
  allParksDisplay.forEach(parksDisplay => {
    let parksHtml = buildParksHtml(parksDisplay)
    parksResultsHtml += parksHtml
  });

  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = parksResultsHtml
}

// RESTAURANTS
const buildRestHtml = (restaurant, number) =>{ 
  console.log(restaurant.restaurant.name)
  return `
<article>
  <h4>${restaurant.restaurant.name}</h4>
  <p>
      <a href="${restaurant.restaurant.url}">Click here to see the restaurant</a>

  </p>
  <button class="save--${number}">save</button>
</article>
`
}
const displayRestHTML = restaurantArray=> {
  //i did this console log to make sure the information was making it to this point
  console.log(restaurantArray)
  let restResultsHtml = ""
  let num = 1
  restaurantArray.forEach(restaurant => {
    let restaurantHtml = buildRestHtml(restaurant, num)
    restResultsHtml += restaurantHtml
    num += 1
  });

  const searchResultsSection = document.querySelector("#resultsForm")
  searchResultsSection.innerHTML = restResultsHtml
}

// CONCERTS
const buildConcertsHtml = concertsDisplay => `
<article>
  <h4>${concertsDisplay.title}</h4>
  <p>
      <a href="${concertsDisplay.source_url}">Click here to see the park</a>
  </p>
</article>
`


const displayConcertsHTML = allCocnertsDisplay => {
  let concertsResultsHtml = ""
  allConcertsDisplay.forEach(concertsDisplay => {
    let concertsHtml = buildConcertsHtml(concertsDisplay)
    concertsResultsHtml += concertsHtml
})
    const searchResultsSection = document.querySelector(".search-results")
    searchResultsSection.innerHTML = concertsResultsHtml
}



  // MEETUP
// create an function that builds the HTML string for each meetup.
const buildMeetupHtml = (meetup, number) => {
    return `
<article>
  <h4>${meetup.name.text}</h4>
  <p>
      <a href="${meetup.url}" target="_blank">${meetup.url}</a>
  </p>
  <button class="save--${number}" >Save</button>
</article>
`
}

// create a function to display meetups to the DOM
const displayMeetupHtml = meetupArray => {
    let num = 1
    let meetupResultHtml = ""
    meetupArray.forEach(meetup => {
        const meetupHtml = buildMeetupHtml(meetup, num)
        meetupResultHtml += meetupHtml
        num += 1 
    })
    // then, display this to the DOM
    const searchResultsSection = document.querySelector("#resultsForm")
    searchResultsSection.innerHTML = meetupResultHtml
}



