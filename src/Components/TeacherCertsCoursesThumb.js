import React, { Component } from 'react';
import { SingleServiceThumb } from '../moduleLoader';
import { Link } from 'react-router-dom';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const TeacherCertsCoursesThumb = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;

  
    const backImg = findText(t,['ServicesText','teachCerts', 'backImg']);
    const title = findText(t,['ServicesText','teachCerts', 'title',lang]);
    const descr = findText(t,['ServicesText','teachCerts', 'descr',lang]);
    const buttonLbl = findText(t,['ServicesText','teachCerts', 'buttonLbl',lang]);
    const link = findText(t,['ServicesText','teachCerts', 'link']);
    

    return (
        <SingleServiceThumb title={title} descr={descr} buttonLbl={buttonLbl} backImg={backImg} link={link}/>
    );
};