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
            <p> Props (properties) are inputs passed from a parent component to a child component.</p>

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

            <h3>What is reconciliation ? </h3>
            <p>Reconciliation is React’s process of comparing the old Virtual DOM with the new Virtual DOM and updating only the changed parts in the real DOM.</p>

            <h3>Children Prop</h3>
            <p>In React, children is a special prop that represents the content placed inside a component.



                <pre>
                    <code>
                        {`
                            <Component>
                                Some content
                            </Component>
                        `}
                    </code>
                </pre>
                Everything inside the component tags becomes children.
            </p>


            <h3>🔥 Why children Is Useful</h3>

            It makes components:

            reusable
            flexible
            composable

            Instead of hardcoding content, you pass content dynamically.

            🧩 Real-World Example
            Modal Component
            <pre>
                <code>
                    {`
                    function Modal({children}) {
                    return (
                    <div className="bg-white p-6 rounded">
                    {children}
                    </div>
                    )
                }
                    `}

                </code>
            </pre>


            Usage:
            <pre>
                <code>
                    {`
                <Modal>
                    <h2>Delete Item</h2>
                    <p>Are you sure?</p>
                    <button>Confirm</button>
                </Modal>

            `}
                </code>
            </pre>


            ⚛️ Destructuring children

            Instead of:
            <pre>
                <code>
                    {`
             function Card(props) {
                return <div>{props.children}</div>
            }
            `}
                </code>
            </pre>




            Usually we write:
            <pre>
                <code>
                    {`
                function Card({children}) {
                    return <div>{children}</div>
                }
            `}
                </code>
            </pre>



            Cleaner and more common.

            📋 children Can Be Anything

            It can contain:

            text
            HTML elements
            components
            arrays
            functions

            Example:
            <pre>
                <code>
                    {`
                <Card>
                    <Button />
                </Card>
            `}
                </code>
            </pre>


            🧠 Think of It Like a Slot
            <pre>
                <code>
                    {`
             <Card>
                ↓
                children goes here
            </Card>
            `}
                </code>
            </pre>



            Component template:
            <pre>
                <code>
                    {`
             <div>
                {children}
            </div>
            `}
                </code>
            </pre>


            ✅ One-Line Summary

            children is a special React prop used to pass content inside a component dynamically.


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