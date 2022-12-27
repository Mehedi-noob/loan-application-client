import React from 'react';
import { toast } from 'react-hot-toast';

const LoanForm = ({ personalInfo, businessInfo, setToogleValue }) => {

    const handleLoanDetails = (event) => {
        event.preventDefault();
        const form = event.target;
        const tenure = form.tenure.value;
        const interest = form.interest.value;
        const amount = form.amount.value;
        const loanDetails = {
            tenure,
            interest,
            amount
        }
        const registrationDetails = {
            personalInfo,
            businessInfo,
            loanDetails
        }
        fetch("https://loan-application-server-brown.vercel.app/userDetails", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(registrationDetails),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
        toast.success('Registration successfully Completed')
        form.reset();
        setToogleValue(1);
    }

    return (
        <div>
            <div className="w-full max-w-full">
                {/* Loan details form  */}
                <form onSubmit={handleLoanDetails} className="grid grid-cols-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="m-4">
                    <label className="label">
                            <span className="label-text text-xl">Loan Amount</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" name="amount" type="text" placeholder="Write Loan amount" />
                    </div>
                    <div className="m-4">
                    <label className="label">
                            <span className="label-text text-xl">Interest Rate</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="interest" name="interest" type="text" placeholder="Write desired interest rate" />
                    </div>
                    <div className="m-4">
                    <label className="label">
                            <span className="label-text text-xl">Loan Tenure</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tenure" name="tenure" type="text" placeholder="Enter desired loan tenure" />
                    </div>
                    <div className="flex items-center justify-between">
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoanForm;