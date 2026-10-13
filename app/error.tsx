"use client"

type AppErrorProps = {
    error: Error;
}

function AppError({ error }: AppErrorProps) {
    return (
        <h1>Någonting gick fel: {error.message}</h1>
    )
}

export default AppError