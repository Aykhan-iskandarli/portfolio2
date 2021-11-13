import React, { useEffect, useState } from "react";
import Title from "../components/Title/Title";
import Page from "../components/Page/Page";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import PortfoliosComp from "../components/PortfoliosComp/PortfoliosComp";

const Portfolios = () => {
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
    <div>
      {loading ? (
        <ClipLoader
          css={override}
          size={100}
          color={"#123abc"}
          loading={loading}
        />
      ) : (
        <Page>
          <Title>Portfolios</Title>
          <PortfoliosComp/>
        </Page>
      )}
    </div>
  );
};

export default Portfolios;
