import { useRouter } from "next/router";
import Link from "next/dist/client/link";

import { useContext, useEffect, useState } from "react";
import { TokenContext, RoleContext } from "../../utils/context";

export default function FormLogin() {
  const { token, setToken } = useContext(TokenContext);
  const [role, setRole] = useState(RoleContext);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token !== "0") {
      router.push("/");
    }
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      username,
      password,
    };
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("https://server.athaprojects.me/login", requestOptions).then(
      (response) =>
        response
          .json()
          .then((result) => {
            const { message, role, token } = result;
            if (token) {
              localStorage.setItem("token", token);
              localStorage.setItem("role", role);
              setToken(token);
              setRole(role);
              router.push("/");
            }
            alert(message);
          })
          .catch((err) => {
            alert(err.toString());
          })
          .finally(() => setLoading(false))
    );
  };

  return (
    <div className="flex md:mt-28 md:mx-4 lg:mt-24 xl:max-w-6xl lg:mx-auto">
      {/* getbook icon || image and Hello! */}
      <div className="hidden md:block md:w-full">
        <Link href="/auth/welcome">
          <img
            className="mx-auto mt-20 w-[300px] md:mt-40 lg:mt-5"
            src="https://cdn.discordapp.com/attachments/929013677045194802/1003923645590163506/unknown.png"
            alt="icon"
          />
        </Link>
        <img
          className="mx-auto w-[290px] lg:w-[360px]"
          src="https://cdn.discordapp.com/attachments/929013677045194802/1004004222070702161/book-people.png"
          alt="book"
        />
        <h1 className="text-center font-Roboto font-semibold text-6xl my-7 lg:my-0 lg:text-6xl">
          Hello !
        </h1>
      </div>
      {/* form login */}
      <div className="w-full md:mr-2 lg:mr-0 lg:ml-28">
        <div className="md:mb-20 lg:mb-28">
          <h1 className="font-Roboto font-extrabold text-5xl ml-8 mt-32 md:text-6xl lg:-mt-2">
            Welcome!
          </h1>
          <h5 className="font-Roboto italic ml-9 text-2xl text-[#2C322B]/20 md:text-3xl">
            Sign in to continue
          </h5>
        </div>
        <form className="mx-4 mt-9" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              className="font-Roboto font-normal text-base pl-6 border-[#25732D] text-[#636F64]/50 rounded-3xl shadow-lg block w-full p-3"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="mt-5 font-Roboto font-normal text-base pl-6 border-[#25732D] text-[#636F64]/50 rounded-3xl shadow-lg  block w-full p-3"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="mt-5 mx-auto text-white font-Roboto font-medium bg-[#25732D] py-3 w-full rounded-3xl shadow-lg">
            Sign in
          </button>
          <h1 className="text-center text-[#2C322B] mt-4 font-Roboto font-medium text-2xl">
            or
          </h1>
          <Link href="/auth/register">
            <button className="my-4 mx-auto text-[#25732D] font-Roboto font-medium bg-white py-3 w-full rounded-3xl shadow-lg">
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
