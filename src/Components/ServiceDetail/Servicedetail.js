import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import ReviewCard from "../ReviewCard/ReviewCard";

const Servicedetail = () => {
  const service = useLoaderData();

  const { name, img, description, _id } = service;
  const { user } = useContext(AuthContext);

  const [acknowledged, setAcknowledged] = useState(false);
  const [reviews, setReviews] = useState("");
  console.log(reviews);

  //load review

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?name=${name}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [acknowledged]);

  console.log(service);

  //add review method

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const customerName = form.name.value;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const reviewText = form.review.value;

    const reviewObject = {
      service: _id,
      serviceName: name,
      customer: customerName,
      email,
      reviewText,
      photoURL,
    };

    fetch(
      "http://localhost:5000/review",

      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewObject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("review added succesfully");
          setAcknowledged(true);
          event.target.reset();
          //   reload review when a new review added
          fetch(`http://localhost:5000/reviews?name=${name}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-4">
      {/* service details */}
      <div className="card lg:c bg-base-100 shadow-xl">
        <figure>
          <img className="w-2/3" src={img} alt="Album" />
        </figure>
        <div className="card-body px-6">
          <h2 className="card-title text-emerald-400	">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <p className="font-bold ">
              {" "}
              <span className="text-purple-600">Level: </span> {}
            </p>
            <p className="font-bold">
              {" "}
              <span className="text-purple-600">Price:</span> $ {}
            </p>
          </div>
        </div>
        {/* show all review  */}

        <div className="mt-10">
          {reviews ? (
           <div>

            <h2 className=" border-t-2 border-black text-2xl font-semibold uppercase text-cyan-500 text-center">
                Reviews
            </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {reviews?.map((review) => (
                <ReviewCard key={review._id} review={review}></ReviewCard>
              ))}
            </div>
           </div>
          ) : (
            <h2 className="text-2xl font-semibold mx-auto">No reviews Yet</h2>
          )}

          {/* add review */}
          {user?.uid ? (
            <>
              <div className="mt-16 mb-5">
                <h2 className="text-3xl text-center">Add your review</h2>
                {/* form to add review */}
                <form action="" onSubmit={handleAddReview}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-3 mt-5">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      className="input input-info w-full input-bordered"
                      defaultValue={user.email}
                    />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-info w-full input-bordered  "
                      defaultValue=""
                    />
                    <input
                      type="text"
                      name="photourl"
                      placeholder="photo url"
                      className="input input-info w-full input-bordered  "
                      defaultValue={user?.photoURL}
                    />
                  </div>

                  <input
                    name="review"
                    className=" mt-5 textarea textarea-info  w-full"
                    placeholder="Write review"
                  ></input>
                  <input
                    className=" bg-cyan-400 px-4 py-3 text-white font-semibold text-xl border-none flex justify-center content-center mt-5 mx-auto"
                    type="submit"
                    value="Submit review"
                  />
                </form>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl text-center my-6 mx-auto hover:text-orange-400">
                <Link to="/login">Login to add review </Link>
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Servicedetail;
