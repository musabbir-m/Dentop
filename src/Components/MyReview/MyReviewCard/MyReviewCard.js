import React from 'react';

const MyReviewCard = ({review,  handleReviewUpdate, handleDelete, acknowledged}) => {
   const {reviewText, serviceName, service, _id}= review

   const updateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    form.reset()


    handleReviewUpdate(_id, text);


    
    
    if(acknowledged){
        alert('success')
    }



  };
    return (
        <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p> {reviewText}</p>
      </div>

      <div className=" mx-3 flex justify-between">
        <div className="flex justify-between">
          <div className="avatar p-3">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6mOOSJ4gguMOqeitCMdnJqw-GNLm3VEoJReCQEOp&s"
              />
            </div>
          </div>

          <h2 className="mx-1 mt-3"></h2>
        </div>

        <div className="card-actions align-bottom justify-end">
          

          {/* The button to open modal */}
          <label htmlFor="my-modal-6" className="btn btn-accent btn-xs">
            update
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{serviceName}</h3>
              <form className="flex justify-between"  onSubmit={updateReview}  action="">
                
                <textarea name="text" className="textarea w-48 textarea-success" placeholder="update review"></textarea>
                <input type="submit" className="btn btn-xs" value="Update" />
              </form>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn btn-xs">
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