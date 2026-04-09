import { useState, useEffect } from "react";

function UseState() {



    const [count, setCount] = useState(0);

    const incrementCount = () => {
        // State causes re-render
        // setCount(1); // UI updates

        //state is asynchronous

        // setCount(prev => prev + 1);

    }
    console.log(count);

    useEffect(() => {
        console.log("count changed:", count);
    }, [count]);

    const formInput = `const [name, setName] = useState("");
                        < input value={name} onChange={(e) => setName(e.target.value)} />`


    return (
        <>
            <h2> What is useState?</h2>
            <p className="text-base text-gray-700 mb-4"> useState ia a react hook to manage state in functional components</p>
            <p className="text-base text-gray-700 mb-4"> state = data that changes and re-renders UI </p>

            <p className="text-base text-gray-700 mb-4"> use state example</p>
            <button onClick={() => setCount(count + 1)}> Increment</button >

            <p className="text-base text-gray-700 mb-4">{count}</p>

            <p className="text-base text-gray-700 mb-4"> we can't update "count" as that is immumtable state

                count → read-only value
                setCount → only way to update it
            </p>
            <p className="text-base text-gray-700 mb-4">
                What happens if you do this?
                count = count + 1;

                React won’t detect change
                UI won’t update
                Breaks React’s internal system
            </p>
            <p className="text-base text-gray-700 mb-4">
                {`setCount(prev => prev + 1);`}

                👉 Step by step:

                React takes current value (say 0)
                Passes it as prev
                Your function runs → prev + 1
                New value becomes 1
            </p>
            <p className="text-base text-gray-700 mb-4">
                setCount(count + 1);

                👉 This works… BUT can cause bugs in some cases
            </p>
            <p className="text-base text-gray-700 mb-4">
                setCount(count + 1);
                setCount(count + 1);

                👉 You expect: +2
                👉 But result: +1 only
            </p>
            <ul>
                <li>
                    1. State causes re-render
                    <pre>
                        setCount(1) // UI updates
                    </pre>
                </li>
                <li>
                    2.state is asynchronous
                    <pre>
                        setCount(count+1);
                        console.log(count) //old value !
                    </pre>

                </li>
                <li>
                    3. initial vlaue  runs once
                    <pre>
                        useState(0); // only first render
                    </pre>
                </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700">
                Types of State
            </h2>
            <ul>
                <li>
                    <p className="text-base text-gray-700 mb-4">Primitive</p>
                    <pre>
                        <code>
                            {`const [name, setName] = useState("");
const [count, setCount] = useState(0);
const[isOpen, setIsopen] = useState(false);`}
                        </code>
                    </pre>

                </li>
                <li>
                    <p className="text-base text-gray-700 mb-4">Object State</p>
                    <pre>
                        <p>const [user, setUser] = useState(&#123; name: "", age: 0 &#125;);</p>
                        <p>setUser(&#123; ...user, name: "john" &#125;);</p>
                    </pre>
                </li>
            </ul>

            <ul>
                <h3>Code Template</h3>
                <li>
                    <p className="text-base text-gray-700 mb-4">Toggle Template</p>
                    <pre><code>
                        {` const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen((prev) =>; !prev); `}
                    </code></pre>
                </li>
                <li>
                    <p className="text-base text-gray-700 mb-4"> Form Input</p>
                    <pre>
                        <code>
                            {formInput}
                        </code>
                    </pre>

                    <pre>
                        <code>
                            {`
                            <button onClick={() => handleClick(5)}</button>;

                            onClick= {handleClick(5)} ❌ (runs immediately)

                            Alternative (when no arguments)
                            `}
                        </code>
                    </pre>

                    If no arguments needed:

                    <pre><code>
                        {`<button onClick={increment}</button>;`}
                    </code></pre>
                    <p className="text-base text-gray-700 mb-4">
                        Summary
                        <pre><code>
                            {`
                            onClick={fn} → pass function ✅ 
                            onClick={fn()} → execute immediately ❌ 
                            onClick={() => fn()} → safe execution on click ✅
                        `}
                        </code></pre>
                    </p>
                </li>
                <li>
                    <p className="text-base text-gray-700 mb-4">Counter</p>
                    <pre>
                        <pre><code>
                            {`
                             const [count, setCounter] = useState(0);
                            const [count, setCounter] = useState(0); 
                            <button onClick={() => setCount(prev => prev + 1)}> Increment </button>
`}

                        </code></pre>
                    </pre>
                </li>
                <li>
                    <p className="text-base text-gray-700 mb-4">Object Update</p>

                    <pre><code>
                        {`
                        const [user, setUser] = useState({name: "", age: 0 });
                         setUser((prev) => ({
                        ...prev,
                        name: "John",
                    }));`}
                    </code></pre>
                </li>
                <li>
                    <p className="text-base text-gray-700 mb-4">Array Add / Remove</p>
                    {/* // Add
                    setItems((prev) => [...prev, newItem]);

                    // Remove
                    setItems((prev) => prev.filter((item) => item !== id)); */}

                </li>
            </ul >
            <p className="text-base text-gray-700 mb-4">
                10. Tips ⭐

                ✔ Use multiple small states instead of one big object
                ✔ Use functional updates when dependent on previous value
                ✔ Never mutate state directly
                ✔ Keep state minimal
                ✔ Use meaningful names

                🔹 11. When to Use useState

                👉 Use when:

                UI needs to update
                User interaction (click, input)
                Toggle / show-hide
                Form handling
                🔹 12. Real-Life Examples
                Counter
                Form inputs
                Modal open/close
                Dropdown toggle
                Todo list
                🔹 Final Summary

                👉 useState = manage dynamic data
                👉 Setter updates UI
                👉 Always immutable updates
                👉 Functional update = safe approach
            </p>
        </>
    )
}

export default UseState;