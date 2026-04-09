import { Outlet, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { UserContext } from "./userContext";
import { useState } from "react";

function Index() {
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();
    const cardClicked = (id, path) => {
        setSelectedCard(id);
        navigate(path);
    }
    // const cardObj = [{
    //     title: '',
    //     description: '',
    //     url: ''
    // }]

    const userData = {
        user: { name: "Ramesh", role: "Admin" },
        isLoggedIn: true
    };
    return (
        <>
            <h1 className="mb-4 mt-4">Hooks</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                <Card title="useState" description="Learn useState" cardClicked={() => cardClicked(1, "/hooks/use-state")} isSelected={selectedCard === 1} />
                <Card title="useEffect" description="Learn useEffect" cardClicked={() => cardClicked(2, "/hooks/use-effect")} isSelected={selectedCard === 2} />
                <Card title="useRef" description="Learn useRef" cardClicked={() => cardClicked(3, "/hooks/use-ref")} isSelected={selectedCard === 3} />
                <Card title="useMemo" description="Learn useMemo" cardClicked={() => cardClicked(4, "/hooks/use-memo")} isSelected={selectedCard === 4} />
                <Card title="useCallback" description="Learn useCallback" cardClicked={() => cardClicked(6, "/hooks/use-callback")} isSelected={selectedCard === 6} />
                <Card title="useContext" description="Learn useContext" cardClicked={() => cardClicked(5, "/hooks/use-context")} isSelected={selectedCard === 5} />
                <Card title="customHook" description="Learn customHook" cardClicked={() => cardClicked(7, "/hooks/use-customhook")} isSelected={selectedCard === 7} />
                <Card title="useReducer" description="Learn useReducer" cardClicked={() => cardClicked(8, "/hooks/use-reducer")} isSelected={selectedCard === 8} />
            </div>
            <UserContext.Provider value={userData}>
                <Outlet />
            </UserContext.Provider>

        </>
    )
}
export default Index;