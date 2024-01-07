import { Game } from "../hooks/useGames";
import { Card, CardBody } from "@chakra-ui/card";
import { Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* <PlatformIcon
          platforms={game.parent_platform.map((p) => p.platform)}
        ></PlatformIcon> */}
      </CardBody>
    </Card>
  );
};

export default GameCards;
