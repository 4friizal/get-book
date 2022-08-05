import CardHistory from "../../components/cardHistory";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function History() {
  const token = localStorage.getItem("token");
  const router = useRouter();
  const [histories, setHistories] = useState([]);
  // console.log(histories);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch("https://server.athaprojects.me/orders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, code, data } = result;
        if (data) {
          setHistories(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  };
  // };

  useEffect(() => {
    if (!token) {
      router.push("/auth/welcome");
    }
  });

  return (
    <Layout>
      <div>
        {histories.map((history) => (
          <div key={history.id}>
            {history.orders.map((order) => (
              <CardHistory
                key={order.id}
                price={order.price}
                title={order.title}
                image={order.image}
              />
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
}
