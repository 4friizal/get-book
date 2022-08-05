import { useRouter } from "next/router";

import Layout from "../../components/layout";
import InputFixed from "../../components/inputFixed";
import ButtonSmall from "../../components/buttonSmall";
import { useState, useEffect } from "react";

export default function EditProfile() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!token) {
      router.push("/auth/welcome");
    }
    fetchData();
  }, {});

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
        const { data } = result;
        const { fullname, username, phone } = data;
        if (data) {
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

  // update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { fullname, username, phone };

    let requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`https://server.athaprojects.me/users`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const { message } = result;
        router.push(`/profile`);
        alert(message);
      })
      .catch((error) => {
        console.log(error);
        alert(error.toString());
      })
      .finally();
  };

  // delete user
  const handleDelete = () => {
    var requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    fetch("https://server.athaprojects.me/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const { message, code } = result;
        if (code === 200) {
          alert(message);
          localStorage.removeItem("token");
          router.push("/auth/welcome");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    <div>Loading........</div>;
  }

  return (
    <Layout>
      <div className="pt-10 lg:pt-20 max-h-screen">
        <div className="mx-auto w-full md:w-[80%] lg:w-[95%] 2xl:w-[75%] lg:flex justify-between">
          {/* logo  */}
          <div className="pb-10 lg:mt-10 lg:w-[50%]">
            <figure>
              <img
                src="/icon-book.png"
                alt="Logo"
                className="mx-auto sm:w-40 md:w-52"
              />
              <h2 className="font-Baumans text-[#00FF19] text-6xl md:text-7xl text-center">
                getbook
              </h2>
            </figure>
          </div>

          {/* form edit profile */}
          <div className="px-4 lg:w-[50%] flex flex-col gap-8 ">
            <h2 className=" text-[#25732D]/80 text-4xl font-extrabold hidden lg:block ">
              Edit Profile
            </h2>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => handleSubmit(e)}
            >
              <InputFixed
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <InputFixed
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputFixed
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <ButtonSmall
                className="mx-auto mt-7 py-2 bg-[#25732D] text-white text-2xl md:text-2xl font-bold w-full  rounded-full "
                label="Save"
              />
            </form>
            <ButtonSmall
              onClick={() => handleDelete()}
              className="mx-auto py-2 bg-[#FF4D00] text-white text-2xl md:text-2xl font-bold w-full rounded-full "
              label="Delete"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
