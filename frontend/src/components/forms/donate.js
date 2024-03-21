import React, { useState, useEffect } from 'react';
import Header from '../Header';
import '../../css/style.css'
import donateImg from "../../img/donate.jpg"

const Donate = () => {
    const [formData, setFormData] = useState({
        FullName: '',
        MobileNumber: '',
        City: '',
        UpiMethod: 'Bank Transfer Slip',
        file_donation_upi: null,
        Description: ''
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, for example, you can send formData to your backend API
        console.log(formData);
    };

    return (
        <div>
            <Header></Header>
            <div class="sliderHeading d-flex justify-content-center sliderHeadingForOthers">
                <h4 class="sliderHeadingText ">Donate</h4>
            </div>
            <form action="/donation-submited" method="post" encType="multipart/form-data">
                <div className="container formContainer ">
                    <div className='row'>
                        <div className="col-md-6 formContainerFor">
                            <label htmlFor="fname" className="formlabel">Name <sup className="sup">*</sup> :</label>
                            <input type="text" id="fname" name="FullName" />
                        </div>
                        <div className="col-md-6 formContainerFor pt-3">
                            <label htmlFor="mobNum" className="formlabel">Mobile Number <sup className="sup">*</sup> :</label>
                            <input type="text" id="mobNum" name="MobileNumber" />
                        </div>
                        <div className="col-md-6 formContainerFor pt-3">
                            <label htmlFor="city" className="formlabel">City <sup className="sup">*</sup> :</label>
                            <input type="text" id="city" name="City" />
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label htmlFor="cars" className="formlabel">Payment Mode<sup className="sup">*</sup> :</label>
                            <select id="cars" className="formContainerFor" name="UpiMethod">
                                <option value="Bank Transfer Slip">Bank Transfer Slip</option>
                                <option value="Google Pay">Google Pay</option>
                                <option value="Phonepe">Phonepe</option>
                                <option value="Amazon Pay">Amazon Pay</option>
                                <option value="Paytm">Paytm</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-6 formContainerFor">
                            <label htmlFor="city" className="formlabel">UPI SCAN:<sup className="sup">*</sup> :</label>
                            <img src={donateImg} alt="" className="payImg" />
                        </div>
                        <div className="borderBottomForForm my-4"></div>
                        <div className="col-md-6 formContainerFor">
                            <label htmlFor="myFile" className="formlabel">Payment Receipt Upload<sup className="sup">*</sup> :</label>
                            <input type="file" id="myFile" name="file_donation_upi" className="" />
                        </div>
                        <div className="borderBottomForForm my-3 pt-3"></div>
                        <div className="col-md-12 formContainerFor">
                            <label htmlFor="description" className="formlabel">Description :</label>
                            <textarea name="Description" id="description" cols="5" rows="2" className="txtarea"></textarea>
                        </div>
                        <div className="borderBottomForForm my-3"></div>
                        <div className="d-flex justify-content-center">
                            <input type="submit" value="Submit" className="formBtn" />
                        </div>
                    </div>

                </div>
            </form>
        </div>


    )
}

export default Donate;
