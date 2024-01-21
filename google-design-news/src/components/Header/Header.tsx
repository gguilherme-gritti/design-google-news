"use client";

import { memo } from "react";
import * as S from "./Styles";
import Image from "next/image";
import GoogleNews from "@/common/assets/logo/googleNews.png";

const Header = () => {
  return (
    <S.Nav>
      <S.Img>
        <Image src={GoogleNews} alt="Logo Google News" />
      </S.Img>
      <S.Ul>
        <li>
          <a>Ver e Ouvir</a>
        </li>
        <li>
          <a>Dia a Dia</a>
        </li>
        <li>
          <a>Assine Já</a>
        </li>
        <li>
          <a>Conta</a>
        </li>
      </S.Ul>
    </S.Nav>
  );
};

export default memo(Header);
