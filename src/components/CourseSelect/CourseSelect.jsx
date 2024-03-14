const CourseSelect = () => {
    return (
        <div className='bg-white p-4 rounded-xl divide-y-2'>
            <h2 className='text-lg font-bold text-blue-600 pb-4'>Credit Hour Remaining 7 hr</h2>
            <div className='pt-4 pb-6'>
                <h2 className='text-xl font-bold text-gray-900 pb-5'>Course Name</h2>
                <div className='space-y-2'>
                    <p className='text-gray-500'>1 Introduction to c programming</p>
                    <p className='text-gray-500'>1 Introduction to c programming</p>
                </div>
            </div>
            <h5 className='font-medium py-4 text-gray-700'>Total Credit Hour : 13</h5>
            <h4 className='font-semibold pt-4 text-gray-700'>Total Price : 48000 USD</h4>
        </div>
    );
};

export default CourseSelect;