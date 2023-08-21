import React from "react";
import { useQuery } from "@apollo/client";
import { GetAllPublicPostQuery } from "../../queries/Queries";
import { Link } from "react-router-dom";

interface Post {
  postId: string;
  userId: string;
  video: string | null;
  photo: string | null;
  text: string;
  postDate: string;
  visibilityType: string;
  numberOfLikes: number;
  numberOfShares: number;
  numberOfComments: number;
}

export default function PostComponent() {
  const { loading, error, data } = useQuery(GetAllPublicPostQuery);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  // console.log(data.getAllPublicPost);
  // Check if data.posts exists and is an array
  if (!data) {
    return <p>No posts available.</p>;
  }

  const posts: Post[] = data.getAllPublicPost;
  // console.log(posts);

  return (
    <div className="mt-3 w-full flex flex-col items-center">
      {posts.map((post) => (
        <div key={post.postId} className="flex flex-col w-4/5 h-fit border rounded-xl justify-center bg-white shadow-sm flex flex-col my-3 p-3">
          <div className="flex justify-start items-center">
            <Link to={`/`} className="w-fit h-fit bg-red">
              <img src="../../../public/assets/Profile Section Icons/profile.png" alt="user profile" className="w-9 h-9 mr-3 my-2" />
            </Link>

            <div className="flex flex-col">
              <Link to={`/`} className="w-fit h-fit ">
                <div className="my-auto font-semibold">{post.userId}</div>
              </Link>
              <div className="flex items-center">
                <Link to={`/`} className="w-fit h-fit ">
                  <div className="my-auto">{post.postDate}</div>
                </Link>
                <div className="h-1 w-1 bg-[#65676b] border rounded-full mx-1"></div>
                <div>{post.visibilityType}</div>
              </div>
            </div>
          </div>
          <div className="my-2 ml-1">
            <div className="my-auto text-xl">{post.text}</div>
            {post.video != null && (
              <div>
                <video controls className="w-full" height="auto">
                  <source src={post.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {post.photo != null && (
              <div>
                {/* Conditionally render the photo */}
                <img src={post.photo} alt="post photo" className="w-fit h-fit object-cover p-4" />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mx-1">
            <div className="flex items-center">
              <img src="../../../public/assets/Post Component/like.png" alt="" className="w-4 h-4 mx-2 opacity-90" />
              <div className="text-[#a3a4a6]">{post.numberOfLikes}</div>
            </div>
            <div className="flex">
              <div className="mr-3 text-[#a3a4a6]">{post.numberOfComments} comments</div>
              <div className="text-[#a3a4a6]">{post.numberOfShares} shares</div>
            </div>
          </div>
          <div className="border w-[97%] mx-auto mb-2"></div>

          <div className="flex h-1/2 items-center justify-around">
            <div className="w-[30%] h-[90%] flex justify-center items-center">
              <img src="../../../public/assets/Post Component/like outline.png" alt="" className="h-7 w-7 mx-3" />
              <div className="w-fit text-center">Like</div>
            </div>
            <div className="w-[30%] h-[90%] flex justify-center items-center">
              <img src="../../../public/assets/Post Component/comment outline.png" alt="" className="h-7 w-7 mx-3" />
              <div className="w-fit text-center">Comment</div>
            </div>
            <div className="w-[30%] h-[90%] flex justify-center items-center">
              <img src="../../../public/assets/Post Component/share outline.png" alt="" className="h-7 w-7 mx-3" />
              <div className="w-fit text-center">Share</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
