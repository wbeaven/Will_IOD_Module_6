function Greeting({ name = "World", children }) {
    return (
        <>
            <h1>Hello {name}!</h1>
            {children && <div>{children}</div>}
        </>
    );
}

export default Greeting;
