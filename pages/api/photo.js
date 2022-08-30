import { loader } from '../components/loader.js'

export async function getPhoto({date}) {

    // Date must be between Jun 16, 1995 and Aug 28, 2022.
    let url = 'https://api.nasa.gov/planetary/apod?api_key=baxyk2il763elPeWOWJAuz65EnuPZNdrP6iaUB2W&date=' + date + '&concept_tags=True'
    
    let loader = document.getElementById("loader")

    loader.style.display = 'unset'

    fetch(url)
    
      .then((res) => res.json())
      .then((data) => {

        let photoBox = document.getElementById("photoBox")
        let photoBoxImg = document.getElementById("photoBoxImg")
    
        photoBoxImg.src = data.hdurl
        photoBox.style.display = 'unset'
        console.log(data)

        loader.style.display = 'none'

        return { props: { data } }
    });
}


    // const res = await fetch(url)
    // const data = await res.json()



