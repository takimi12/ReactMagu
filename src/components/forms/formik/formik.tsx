import { Formik, Form, Field, FormikHelpers } from "formik";
import { signupSchema } from "./YupSchema";

// Typ dla wartości formularza
interface FormValues {
    name: string;
    email: string;
    password: string;
    cpassword: string;
}

// Wartości początkowe formularza
const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
};

export const Formiks= () => {

    const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        actions.resetForm();  // Resetowanie formularza
    };

    return (
        <div className='app'>
            <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className='signup_form'>
                        {/* Pole imię */}
                        <label htmlFor='name'>Name</label>
                        <Field type='text' name='name' />
                        <div className='error_container'>
                            {errors.name && touched.name && (
                                <p className='form_error'>{errors.name}</p>
                            )}
                        </div>

                        {/* Pole email */}
                        <label htmlFor='email'>Email</label>
                        <Field type='email' name='email' />
                        <div className='error_container'>
                            {errors.email && touched.email && (
                                <p className='form_error'>{errors.email}</p>
                            )}
                        </div>

                        {/* Pole hasło */}
                        <label htmlFor='password'>Password</label>
                        <Field type='password' name='password' />
                        <div className='error_container'>
                            {errors.password && touched.password && (
                                <p className='form_error'>{errors.password}</p>
                            )}
                        </div>

                        {/* Pole potwierdzenia hasła */}
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <Field type='password' name='cpassword' />
                        <div className='error_container'>
                            {errors.cpassword && touched.cpassword && (
                                <p className='form_error'>{errors.cpassword}</p>
                            )}
                        </div>

                        {/* Przycisk wysyłania */}
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
