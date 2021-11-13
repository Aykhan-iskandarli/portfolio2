import React, { useEffect, useState } from "react";
import Title from "../components/HomeComp/HomeComp";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const override = css`
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
  `;
  return (
    <>
        {loading ? (
        <ClipLoader
          css={override}
          size={100}
          color={"#123abc"}
          loading={loading}
        />
      ) : (
      <Title/>
      )}
    </>
  );
};

export default Home;
