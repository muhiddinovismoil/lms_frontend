import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import QueryProviderComponent from "./providers/QueryProviderComponent.tsx";
import AntProvider from "./providers/AntProvider.tsx";
createRoot(document.getElementById("root")!).render(
    <QueryProviderComponent>
        <AntProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AntProvider>
    </QueryProviderComponent>
);
