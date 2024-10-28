export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer"+process.env.REACT_APP_TMDB_key 
  }
};

export const image_cdn_url="https://image.tmdb.org/t/p/w200";

export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg';

export const openAi_key=process.env.REACT_APP_openAi_key

