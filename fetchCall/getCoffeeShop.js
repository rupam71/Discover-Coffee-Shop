import { createApi } from "unsplash-js";
import { Authorization, coffeeApiKey } from "../secret"
import { accessKeyUnsplash } from './../secret';

const unsplashApi = createApi({
  accessKey : accessKeyUnsplash
})

const getListOfPhotoUrls = async() => {
  const photos = await unsplashApi.search.getPhotos({
    query: 'coffee',  
    page: 1,
    perPage: 10,
    color: 'green',
    orientation: 'portrait',
  });

  const unsplashResult = photos.response.results
  const photoResponse = unsplashResult.map(ele=>ele.urls['small'])

  return photoResponse
}

export default async function(){
  const photos = await getListOfPhotoUrls()

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: Authorization()
    }
  };
  
  const response = await fetch(coffeeApiKey(), options)

  var r = await response.json()
  var x = r.results.map((ele,index)=> { 
    return{
      ...ele,
      imgUrl : photos[index]
    }
  })

  console.log('xxx',x)
  return x;
}