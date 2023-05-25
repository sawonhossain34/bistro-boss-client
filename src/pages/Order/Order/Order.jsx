import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [tabIndex,setTabIndex] = useState(0);
    const [menu] = useMenu();
    const {category} = useParams();
    console.log(category);
    const soup = menu.filter(item => item.category === 'soup')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
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
    );
};

export default Order;