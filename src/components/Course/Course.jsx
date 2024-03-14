const Course = ({course}) => {
    const {name, credit, description, photo, price} = course;
    return (
        <div className='bg-white p-4 rounded-xl'>
            <div className='mb-4'>
                <img className='w-full' src={photo} alt="" />
            </div>
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>{name}</h3>
            <p className='text-sm text-gray-500 mb-5'>{description}</p>
            <div className='flex gap-4'>
                <div className='flex gap-3'>
                    <p>Dollar i</p>
                    <p className='font-medium text-gray-500'>Price: {price}</p>
                </div>
                <div className='flex gap-3'>
                    <p>Reading i</p>
                    <p className='font-medium text-gray-500'>Credit: {credit}hr</p>
                </div>
            </div>
            <button className='text-white text-lg font-semibold bg-blue-600 py-2 rounded-lg w-full mt-5'>Select</button>
        </div>
    );
};

export default Course;