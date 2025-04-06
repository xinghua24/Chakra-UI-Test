import { useState } from 'react'
import './App.css'
import { Box, Button, Container, Flex, Grid, Heading, HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

function App() {
  const boxStyles = {
    p: "1em",
    bg: "blue.200",
    padding: "4",
    borderRadius: "md",
    boxShadow: "lg",
    textAlign: "center",
    _hover: {
      bg: "blue.600",
      color: "white",
    },
  };


  return (
    <>
      <Container fluid bgColor="blue.200" p="1em" borderRadius="md" >
        <Text fontSize="2xl" fontWeight="bold" color="blue.500">
          This is a text
        </Text>
      </Container>
      <Flex direction="column" w="6xl" alignItems={"left"}>
        <Heading my="1em" p="1em">Chakra UI Components</Heading>
        <Text ml="1em">ewofjewoij wfnow</Text>
        <Text ml="2em" color="blue.200" fontWeight="bold">ewofjewoij wfnow</Text>

        <Box {...boxStyles}>
          <Text>This is a box</Text>
        </Box>

        <Button
          color="white"
          colorPalette="blue"
          bg={{ base: "colorPalette.500", _hover: "colorPalette.800" }}
        >
          Click Me
        </Button>

        <Flex m="1em" direction="row" align="baseline" justify="center" gap="4" >
          <Box bg="red" h="50px"><Text>This is box1 in Flex</Text></Box>
          <Box bg="blue" h="50px"><Text>This is box2 in Flex</Text></Box>
          <Box bg="green" h="50px"><Text>This is box3 in Flex</Text></Box>
        </Flex>

        <Grid m="1em" templateColumns="repeat(3, 1fr)" gap={4}>
          <Box bg="red" h="50px"><Text>This is box1 in Grid</Text></Box>
          <Box bg="blue" h="50px"><Text>This is box2 in Grid</Text></Box>
          <Box bg="green" h="50px"><Text>This is box3 in Grid</Text></Box>
        </Grid>

        <SimpleGrid m="1em" columns="3" gap="4px">
          <Box bg="red" h="50px"><Text>This is box1 in SimpleGrid</Text></Box>
          <Box bg="blue" h="50px"><Text>This is box2 in SimpleGrid</Text></Box>
        </SimpleGrid>

        <VStack m="1em" spacing={4} direction="row" align="baseline">
          <Box bg="red" h="50px"><Text>This is box1 in Stack</Text></Box>
          <Box bg="blue" h="50px"><Text>This is box2 in Stack</Text></Box>
          <Box bg="green" h="50px"><Text>This is box3 in Stack</Text></Box>
        </VStack>

      </Flex>
    </>
  )
}

export default App
