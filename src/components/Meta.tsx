import { VFC } from "react";
import Helmet from "react-helmet";
import {
  APP_NAME,
  DEFAULT_LOCALE,
  BASE_URL,
  BASE_KEYWORDS,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "../configs/meta";

import { MetaInfoProps } from "../configs/routes";

export const Meta: VFC<MetaInfoProps> = ({
  meta = [],
  defer = false,
  lang = DEFAULT_LOCALE,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}) => (
  <Helmet
    defer={defer}
    title={title}
    htmlAttributes={{ lang }}
    titleTemplate={`${APP_NAME} | %s`}
    meta={[
      {
        name: "description",
        content: description,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:image",
        content: `${BASE_URL}logo192.png`,
      },
      {
        name: "keywords",
        content: BASE_KEYWORDS,
      },
    ].concat(meta)}
  />
);
