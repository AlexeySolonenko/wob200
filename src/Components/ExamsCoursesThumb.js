import React, { Component } from 'react';
import { SingleServiceThumb } from '../moduleLoader';
import { Link } from 'react-router-dom';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const ExamsCoursesThumb = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;

  
    const backImg = findText(t,['ServicesText','exams', 'backImg']);
    const title = findText(t,['ServicesText','exams', 'title',lang]);
    const descr = findText(t,['ServicesText','exams', 'descr',lang]);
    const buttonLbl = findText(t,['ServicesText','exams', 'buttonLbl',lang]);
    const link = findText(t,['ServicesText','exams', 'link']);

    return (
        <SingleServiceThumb title={title} descr={descr} buttonLbl={buttonLbl} backImg={backImg} link={link} />
    );
};