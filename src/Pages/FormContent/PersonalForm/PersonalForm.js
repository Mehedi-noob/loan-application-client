import React from 'react';

const PersonalForm = ({ setToogleValue, setPersonalInfo }) => {
    const handlePersonalDetails = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const age = form.age.value;
        const mobile = form.mobile.value;
        console.log(firstName);
        const personalDetails = {
            firstName,
            lastName,
            age,
            mobile
        }
        setPersonalInfo(personalDetails);
        form.reset();

    }

    return (
        <div>
            <div className="w-full max-w-full">
                {/* personal details form  */}
                <form onSubmit={handlePersonalDetails} className="grid grid-cols-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="m-4">
                        <label className="label">
                            <span className="label-text text-xl">First Name</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" name="firstName" type="text" placeholder="Write your First Name" />
                    </div>
                    <div className="m-4">
                        <label className="label">
                            <span className="label-text text-xl">Last Name</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" name="lastName" type="text" placeholder="Write your Last Name" />
                    </div>
                    <div className="m-4">
                        <label className="label">
                            <span className="label-text text-xl">Enter Age</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" name="age" type="text" placeholder="Enter your age" />
                    </div>
                    <div className="m-4">
                        <label className="label">
                            <span className="label-text text-xl">Mobile number</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" name="mobile" type="text" placeholder="Enter your mobile number" />
                    </div>
                    <div className="flex items-end justify-end">
                        <input onClick={() => setToogleValue(2)} className="btn btn-primary" type="submit" value="Next" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalForm;