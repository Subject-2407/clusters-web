'use client';

import { socket } from "@/lib/socket";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store";
import { Chat } from "@/types/chat";

export const ChatListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('message', (msg: Chat) => {
            dispatch(addMessage(msg));
        });

        return () => {
        socket.off('message');
        };
    }, [dispatch]);

    return null;
}