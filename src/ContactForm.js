// import {useFormik} from "formik";
import {Formik, Form, Field, ErrorMessage, useFormikContext} from "formik";
import {object, string, number} from 'yup';


const EMAIL_TEMPLATE = /^[a-z0-9]+@[a-z]{2,}\.[a-z]{2,}$/i;
const PHONE_TEMPLATE = /^380\d{9}$/;
const validationSchema = object({
    firstName: string()
        .min(3, 'must be > 3 symbols and <= 10')
        .max(10)
        .required('Required'),
    email: string()
        .email()
        .matches(EMAIL_TEMPLATE, 'must be format qwerty@go.co')
        .required('Required'),
    phone: string()
        // .number()
        // .positive()
        // .integer()
        .matches(PHONE_TEMPLATE, 'must be start from 380 and contain 12 numbers')
        .required('Required'),
})

export default function ContactForm() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                phone: '380',
            }}
            onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                viewResult(values)
            }}
            validationSchema={validationSchema}
        >
            <Form>
                <div>
                    <lable htmlFor="firstName">First name</lable>
                    <Field name="firstName" type="text"/>
                    <ErrorMessage component="span" name="firstName"/>
                </div>
                <div>
                    <lable htmlFor="email">Email</lable>
                    <Field name="email" type="email"/>
                    <ErrorMessage component="span" name="email"/>
                </div>
                <div>
                    <lable htmlFor="phone">Phone</lable>
                    <Field name="phone" type="text"/>
                    <ErrorMessage component="span" name="phone"/>
                </div>
                <SaveBtn />
                {/*<ViewResult />*/}
            </Form>
        </Formik>
    );
}

function SaveBtn() {
    const {isValid} = useFormikContext();
    return <button type="submit" disabled={!isValid}>Send</button>
}

function viewResult(values) {
   return alert(JSON.stringify(values, null, 2));
}


// Створити форму за допомогою форми з наступними полями:
//     ім'я, обов'язкове для заповнення;
// електронна пошта, обов'язкове для заповнення, формат email;
// телефон, обов'язкове до заповнення, тільки цифри та довжина 12.
// Провалідувати всі поля і вивести повідомлення у відповідь


//  Formic+yup
// export default function ContactForm() {
//     const formik = useFormik({
//         initialValues: {
//             firstName: 'ff',
//             email: 'ee',
//             phone: '55',
//         },
//         onSubmit: (values) => {
//             console.log(values)
//         },
//         validationSchema,
//
//         // ONLY formic
//         // validate: (values) => {
//         //     const errors = {}
//         //
//         //     if (values.firstName.length <= 3) {
//         //         errors.firstName = 'must be > 3 symbols'
//         //     }
//         //     if (!EMAIL_TEMPLATE.test(values.email)) {
//         //         errors.email = 'must be format qwerty@go.co'
//         //     }
//         //     if (!PHONE_TEMPLATE.test(values.phone)) {
//         //         errors.phone = 'must be start from 380 and contain 12 numbers'
//         //     }
//         //
//         //     return errors
//         // },
//     });
//     console.log(formik)
//
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <lable htmlFor="firstName">First name</lable>
//                 <input
//                     id="firstName"
//                     type="text"
//                     value={formik.values.firstName}
//                     onChange={formik.handleChange}
//                 />
//                 <ValidationError>{formik.errors.firstName}</ValidationError>
//             </div>
//             <div>
//                 <lable htmlFor="email">Email</lable>
//                 <input id="email" type="email"
//                        value={formik.values.email}
//                        onChange={formik.handleChange}
//                 />
//                 <ValidationError>{formik.errors.email}</ValidationError>
//
//             </div>
//             <div>
//                 <lable htmlFor="phone">Phone</lable>
//                 <input id="phone" type="text"
//                        value={formik.values.phone}
//                        onChange={formik.handleChange}
//                 />
//                 <ValidationError>{formik.errors.phone}</ValidationError>
//
//             </div>
//             <button disabled={!formik.isValid} type="button">Send</button>
//         </form>
//     );
// }
//
// function ValidationError({children}) {
//     return <span style={{color: 'red'}}>{children}</span>
// }
