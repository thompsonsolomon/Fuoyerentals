import prop1 from "../../assets/images/DummyImgs/1.jpg";
import prop2 from "../../assets/images/main/banner1.jpg";
import prop3 from "../../assets/images/main/featured.jpg";
import Agent1 from "../../assets/images/agents/agent1.jpg";
import Agent2 from "../../assets/images/agents/agent2.jpg";
function getUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const piece = (Math.random() * 16) | 0;
    const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
    return elem.toString(16);
  });
}

export const PropertiesData = [
  {
    _id: getUUID(),
    title: "Merrick in Spring Way",
    type: "Apartment",
    status: "Rent",
    price: 50000,
    rooms: 4,
    beds: 2,
    bathroom: 4,
    country: "Nigeria",
    city: "Akure",
    address: "House5, Green Garage",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum alias quidem nihil tempore dolorum numquam rerum eius maiores nisi soluta.",
    createdAt: 123456789,
    size: 12/12,
    image: prop1,
    video: "",
    ownerContact: 1234,
    Latest: true
  },
  {
    _id: getUUID(),
    title: "Appapa way bridge",
    type: "Apartment",
    status: "Rent",
    price: 75000,
    rooms: 4,
    beds: 2,
    bathroom: 4,
    country: "Nigeria",
    city: "Akure",
    address: "House5, Green Garage",
    description: "Lounge Apartment",
    createdAt: 123456789,
    size: 12/12,
    image: prop2,
    video: "",
    ownerContact: 1234,
    Latest: true

  },
  {
    _id: getUUID(),
    title: "Merrick in Spring Way",
    type: "Apartment",
    status: "Rent",
    price: 50000,
    rooms: 4,
    beds: 2,
    bathroom: 4,
    country: "Nigeria",
    city: "Akure",
    address: "House5, Green Garage",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum alias quidem nihil tempore dolorum numquam rerum eius maiores nisi soluta.",
    createdAt: 123456789,
    size: 12/12,
    image: prop3,
    video: "",
    ownerContact: 1234,
    Latest: true

  },
  {
    _id: getUUID(),
    title: "Apapatapiti way",
    type: "Apartment",
    status: "Rent",
    price: 200000,
    rooms: 4,
    beds: 2,
    bathroom: 4,
    country: "Nigeria",
    city: "Akure",
    address: "House5, Green Garage",
    description: "Lounge Apartment",
    createdAt: 123456789,
    size: 12/12,
    image: prop2,
    video: "",
    Latest: false,
    ownerContact: 1234,


  },
  {
    _id: getUUID(),
    title: "Grayce's and milky's lodge",
    type: "Apartment",
    status: "Rent",
    price: 5649000,
    rooms: 4,
    beds: 2,
    bathroom: 4,
    country: "Nigeria",
    city: "Akure",
    address: "House5, Green Garage",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum alias quidem nihil tempore dolorum numquam rerum eius maiores nisi soluta.",
    createdAt: 123456789,
    size: 12/12,
    image: prop1,
    video: "",
    Latest: false,
    ownerContact: 1234,

  },
  {
    _id: getUUID(),
    title: "Solo in Spring",
    type: "Apartment",
    status: "Rent",
    price: 58000,
    rooms: 4,
    beds: 2,
    bathroom: 4,
    country: "Nigeria",
    city: "Akure",
    address: "House5, Green Garage",
    description: "Lounge Apartment",
    createdAt: 123456789,
    size: 12/12,
    image: prop3,
    video: "",
    Latest: false,
    ownerContact:1234,
  },
];

export const Users = [
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "A real estate agent or broker is a person who represents sellers or buyers advised to consult a licensed.",
    contact: "08141342103",
    image: Agent1,
    AccountType: "Agent",
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "House5, Green Garage",
    contact: "08141342103",
    image: Agent2,
    AccountType: "Agent",
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "House5, Green Garage",
    contact: "08141342103",
    image: Agent1,
    AccountType: "Agent",
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "Fuoye rentals customer service provider",
    contact: "08141342103",
    image: Agent1,
    AccountType: "CustomerCare",
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "Fuoye rentals customer service provider",
    contact: "08141342103",
    image: Agent2,
    AccountType: "CustomerCare",
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "Fuoye rentals customer service provider",
    contact: "08141342103",
    image: Agent2,
    AccountType: "CustomerCare",
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "Fuoye rentals customer service provider",
    contact: "08141342103",
    image: Agent2,
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "Fuoye rentals customer service provider",
    contact: "08141342103",
    image: Agent2,
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    bio: "Fuoye rentals customer service provider",
    contact: "08141342103",
    image: Agent2,
  },
];

export const Tenant = [
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    createdAt: 123456789,
    contact: "08141342103",
    image: Agent1,
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    createdAt: 123456789,
    contact: "08141342103",
    image: Agent2,
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    createdAt: 123456789,
    contact: "08141342103",
    image: Agent1,
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    createdAt: 123456789,
    contact: "08141342103",
    image: Agent1,
  },
  {
    _id: getUUID(),
    name: "Solo in Spring",
    email: "thompsonsolomon123@gmail.com",
    createdAt: 123456789,
    contact: "08141342103",
    image: Agent2,
  },
];



export const FormatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2, // Ensures two decimal places
    maximumFractionDigits: 2,
  }).format(amount);
};

