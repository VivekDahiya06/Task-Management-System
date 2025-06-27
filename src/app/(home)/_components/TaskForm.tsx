'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { taskFormSchema, taskFormType } from '@/schemas/TaskFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { storeContext } from '@/store/StoreProvider'

const TaskForm = () => {

    // States and Hooks
    const context = useContext(storeContext);
    if (!context) throw new Error('storeContext is null');
    const { setTasks } = context;
    const {
        register,
        handleSubmit,
        // reset,
        formState: {
            errors
        } } = useForm<taskFormType>({
            resolver: zodResolver(taskFormSchema)
        });


    // Functions
    const onSubmit = (data: taskFormType) => {
        setTasks((prev: taskFormType[]) => [...prev, data]);
        // reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className='mb-4'>
                <Label id='title' htmlFor='title'>Title</Label>
                <Input
                    {...register('title')}
                    placeholder='Enter a title'
                    className='mt-1 border border-gray-400'
                />
                {errors?.title && <p className='text-red-600'>{errors.title.message}</p>}
            </div>
            <div className='mb-4'>
                <Label id='description' htmlFor='description'>Description</Label>
                <Textarea
                    {...register('description')}
                    placeholder='Enter a description'
                    className='mt-1 border border-gray-400'
                />
                {errors?.description && <p className='text-red-600'>{errors.description.message}</p>}
            </div>
            <Button
                type='submit'
                variant='outline'
                className='w-full bg-black text-white border-2 border-black cursor-pointer'
            >
                Add Task
            </Button>
        </form>
    )
}

export default TaskForm;
