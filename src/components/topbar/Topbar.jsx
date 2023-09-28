import React from "react"
import "./topbar.css"
import { Search } from "@mui/icons-material"
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from "react-router-dom";

export default function Topbar() {
    const navigate = useNavigate();
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Soporte Técnico</span>
            </div>
            <div className="topbarCentre">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Buscar" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                
                <div className="topbarIcons">
                    
                    <div className="topbarIconItem" onClick={() => navigate("/")}>
                        <LogoutIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
