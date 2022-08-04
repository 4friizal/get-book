import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import DetailProfile from "../../components/profile";
import { TokenContext } from "../../utils/context";

// export async function getServerSideProps() {
//   const { setToken } = useContext(TokenContext);

//   let requestOptions = {
//     method: "GET",
//     headers: {
//       authorization: ``
//     }
//   }

//   const response = await fetch("http://34.143.186.209:9000/users");
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: {},
//   };
// }

export default function Profile() {
  const route = useRouter();
  const { setToken } = useContext(TokenContext);
  const [id, setId] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

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

    fetch("https://server.athaprojects.me/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, code, data } = result;
        const { id, fullname, phone, username } = data;
        if ([401, 403].includes(code)) {
          localStorage.removeItem("token");
          setToken("0");
          route.push("/auth/welcome");
          alert(message);
        } else {
          setId(id);
          setFullname(fullname);
          setUsername(username);
          setPhone(phone);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <DetailProfile
        key={id}
        fullname={fullname}
        username={username}
        phone={phone}
      />
    </Layout>
  );
}
