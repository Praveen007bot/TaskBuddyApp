import { useEffect, useState } from "react";
import ProgressTracker from "./components/ProgressTracker";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./Style.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const updateTask = (index, updateTask) => {
        const newTasks = [...tasks];
        newTasks[index] = updateTask;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const clearAll = () => {
        setTasks([]);
    }

    return (
        <div className="App">
            <header className="bg-gray-900 py-6 px-4 shadow-md">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-white">
                        Task<span className="text-yellow-400">Buddy</span>
                    </h1>
                    <p className="text-gray-400 italic">
                        Your friendly task manager
                    </p>
                </div>
            </header>
            <TaskForm addTask={addTask} />
            <ProgressTracker tasks={tasks} />
            <TaskList
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
                clearAll={clearAll}
            />
        </div>
    );
}

export default App;
