function Greeting({name = "World", children}) {
    return (
        <>
            <h1>Hello {name}!</h1>
            <p>{children}</p>
        </>
    )
}

export default Greeting;