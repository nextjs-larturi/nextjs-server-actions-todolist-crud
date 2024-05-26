'use client'

import Link from 'next/link'
import { Task } from '@prisma/client'
import clsx from 'clsx'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TaskButtonDelete } from './task-button-delete'

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className='flex flex-row justify-between'>
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            'bg-purple-600 text-white': task.priority === 'high',
            'bg-yellow-600 text-white': task.priority === 'medium',
            'bg-green-700 text-white': task.priority === 'low',
            'bg-red-700 text-white': task.priority === 'urgent'
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className='text-slate-600'>{new Date(task.createdAt).toLocaleDateString()}</span>
      </CardContent>
      <CardFooter className='flex gap-x-2 justify-end'>
        <TaskButtonDelete taskId={task.id} />
        <Link href={`/tasks/${task.id}/edit`} className={buttonVariants({ variant: 'secondary' })}>
          Edit
        </Link>
      </CardFooter>
    </Card>
  )
}
