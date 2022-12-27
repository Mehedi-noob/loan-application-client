import React, { useState } from 'react';
import BusinessForm from './BusinessForm/BusinessForm';
import LoanForm from './LoanForm/LoanForm';
import PersonalForm from './PersonalForm/PersonalForm';

const FormContent = () => {
    const tabDetails = [
        {
            name: "personal Details",
            number: 1
        },
        {
            name: "Business Details",
            number: 2
        },
        {
            name: "Loan Details",
            number: 3
        }
    ]
    const [toogleValue, setToogleValue] = useState(1);
    const [personalInfo, setPersonalInfo] = useState({});
    const [businessInfo, setBusinessInfo] = useState({});

    return (
        <div className=' rounded bg-white'>
            <div>
                {
                    tabDetails.map((tab, id) => <button key={id} onClick={() => setToogleValue(tab.number)} className={toogleValue === tab.number ? " btn-wide btn-ghost border-2 border-red-500 border-b-0 m-2" : "border-2 border-red-500 btn-wide btn-error m-2"}>{tab.name}</button>
                    )
                }
            </div>
            <div>
                <div className={toogleValue === 1 ? "" : "hidden"}>
                    <PersonalForm
                        setPersonalInfo={setPersonalInfo} setToogleValue={setToogleValue}></PersonalForm>
                </div>
                <div className={toogleValue === 2 ? "" : "hidden"}>
                    <BusinessForm setBusinessInfo={setBusinessInfo} setToogleValue={setToogleValue}></BusinessForm>
                </div>
                <div className={toogleValue === 3 ? "" : "hidden"}>
                    <LoanForm setToogleValue={setToogleValue} personalInfo={personalInfo} businessInfo={businessInfo}></LoanForm>
                </div>

            </div>
        </div>
    );
};

export default FormContent;