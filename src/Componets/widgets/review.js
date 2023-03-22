import React ,{useEffect}from 'react'
function Review({review}) {
  return (
    <div className='review bg-danger mb-3'>
            <p className='author'>{review.author}</p>
            <p className='content'>{review.content}</p>
            <p className='date'>{review.created_at}</p>
            <p className='date'>{review.author_details.username}</p>
            <p className='date'>{review.author_details.rating}</p>
            <img src="https://www.gravatar.com/avatar/"/>
            {/* {
                review.author_details.map((user)=>{
                    return( 34
                        <p>{user.username}</p>
                    )
                })
            } */}
    </div>
  )
}

export default Review