import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading='check it out' heading='form our menu'>
            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero nemo, consequuntur libero harum praesentium repudiandae accusamus ad fugiat eum atque aliquid cum beatae totam quia. Repellendus cumque aliquam quos ipsa tenetur fugiat. Qui vel provident facilis? Quo, ipsa quasi.</p>
                    

                </div>
            </div>
           
        </div>
    );
};

export default Featured;