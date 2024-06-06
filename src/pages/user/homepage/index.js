import {memo, useState} from "react";
//import "./style.scss";
import {Link} from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss"

const HomePage = () => {
    return (
    <>
        <div className="main">
            <div className="news">
                <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="lastest_new">
                            <div className="news__item-img">
                                <a href="https://thanhnien.vn/thoi-su.htm">
                                    <img src="https://www.w3schools.com/howto/img_fjords.jpg" href="" alt=""/>
                                </a>
                            </div>
                            <div className="news__item-tag">
                                <span href="https://thanhnien.vn/thoi-su.htm">Environmental science</span>
                            </div>
                            <div className="news__item-title">
                                <h3>
                                    <a href="https://thanhnien.vn/thoi-su.htm">
                                        Is the weather actually becoming more extreme?
                                    </a>
                                </h3>
                            </div>
                            <div className="news__item-content">
                                <p> 
                                    <a href="https://thanhnien.vn/thoi-su.htm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores
                                    aspernatur
                                    autem consequuntur debitis deleniti doloremque dolorum ducimus eaque earum eius
                                    eligendi
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="col-xl-4">
                        <div className="row">
                            <div className="lastest_new1">
                                <div className="news__item-img">
                                    <a href="https://thanhnien.vn/thoi-su.htm">
                                        <img src="https://www.w3schools.com/howto/img_fjords.jpg" href="" alt=""/>
                                    </a>
                                </div>
                                <div className="news__item-tag">
                                    <span href="https://thanhnien.vn/thoi-su.htm">Environmental science</span>
                                </div>
                                <div className="news__item-title">
                                    <h3>
                                        <a href="https://thanhnien.vn/thoi-su.htm">
                                        What ever happened to acid rain?
                                        </a>
                                    </h3>
                                </div>
                                <div className="news__item-content">
                                    <p> 
                                        <a href="https://thanhnien.vn/thoi-su.htm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores
                                        aspernatur
                                        autem consequuntur debitis deleniti doloremque dolorum ducimus eaque earum eius
                                        eligendi
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="lastest_new2">
                                <div className="news__item-tag">
                                    <span href="https://thanhnien.vn/thoi-su.htm">[Chủ đề]</span>
                                </div>
                                <div className="news__item-title">
                                    <h3>
                                        <a href="https://thanhnien.vn/thoi-su.htm">
                                        [Tiêu đề]
                                        </a>
                                    </h3>
                                </div>
                                <div className="news__item-content">
                                    <p> 
                                        <a href="https://thanhnien.vn/thoi-su.htm">
                                        [Khu vực tin vắn]
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </>
    );
};
 
export default memo(HomePage);