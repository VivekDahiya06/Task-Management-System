import TaskForm from './_components/TaskForm'

const Home = () => {
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Task Management App</h1>
      <TaskForm />
    </div>
  )
}

export default Home
