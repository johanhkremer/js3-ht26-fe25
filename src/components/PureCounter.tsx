type PureCounterProps = {
    count: number
}

export const PureCounter = ({ count }: PureCounterProps) => {
    return (
        <>
            <p>Count:</p>
            <p>{count}</p>
        </>
    )
}

export default PureCounter