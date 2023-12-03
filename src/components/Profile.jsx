import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/auth";
import { Container, LogoutBtn, Logo } from "../components";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    appwriteService.getCurrentUser().then((data) => {
      setUser(data);
      // console.log(data);
    });
  }, []);

  if (user) {
    return (
      <div className="flex justify-center items-center mb-8 w-full">
        <Container>
          <div className="mx-auto mt-8 w-1/4 bg-gray-300 p-8 rounded-lg ">
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-1/2 h-30 mb-8">
                    <Logo className={'h-full rounded-lg'}/>
                </div>
                <ul className="flex flex-col gap-6 text-sm text-center">
                    <li className="text-xl font-bold"> 
                        {user.name} 
                    </li>
                    <li className="flex gap-4"> 
                        <span><PersonIcon /> </span> 
                        <span>
                        {user.$id} 
                        </span>
                    </li>
                    <li  className="flex gap-4">
                        <span><EmailIcon /> </span> 
                        <span>
                        {user.email}
                        </span>
                    </li>
                    <li className="flex gap-4 items-center">
                        <span> <LogoutIcon /> </span>
                        <span className="text-xl font-bold text-black/60">
                        <LogoutBtn />
                        </span>
                    </li>
                </ul>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Profile;
