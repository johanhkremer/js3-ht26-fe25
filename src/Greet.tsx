type GreetingProp = {
    name: string
    age: number
}

function Greeting({ name, age }: GreetingProp) {
    return (
        <>
            <h2>Hej {name}</h2>
            <p>Jag är {age} år gammal</p>
        </>
    )
}

export default Greeting