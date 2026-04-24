function User({ name, age }) {
    return (
        <>
            <p>{name} is {age} years old</p>
        </>
    )
}


function Child({ onClick }) {
    return <button onClick={onClick}>Click</button>;

}

function Parent() {
    const handleClick = () => alert("clicked");
    return <Child onClick={handleClick} />;
}

function Card({ children }) {
    return <div> {children}</div>;
}

function Index() {
    return (
        <>
            <h1 className="mb-4 mt-4">Props</h1>
            <h2> What are Props in React?</h2>
            <p> Props (properties) are inputs passed froma parent component to a child component.</p>

            <p> They make components reusable and dynamic</p>
            <h3>Key Characteristics</h3>
            <ul>
                <li>
                    Read-only (immutable) → child cannot modify props
                </li>
                <li>
                    Passed top → down (one-way data flow)
                </li>
                <li>
                    Can pass any data type (string, number, array, object, function, JSX)
                </li>
                <li>
                    Used for component communication
                </li>
            </ul>

            <h2>What is reconciliation </h2>
            <p></p>
            <User name="John" age={25} />
            <Parent />
            <Card>
                <h2> Title</h2>
                <p>Description</p>
            </Card>
        </>
    )
}



export default Index;