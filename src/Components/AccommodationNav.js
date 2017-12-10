import React from 'react';
import { Link } from 'react-router-dom';
import { SingleServiceThumb } from '../moduleLoader';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const AccommodationNav = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;
    
    const ShortTerm = findText(t,['ServicesText','shortTerm','title',lang]);
    const LongTerm = findText(t,['ServicesText','longTerm','title',lang]);
    const KidsFam = findText(t,['ServicesText','familyKids','title',lang]);
    const Business = findText(t,['ServicesText','businessEnglish','title',lang]);
    const TeachCert = findText(t,['ServicesText','teachCerts','title',lang]);
    const ExamCert = findText(t,['ServicesText','exams','title',lang]);
    
    const shorTermTitle = findText(t,['ServicesText','shortTerm', 'title',lang]);
    const longTermTitle = findText(t,['ServicesText','longTerm', 'title',lang]);
    const kidsAndFamTitle = findText(t,['ServicesText','familyKids', 'title',lang]);
    const businessTitle = findText(t,['ServicesText','businessEnglish', 'title',lang]);
    const teacherCertsTitle = findText(t,['ServicesText','teachCerts', 'title',lang]);
    const examsTitle = findText(t,['ServicesText','exams', 'title',lang]);

    const ShortTermLink = findText(t,['ServicesText','shortTerm','link']);
    const LongTermLink  = findText(t,['ServicesText','longTerm','link']);
    const KidsFamLink = findText(t,['ServicesText','familyKids','link']);
    const BusinessLink = findText(t,['ServicesText','businessEnglish','link']);
    const TeachCertLink = findText(t,['ServicesText','teachCerts','link']);
    const ExamLink = findText(t,['ServicesText','exams','link']);
    
    return (
        <ul role="nav" className="col-sm-12 unordered-list bg-white">
            <li><Link to={ShortTermLink}>{ShortTerm}</Link></li>
            <li><Link to={LongTermLink}>{LongTerm}</Link></li>
            <li><Link to={KidsFamLink}>{KidsFam}</Link></li>
            <li><Link to={BusinessLink}>{Business}</Link></li>
            <li><Link to={TeachCertLink}>{TeachCert}</Link></li>
            <li><Link to={ExamLink}>{ExamCert}</Link></li>
        </ul>
    );
}