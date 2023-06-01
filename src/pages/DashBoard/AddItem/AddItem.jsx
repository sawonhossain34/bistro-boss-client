import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image',data.image[0])

        fetch(img_hosting_url,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imgRespons => {
            if(imgRespons.success){
                const imgURL = imgRespons.data.display_url;
                const{name,recipe,category,price} = data;
                const newItem = {name,recipe,category,price:parseFloat(price),image:imgURL};
                console.log(newItem);
                axiosSecure.post('/menu',newItem)
                .then(data => {
                    console.log('after add new item menu',data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added Item Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            }
        })
        
    };
    
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's new" heading="Add an item"> </SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-4 ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"  {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>
                <div className="flex  my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One"{...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Soup</option>
                            <option>Desi</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Type here"  {...register("price", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea  {...register("recipe", { required: true, maxLength: 120 })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4 ">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file"  {...register("image", { required: true, maxLength: 120 })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;