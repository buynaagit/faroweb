import React, { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ImgWithLoader = ({ imgUrl, ...restProps }) => {
  const [imgLoading, setImageLoading] = useState(true);

  const handleImageLoading = () => {
    setImageLoading(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        onLoad={handleImageLoading}
        className="img-fluid"
        src={imgUrl}
        {...restProps}
        style={{
          objectFit: "cover",
          opacity: imgLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
        alt=""
      />
      {imgLoading ? (
        <div
          {...restProps}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin
            size="large"
            indicator={<LoadingOutlined style={{ fontSize: "72px" }} />}
            spinning={imgLoading}
          ></Spin>
        </div>
      ) : null}
    </div>
  );
};

export default ImgWithLoader;
