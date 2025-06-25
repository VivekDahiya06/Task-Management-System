import { taskFormType } from "@/schemas/TaskFormSchema";
import { createContext, useState, ReactNode, FC } from "react";


interface Props {
    children: ReactNode;
}

export const storeContext = createContext<{
    tasks: taskFormType[];
    setTasks: React.Dispatch<React.SetStateAction<taskFormType[]>>;
} | null>(null);

const StoreProvider: FC<Props> = ({ children }) => {
    const [tasks, setTasks] = useState<taskFormType[]>([]);
    return (
        <storeContext.Provider value={{ tasks, setTasks }}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreProvider;
