import React, { Component } from 'react';
import { SingleServiceThumb } from '../moduleLoader';
import { Link } from 'react-router-dom';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const FamilyKidsCoursesThumb = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;

  
    const backImg = findText(t,['ServicesText','familyKids', 'backImg']);
    const title = findText(t,['ServicesText','familyKids', 'title',lang]);
    const descr = findText(t,['ServicesText','familyKids', 'descr',lang]);
    const buttonLbl = findText(t,['ServicesText','familyKids', 'buttonLbl',lang]);
    const link = findText(t,['ServicesText','familyKids', 'link']);


    return (
        <SingleServiceThumb title={title} descr={descr} buttonLbl={buttonLbl} backImg={backImg} link={link} />
    );
};