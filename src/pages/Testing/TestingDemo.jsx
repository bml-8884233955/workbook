import Button from "./Button";
import Cart from "./Cart";
import Counter from "./Counter";
import InputBox from "./InputBox";
import ProductList from "./ProductList";

const TestingDemo = () => {
    return (
        <>
            <h2> Testing in React </h2>
            <h3>What is Testing in React ?</h3>
            <p> Testing means checking if UI and Logic  works correctly</p>
            <h3>Types of Testing</h3>
            <ul>
                <li>
                    <p>Unit Testing </p>
                    <p>Test a single component or function
                        <li> Button Renders</li>
                        <li>Function returns correct value</li>
                    </p>

                </li>

                <li>
                    <p>Integration Testing</p>
                    <p>Test how components work together
                        example Add to Cart - Cart updates
                    </p>
                </li>

                <li>
                    <p>End to End Testing</p>
                    <p>Test full user flow</p>
                    <p>Example  : Login - Add product - Checkout </p>
                </li>
            </ul>

            <h2> Tools Used</h2>
            <div>
                <li> Jest - test runner</li>
                <li> React Testimg Library (RTL) - test UI</li>
            </div>


            <h3> Testing components</h3>
            <div>
                <Button onClick={() => console.log("clicked")} />
                <InputBox />
                <Counter />
                <ProductList />
                <Cart />
            </div>

        </>
    )
}

export default TestingDemo;