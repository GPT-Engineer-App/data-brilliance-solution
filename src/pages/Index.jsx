import { Container, Heading, Text, SimpleGrid, Box, List, ListItem, Link, Image } from "@chakra-ui/react";
import { FaRocket, FaUsers, FaChartLine, FaComments, FaPlayCircle, FaClipboardList } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}></SimpleGrid>
    </Container>
  );
};

export default Index;
