import { productDetailsQuery } from "@/customHooks/cms.query.hooks";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Rating,
  Stack,
  Typography
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
// import { Navigation, Pagination } from 'swiper';

const SingleProduct = () => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: productDetailsData,
    isPending: productPending
  } = productDetailsQuery(slug as string);

  console.log(productDetailsData, "productDetails");

  if (productPending) {
    return (
      <Box className="loader-box">
        <CircularProgress />
      </Box>
    );
  }

  if (!productDetailsData) {
    return (
      <Typography variant="h5" sx={{ textAlign: "center", marginTop: "20px" }}>
        Product not found
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Card>
        {/* Swiper Slider for Images */}
        <Box sx={{ marginBottom: "16px" }}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            style={{ width: "100%", height: "300px" }}
          >
            {productDetailsData.images.map((image, index) =>
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "4px"
                  }}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </Box>

        <CardContent>
          <Typography variant="h4" gutterBottom>
            {productDetailsData.title}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ marginBottom: "16px" }}
          >
            <Rating
              value={productDetailsData.rating}
              precision={0.1}
              readOnly
            />
            <Typography variant="body2">
              ({productDetailsData.rating.toFixed(1)} rating)
            </Typography>
          </Stack>

          <Typography variant="body1" gutterBottom>
            {productDetailsData.description}
          </Typography>

          <Typography variant="h6" sx={{ marginBottom: "8px" }}>
            Price: ${productDetailsData.price.toFixed(2)}
          </Typography>

          <Box sx={{ marginBottom: "16px" }}>
            {productDetailsData.tags.map((tag, index) =>
              <Chip
                key={index}
                label={tag}
                sx={{ marginRight: "8px", marginBottom: "8px" }}
              />
            )}
          </Box>

          <Typography
            variant="h6"
            sx={{ marginTop: "16px", marginBottom: "8px" }}
          >
            Reviews:
          </Typography>
          {productDetailsData.reviews.length > 0
            ? productDetailsData.reviews.map((review, index) =>
                <Box key={index} sx={{ marginBottom: "8px" }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {review.reviewerName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {review.comment}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(review.date).toLocaleDateString()}
                  </Typography>
                </Box>
              )
            : <Typography variant="body2">No reviews available</Typography>}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleProduct;
