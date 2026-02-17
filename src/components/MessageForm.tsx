'use client';

import { socket } from "@/lib/socket";
import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setCluster } from '../../store';

interface FormData {
    username: string;
    color: string;
    cluster: string;
    message: string;
}

export const MessageForm = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, getValues, resetField } = useForm<FormData>({
        defaultValues: {
            cluster: 'general',
        },
    });

    const currentCluster = useSelector(
        (state: RootState) => state.chat.cluster
    );

    const handleJoinCluster = () => {
        const clusterValue = getValues('cluster');

        if (!clusterValue) return;

        socket.emit('join-cluster', clusterValue);
        dispatch(setCluster(clusterValue));
    };

    const onSubmit = (data: FormData) => {
        if (!currentCluster) return;

        const payload = {
            username: data.username,
            color: data.color,
            cluster: data.cluster,
            message: data.message
        }

        socket.emit('message', payload);
        resetField('message');
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack wordSpacing={3}>
        {/* Cluster Join Section */}
        <HStack width="full">
          <Input
            placeholder="Cluster (ex: general)"
            {...register('cluster', { required: true })}
          />
          <Button onClick={handleJoinCluster} colorScheme="purple">
            Join
          </Button>
        </HStack>

        {/* Nickname */}
        <Input
          placeholder="Nickname"
          {...register('username', { required: true })}
        />

        {/* Hex Color */}
        <Input
          placeholder="#ff0000 (must be in hex)"
          defaultValue="#ff0000"
          {...register('color', {
            required: true,
            pattern: /^#([0-9A-Fa-f]{6})$/,
          })}
        />

        {/* Message */}
        <Input
          placeholder="Type a message"
          {...register('message', { required: true })}
        />

        <Button type="submit" colorScheme="blue" width="full" disabled={!currentCluster}>
          Send
        </Button>
      </VStack>
    </form>
  );
}