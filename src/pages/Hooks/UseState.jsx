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
            <p> use State</p>
            <h3> What is useSTate?</h3>
            <p> useState ia a react hook to manage state in functional components</p>
            <p> state = data that changes and re-renders UI </p>

            <p> use state example</p>
            <button onClick={() => setCount(count + 1)}> Increment</button >

            <p>{count}</p>

            <p> we can't update "count" as that is immumtable state

                count → read-only value
                setCount → only way to update it
            </p>
            <p>
                What happens if you do this?
                count = count + 1;

                React won’t detect change
                UI won’t update
                Breaks React’s internal system
            </p>
            <p>
                {`setCount(prev => prev + 1);`}

                👉 Step by step:

                React takes current value (say 0)
                Passes it as prev
                Your function runs → prev + 1
                New value becomes 1
            </p>
            <p>
                setCount(count + 1);

                👉 This works… BUT can cause bugs in some cases
            </p>
            <p>
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

            <h2>
                Types of State
            </h2>
            <ul>
                <li>
                    <p>Primitive</p>
                    <pre>
                        const [name, setName] = useState("");
                        const [count, setCount] = useState(0);
                        const[isOpen, setIsopen] = useState(false);
                    </pre>

                </li>
                <li>
                    <p>Object State</p>
                    <pre>
                        const [user, setUser] = useState(&#123; name: "", age: 0 &#125;);
                        setUser(&#123; ...user, name: "john" &#125;);
                    </pre>
                </li>
            </ul>

            <ul>
                <h3>Code Template</h3>
                <li>
                    <p>Toggle Template</p>
                    <pre><code>
                        {` const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen((prev) =>; !prev); `}
                    </code></pre>
                </li>
                <li>
                    <p> Form Input</p>
                    <pre>
                        <code>
                            {formInput}
                        </code>
                    </pre>

                    <pre>
                        <code>
                            &lt;button onClick=&#123;() =&gt; handleClick(5)&#125;&gt;&lt;/button&gt;

                            onClick=&#123;handleClick(5)&#125; ❌ (runs immediately)

                            Alternative (when no arguments)
                        </code>
                    </pre>

                    If no arguments needed:

                    <pre><code>
                        &lt;button onClick=&#123;increment&#125;&gt;&lt;/button&gt;
                    </code></pre>
                    <p>
                        Summary
                        <pre><code>
                            onClick=&#123;fn&#125; → pass function ✅
                            onClick=&#123;fn()&#125; → execute immediately ❌
                            onClick=&#123;() =&gt; fn()&#125; → safe execution on click ✅
                        </code></pre>
                    </p>
                </li>
                <li>
                    <p>Counter</p>
                    <pre>
                        <pre><code>
                            const [count, setCounter] = useState(0);

                            &lt;button onClick=&#123;() =&gt; setCount(prev =&gt; prev + 1)&#125;&gt;
                            Increment
                            &lt;/button&gt;
                        </code></pre>
                    </pre>
                </li>
                <li>
                    <p>Object Update</p>
                    {/* const [user, setUser] = useState({name: "", age: 0 });

                    setUser((prev) => ({
                        ...prev,
                        name: "John",
                    })); */}
                </li>
                <li>
                    <p>Array Add / Remove</p>
                    {/* // Add
                    setItems((prev) => [...prev, newItem]);

                    // Remove
                    setItems((prev) => prev.filter((item) => item !== id)); */}

                </li>
            </ul>
            <p>
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