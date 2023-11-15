"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//import { loginUser, logout } from './loginSlice'; // Update the path according to your folder structure
import { loginUser } from '@/app/redux/silce/loginSilce';
import UserDropdown from './DropDown';
import LoginForm from '@/app/pages/Login/page';
const Profile = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.login);
    const profile = userData.user;
    console.log("userData", profile)




    // useEffect(() => {
    //     // Example of how you might dispatch the login action when the component mounts
    //     dispatch(loginUser({ email: 'example@email.com', password: 'examplePassword' }));
    // }, [dispatch]);

    // const handleLogout = () => {
    //     dispatch(logout());
    // };

    return (
        <div>
            {userData.login ? (
                <div>
                    {profile.map((item) => {
                        return <ul key={item.id}>
                            <UserDropdown firstLetter={item?.user?.name[0]} name={item?.user?.name} email={item?.user?.email} mobile={item?.user?.mobile} />
                        </ul>

                    })}



                </div>
            ) : (
                <LoginForm />
            )}
        </div>
    );
};

export default Profile;
