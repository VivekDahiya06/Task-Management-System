'use client'

import { taskFormType } from "@/schemas/TaskFormSchema";
import { createContext, useState, ReactNode, FC } from "react";

// Type Definition
interface StoreProviderProps {
    children: ReactNode;
}

// Store Context
export const storeContext = createContext<{
    tasks: taskFormType[];
    setTasks: React.Dispatch<React.SetStateAction<taskFormType[]>>;
} | null>(null);

// Store Provider
const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<taskFormType[]>([]);
    return (
        <storeContext.Provider value={{ tasks, setTasks }}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreProvider;
