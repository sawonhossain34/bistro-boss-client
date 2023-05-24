import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/pizza-bg.jpg';
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <h3> menu section</h3>
        </div>
    );
};

export default Menu;