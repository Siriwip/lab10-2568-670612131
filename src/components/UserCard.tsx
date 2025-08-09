import React, { useState } from "react";
import { UserCardDetail } from "./UserCardDetail";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";


type UserCardProps = {
  name: string;
  imgUrl: string;
  address: string;
  email: string;
};

export const UserCard: React.FC<UserCardProps> = (props) => {
  const { name, imgUrl, address, email } = props;
  const [isDetailShown, setIsDetailShown] = useState(false);

  const userCardOnClick = () => setIsDetailShown(!isDetailShown);

  return (
    <div className="border-bottom">
      <div
        className="d-flex align-items-center p-3"
        onClick={userCardOnClick}
        style={{ cursor: "pointer" }}
      >
        <img
          src={imgUrl}
          width={90}
          height={90}
          className="rounded-circle me-4"
          alt={name}
        />
        <span className="text-center display-6 me-auto">{name}</span>
        {isDetailShown ? <BsChevronUp /> : <BsChevronDown />}
      </div>

      {isDetailShown && (
        <UserCardDetail
          name={name}
          email={email}
          address={address}
          imgUrl={imgUrl}
        />
      )}
    </div>
  );
};
