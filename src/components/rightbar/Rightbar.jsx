import React from 'react'
import './rightbar.css'
import { Companeros } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/aceptada.png" alt="" />
                    <span className="birthdayText">
                        <b>3</b> Solicitudes<b> Programadas</b>.
                    </span>
                </div>
                <hr className='sidebarHr'/>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/rechazada.png" alt="" />
                    <span className="birthdayText">
                        <b>2</b> Solicitudes<b> Rechazadas</b>.
                    </span>
                </div>
                <hr className='sidebarHr'/>
                <h4 className="rightbarTitle">Compañeros</h4>
                <ul className="rightbarfriendList">
                    {Companeros.map(u => (
                        <Online key={u.id} user={u} />
                    ))}

                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Kerala</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/persons/5.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Emily Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/persons/6.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/persons/7.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Sasha banks</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/persons/8.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Nicole Lucy</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/persons/9.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Laurel Porter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/persons/5.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Charles Dickson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/persons/6.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Johnathan Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar/> }
            </div>
        </div>
    )
}