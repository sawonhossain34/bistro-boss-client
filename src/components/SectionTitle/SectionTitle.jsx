

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center mx-auto md:w-4/12 my-4">
            <p className="text-yellow-700 font-bold italic mb-2"> ---{subHeading} ---</p>
            <h3 className="text-4xl uppercase border-y-4  py-4 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;