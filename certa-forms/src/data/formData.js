export const formData = [
  {
    id: "name",
    label: "Full Name*",
    placeholder: "Please enter your full name",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["name is required"],
      },
      {
        type: "min",
        params: [5, "name can't be less than 5 characters"],
      },
      {
        type: "max",
        params: [20, "name can't be more than 20 characters"],
      },
    ],
  },
  {
    id: "photo",
    label: "Upload Photo*",
    placeholder: "",
    type: "upload",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["photo is required"],
      },
    ],
  },
  {
    id: "email",
    label: "Email*",
    placeholder: "Enter Email",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["email is required"],
      },
      {
        type: "min",
        params: [5, "email can't be less than 5 characters"],
      },
      {
        type: "max",
        params: [30, "email can't be more than 30 characters"],
      },
      {
        type: "email",
        params: ["please enter a valid email"],
      },
    ],
  },
  {
    id: "phone_number",
    label: "Phone Number*",
    placeholder: "Enter Phone Number",
    type: "text",
    validationType: "number",
    value: "",
    validations: [
      {
        type: "required",
        params: ["phone number is required"],
      },
    ],
  },
  {
    id: "city",
    label: "City*",
    placeholder: "",
    type: "select",
    validationType: "string",
    value: "",
    options: ["Gurgaon", "Noida", "Delhi", "Pune", "Hyderabad", "Bangalore", "Chennai"],
    validations: [
      {
        type: "required",
        params: ["city is required"],
      },
    ],
  },
  {
    id: "home",
    label: "Home Address*",
    placeholder: "Enter Home Address",
    type: "textarea",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["home address is required"],
      },
      {
        type: "min",
        params: [10, "home address can't be less than 10 characters"],
      },
    ],
  },
  {
    id: "gender",
    label: "Gender*",
    placeholder: "",
    type: "radio",
    validationType: "string",
    value: "",
    options: ["Male", "Female", "Other"],
    validations: [
      {
        type: "required",
        params: ["gender is required"],
      },
    ],
  },
  {
    id: "hobbies",
    label: "Hobbies*",
    placeholder: "",
    type: "checkbox",
    validationType: "string",
    value: "",
    options: ["Playing Cricket", "Learning Technologies", "Trekking"],
    validations: [
      {
        type: "required",
        params: ["hobbies is required"],
      },
    ],
  },
];
