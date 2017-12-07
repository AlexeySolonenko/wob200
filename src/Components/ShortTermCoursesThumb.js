import React, { Component } from 'react';
import { SingleServiceThumb } from '../moduleLoader';
import { Link } from 'react-router-dom';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const ShortTermCoursesThumb = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;

  
    const backImg = findText(t,['ServicesText','shortTerm', 'backImg']);
    const title = findText(t,['ServicesText','shortTerm', 'title',lang]);
    const descr = findText(t,['ServicesText','shortTerm', 'descr',lang]);
    const buttonLbl = findText(t,['ServicesText','shortTerm', 'buttonLbl',lang]);
    const link = findText(t,['ServicesText','shortTerm', 'link']);

    return (
        <SingleServiceThumb title={title} descr={descr} buttonLbl={buttonLbl} backImg={backImg} link={link} />
    );
};