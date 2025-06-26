'use client';

import { FC, useContext, useState } from 'react';
import { storeContext } from '@/store/StoreProvider';
import { Checkbox } from "@/components/ui/checkbox";
import { SquarePen, Trash } from 'lucide-react';

const ShowTasks: FC = () => {

    // States and Hooks
    const context = useContext(storeContext);
    if (!context) throw new Error('storeContext is null');
    const { tasks, setTasks } = context;
    
    const [completed, setCompleted] = useState<{ [key: number]: boolean }>({});



    // Functions
    const handleCheckboxChange = (index: number) => {
        setCompleted((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const handleUpdate = (index: number) => {
        // Placeholder for update logic
        console.log('Update Task', index);
    };

    const handleDelete = (index: number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };



    return (
        <div className="h-full flex flex-col">
            <div className="flex-shrink-0 mb-3">
                <h2 className="text-lg font-semibold text-gray-800">
                    All Tasks ({tasks.length})
                </h2>
                {tasks.length === 0 && (
                    <p className="text-gray-500 text-sm mt-1">
                        No tasks yet. Create your first task!
                    </p>
                )}
            </div>

            {/* Scrollable tasks container */}
            <div className="flex-1 bg-gray-50 rounded-lg border border-gray-400 p-4 min-h-0">
                <div
                    className="h-full overflow-y-auto space-y-3 pr-2"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#cbd5e1 #f1f5f9'
                    }}
                >
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Checkbox
                                    className='w-8 h-8 rounded-full border-2 border-gray-400 cursor-pointer'
                                    checked={completed[index]}
                                    onCheckedChange={() => handleCheckboxChange(index)}
                                    aria-label="Mark task as completed"
                                />
                                <div className={`flex-1 border rounded-lg p-4 shadow flex flex-col gap-2 bg-white relative ${completed[index] ? 'opacity-70' : ''}`}>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h2 className={`text-lg font-semibold ${completed[index] ? 'line-through text-gray-400' : ''}`}>{task.title}</h2>
                                            <p className={`text-gray-600 ${completed[index] ? 'line-through text-gray-400' : ''}`}>{task.description}</p>
                                        </div>
                                        <div className="flex gap-5 ml-4">
                                            <button onClick={() => handleUpdate(index)} aria-label="Update Task" className="hover:text-blue-600 cursor-pointer">
                                                <SquarePen size={23} strokeWidth={1.25} />
                                            </button>
                                            <button onClick={() => handleDelete(index)} aria-label="Delete Task" className="hover:text-red-600 cursor-pointer">
                                                <Trash size={23} strokeWidth={1.25} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            <div className="text-center">
                                <div className="text-4xl mb-2">📝</div>
                                <p className="text-sm">No tasks to display</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll indicator */}
            {tasks.length > 4 && (
                <div className="flex-shrink-0 mt-2 text-center">
                    <p className="text-xs text-gray-500">
                        Scroll to see more tasks
                    </p>
                </div>
            )}
        </div>
    );
};

export default ShowTasks;
