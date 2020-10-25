import { Box, Button, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/core";

export default function Home() {
  return (
    <>
      <Grid
        height="100vh"
        width="100vw"
        backgroundColor="blue.400"
        templateColumns="1fr 1fr 1fr 500px"
        templateRows="100px 1fr"
        templateAreas="
        '. . . nav'
        'body body body body'
        "
        justifyContent="center"
        alignItems="center"
      >
        <Flex gridArea="nav" alignItems="center" justifyContent="space-around">
          <Button borderRadius="15px" width="8rem" height="2rem">
            About
          </Button>
          <Button
            borderRadius="15px"
            width="8rem"
            height="2rem"
            backgroundColor="cyan.400"
          >
          <Link href="/signup" >Log In</Link>
          </Button>
          <Button
            borderRadius="15px"
            width="8rem"
            height="2rem"
            backgroundColor="teal.300"
          >
            <Link href="/signup" >Sign Up</Link>
          </Button>
        </Flex>
        <Flex gridArea="body" alignItems="center" justifyContent="center">
          <Image
            src="./acty_logo.png"
            width="680px"
            height="314px"
            position="absolute"
            top="50px"
            left="150px"
          />
          <Image
            src="./acty_landing.png"
            width="680px"
            height="534px"
            position="absolute"
            right="200px"
          />
          <Text
            position="absolute"
            left="200px"
            fontFamily="Roboto"
            fontSize="2xl"
            color="white"
            width="300px"
            bottom="150px"
          >
            Choose the actions
            <br />
            you want to participate
            <br />
            <br />
            and help your community run better
          </Text>
        </Flex>
      </Grid>
    </>
  );
}
