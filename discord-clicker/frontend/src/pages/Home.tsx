import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Section1 from "../compontents/home/Section1";
import Section2 from "../compontents/home/Section2";
import Spinner from "../compontents/Spinner";
import Section3 from "../compontents/home/Section3";
import Smallmid from "../compontents/home/Smallmid";
import Section4 from "../compontents/home/Section4";

import axios from "axios";

const Home: React.FC = (): JSX.Element => {
  const [logedIn, setLogedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      axios
        .post("http://localhost:3000/users", { token })
        .then((res: any) => {
          setLoading(false)
          if (res.data.user) {
            setLogedIn(true);
          }
        })
        .catch((err: Error) => {
          console.log(err);
          Cookies.remove("token");
        });
    } else {
      setLoading(false)
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      {loading ? (
        <Spinner />
      ) : (
        <div className="home overflow-x-hidden">
        <Section1 logedIn={logedIn} />
        <Section2 />
        <Section3 logedIn={logedIn} />
        <Section4 logedIn={logedIn} />
      </div>
      )}
    </div>
  );
};

export default Home;
