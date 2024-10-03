import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives.ts";
import { RootState } from "@/config/store.ts";
import { setNewsList } from "@/config/news-slice.ts";

export default function EditNewsPage() {
  const [newsTitle, setNewsTitle] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();

  const dispatch = useDispatch();

  const newsList = useSelector((state: RootState) => state.newsSlice.newsList);

  const currentNews = newsList.find((news) => news.id === params.id);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentNews) {
      setNewsTitle(currentNews.title);
      setDescription(currentNews.description);
    }
  }, [currentNews]);

  const saveEdit = () => {
    const newsArr = newsList.map((news) => {
      if (news.id === params.id) {
        return {
          id: news.id,
          title: newsTitle,
          description: description,
        };
      }

      return news;
    });

    dispatch(setNewsList(newsArr));
    navigate("/");
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h1 className={title() + "text-center"}>Редактировать новость</h1>
        <div
          className={
            "w-full flex flex-col items-center justify-center gap-8 md:w-2/3"
          }
        >
          <Input
            placeholder="Заголовок"
            value={newsTitle}
            onChange={(e) => setNewsTitle(e.target.value)}
          />
          <Textarea
            className="h-32"
            minRows={15}
            placeholder="Текст новости"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className={"w-full flex justify-center lg:justify-end"}>
            <Button color={"primary"} onClick={() => saveEdit()}>
              Сохранить
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
