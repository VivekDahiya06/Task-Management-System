'use client';

import { useContext } from 'react';
import { storeContext } from '@/store/StoreProvider';
import TaskCard from './TaskCard';

const ShowTasks: React.FC = () => {
    const context = useContext(storeContext);
    if (!context) throw new Error('storeContext is null');
    const { tasks } = context;

    return (
        <div className="h-full flex flex-col">
            <div className="flex-shrink-0 mb-3">
                <h2 className="text-lg font-semibold text-gray-800">
                    All Tasks ({tasks.length})
                </h2>
                {tasks.length === 0 && (
                    <p className="text-gray-500 text-sm mt-1">
                        No tasks yet. Create your first task above!
                    </p>
                )}
            </div>

            {/* Scrollable tasks container */}
            <div className="flex-1 bg-gray-50 rounded-lg border border-gray-200 p-4 min-h-0">
                <div
                    className="h-full overflow-y-auto space-y-3 pr-2"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#cbd5e1 #f1f5f9'
                    }}
                >
                    {tasks.length > 0 ? (
                        tasks.map((task, idx) => (
                            <TaskCard
                                key={idx}
                                title={task.title}
                                description={task.description}
                                index={idx}
                            />
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
