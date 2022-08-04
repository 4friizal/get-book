import CardHistory from "../../components/cardHistory";
import Layout from "../../components/layout";

export async function getServerSideProps() {
  const response = await fetch(
    "https://virtserver.swaggerhub.com/bookstore_group1/bookstore/1.0/orders"
  );
  const data = await response.json();

  return {
    props: { books: data.data },
  };
}

export default function History({ books }) {
  console.log(books);
  return (
    <Layout>
      <div className="flex flex-col gap-11 mt-7">
        <div className="p-8">
          <div>
            {books.map((book) => (
              <CardHistory
                key={book.id}
                id={book.id}
                order_id={book.order_id}
                invoice_id={book.invoice_id}
                price={book.price}
                qty={book.qty}
                title={book.title}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
