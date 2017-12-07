import React, { Component } from 'react';
import { SingleServiceThumb } from '../moduleLoader';
import { Link } from 'react-router-dom';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const BusinessCoursesThumb = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;

  
    const backImg = findText(t,['ServicesText','businessEnglish', 'backImg']);
    const title = findText(t,['ServicesText','businessEnglish', 'title',lang]);
    const descr = findText(t,['ServicesText','businessEnglish', 'descr',lang]);
    const buttonLbl = findText(t,['ServicesText','businessEnglish', 'buttonLbl',lang]);
    const link = findText(t, ['ServicesText', 'businessEnglish', 'link']); 

    return (
        <SingleServiceThumb title={title} descr={descr} buttonLbl={buttonLbl} backImg={backImg} link={link} />
    );
};