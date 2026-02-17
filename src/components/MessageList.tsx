'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { VStack, Box, Text } from '@chakra-ui/react';

export const MessageList = () => {
  // Get messages from Redux store
  const messages = useSelector((state: RootState) => state.chat.chats);

  return (
    <VStack
      wordSpacing={1}
      align="stretch"
      maxH="400px"
      overflowY="auto"
      p={2}
      border="1px solid #eee"
      borderRadius="md"
    >
      {messages.map((msg, index) => (
        <Box key={index} p={2} bg="gray.100" borderRadius="md">
          <Text fontWeight="bold" color={msg.color}>
            {msg.username}
          </Text>
          <Text>{msg.message}</Text>
        </Box>
      ))}
    </VStack>
  );
};