"use client"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '@/app/redux/silce/homeSlice';
import Sidebar from "../../components/molecules/SideBanner"
import Profile from "../../components/molecules/Profile"
import Headers from "../../components/molecules/Header";
import AddUser from '@/app/components/molecules/AddUser';
function HomePage() {
    return (
        <>
            {/* 
            <Sidebar /> */}

            <Headers />
            <AddUser />

        </>);
}

export default HomePage;
