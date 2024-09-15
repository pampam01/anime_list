export const getAnimeResponse = async (resource, query) => {
  const animeAPI = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await animeAPI.json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
};

export const getRandomAnime = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const second = first + gap;

  const response = {
    data: data.slice(first, second),
  };
  return response;
};
