import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { Fragment } from "react";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  getRandomAnime,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendationAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendationAnime = getRandomAnime(recommendationAnime, 4);
  console.log(topAnime);
  return (
    <Fragment>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Rekomendasi Baru" />
        <AnimeList api={recommendationAnime} />
      </section>
    </Fragment>
  );
};

export default Page;
