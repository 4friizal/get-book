import { useEffect } from "react";
import { useRouter } from "next/router";

import CardProduct from "../components/cardProduct";
import Layout from "../components/layout";

export async function getServerSideProps() {
  const response = await fetch("https://server.athaprojects.me/books");
  const data = await response.json();

  return {
    props: { books: data.data },
  };
}

export default function Home({ books }) {
  const token = localStorage.getItem("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/auth/welcome");
    }
  });

  return (
    <Layout headTitle="getbook">
      <div className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {books.map((book) => (
            <CardProduct
              key={book.id}
              id={book.id}
              image={book.image}
              author={book.author}
              title={book.title}
              price={book.price}
              stock={book.stock}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
