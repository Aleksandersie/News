import { useSelector } from "react-redux";

import DefaultLayout from "@/layouts/default";
import { RootState } from "@/config/store.ts";
import { NewsCard } from "@/components/card.tsx";

export default function MainPage() {
  const news = useSelector((state: RootState) => state.newsSlice.newsList);

  if (news.length === 0) {
    return (
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className={"w-full text-center "}>
            <p>Список новостей пуст</p>
          </div>
        </section>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className={"w-full flex flex-wrap  justify-center gap-7 "}>
          {news.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
