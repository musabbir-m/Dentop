import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const MyReviewCard = ({ review, handleReviewUpdate, handleDelete }) => {
  const { reviewText, serviceName, service, _id, customer } = review;
  console.log(customer, "Name form card");
  const [reviewUpdate, setReviewUpdate] = useState("");
  const { user } = useContext(AuthContext);

  const updateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    form.reset();

    handleReviewUpdate(_id, text);
  };
  return (
    <div className="card bg-base-100 h-56 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p> {reviewText}</p>
      </div>

      <div className=" mx-3 flex justify-between">
        <div className="flex justify-between">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <FaUserCircle />
          )}
          <h2 className="mx-1 mt-3">{customer}</h2>
        </div>

        <div className="card-actions align-bottom justify-end">
          {/* The button to open modal */}
          <label htmlFor={serviceName} className="btn btn-accent btn-xs">
            update
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id={serviceName} className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{serviceName}</h3>
              <form
                className="flex justify-between"
                onSubmit={updateReview}
                action=""
              >
                <textarea
                  name="text"
                  className="textarea w-48 textarea-success"
                  placeholder="update review"
                ></textarea>
                <input type="submit" className="btn btn-xs" value="Update" />
              </form>
              <div className="modal-action">
                <label htmlFor={serviceName} className="btn btn-xs">
                  close
                </label>
              </div>
            </div>
          </div>

          {/*modal end*/}
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn btn-secondary btn-xs"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
