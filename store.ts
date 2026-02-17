import { Chat } from "@/types/chat";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
    chats: Chat[];
    cluster: string;
}

const initialState: ChatState = { 
    chats: [],
    cluster: '' 
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<Chat>) {
            state.chats.push(action.payload);
        },
        setCluster(state, action: PayloadAction<string>) {
            state.cluster = action.payload;
            state.chats = [];
        }
    }
});

export const { addMessage, setCluster } = chatSlice.actions;

export const store = configureStore({
    reducer: {
        chat: chatSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;