export interface Transaction {
  id: number;
  name: string;
  email?: string;
  date: string;
  country: string;
  countryImage?: string;
  amount: string;
  status: "Success" | "Pending" | "Failed";
  currency: "USD" | "AUD" | "NGN" | "GBP";
}

export const transactions: Transaction[] = [
  {
    id: 1,
    name: "Temitope Aiyegbusi",
    email: "ttaiyegbusi@gmail.com",
    date: "Apr 12, 2023 | 09:32AM",
    country: "Nigeria",
    countryImage: "/images/country/country-01.svg",
    amount: "₦40,000.00",
    status: "Success",
    currency: "NGN",
  },
  {
    id: 2,
    name: "Temitope Aiyegbusi",
    email: "ttaiyegbusi@gmail.com",
    date: "Apr 12, 2023 | 09:32AM",
    country: "United Kingdom",
    countryImage: "/images/country/country-02.svg",
    amount: "$40,000.00",
    status: "Success",
    currency: "GBP",
  },
  {
    id: 3,
    name: "Temitope Aiyegbusi",
    email: "ttaiyegbusi@gmail.com",
    date: "Apr 12, 2023 | 09:32AM",
    country: "Australia",
    countryImage: "/images/country/country-03.svg",
    amount: "$40,000.00",
    status: "Success",
    currency: "AUD",
  },
  {
    id: 4,
    name: "Temitope Aiyegbusi",
    email: "ttaiyegbusi@gmail.com",
    date: "Apr 12, 2023 | 09:32AM",
    country: "Canada",
    countryImage: "/images/country/country-04.svg",
    amount: "$40,000.00",
    status: "Success",
    currency: "USD",
  },
  {
    id: 5,
    name: "Temitope Aiyegbusi",
    email: "ttaiyegbusi@gmail.com",
    date: "Apr 12, 2023 | 09:32AM",
    country: "Nigeria",
    countryImage: "/images/country/country-01.svg",
    amount: "₦40,000.00",
    status: "Success",
    currency: "NGN",
  },
];
