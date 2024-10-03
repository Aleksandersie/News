import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { FC } from "react";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/config/store.ts";
import { setNewsList } from "@/config/news-slice.ts";

type NewsProps = {
  id: string;
  title: string;
  description: string;
};

export const NewsCard: FC<NewsProps> = (props) => {
  const navigate = useNavigate();
  const { id, title, description } = props;

  const news = useSelector((state: RootState) => state.newsSlice.newsList);
  const dispatch = useDispatch();

  const editNews = () => {
    navigate("/edit/" + id);
  };

  const deleteNews = () => {
    const newsArr = news.filter((news) => news.id !== id);

    dispatch(setNewsList(newsArr));
  };

  return (
    <Card className="w-full sm:w-[600px]">
      <CardHeader className="flex gap-3 font-bold text-xl">{title}</CardHeader>
      <Divider />
      <CardBody className={"min-h-[100px]"}>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter className={"gap-5 justify-center sm:justify-end"}>
        <Button color={"default"} onClick={() => editNews()}>
          Редактировать
        </Button>
        <Button
          className={"bg-red-400 text-white"}
          onClick={() => deleteNews()}
        >
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
};
