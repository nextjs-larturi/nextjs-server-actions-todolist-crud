'use client'

import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { removeTask } from '@/actions/task-actions'

export function TaskButtonDelete({ taskId }: { taskId: number }) {
  return (
    <form
      action={async (formData: FormData) => {
        await removeTask(formData)
        toast.success(`Task removed!`)

        redirect('/')
      }}
    >
      <input type='hidden' name='taskId' value={taskId} />
      <Button variant='destructive'>Delete</Button>
    </form>
  )
}
