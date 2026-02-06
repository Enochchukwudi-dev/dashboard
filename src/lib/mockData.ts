export interface Transaction {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  items?: number;
  date?: string;
  country: string;
  countryImage?: string;
  amount: string;
  status: "Success" | "Pending" | "Failed";
  currency: "USD" | "AUD" | "NGN" | "GBP";
}

export const transactions: Transaction[] = [
  {
    id: 1,
    name: "Chinedu Okafor",
    email: "chinedu.okafor@example.com",
    phone: "08011223344",
    items: 3,
    country: "Nigeria",
    countryImage: "/images/avatar.svg",
    amount: "₦3,000.00",
    status: "Success",
    currency: "NGN",
  },
  {
    id: 2,
    name: "Aisha Bello",
    email: "aisha.bello@example.com",
    phone: "08022334455",
    items: 5,
    country: "United Kingdom",
    countryImage: "/images/avatar.svg",
    amount: "₦5,000.00",
    status: "Pending",
    currency: "NGN",
  },
  {
    id: 3,
    name: "Emeka Obi",
    email: "emeka.obi@example.com",
    phone: "08033445566",
    items: 17,
    country: "Australia",
    countryImage: "/images/avatar.svg",
    amount: "₦17,000.00",
    status: "Success",
    currency: "NGN",
  },
  {
    id: 4,
    name: "Ngozi Nwosu",
    email: "ngozi.nwosu@example.com",
    phone: "08044556677",
    items: 3,
    country: "Canada",
    countryImage: "/images/avatar.svg",
    amount: "₦3,000.00",
    status: "Success",
    currency: "NGN",
  },
  {
    id: 5,
    name: "Kelechi Ibe",
    email: "kelechi.ibe@example.com",
    phone: "08055667788",
    items: 5,
    country: "Nigeria",
    countryImage: "/images/avatar.svg",
    amount: "₦5,000.00",
    status: "Pending",
    currency: "NGN",
  },
];
