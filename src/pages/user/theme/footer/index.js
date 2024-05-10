import {memo, useState} from "react";
//import "./style.scss";
import {Link} from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss"
import logo from "img/FALVCON ICON tach nen.png";
import Facebook from "img/facebook icon.png";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-xl-2"> 
                <div className="footer_about">
                    <ul>
                        <li className="logo_poli">
                            <a href={ROUTERS.USER.HOME}>
                                <img src= {logo} alt="polinerdy logo" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61558771481503" target="_blank">
                                <img src= {Facebook} alt="facebook logo"/>
                            </a>
                            
                        </li>
                        <li>polinerdyassembly@gmail.com</li>
                        <li>Cảm ơn bạn đọc đã ghé qua!</li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-2">
                <div className="footer_widget">
                    <h6>LIÊN HỆ VÀ GÓP Ý</h6>
                    <form action="#">
                        <div className="input_group">
                            <input type="text" placeholder="Tên" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Lời nhắn" className="loi_nhan"/>
                            <button type="submit" className="button-submit">Gửi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </footer>
};
 
export default memo(Footer);