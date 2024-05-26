'use client'

import { useEffect, useState } from 'react'
import { Task } from '@prisma/client'
import { TaskCard } from '@/components/task-card'
import { getTasks } from '@/actions/task-actions'

export default function HomePage() {
  const [tasks, setTasks] = useState([] as Task[])

  useEffect(() => {
    async function fetchData() {
      const allTasks = await getTasks()
      setTasks(allTasks)
    }

    fetchData()
  }, [])

  return (
    <div className='grid grid-cols-3 gap-4'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}
