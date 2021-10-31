import { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';

import { Hero as IHero } from 'core/models/Hero';

const Hero: FC<IHero> = ({
  id,
  superhero,
  alter_ego,
  characters,
  first_appearance,
  publisher,
}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`/public/assets/${id}.jpg`} alt={`${id} image`} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {first_appearance} &bull; {publisher.toUpperCase()}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {superhero}
        </Box>

        <Box>
          {alter_ego}

          {/* <Box as="span" color="gray.600" fontSize="sm">
            
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
