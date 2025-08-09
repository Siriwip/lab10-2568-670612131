type UserCardDetailProps = {
  name: string;
  email: string;
  address: string;
  imgUrl: string;
};

import { BsMailbox2, BsFillPinMapFill } from "react-icons/bs"; 
export const UserCardDetail: React.FC<UserCardDetailProps> = ({ email, address }) => {
  return (
    <div className="text-center">
      <p>
        <BsMailbox2 /> {email}
      </p>
      <p>
        <BsFillPinMapFill /> {address}
      </p>
    </div>
  );
};
