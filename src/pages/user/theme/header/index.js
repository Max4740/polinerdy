import {memo, useState} from "react";
//import "./style.scss";
import {Link} from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss"
import logo from "./logo_big.png"
import { AiOutlineMenu  } from "react-icons/ai";

const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Danh mục",
            path: ROUTERS.USER.DANH_MUC,
            isShowSubmenu: false,
            child: [
                {
                    name: "Cold War",
                    path: ROUTERS.USER.COLD_WAR,
                },
                {
                    name: "Chuyên mục đặc biệt",
                    path: ROUTERS.USER.CHUYEN_MUC_DAC_BIET,
                },
                {
                    name: "Lịch sử Việt Nam",
                    path: ROUTERS.USER.LICH_SU_VN,
                },
            ]
        },
        {
            name: "Catch up",
            path: ROUTERS.USER.CATCH_UP,
        },
        {
            name: "IRPlaylist",
            path: ROUTERS.USER.IRPLAYLIST,
        },
        {
            name: "Về chúng tôi",
            path: ROUTERS.USER.ABOUT_US,
        },
    ])

    return (
    <>
    <div className="header_top">
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="header_logo">
                        <a href={ROUTERS.USER.HOME}>
                            <img src= {logo} alt="polinerdy logo"/>
                        </a>
                    </div>
                </div>

                <div className="col-xl-9">
                    <nav className="header_menu">
                        <ul>
                            {
                                menus?.map((menu, menuKey) => (
                                     <li key = {menuKey} className="active">
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                        {menu.child && (
                                            <ul className="Header_menu_dropdown">
                                                 {menu.child.map((childItem, childKey) => (
                                                    <li key = {'${menuKey} - ${childKey}'}>
                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                    </li>
                                                ))
                                                 }
                                             </ul>
                                            )
                                        }
                                     </li>
                                ))
                            }
                            
                        </ul>
                    </nav>
                    <div className="header_menu_mobile">
                        <AiOutlineMenu />
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
    );
};
 
export default memo(Header);