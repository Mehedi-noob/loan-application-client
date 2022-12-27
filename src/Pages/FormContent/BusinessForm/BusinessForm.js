import React from 'react';

const BusinessForm = ({ setToogleValue, setBusinessInfo }) => {

    const handleBusinessDetails = (event) => {
        event.preventDefault();
        const form = event.target;
        const businessName = form.businessName.value;
        const gst = form.gst.value;
        const address = form.address.value;
        const businessDetails = {
            businessName,
            gst,
            address
        }
        setBusinessInfo(businessDetails);
        form.reset();

    }

    return (
        <div>
            <div className="w-full max-w-full">
                {/* business details form  */}
                <form onSubmit={handleBusinessDetails} className="grid grid-cols-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="m-4">
                        <label className="label">
                            <span className="label-text text-xl">Business Name</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="businessName" name="businessName" type="text" placeholder="Write your Business Name" />
                    </div>
                    <div className="m-4">
                        <label className="label">
                            <span className="label-text text-xl">GST Number</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gst" name="gst" type="text" placeholder="Write your GST no." />
                    </div>
                    <div className="m-4">
                        <label className="label">
                            <span className="label-text text-xl">Address</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" name="address" type="text" placeholder="Address" />
                    </div>
                    <div className="flex items-center justify-between">
                        <input onClick={() => setToogleValue(3)} className="btn btn-primary" type="submit" value="Next" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BusinessForm;