import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
type Props = {};

function Footer({}: Props) {
  return (
    <footer>
      <h2>© 2023 Copyright HandMade</h2>
      <h2>
        Made with 🤍 by ahmedjk34 <AiOutlineGithub />
      </h2>
    </footer>
  );
}

export default Footer;
