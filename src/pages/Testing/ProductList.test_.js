// import { render, screen } from "@testing-library/react";
// import axios from "axios";
// import ProductList from "./ProductList";

// jest.mock("axios");
// test("renders products from API",
//     async () => {
//         axios.get.mockResolvedValue({
//             data: [
//                 { id: 1, name: "iPhone" },
//                 { id: 2, name: "Laptop" }
//             ],
//         });

//         render(<ProductList />);

//         const item1 = await screen.findByText("iphone");
//         const item2 = await screen.findByText("Laptop");

//         expect(item1).toBeInTheDocument();
//         expect(item2).toBeInTheDocument();
//     });