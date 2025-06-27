import TaskForm from './_components/TaskForm'
import ShowTasks from './_components/ShowTasks'

const Home = () => {
  return (
    <main className='flex flex-col min-h-screen p-2 sm:p-4 overflow-hidden'>
      <div className='flex-shrink-0 mb-8'>
        <h1 className='text-2xl font-bold text-center'>Task Management App</h1>
      </div>

      <section className='flex-1 flex flex-col md:flex-row gap-4 md:gap-6 min-h-0'>
        <div className='w-full md:w-1/3 flex-shrink-0 mt-2 md:mt-0'>
          <TaskForm />
        </div>

        <div className='flex-1 min-h-0 mt-4 md:mt-0'>
          <ShowTasks />
        </div>
      </section>
    </main>
  )
}

export default Home
