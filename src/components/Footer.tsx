import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <span>{`Copyright © ${new Date().getFullYear()} RGX. All Rights Reserved.`}</span>
        </li>
        <li>
          <a href="https://bolotov-iliya.space/">Space</a>
        </li>
        <li>
          <a href="https://github.com/I-Atlas/rgx">GitHub</a>
        </li>
      </ul>
    </div>
  );
};
