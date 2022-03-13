import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { Header } from '../components/Header'
import { Task, TasksList } from '../components/TasksList'
import { TodoInput } from '../components/TodoInput'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
      editable: false
    }
    setTasks(oldState => [...oldState, data])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    
    const newTasks = tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done}
      } else {
        return task
      }
    })

    setTasks(newTasks)
  }

  function handleEditTask(id: number){
    const newTasks = tasks.map(task => {
      if(task.id === id) {
        return {...task, editable: !task.editable}
      } else {
        return task
      }
    })
    
    setTasks(newTasks)
  }

  function handleSaveEdit(id: number, newTitle: string) {
    setTasks(oldState => oldState.filter(
      task => task.id === id ? task.title = newTitle : task
    ))

    handleEditTask(id)
  }

  function handleRemoveTask(id: number) {
    const result = tasks.filter( task => task.id !== id);
    setTasks([...result]);
  }
  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        editTask={handleEditTask}
        saveEdit={handleSaveEdit}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})