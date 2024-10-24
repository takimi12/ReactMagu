import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { OrdersId } from "./components/week3.2.2/OrdersId";
import { Orders } from "./components/week3.2.2/Orders";
import { Clients } from "./components/week3.2.1/Clients";
import { ClientsId } from "./components/week3.2.1/Clientsid";
import { ClientsAdds } from "./components/week3.1.1/componnts/ClientsAdd";
import { ClientsIdEdit } from "./components/week3.2.1/ClientsIdEdit";
import {Invoices} from "./components/week3.1.1/componnts/Invoices"
import { Components } from "./components/App";
import { Form } from "./components/week3.1.2/Form";
import { OrdersAdd } from "./components/week3.2.2/OrdersAdd";
  

import { ChildrenBusJSX } from "./components/week2.3/ChildrenBus";
import { Formiks } from "./components/forms/formik/formik";
import { FakeRegisterComponent } from "./components/week3.1.4/RegisterComponent";
import { HookFormWatch } from "./components/forms/hookForm/ReactHookFormWatch";
import { ReactHookForm } from "./components/forms/hookForm/ReactHookForm";
import { List } from "./components/komunikacjaAPI/SimpleGet/List";
import { TodoApp } from "./components/komunikacjaAPI/FullApi/TodoApp";
import { Tanstack } from "./components/TanstackQuery/[1]Pobranie danych i subdanych/Todos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TanstackRefetch } from "./components/TanstackQuery/Refetch + automatyczne pobranie danych/Todos";
import { MultipleTodos } from "./components/TanstackQuery/Wielokrotne zapytania/MultipleTodos";
import { TanstackMutation } from "./components/TanstackQuery/Mutacje/Todos";
import { Books } from "./components/TanstackQuery/Odcinek86/Books";
import {Users} from "./components/context/theory/Users"
import { CounterContextApp } from "./components/context/theory/Counter";
import { AppContext } from "./components/context/Exercises/App";
import { TodoAppKomunikacjaExercise2 } from "./components/komunikacjaAPI/exercise2/TodoApp";
import { MyVersionFullApi } from "./components/komunikacjaAPI/myVersion/myVersionFullApi";

const queryClient = new QueryClient();



function App() {
  return (
    <>

    {/* <QueryClientProvider client={queryClient}>
    <Tanstack />
    </QueryClientProvider> */}


<MyVersionFullApi />

    
{/* 
    <TodoApp /> */}

{/* 
<FakeRegisterComponent /> */}
{/* <Formiks /> */}
{/* <Components /> */}

{/* <BrowserRouter>
<Routes>
<Route path="/" element={<Components />} />
<Route path="/form" element={<Form />} />

<Route path="/clients" element={<Clients />} />
<Route path="/clients/add" element={<ClientsAdds />} />
<Route path="/clients/:id" element={<ClientsId />} />
<Route path="/clients/:id/edit" element={<ClientsIdEdit />} />
<Route path="/orders" element={<Orders />} />
<Route path="/orders/:id" element={<OrdersId />} />
<Route path="/orders/add" element={<OrdersAdd />} />
<Route path="/invoices" element={<Invoices />} />

<Route path='*' element={<Navigate to="/" />} />

</Routes>

</BrowserRouter> */}




</>
  );
}

export default App;
