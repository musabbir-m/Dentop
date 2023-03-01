import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReview = () => {
    const {user}= useContext(AuthContext)
    const email= user?.email 

    const [myReviews, setMyreviews]= useState('')
    const [acknowledged, setAcknowledged]= useState(false)
    console.log(myReviews);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${email}`)
          .then((res) => res.json())
          .then((data) => setMyreviews(data));
      }, [email]);
      
      //delete a review
      const handleDelete = (id) => {
        const proceed = window.confirm(
          "Are you sure you want to delete this review?"
        );
    
        if (proceed) {
          fetch(`http://localhost:5000/review/${id}`, {
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
        fetch(`http://localhost:5000/review/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ text }),
        })
          .then((res) => res.json)
          .then((data) => {
           
            console.log(data);
            if (data.acknowledged) {
              alert("review updated successfully");
              setAcknowledged(true);
            }
          });
      };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 px-5 mt-5'>
            {
                myReviews? <>
                {myReviews.map(review=> 
                <MyReviewCard 
                key={review._id}
                review= {review}
                handleDelete={handleDelete}
                handleReviewUpdate= {handleReviewUpdate}
                acknowledged= {acknowledged}

                ></MyReviewCard>)}
                </>:
           <h2> You haven't added any reviews yet</h2>
            
            }
        </div>
    );
};

export default MyReview;