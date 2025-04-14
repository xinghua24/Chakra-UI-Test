import { useState } from 'react'
import './App.css'
import { Box, Button, Card, Container, Flex, Grid, Heading, HStack, Icon, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaApple } from 'react-icons/fa';
import { ColorModeButton } from "@/components/ui/color-mode"
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
    <Container m="0" p="0" w="100%" maxW="100%" height="100vh" bg="bg.muted" color="fg">
      <ColorModeButton />
      <Box fluid bgColor="bg.info" p="1em" borderRadius="md" bg="bg.subtle" >
        <Text fontSize="2xl" fontWeight="bold" color="danger">
          This is a text
        </Text>
        <Button color="fg.success" bg="bg.success" borderColor="border.success">Success Button</Button>
        <Button color="fg.info" bg="bg.info" borderColor="border.info">Info Button</Button>
        <Button color="fg.error" bg="bg.error" borderColor="border.error">Error Button</Button>
      </Box>

      <Box w="100px" h="100px" m="1em" borderRadius="lg" borderColor="blue.200" borderWidth="2px">
        <Text>This is a box with width and height</Text>
      </Box>

      <Flex direction="column" w="6xl" alignItems={"left"}>
        <Heading my="1em" p="1em">Chakra UI Components</Heading>
        <Text ml="1em">ewofjewoij wfnow</Text>
        <Text ml="2em" color="blue.200" fontWeight="bold">ewofjewoij wfnow</Text>

        <Box {...boxStyles}>
          <Text>This is a box</Text>
        </Box>

        <Box>
          <Text fontSize="2em" fontWeight={{ base: "medium", lg: "bold" }}>Responsive Text</Text>
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

        <Box>
          <Icon size="lg" color="pink.700">
            <FaApple />
          </Icon>
        </Box>

        <Box>
          <Card.Root maxW={"sm"}>
            <Card.Header>Title</Card.Header>
            <Card.Body>Description</Card.Body>
            <Card.Footer>
              <HStack spacing="4">
                <Button colorPalette="blue">Button 1</Button>
                <Button colorPalette="red">Button 2</Button>
              </HStack>
            </Card.Footer>
          </Card.Root>
        </Box>
      </Flex>
    </Container >
  )
}

export default App
