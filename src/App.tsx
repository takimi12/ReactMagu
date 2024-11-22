
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Orders } from "./components/week3.2.2/Orders";
import { ClientsAdds } from "./components/week3.1.1/componnts/ClientsAdd";
import { ClientsIdEdit } from "./components/week3.2.1/ClientsIdEdit";
import { Components } from "./components/App";
import { Form } from "./components/week3.1.2/Form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Clients331 } from "./components/week3.3.2/Clients";
import { OrdersIdTanstack337 } from "./components/week3.3.7/OrdersId";
import { OrdersAddTanstackGetMutation336 } from "./components/week3.3.6/OrdersAddTanstack";
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
import { CheckingProtected } from "./components/week4.3/CheckinProtected";
import { AppRedux } from "./components/redux1/App";
import { MoneyManagerApp } from "./components/week6.2/App";
import { Provider } from "react-redux";
import store, {persistor} from "./components/week6.3/store";
import { OrdersPageWeek6 } from "./components/week6.3/Orders";
import { PersistGate } from 'redux-persist/integration/react';
import { CartWeek6 } from "./components/week6.3/Cart";
import { CartDetailsWeek6 } from "./components/week6.3/CartDetails";
import { ClientsIdTanstack331 } from "./components/week3.3.3 + week3.3.4/ClientId";
import { Nadmierne } from "./components/nadmierneRenderowanie/useMemo/MemoArrayInside";
import { NadmierneUsememo } from "./components/nadmierneRenderowanie/useMemo+useCallback/App";
import { NadmierneRenderowanieEx1 } from "./components/nadmierneRenderowanie/cwiczenia/exercise1/App";
import { RandomArraySorter } from "./components/nadmierneRenderowanie/homework/ex1/ex1";
import { TextInputParent } from "./components/nadmierneRenderowanie/homework/ex2/InputParent";
import { Appusecallback } from "./components/nadmierneRenderowanie/useCallback/App";
import { AllFormField } from "./components/Formularze/AllFormField";
import { ReactHookForm } from "./components/forms/hookForm/ReactHookForm";
import { ReactHookFormLearning } from "./components/Formularze/ReactHookForm/app";
import { AppYUP } from "./components/Formularze/Yup/app";



const queryClient = new QueryClient();

function App() {


  return (
    
<Provider store={store} >
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
 
            <Routes>
              <Route path="/" element={<Components />} />
              <Route path="/money" element={<MoneyManagerApp />} />

              <Route path="/form" element={<Form />} />
              
              <Route path="/clients" element={<Clients331 />} />
              <Route path="/clients/:id" element={<ClientsIdTanstack331 />} />
              
              <Route path="/clients/add" element={<ClientsAdds />} />
              <Route path="/nadmierne" element={<Appusecallback />} />
              <Route path="/formularze" element={<AllFormField />} />
              <Route path="/nadmierneUsememo" element={<NadmierneUsememo />} />


              {/* <Route path="/clients/:id" element={<ClientsIdTanstackMUI />} /> */}
              <Route path="/clients/:id/edit" element={<ClientsIdEdit />} />

              <Route path="/register" element={<FakeRegisterComponentContext />} />

              <Route path="/orders" element={<OrdersPageWeek6 />} />
              <Route path="/hook" element={<ReactHookFormLearning/>} />
              <Route path="/yup" element={<AppYUP/>} />

              <Route path="/week6" element={<CartWeek6 />} />
              <Route path="/week6/:id" element={<CartDetailsWeek6 />} />
              
              
              
              <Route path="/orders/:id" element={<OrdersIdTanstack337 />} />
              <Route path="/orders/add" element={<OrdersAddTanstackGetMutation336 />} />
              <Route path="/ContextWeek45" element={<ContextWeek45 />} />
              <Route path="/switcher" element={<SwitcherMy/>} />
              <Route path="/infoLogin" element={<UserProviderInfoDetails/>} />
              <Route path="/invoices" element={<CheckingProtected/>} />

              <Route path="/switcher" element={<SwitcherMy/>} />
              
              
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
    
          
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </BrowserRouter>


      </QueryClientProvider>
      </Provider>
   );
}

export default App;