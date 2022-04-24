//Get a dog photo from the dog.ceo api and place the photo in the DOM
const dogUrl = "https://dog.ceo/api/breeds/list/all"
const select = document.querySelector('.breeds')
const arr = []
fetch(dogUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.message)
        const breedArray = Object.keys(data.message)// turn objects into an array
        console.log(breedArray)
        for (let i = 0; i < breedArray.length;i++){
          const option = document.createElement('option')// <option></option>
          option.value = breedArray[i] //<option value="breed">
          option.innerText = breedArray[i]// include text
          select.appendChild(option)// append <select> with new option array
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
select.addEventListener('change', event => {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
  getDoggoImg(url)
})

const img = document.querySelector('.dog-img')

const getDoggoImg = url => {
  fetch(url)// going to API url above
    .then(res => res.json()) // get JSON result
    .then(data =>{ // data
      img.src = data.message// extract data and changed <img> src class to data.message
    })
    .catch(err => {
      console.log(`error ${err}`)
  });
}