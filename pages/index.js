import CardProduct from "../components/cardProduct";
import Layout from "../components/layout";

export async function getServerSideProps() {
  const response = await fetch("http://34.143.186.209:9000/books");
  const data = await response.json();

  return {
    props: { books: data.data },
  };
}

export default function Home({ books }) {
  return (
    <Layout headTitle="getbook">
      <div className="p-8">
        <div>
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
