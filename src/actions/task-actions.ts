'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createTask(formData: FormData) {
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const priority = formData.get('priority')?.toString()

  if (!name || !description || !priority) return

  const task = {
    name,
    description,
    priority
  }

  const newTask = await prisma.task.create({
    data: task
  })

  console.log(newTask)

  redirect('/')
}

export async function updateTask(formData: FormData) {
  const id = formData.get('id')?.toString()
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const priority = formData.get('priority')?.toString()

  if (!id || !name || !description || !priority) {
    return
  }

  await prisma.task.update({
    where: {
      id: parseInt(id)
    },
    data: {
      name: name,
      description: description,
      priority: priority
    }
  })

  redirect('/')
}
export async function removeTask(formData: FormData) {
  const taskId = formData.get('taskId')?.toString()

  if (!taskId) {
    return
  }

  await prisma.task.delete({
    where: {
      id: parseInt(taskId)
    }
  })

  revalidatePath('/')
}
