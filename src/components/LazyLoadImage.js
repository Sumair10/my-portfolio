import React, { useState } from "react";

import placeholder from "../assets/projects/n1.png";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export const LazyLoadedImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState("loader");

  // When the component mounts, update the image source to trigger lazy loading
  React.useEffect(() => {
    console.log({ imageSrc });
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <>
      {imageSrc === "loader" ? (
        <Box
          sx={{
            width: "100%",
          }}
        >
          <LinearProgress color="inherit" />
        </Box>
      ) : (
        <img src={imageSrc} alt={alt} />
      )}
    </>
  );
};
