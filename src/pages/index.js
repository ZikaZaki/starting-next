import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";
import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  width: 100%;
  padding: 1rem 2rem;
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
