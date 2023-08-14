export const fields = {
  name: {
    label: "Name",
    name: "name",
    placeholder: "Ім'я",
    required: true,
    type: "text",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  email: {
    label: "Email",
    name: "email",
    placeholder: "input email",
    required: true,
    type: "email",
    pattern: "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$",
    title: "Email must contain only Latin lowercase letters, @ and  a dot without spaces.  For example - butterfly@mail.com",
  },
  password: {
    label: "Password",
    name: "password",
    placeholder: "input password",
    required: true,
    // pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
    type: "password",
    title: "The password cannot be less than 8 characters and must contain at least one number, one lowercase, and one uppercase Latin letter. For example - Butterfly01",
  },
  number: {
    label: "Number",
    name: "number",
    placeholder: "+38 (000) 000 00 00",
    required: true,
    type: "text",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
};
