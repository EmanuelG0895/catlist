"use client";
import Image from "next/image";
interface CardContent {
  description: string;
  userName: string;
  userImage: string;
}

function UserCard({ description, userImage, userName }: CardContent) {
  return (
    <div className="bg-white text-black shadow-lg p-3 rounded-lg space-y-3">
      <div className="flex space-x-3">
        <Image
          className="rounded-full"
          src={userImage}
          alt=""
          width={20}
          height={20}
        />
        <p className="font-bold text-2xl">{userName}</p>
      </div>
      <p className="text-base font-normal">{description}</p>
    </div>
  );
}

export default UserCard;
