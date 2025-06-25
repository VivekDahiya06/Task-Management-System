import { storeContext } from '@/store/StoreProvider';
import { SquarePen, Trash } from 'lucide-react';
import React, { useContext } from 'react';

interface TaskCardProps {
    title: string;
    description: string;
    index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, index }) => {

    const context = useContext(storeContext);
    if (!context) throw new Error('storeContext is null');
    const { tasks, setTasks } = context;
    
    // Functions
    const handleUpdate = () => {
        console.log("Update Task")
    }

    const handleDelete = () => {
        tasks.splice(index, 1);
        setTasks([...tasks]);
    }
    return (
        <div className="border rounded-lg p-4 shadow flex flex-col gap-2 bg-white relative">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={handleUpdate} aria-label="Update Task" className="hover:text-blue-600 cursor-pointer">
                        {/* Update (edit) icon */}
                        <SquarePen size={23} strokeWidth={1.25} />
                    </button>
                    <button onClick={handleDelete} aria-label="Delete Task" className="hover:text-red-600 cursor-pointer">
                        {/* Delete (trash) icon */}
                        <Trash size={23} strokeWidth={1.25} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
