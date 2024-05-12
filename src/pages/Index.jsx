import { Container, Heading, Text, VStack, Box, List, ListItem, Link, Image } from "@chakra-ui/react";
import { FaRocket, FaUsers, FaChartLine, FaComments, FaPlayCircle, FaClipboardList } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Market Pulse - Your Ultimate Marketing Solution
          </Heading>
          <Text fontSize="xl" mt={4}>
            Transforming Data into Strategic Brilliance
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Introduction
          </Heading>
          <Text>Welcome to Market Pulse - Your Ultimate Destination for Innovative Marketing Solutions! At Market Pulse, we are dedicated to revolutionizing the way marketers access, extract, and analyze data in the digital world. Our platform serves as a central hub for information search, gathering, and analysis, empowering marketing teams to make strategic decisions and achieve business success like never before.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Mission & Vision
          </Heading>
          <Text>
            <strong>Mission:</strong> To provide marketers with innovative insights that transform web data access, extraction, and processing. We are dedicated to offering a seamless platform that enhances marketing efforts, resulting in corporate success and innovation.
          </Text>
          <Text mt={4}>
            <strong>Vision:</strong> Market Pulse aims to become the preferred platform for marketers and companies worldwide, revolutionizing data-driven decision-making and redefining the marketing industry. Every search with Market Pulse is a step toward strategic brilliance, influencing commerce's future.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Key Features
          </Heading>
          <List spacing={3}>
            <ListItem>
              <FaRocket /> Data Accuracy Assurance
            </ListItem>
            <ListItem>
              <FaChartLine /> Intelligent Filtering
            </ListItem>
            <ListItem>
              <FaComments /> Real-time Customer Feedback Analysis
            </ListItem>
            <ListItem>
              <FaClipboardList /> Smart Data Filtering and Keywords
            </ListItem>
            <ListItem>
              <FaPlayCircle /> AI-Powered Analysis and Visualization
            </ListItem>
            <ListItem>
              <FaUsers /> Automated Web Crawling and Data
            </ListItem>
            <ListItem>
              <FaClipboardList /> Marketing Info Summaries
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Interactive Elements
          </Heading>
          <List spacing={3}>
            <ListItem>
              <FaUsers /> User Forums
            </ListItem>
            <ListItem>
              <FaComments /> Live Chat Support
            </ListItem>
            <ListItem>
              <FaPlayCircle /> Multimedia Content
            </ListItem>
            <ListItem>
              <FaClipboardList /> Expert Panels and Webinars
            </ListItem>
            <ListItem>
              <FaRocket /> Feedback Forms and Surveys
            </ListItem>
            <ListItem>
              <FaChartLine /> Interactive Tutorials and Courses
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h2" size="lg">
            Explore Market Pulse
          </Heading>
          <Text>Unlock the power of data-driven decision-making in marketing!</Text>
          <Link href="http://www.marketpulse.com" isExternal color="teal.500">
            Visit www.marketpulse.com
          </Link>
        </Box>
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjB0ZWFtJTIwY2VsZWJyYXRpbmd8ZW58MHx8fHwxNzE1NTQ1NzQwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Marketing Team" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
