import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categorys = ['salad', 'pizza', 'desserts', 'drinks', 'soup'];
    const { category } = useParams();
    const initialIndex = categorys.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const soup = menu.filter(item => item.category === 'soup')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div>

                <Cover img={orderCover} title={'order food'}></Cover>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Soup</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>

                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Order;