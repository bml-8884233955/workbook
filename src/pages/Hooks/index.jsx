import { Outlet, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { UserContext } from "./userContext";

function Index() {
    const navigate = useNavigate();
    const navigateToPage = (path) => {
        navigate(path);
    }
    const cardObj = [{
        title: '',
        description: '',
        url: ''
    }]

    const userData = {
        user: { name: "Ramesh", role: "Admin" },
        isLoggedIn: true
    };
    return (
        <>
            <p>Hooks</p>
            <div style={{ display: "flex", gap: "20px" }}>
                <Card title="useEffect" description="Learn useEffect" cardClicked={() => navigateToPage("/hooks/use-effect")} />
                <Card title="useState" description="Learn useState" cardClicked={() => navigateToPage("/hooks/use-state")} />


                <Card title="useContext" description="Learn useContext" cardClicked={() => navigateToPage("/hooks/use-context")} />

                <Card title="useRef" description="Learn useRef" cardClicked={() => navigateToPage("/hooks/use-ref")} />
                <Card title="useMemo" description="Learn useMemo" cardClicked={() => navigateToPage("/hooks/use-memo")} />
                <Card title="useCallback" description="Learn useCallback" cardClicked={() => navigateToPage("/hooks/use-callback")} />
                <Card title="customHook" description="Learn customHook" cardClicked={() => navigateToPage("/hooks/use-customhook")} />
                <Card title="useReducer" description="Learn useReducer" cardClicked={() => navigateToPage("/hooks/use-reducer")} />
            </div>
            <UserContext.Provider value={userData}>
                <Outlet />
            </UserContext.Provider>

        </>
    )
}
export default Index;