import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu] =useState([]);
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        const populerItems = data.filter(item => item.category === 'popular');
        setMenu(populerItems);
    })

    return (
        <section className="mb-12">
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                >
                </MenuItem>)
            }
            </div>
            <button className="btn  btn-outline border-0 border-b-2  btn-secondary mt-4">View Full Menu</button>
        </section>
        
    );
};

export default PopularMenu;