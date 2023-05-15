const PER_PAGE = 12;
const BASE_URL = 'https://pixabay.com/api/';
const getImages = (search, page) => {
    const params = new URLSearchParams({
        key: '34901085-4ade6b8affa3f0eec4a7cea0c',
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE
    })
    return fetch(`${BASE_URL}?${params.toString()}`).then(response => {
        if (!response.ok) {
      throw new Error(response.status);
    }
       return response.json()
    }); 
} 
const Api = { getImages, PER_PAGE };
export default Api;