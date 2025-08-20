import React from "react";
import {
  Search,
  Home,
  Users,
  Video,
  Store,
  Bell,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import profilePhoto from "../assets/profile_photo_1.jpg";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md px-10 py-3 flex items-center justify-between">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="text-blue-600 text-3xl font-bold">MulaqatHub</div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search MulaqatHub"
            className="bg-transparent outline-none ml-2 text-sm w-40"
          />
        </div>
      </div>

      {/* Center: Navigation Icons */}
      <nav className="flex gap-20 text-gray-600 mr-56">
        <button className="text-blue-600">
          <Home className="h-6 w-6" />
        </button>
        <button>
          <Users className="h-6 w-6" />
        </button>
        <button>
          <Video className="h-6 w-6" />
        </button>
        <button>
          <Store className="h-6 w-6" />
        </button>
      </nav>

      {/* Right: Profile + Actions */}
      <div className="flex items-center gap-8">
        <button>
          <Bell className="h-6 w-6 text-gray-600" />
        </button>
        <button>
          <MessageCircle className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDown className="h-5 w-5 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
