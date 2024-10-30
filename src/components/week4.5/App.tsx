import { NotificationProvider } from './NotificationContext';
import { AddClientComponent } from './AddCustomer';
import { AddOrderComponent } from './AddCustomer';

export const ContextWeek45 =() =>{

return(
    <>
    <NotificationProvider>
 <AddClientComponent />
 <AddOrderComponent />
    </NotificationProvider>,
    </>
);
}