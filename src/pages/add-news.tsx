import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives.ts";
import { setNewsList } from "@/config/news-slice.ts";
import { RootState } from "@/config/store.ts";

export const AddNewsPage = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const newsList = useSelector((state: RootState) => state.newsSlice.newsList);

  const addNews = () => {
    const news = {
      id: uuidv4(),
      title: newsTitle,
      description: description,
    };

    const newsArr = [...newsList, news];

    dispatch(setNewsList(newsArr));

    navigate("/");
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h1 className={title() + "text-center"}>Добавить новость</h1>
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
            <Button color={"primary"} onClick={() => addNews()}>
              Сохранить
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};
