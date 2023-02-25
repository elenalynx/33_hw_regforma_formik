import {useFormik} from "formik";

export default function ContactForm() {
    const formik = useFormik({});
    console.log(formik)

    return (
        <form>
            <div>
                <lable htmlFor="firstName">First name</lable>
                <input id="firstName" type="text"/>
            </div>
            <div>
                <lable htmlFor="email">Email</lable>
                <input id="email" type="email"/>
            </div>
            <div>
                <lable htmlFor="phone">Phone</lable>
                <input id="phone" type="text"/>
            </div>
            <button>Send</button>
        </form>
    );
}
// Створити форму за допомогою форми з наступними полями:
//     ім'я, обов'язкове для заповнення;
// електронна пошта, обов'язкове для заповнення, формат email;
// телефон, обов'язкове до заповнення, тільки цифри та довжина 12.
// Провалідувати всі поля і вивести повідомлення у відповідь