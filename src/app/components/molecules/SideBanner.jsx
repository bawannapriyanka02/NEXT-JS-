import React, { useState } from 'react';
import "./custome.css"
import Link from 'next/link';


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const openSidebar = () => {
        setIsSidebarOpen(true);
        if (isSidebarOpen) {
            setIsSidebarOpen(false)
        }
    };

    return (
        <div className="sidebar-container">

            {isSidebarOpen && <>
                <button className="open-button" onClick={openSidebar}>
                    ☰
                </button>
                <div className={`icons-bar ${isSidebarOpen ? 'open' : ''}`}>
                    <div>Icon</div>
                </div>
            </>}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="open-button" onClick={openSidebar}>
                    ☰
                </button>
                <div className="sidebar-header">
                    <h3>Sidebar Header</h3>
                </div>
                <div className="sidebar-content">
                    <ul>
                       <Link href={}></Link>
                    </ul>
                </div>
                <button className="toggle-button" onClick={toggleSidebar}>
                    Toggle Sidebar
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

