import { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Card from "../../components/Card";

function Index() {

    const navigate = useNavigate();
    const navigateToPage = (path) => {
        navigate(path);
    }


    return (
        <>
            <h2> Form</h2>
            <p> What is React Form</p>
            <ul>
                <li>
                    collect user input (name, email, password,etc.)
                </li>
                <li>
                    Store data in state
                </li>
                <li>Process/submit data</li>
            </ul>
            <pre>
                Input - Event(onChange) - State - UI Update
            </pre>

            <div style={{ display: "flex", gap: "20px" }}>
                <Card title="Controlled Form" description="Controlled Form" cardClicked={() => navigateToPage("/forms/controled-form")} />
                <Card title="Uncontrolled Form" description="Un-controlled Form" cardClicked={() => navigateToPage("/forms/uncontroled-form")} />
                <Card title="Login Form " description="Form Validation controlled" cardClicked={() => navigateToPage("/forms/login-form")} />
                <Card title="Payment Form" description="React Hook Form" cardClicked={() => navigateToPage("/forms/payment-form")} />
            </div >
            <Outlet />


            <p className="border-t-4 mt-6 pt-6 border-blue-500 p-4" >React form are usually controlled components,
                React controls input values using state
            </p>


            <h3>
                React Form Libraries
            </h3>
            <li> React Hook Form</li>
            <li>Formik</li>
            <h3> Why React Hook Form </h3>
            <li>Uses uncomtrolled internally</li>
            <li>Less re-renders</li>
            <li>Better Performance</li>
            <div className="w-full max-w-2xl border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="flex bg-gray-100 border-b border-gray-200 font-bold text-gray-700">
                    <div className="flex-1 p-3 border-r border-gray-200">Feature</div>
                    <div className="flex-1 p-3 border-r border-gray-200">Controlled</div>
                    <div className="flex-1 p-3">Uncontrolled</div>
                </div>

                <div className="flex border-b border-gray-200 hover:bg-gray-50 transition">
                    <div className="flex-1 p-3 font-medium bg-gray-50/50 border-r border-gray-200 text-gray-600">Hook/Tool</div>
                    <div className="flex-1 p-3 border-r border-gray-200"><code>useState</code></div>
                    <div className="flex-1 p-3"><code>useRef</code></div>
                </div>

                <div className="flex border-b border-gray-200 hover:bg-gray-50 transition">
                    <div className="flex-1 p-3 font-medium bg-gray-50/50 border-r border-gray-200 text-gray-600">Performance</div>
                    <div className="flex-1 p-3 border-r border-gray-200">Re-renders on change</div>
                    <div className="flex-1 p-3">No re-renders</div>
                </div>

                <div className="flex border-b border-gray-200 hover:bg-gray-50 transition">
                    <div className="flex-1 p-3 font-medium bg-gray-50/50 border-r border-gray-200 text-gray-600">Validation</div>
                    <div className="flex-1 p-3 border-r border-gray-200 text-green-600 font-medium">Easy (Real-time)</div>
                    <div className="flex-1 p-3 text-amber-600">Hard (Manual)</div>
                </div>

                <div className="flex hover:bg-gray-50 transition">
                    <div className="flex-1 p-3 font-medium bg-gray-50/50 border-r border-gray-200 text-gray-600">Usage</div>
                    <div className="flex-1 p-3 border-r border-gray-200 font-semibold text-blue-600">Preferred</div>
                    <div className="flex-1 p-3 italic text-gray-500">Limited use cases</div>
                </div>
            </div>

            <h3>Questions</h3>

            <ul>
                <li>
                    Questions
                    🔹 Basic
                    What is a controlled component?
                    Why use useState in forms?
                </li>
                <li>
                    🔹 Intermediate
                    Controlled vs uncontrolled?
                    How to handle multiple inputs?
                </li>
                <li>
                    🔹 Advanced
                    How to optimize large forms?
                    Why React Hook Form is better?
                </li>
            </ul >


            <h4>
                Final Summary
            </h4>
            <ul>
                <li>Controlled Form = most important</li>
                <li>useState + onChange = core</li>
                <li>hanldeSubmit + preventDefault</li>
                <li>USe one State Object</li>
                <li>Validate Inputs</li>
                <li>Use libraries in real apps</li>
            </ul>
        </>


    )
}

export default Index;