import { Game } from "../hooks/useGames";
import { Card, CardBody } from "@chakra-ui/card";
import { HStack, Heading, Image } from "@chakra-ui/react";
//import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          {
            // <PlatformIcon
            //   platforms={game.parent_platform.map((p) => p.platform)}
            // ></PlatformIcon>
          }
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
