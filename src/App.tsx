
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Orders } from "./components/week3.2.2/Orders";
import { ClientsAdds } from "./components/week3.1.1/componnts/ClientsAdd";
import { ClientsIdEdit } from "./components/week3.2.1/ClientsIdEdit";
import { Components } from "./components/App";
import { Form } from "./components/week3.1.2/Form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Clients33 } from "./components/week3.3.2/Clients";
import { OrdersIdTanstack } from "./components/week3.3.7/OrdersId";
import { OrdersAddTanstackGetMutation } from "./components/week3.3.6/OrdersAddTanstack";
import { FakeRegisterComponentContext } from "./components/week4.1/FakeRegisterComponent";
import { UserProviderInfoDetails } from "./components/week4.2/CheckingUserDetails";
import {ProtectedWrapper} from "./components/week4.3/ProtectedWraper";
import { InvoicesContext } from "./components/week4.3/Invoices";
import { Suspense, lazy, useState } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { ContextWeek45 } from "./components/week4.5/NotificationProvider";
import { ClientsIdTanstackMUI } from "./components/week4.6/ClientId";
import { AppSwitcher } from "./components/week4.7 z localStorage1/Provider";
import { SwitcherMy } from "./components/week4.7my/Switcher";
import { ThemeContext } from "./components/week4.7my/Context";
import { SwitcherMyStorage } from "./components/week4.7my/Switcher+LocalStorage";
import { CheckingProtected } from "./components/week4.3/CheckinProtected";
import { AppRedux } from "./components/redux1/App";

const queryClient = new QueryClient();

function App() {

  return (
    

    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense>
            <Routes>
              {/* <Route path="/" element={<Components />} /> */}

              <Route path="/" element={<AppRedux />} />

              {/* <Route path="/form" element={<Form />} />
              <Route path="/clients" element={<Clients33 />} />
              <Route path="/clients/add" element={<ClientsAdds />} />
              <Route path="/clients/:id" element={<ClientsIdTanstackMUI />} />
              <Route path="/clients/:id/edit" element={<ClientsIdEdit />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/register" element={<FakeRegisterComponentContext />} />
              <Route path="/orders/:id" element={<OrdersIdTanstack />} />
              <Route path="/orders/add" element={<OrdersAddTanstackGetMutation />} />
              <Route path="/ContextWeek45" element={<ContextWeek45 />} />
              <Route path="/switcher" element={<SwitcherMyStorage/>} />
              <Route path="/infoLogin" element={<UserProviderInfoDetails/>} />
              <Route path="/invoices" element={<CheckingProtected/>} /> */}
              
              
              {/* <Route
                path="/invoices"
                element={
                  <UserProvider>
                    <ProtectedWrapper>
                      <InvoicesContext />
                    </ProtectedWrapper>
                  </UserProvider>
                }
              />
               */}
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