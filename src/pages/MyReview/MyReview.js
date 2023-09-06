import React, { useContext, useEffect, useState } from "react";

import MyReviewCard from "./MyReviewCard/MyReviewCard";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [reviewLoading, setReviewLoading] = useState(true);
  const [myReviews, setMyreviews] = useState([]);

  console.log(myReviews);

  useEffect(() => {
    fetch(`https://dentop-server.vercel.app/myreviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyreviews(data));
    setReviewLoading(false);
  }, [email]);

  //delete a review
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (proceed) {
      fetch(`https://dentop-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myReviews.filter((review) => review._id !== id);
            setMyreviews(remaining);
          }
        });
    }
  };

  // handle update review

  const handleReviewUpdate = (id, text) => {
    fetch(`https://dentop-server.vercel.app/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review updated successfully");
        }
      });
  };

  if (reviewLoading) {
    return (
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin"></div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-3 px-5 mt-5 mx-auto">
      {myReviews?.length ? (
        <>
          {myReviews?.map((review) => (
            <MyReviewCard
              key={review._id}
              review={review}
              handleDelete={handleDelete}
              handleReviewUpdate={handleReviewUpdate}
            ></MyReviewCard>
          ))}
        </>
      ) : (
        <h2 className="text-2xl font-semibold text-blue-800 text-center">
          {" "}
          You haven't added any reviews yet
        </h2>
      )}
    </div>
  );
};

export default MyReview;
