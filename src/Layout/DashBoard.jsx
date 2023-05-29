import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome,FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 ">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook></FaBook> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>

                            

                        </> :
                            <>
                                <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservations'><FaCalendar></FaCalendar> Reservations</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Prement History</NavLink></li>

                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                            </>}


                    {/* <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservations'><FaCalendar></FaCalendar> Reservations</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Prement History</NavLink></li>

                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                        <span className="badge badge-secondary">+{cart?.length || 0}</span>
                    </NavLink></li> */}

                    <div className="divider"></div>
                    <li><NavLink to="/">Home<FaHome></FaHome></NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;