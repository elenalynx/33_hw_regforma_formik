import './App.css';
import ContactForm from "./ContactForm";

function App() {
  return (
    <>
      <ContactForm />
    </>
  );
}

export default App;
//
//
// Створити форму за допомогою форми з наступними полями:
//
//     ім'я, обов'язкове для заповнення;
// електронна пошта, обов'язкове для заповнення, формат email;
// телефон, обов'язкове до заповнення, тільки цифри та довжина 12.
// Провалідувати всі поля і вивести повідомлення у відповідь