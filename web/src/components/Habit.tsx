interface HabitProps {
    completed: number
}

export function Habit (props: HabitProps){
    return(
        <div className="bg-slate-800">{props.completed}</div>
    )
}