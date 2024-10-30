
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
import { Clients33 } from "./components/week3.3.2/Clients";
import { OrdersIdTanstack } from "./components/week3.3.7/OrdersId";
import { OrdersAddTanstack } from "./components/week3.3.5/OrdersAddTanstack";
import { OrdersAddTanstackGetMutation } from "./components/week3.3.6/OrdersAddTanstack";
import { ClientsIdTanstack } from "./components/week3.3.3 + week3.3.4/ClientId";
import { HeaderContext } from "./components/context/exercise1/Header";
import { FooterContext } from "./components/context/exercise1/Footer";
import { ConfigContext } from "./components/context/exercise1/ConfigContext";

import { AppContext2 } from "./components/context/exercise2/App";
import { FakeRegisterComponentContext } from "./components/Week4.1/FakeRegisterComponent";
import { UserDetails } from "./components/Week4.2/UserDetails";
import { CheckingUserDetails } from "./components/Week4.2/CheckingUserDetails";
import {ProtectedWrapper} from "./components/Week4.3/ProtectedWraper";
import { CheckProtectedInvoices } from "./components/Week4.3/CheckinProtected";
import { UserProvider } from "./components/Week4.1/UserContext";
import { InvoicesContext } from "./components/Week4.3/Invoices";


import { Suspense, lazy } from 'react';
import { ErrorBoundary } from "react-error-boundary";


const queryClient = new QueryClient();

function App() {
  return (

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route path="/" element={<Components />} />
              <Route path="/form" element={<Form />} />
              <Route path="/clients" element={<Clients33 />} />
              <Route path="/clients/add" element={<ClientsAdds />} />
              <Route path="/clients/:id" element={<ClientsIdTanstack />} />
              <Route path="/clients/:id/edit" element={<ClientsIdEdit />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/register" element={<FakeRegisterComponentContext />} />
              <Route path="/orders/:id" element={<OrdersIdTanstack />} />
              <Route path="/orders/add" element={<OrdersAddTanstackGetMutation />} />
              
              <Route
                path="/invoices"
                element={
                  <UserProvider>
                    <ProtectedWrapper>
                      <InvoicesContext />
                    </ProtectedWrapper>
                  </UserProvider>
                }
              />
              
              <Route path="/personalData" element={<CheckingUserDetails />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
          
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </BrowserRouter>
      </QueryClientProvider>
   );
}

export default App;