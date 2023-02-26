import {useFormik} from "formik";

const EMAIL_TEMPLATE = /^[a-z0-9]+@[a-z]{2}\.[a-z]{2}$/i;
const PHONE_TEMPLATE = /^380\d{9}$/;

export default function ContactForm() {
    const formik = useFormik({
        initialValues: {
            firstName: 'ff',
            email: 'ee',
            phone: '55',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: (values) => {
            const errors = {}

            if (values.firstName.length <= 3) {
                errors.firstName = 'must be > 3 symbols'
            }
            if (!EMAIL_TEMPLATE.test(values.email)) {
                errors.email = 'must be format qwerty@go.co'
            }
            if (!PHONE_TEMPLATE.test(values.phone)) {
                errors.phone = 'must started from 380 and contain 12 numbers'
            }

            return errors
        },
    });
    console.log(formik)

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <lable htmlFor="firstName">First name</lable>
                <input
                    id="firstName"
                    type="text"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />
                <ValidationError>{formik.errors.firstName}</ValidationError>
            </div>
            <div>
                <lable htmlFor="email">Email</lable>
                <input id="email" type="email"
                       value={formik.values.email}
                       onChange={formik.handleChange}
                />
                <ValidationError>{formik.errors.email}</ValidationError>

            </div>
            <div>
                <lable htmlFor="phone">Phone</lable>
                <input id="phone" type="text"
                       value={formik.values.phone}
                       onChange={formik.handleChange}
                />
                <ValidationError>{formik.errors.phone}</ValidationError>

            </div>
            <button type="button">Send</button>
        </form>
    );
}

function ValidationError ( { children }) {
    return <span style={{color: 'red'}}>{children}</span>
}
// Створити форму за допомогою форми з наступними полями:
//     ім'я, обов'язкове для заповнення;
// електронна пошта, обов'язкове для заповнення, формат email;
// телефон, обов'язкове до заповнення, тільки цифри та довжина 12.
// Провалідувати всі поля і вивести повідомлення у відповідь