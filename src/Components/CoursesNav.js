import React from 'react';
import { Link } from 'react-router-dom';
import { SingleServiceThumb } from '../moduleLoader';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const CoursesNav = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;
    
    const shorTermTitle = findText(t,['ServicesText','shortTerm', 'title',lang]);
    const longTermTitle = findText(t,['ServicesText','longTerm', 'title',lang]);
    const kidsAndFamTitle = findText(t,['ServicesText','familyKids', 'title',lang]);
    const businessTitle = findText(t,['ServicesText','businessEnglish', 'title',lang]);
    const teacherCertsTitle = findText(t,['ServicesText','teachCerts', 'title',lang]);
    const examsTitle = findText(t,['ServicesText','exams', 'title',lang]);

    const servicesPageMenuShortTerm = findText(t,['ServicesText','shortTerm','title',lang]);
    const servicesPageMenuLongTerm = findText(t,['ServicesText','longTerm','title',lang]);
    const servicesPageMenuKidsFam = findText(t,['ServicesText','familyKids','title',lang]);
    const servicesPageMenuBusiness = findText(t,['ServicesText','businessEnglish','title',lang]);
    const servicesPageMenuTeachCert = findText(t,['ServicesText','teachCerts','title',lang]);
    const servicesPageMenuExamCert = findText(t,['ServicesText','exams','title',lang]);

    return (
        <ul role="nav" className="col-sm-12 unordered-list bg-white">
            <li><Link to="/services/courses-nav/short-term">{servicesPageMenuShortTerm}</Link></li>
            <li><Link to="/services/courses-nav/short-term">{servicesPageMenuLongTerm}</Link></li>
            <li><Link to="/services/courses-nav/short-term">{servicesPageMenuKidsFam}</Link></li>
            <li><Link to="/services/courses-nav/short-term">{servicesPageMenuBusiness}</Link></li>
            <li><Link to="/services/courses-nav/short-term">{servicesPageMenuTeachCert}</Link></li>
            <li><Link to="/services/courses-nav/short-term">{servicesPageMenuExamCert}</Link></li>
        </ul>
    );
}