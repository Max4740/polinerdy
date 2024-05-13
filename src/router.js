import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/user/homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";
import AboutUs from "./pages/user/AboutUs";
import IRPlaylist from "pages/user/IRPlaylist";
import Catch_up from "pages/user/Catch_up";
import Danh_muc from "pages/user/Danh_muc";
import Cold_war from "pages/user/Danh_muc/Cold_war";
import Lich_su_VN from "pages/user/Danh_muc/Lich_su_VN";
import Chuyen_muc_dac_biet from "pages/user/Danh_muc/Chuyen_muc_dac_biet";
import Admin_login from "pages/admin/login_page"
// const renderAdminRouter = () => {

const renderUserRouter = () => {
    const userRouters=[
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage/>,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage/>,
        },
        {
            path: ROUTERS.USER.ABOUT_US,
            component: <AboutUs/>,
        },
        {
            path: ROUTERS.USER.IRPLAYLIST,
            component: <IRPlaylist/>,
        },
        {
            path: ROUTERS.USER.CATCH_UP,
            component: <Catch_up/>,
        },
        {
            path: ROUTERS.USER.DANH_MUC,
            component: <Danh_muc/>,
        },
        {
            path: ROUTERS.USER.COLD_WAR,
            component: <Cold_war/>,
        },
        {
            path: ROUTERS.USER.LICH_SU_VN,
            component: <Lich_su_VN/>,
        },
        {
            path: ROUTERS.USER.CHUYEN_MUC_DAC_BIET,
            component: <Chuyen_muc_dac_biet/>,
        },
        {
            path: ROUTERS.ADMIN.LOGIN,
            component: <Admin_login/>,
        },

    ];

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map( (item, key) => (
                    <Route key = {key} path={item.path} element ={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    )
};

const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;