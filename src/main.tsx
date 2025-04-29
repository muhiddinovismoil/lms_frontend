import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import QueryProviderComponent from "./providers/QueryProviderComponent.tsx";
import AntProvider from "./providers/ant-provider.tsx";
createRoot(document.getElementById("root")!).render(
    <QueryProviderComponent>
        <AntProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AntProvider>
    </QueryProviderComponent>
);
