import { Game } from "../hooks/useGames";
import { Card, CardBody } from "@chakra-ui/card";
import { HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading fontSize="2xl">{game.name}</Heading>
          {/* <PlatformIcon
          platforms={game.parent_platform.map((p) => p.platform)}
        ></PlatformIcon> */}
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
