import { TaskForm } from '@/app/new/task-form'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function PageTaskEdit({
  params
}: {
  params: {
    id: string
  }
}) {
  const task = await prisma.task.findFirst({
    where: {
      id: Number(params.id)
    }
  })

  if (!task) {
    redirect('/')
  }

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-100px)]'>
      <TaskForm task={task} />
    </div>
  )
}
