import { Box, Flex, Button, VStack, Heading, Divider, Stat, StatLabel, StatNumber, SimpleGrid } from "@chakra-ui/react";
import { FaUser, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Heading as="h1" size="xl">
          Client Dashboard
        </Heading>
        <Flex alignItems="center">
          <Button leftIcon={<FaCog />} variant="ghost" mr={3}>
            Settings
          </Button>
          <Button leftIcon={<FaSignOutAlt />} variant="ghost">
            Logout
          </Button>
        </Flex>
      </Flex>
      <Divider mb={5} />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
        <StatBox icon={FaUser} label="Total Clients" number="1,024" />
        <StatBox icon={FaChartBar} label="Projects" number="289" />
        <StatBox icon={FaChartBar} label="Open Tasks" number="58" />
        <StatBox icon={FaChartBar} label="Support Tickets" number="23" />
      </SimpleGrid>
      <Divider my={5} />
      <VStack spacing={5} align="stretch">
        <Heading as="h2" size="lg">
          Recent Activity
        </Heading>
        {/* List of recent activities */}
        {/* ... */}
      </VStack>
    </Box>
  );
};

const StatBox = ({ icon: Icon, label, number }) => (
  <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
    <Flex alignItems="center">
      <Box as={Icon} size="3rem" mr={3} color="blue.400" />
      <Box>
        <StatLabel fontWeight="medium">{label}</StatLabel>
        <StatNumber fontSize="2xl">{number}</StatNumber>
      </Box>
    </Flex>
  </Stat>
);

export default Index;
