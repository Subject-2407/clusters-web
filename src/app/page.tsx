'use client';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { ChatListener } from '../components/ChatListener';
import { MessageList } from '../components/MessageList';
import { MessageForm } from '../components/MessageForm';

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      {/* Listener */}
      <ChatListener />

      {/* Header */}
      <Box p={4} borderBottom="1px solid #eee">
        <Heading size="md">Clusters</Heading>
      </Box>

      {/* Message List (Scrollable Area) */}
      <Box flex="1" overflowY="auto" p={4}>
        <MessageList />
      </Box>

      {/* Sticky Bottom Form */}
      <Box
        p={4}
        borderTop="1px solid #eee"
        position="sticky"
        bottom="0"
        bg="white"
      >
        <MessageForm />
      </Box>
    </Flex>
  );
}