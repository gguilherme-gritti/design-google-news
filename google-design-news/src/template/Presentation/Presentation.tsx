"use client";

import { memo } from "react";
import * as S from "./Styles";
import Button from "@/components/Button/Button";

const Presentation = () => {
  return (
    <S.Section>
      <S.Container>
        <strong>Notícias em tempo real</strong>
        <h1>Realtime Google News</h1>
        <p>
          Explore tudo o que você precisa saber, a respeito do que está
          acontecendo. Notícias em tempo real do que está rolando, clique para
          saber mais
        </p>

        <Button variant="primary">Ver mais</Button>
      </S.Container>
    </S.Section>
  );
};

export default memo(Presentation);
