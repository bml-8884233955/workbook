import React, { useCallback, useState } from "react";


const ProductItem = React.memo(({ product, onAdd }) => {
    console.log("Rendered:", product.name);
    return (
        <>
            <div>
                <p>{product.page}</p>
                <button onClick={() => onAdd(product)}>Add to Cart</button>
            </div>

        </>
    );

});


function UseCallback() {

    const dependencies = [];
    //Basic Syntax
    const memoizedFunction = useCallback(() => {
        //function logic

    }, [dependencies]);



    const reactClickFunction = `function Parent() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}`
    //Saem functions prevents re-render
    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);




    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: "iPhone" },
        { id: 2, name: "Laptop" },
        { id: 3, name: "Headphones" },
    ]

    const addToCart = useCallback((item) => {
        setCart([...cart, item]);
    }, []);





    return (
        <>
            <h2> useCallback</h2>
            <h3 className="text-2xl font-bold text-gray-700"> Why useCallback</h3>
            <p className="text-base text-gray-700 mb-4"> In react , functions are recreated on every render:</p>
            this causes
            <ul>
                <li>
                    unnecessary re-renders
                </li>
                <li>
                    performance issues
                </li>
            </ul> Without useCallback child-renders everytime
            {reactClickFunction}
            <h3>Important points</h3>
            <ul>
                <li>
                    1. Memoizes function (not value)
                    Opposite of useMemo
                </li>
                <li>
                    2.Works with dependency array
                    {`useCallback(() => {}, [value]);`}
                </li>
                <li>
                    3. Used with React.memo
                    Most effective when used together
                </li>
                <li>
                    4. Avoid unnecessary re-renders
                    Expecially in child components
                </li>
            </ul>
            <p>  Code Templates 🚀</p>

            <p>✅ Basic Template
                {`const handleClick = useCallback(() => {
                console.log("Click");
}, []);`}
            </p>
            <p>
                ✅ With Dependency
                {`const handleClick = useCallback(() => {
                console.log(count);
}, [count]);`}
            </p>
            <p>
                ✅ Passing to Child
                {` <Child onClick={handleClick} /> `}
            </p>
            <p>
                ✅ With React.memo
                {`const Child = React.memo(({onClick}) => {
                console.log("Child rendered");
            return <button onClick={onClick}>Click</button>;
});`}
            </p>
            <p>
                7. useMemo vs useCallback ⭐

                Feature	useMemo	useCallback

                Returns	Value	Function
                Use case	Expensive calc	Prevent re-render
            </p>

            <p>8. Common Interview Questions</p>
            <ul>
                <li>
                    ❓ Q1: What is useCallback?

                    👉 Hook to memoize functions.

                </li>
                <li>
                    ❓ Q2: Why use it?

                    👉 To prevent unnecessary re-renders.
                </li>
                <li>
                    ❓ Q3: Difference from useMemo?

                    👉 useMemo → value
                    useCallback → function
                </li>
                <li>
                    ❓ Q4: Does it improve performance always?

                    👉 ❌ No, only in specific cases
                </li>
                <li>
                    ❓ Q5: When to use it?

                    👉 When passing functions to child components
                </li>
            </ul>
            <p>9. Common Mistakes ❌</p>

            <ul>
                <li>
                    ❌ Overusing useCallback
                    {`const fn = useCallback(() => count + 1, [count]);`} // ❌ unnecessary
                </li>
                <li>
                    ❌ Missing dependencies
                    {`useCallback(() => {
                console.log(count);
}, []); `}// ❌ bug
                </li>
                <li>
                    ❌ Using without React.memo

                    👉 No benefit if child always re-renders
                </li>
            </ul>

            <p> 10. Real-Life Use Cases 🔥</p>

            <ul>
                <li>
                    ✅ Button handlers in large apps
                    ✅ Passing callbacks to child components
                    ✅ Preventing re-renders in lists
                    ✅ Optimizing forms
                </li>
            </ul>

            <p>
                11. Cheat Sheet 🚀
                {`useCallback(() => fn, [deps])`}

                Memoizes function
                Prevents re-creation
                Used with React.memo
            </p>

            <p>12. Best Practices ⭐</p>
            <ul>
                <li>
                    ✔ Use only when needed
                    ✔ Combine with React.memo
                    ✔ Always include dependencies
                    ✔ Avoid premature optimization

                </li>
            </ul>

            <p>Real Example (Best Pattern) 🔥</p>
            {`const handleAdd = useCallback(() => {
                dispatch({ type: "ADD_ITEM" });
}, [dispatch]);

            return <Child onAdd={handleAdd} />;`}
            <h4> Final Summary</h4>
            <ul>
                <li>
                    👉 useCallback = memoize function
                    👉 Prevents unnecessary re-renders
                    👉 Works best with React.memo
                    👉 Don’t overuse
                </li>
            </ul>



            <h2> Products</h2>
            {products.map((p) => (
                <> <ProductItem key={p.id} product={p} onAdd={addToCart} /> </>
            ))}




        </>
    )
}

export default UseCallback;