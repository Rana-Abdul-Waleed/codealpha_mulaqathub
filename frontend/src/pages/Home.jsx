import React from "react";
import {
  Globe,
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
} from "lucide-react";
import profilePhoto from "../assets/profile_photo_1.jpg";
import { dummy_posts_data } from "../assets.js";

const Home = () => {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      {/* Post Input Box */}
      <div className="shadow rounded-lg p-4 mt-5 bg-gray-50">
        <div className="flex items-center gap-3">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none"
          />
        </div>
        <div className="flex justify-between mt-3 text-sm text-gray-600">
          <button className="flex items-center gap-1">🎥 Live Video</button>
          <button className="flex items-center gap-1">📷 Photo/Video</button>
          <button className="flex items-center gap-1">
            😊 Feeling/Activity
          </button>
        </div>
      </div>

      {/* Dummy Posts from assets.js */}
      {dummy_posts_data.map((post) => (
        <div key={post.p_id} className="bg-white shadow rounded-lg p-4">
          {/* Post Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.p_profile_image}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">User {post.p_id}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  2h · <Globe className="h-3 w-3" />
                </p>
              </div>
            </div>
            <MoreHorizontal className="h-5 w-5 text-gray-500 cursor-pointer" />
          </div>

          {/* Post Text */}
          <p className="mt-3 text-sm text-gray-700">
            This is a dummy post {post.p_id}. Here will be the post content
            text.
          </p>

          {/* Post Image */}
          <div className="mt-3 w-full rounded-lg overflow-hidden">
            <img
              src={post.p_post_image}
              alt={`Post ${post.p_id}`}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-3 text-gray-600 text-sm">
            <button className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" /> Like
            </button>
            <button className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" /> Comment
            </button>
            <button className="flex items-center gap-1">
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
