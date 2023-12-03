import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function ProfileIcon() {

  return (
    <div>
        <div className='flex flex-col items-center gap-1'>
            <Link to={'/profile'}>
                <AccountCircleIcon />
            </Link>
        </div>
    </div>
  )
}

export default ProfileIcon