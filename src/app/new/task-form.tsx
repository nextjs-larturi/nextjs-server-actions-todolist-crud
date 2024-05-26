'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { createTask, updateTask } from '@/actions/task-actions'
import { Task } from '@prisma/client'

export function TaskForm({ task }: { task?: Task }) {
  const router = useRouter()
  return (
    <form
      action={async (formData: FormData) => {
        if (task) {
          const updatedTask = await updateTask(formData)
          toast.success(`Task updated! ${updatedTask?.name}`)
        } else {
          const newTask = await createTask(formData)
          toast.success(`Task created! ${newTask?.name}`)
        }
        router.refresh()
        router.replace('/')
      }}
    >
      <input type='hidden' name='id' value={task?.id} />

      <Card className='w-[450px]'>
        <CardHeader>
          <CardTitle>{task ? 'Edit Task' : 'Create Task'}</CardTitle>
          <CardDescription>Fill out the form to create a new task</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input
                name='name'
                id='name'
                placeholder='Name of your task'
                defaultValue={task?.name}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='desctiption'>Desctiption</Label>
              <Textarea
                name='description'
                id='description'
                placeholder='Description of your task'
                defaultValue={task?.description || ''}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='priority'>Proirity</Label>
              <Select name='priority' defaultValue={task?.priority}>
                <SelectTrigger id='priority'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='low'>Low</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='high'>High</SelectItem>
                  <SelectItem value='urgent'>Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>Cancel</Button>
          <Button type='submit'>{task ? 'Update' : 'Create'}</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
