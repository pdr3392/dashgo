import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Correia</Text>
          <Text color="gray.300" fontSize="small">
            pchenr1que1@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pedro Correia"
        src="https://github.com/pdr3392.png"
      />
    </Flex>
  );
}
