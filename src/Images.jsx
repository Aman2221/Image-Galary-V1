import React, { useState } from 'react'
import './Images.css';
const Image = () => {
    const [imgSrc1,setImgSrc1] = useState('https://fsb.zobj.net/crop.php?r=fboiwXc1ZhXvrCtcAQ6KmX57cEm6OeYvbb0EoOKxqRnYXDoZSoUOl4pDON4PpQEohZr76_5o4D6DF5H1b8jgFS-QQNFj4aAGzn-Dsa68_hdkTtawef7J740IHzReFwZudeH4_pa-l44OpvYX');
    const [imgSrc2,setImgSrc2] = useState('https://fsa.zobj.net/crop.php?r=K7F1AuApraMDWflZjA50WdHqXCDsH_9GiQVtrUh33bsz5gsFqZYQDODPEPv0e2m9ofpl10hv_xa5Y8GrFmShO4QtEPm-nImYIqfUMb7qvWGVkWchObBrWXcuou1QJNNEQTzyPKFk66Thwjvg');
    const [imgSrc3,setImgSrc3] = useState('https://external-preview.redd.it/6OnX0i-QifUsW4oOzyFJuYeAAYQFwZSXT0JVrl_bYIk.jpg?auto=webp&s=a3275e29426518e6fe8b32f8e3db71ec04a3919c');
    const [imgSrc4,setImgSrc4] = useState('https://fsa.zobj.net/crop.php?r=V1UGPJAbkowpQRptJLD8vGI7f5kzg1XwR06-0dgRsREbkifg3T0naSJd1w-RGVi-Lq8JpcdTQZD513e6ear86J6aUeAEDwDLpI6f4GeNt43qG-VchNZ3MdmYSRzA5HFlJ8evu3sUH3ylYOrm');
    const [imgSrc5,setImgSrc5] = useState('https://fsb.zobj.net/crop.php?r=awd2OcNuRHQhKPVAMbD7lFs9z5ObgozW233bY1UTH2oEADByKlaIVZuSIs57ylPkDsuy2szfQMZYW-EFEaq596lz1Mrd5s086UZfzU9iuL4OFm-zvztrOoRBLwVnlLBeDj1bqfmIDqTBn00Q');
    const [imgSrc6,setImgSrc6] = useState('https://fsa.zobj.net/crop.php?r=vxcjnQB33ISkyIoRrSACNShM3tmrlAeNsSqms2D6ANvFLdvw_rZKCE1zadunIyPJwgm-UzkAHNYB2_fSJuYRzUk8NqhXgpdlEbL9VAuVTI4bqq_16kh6JcD6pmEDrK6SkCPpXsrDVtTNdHLX');
    const [imgSrc7,setImgSrc7] = useState('https://fsa.zobj.net/crop.php?r=d7Ihi_8aWAfHHSheQ9uBe3mAmoklogNvX8jzODTb2OoD-iLpLy0SPIdOT7pBrhkRnJkTvjwxmMDbeiKlNX68bV-b_oRTazEdXj9wK6eEpbAVGB2yX7yQSNlOm9iWCuWl7GnCKr1_OK10kkqS');

    const ChangeImg1 = () => {
        setImgSrc1(imgSrc2);
    }

    const ChangeImg2 = () => {
        setImgSrc1(imgSrc3);
    }

    const ChangeImg3 = () => {
        setImgSrc1(imgSrc4);
    }

    const ChangeImg4 = () => {
        setImgSrc1(imgSrc5);
    }

    const ChangeImg5 = () => {
        setImgSrc1(imgSrc6);
    }

    const ChangeImg6 = () => {
        setImgSrc1(imgSrc7);
    }

    return(
        <>
        <div id='main-img'>
            <img src={imgSrc1} alt='Main Image'/>
        </div>
            <div id='Galary'>
                <img src={imgSrc2} alt='img' onClick={ChangeImg1}/>
                <img src={imgSrc3} alt='img' onClick={ChangeImg2}/>
                <img src={imgSrc4} alt='img' onClick={ChangeImg3}/>
                <img src={imgSrc5} alt='img' onClick={ChangeImg4}/>
                <img src={imgSrc6} alt='img' onClick={ChangeImg5}/>
                <img src={imgSrc7} alt='img' onClick={ChangeImg6}/>
            </div>
        </>
    );
};

export default Image;