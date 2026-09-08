let count = 0

export const ImpureCounter = () => {
    count = count + 1
    return (
        <>
            <p>impure count:</p>
            <p>{count}</p>
        </>

    )
}
