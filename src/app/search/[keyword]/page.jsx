import Link from "next/link";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { Fragment } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const keyword = decodeURI(params.keyword); // decodeURI untuk mendecode url yang awalnya berupa %20 menjadi spasi
  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);

  return (
    <Fragment>
      <section>
        <Header title={`Hasil Pencarian: ${keyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </Fragment>
  );
};

export default Page;
