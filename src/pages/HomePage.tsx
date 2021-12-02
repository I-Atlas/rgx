import { FC, useContext } from "react";
import { useMatch } from "react-router-dom";
import { Meta } from "../components/Meta";
import { PatternBlock } from "../components/PatternBlock";
import { getRouteMetaInfo } from "../configs/routes";
import { StateContext } from "../context";
import { NotFoundPage } from "./NotFoundPage";

export const HomePage: FC = () => {
  const { items, searchValue } = useContext(StateContext);
  const match = useMatch({ path: "/tags/:name" });
  const tagName = match?.params.name;
  const result = items.filter((obj) =>
    obj.tags
      .toLocaleLowerCase()
      .includes(
        tagName ? tagName.toLocaleLowerCase() : searchValue.toLocaleLowerCase(),
      ),
  );

  if (!result.length) {
    return <NotFoundPage />;
  }

  return (
    <div className="patterns">
      <Meta {...getRouteMetaInfo('Home')} />
      {result.map((obj) => (
        <PatternBlock key={obj.pattern} {...obj} />
      ))}
    </div>
  );
};
