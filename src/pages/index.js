import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";
import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800;
  padding: 1rem;
`;

export default function Home() {
  return (
    <PageContainer>
      <CssBaseline />
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </PageContainer>
  )
}
