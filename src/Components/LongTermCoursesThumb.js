import React, { Component } from 'react';
import { SingleServiceThumb } from '../moduleLoader';
import { Link } from 'react-router-dom';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const LongTermCoursesThumb = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;

  
    const backImg = findText(t,['ServicesText','longTerm', 'backImg']);
    const title = findText(t,['ServicesText','longTerm', 'title',lang]);
    const descr = findText(t,['ServicesText','longTerm', 'descr',lang]);
    const buttonLbl = findText(t,['ServicesText','longTerm', 'buttonLbl',lang]);
    const link = findText(t,['ServicesText','longTerm', 'link']);

    return (
        <SingleServiceThumb title={title} descr={descr} buttonLbl={buttonLbl} backImg={backImg} link={link} />
    );
};