import { useEffect, useState } from 'react';

export const useTasksCount = (tasks) => {
    const [amountToDo, setAmountToDo] = useState(0)
    const [amountDone, setAmountDone] = useState(0)
    const [amountAllTasks, setAmountAllTasks] = useState(0)

    useEffect(() => {
        setAmountAllTasks(tasks.length)

        const toDo = tasks.filter((task)=> task.isDone === false)
        const done = tasks.filter((task)=> task.isDone === true)

        setAmountToDo(toDo.length)
        setAmountDone(done.length)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks])

    return {
        amountToDo, amountDone, amountAllTasks
    }
}
