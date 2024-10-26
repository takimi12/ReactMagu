import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { OrdersId } from "./components/week3.2.2/OrdersId";
import { Orders } from "./components/week3.2.2/Orders";
import { Clients } from "./components/week3.2.1/Clients";
import { ClientsId } from "./components/week3.2.1/Clientsid";
import { ClientsAdds } from "./components/week3.1.1/componnts/ClientsAdd";
import { ClientsIdEdit } from "./components/week3.2.1/ClientsIdEdit";
import { Invoices } from "./components/week3.1.1/componnts/Invoices";
import { Components } from "./components/App";
import { Form } from "./components/week3.1.2/Form";
import { OrdersAdd } from "./components/week3.2.2/OrdersAdd";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Clients33 } from "./components/week3.3/Clients";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Components />} />
          <Route path="/form" element={<Form />} />
          <Route path="/clients" element={<Clients33 />} />
          <Route path="/clients/add" element={<ClientsAdds />} />
          <Route path="/clients/:id" element={<ClientsId />} />
          <Route path="/clients/:id/edit" element={<ClientsIdEdit />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrdersId />} />
          <Route path="/orders/add" element={<OrdersAdd />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>


      {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App;
