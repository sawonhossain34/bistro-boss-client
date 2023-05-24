import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/pizza-bg.jpg';
import dessertsImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading='Do not Miss' heading="today's offer"></SectionTitle>
            {/* offer menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dezzad menu items */}
            <MenuCategory 
            items = {desserts}
            title={'Desserts'}
            img ={dessertsImg}
            ></MenuCategory>
            <MenuCategory items = {pizza} title={'Pizza'} img ={pizzaImg}></MenuCategory>
            <MenuCategory items = {salad} title={'Salad'} img ={saladImg}></MenuCategory>
            <MenuCategory items = {soup} title={'Soup'} img ={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;