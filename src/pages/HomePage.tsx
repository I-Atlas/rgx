import { FC, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { PatternBlock } from "../components/PatternBlock";
import { StateContext } from "../context";
import { NotFoundPage } from "./NotFoundPage";

export const HomePage: FC<RouteComponentProps<{ name: string }>> = ({
  match,
}) => {
  const { items, searchValue } = useContext(StateContext);
  const tagName = match.params.name;
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
      {result.map((obj) => (
        <PatternBlock key={obj.pattern} {...obj} />
      ))}
    </div>
  );
};
