import { useState } from "react"

type Task = {
    title: string
    done: boolean
}

type TaskItemProps = {
    task: Task
    filterCompleted: boolean
    toggleTaskDone: (taskTitle: string) => void
}

function TaskItem({task, filterCompleted, toggleTaskDone}: Readonly<TaskItemProps>) {
    if (filterCompleted && !task.done) {
        return null
    }

    if (!task.done) {
        return (
            <div style={{ display: "flex" }}>
                <p>{task.title}</p>
                <button onClick={() => toggleTaskDone(task.title)}>
                    Marcar como feito
                </button>
            </div>
        )
    }
    return (
        <div style={{ display: "flex" }}>
            <del>{task.title}</del>
            <button onClick={() => toggleTaskDone(task.title)}>
                ✅
            </button>
        </div>
    )
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [inputValue, setInputValue] = useState<string>("")
    const [filterCompleted, setFilterCompleted] = useState<boolean>(false)

    const handleAddTask = () => {
        if (!inputValue.length) {
            return
        }

        const newTask: Task = {
            title: inputValue,
            done: false
        }

        setTasks([...tasks, newTask])
        setInputValue("")
        setFilterCompleted(false)
    }

    const toggleTaskDone = (taskTitle: string) => {
        const newTasks = tasks.map((task) => {
            if (task.title === taskTitle) {
                return {...task, done: !task.done}
            }
            return task
        })
        setTasks(newTasks)
    }

    const toggleFilterTasks = () => {
        setFilterCompleted((prevState) => !prevState)
    }

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Adicionar tarefa"
            />
            <button onClick={handleAddTask}>
                Adicionar
            </button>
            <button onClick={toggleFilterTasks}>
                {filterCompleted ? "Retirar filtro" : "Filtrar concluídas"}
            </button>
            <div>
                {tasks.map((task: Task) => {
                    return (
                        <TaskItem
                            key={task.title}
                            task={task}
                            filterCompleted={filterCompleted}
                            toggleTaskDone={toggleTaskDone}
                        />
                    )
                })}
            </div>
        </div>
    )
}
