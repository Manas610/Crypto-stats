import { Avatar, Box, Stack, VStack, Text , Link , Icon, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.800"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            pb={"8"}
          >
            Crypto Tracking App , build in india and we provide latest info on
            cryptos.
          </Text>
          <HStack>
          <Link href="https://github.com/Manas610" isExternal mr={"8"}>
            <HStack>
            <Icon as={FaGithub} boxSize={6} />
            <Text>Github</Text>
            </HStack>
          </Link>
          <Link href="https://www.linkedin.com/in/manas610/" isExternal>
            <HStack>
            <Icon as={FaLinkedin} boxSize={6} />
            <Text>Linked in</Text>
            </HStack>
          </Link>
          </HStack>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
