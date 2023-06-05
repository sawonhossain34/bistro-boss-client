import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data:stats ={}} = useQuery({
        queryKey:['/admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data
        }
    })

    return (
        <div className="w-full m-4">
            <h2 className="text-3xl ">Welcome back.{user.displayName}</h2>
        </div>
    );
};

export default AdminHome;