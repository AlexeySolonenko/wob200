import React from 'react';
import { Link } from 'react-router-dom';
import { SingleServiceThumb } from '../moduleLoader';
import { t } from '../TextLoader';
import { searchNestedArrays } from '../Utils/searchNestedArrays';

export const CoursesNav = (props) => {

    let lang = props.lang;
    // const findText = props.findText;
    const findText = searchNestedArrays;
    
    // ***** TO TRY EXTRACTING A HEAD ARRAY SHORTTERM AND THEN APPLY FINDTEXT TO ITS CHILDREN OR
    // OR - BETTTER JUST TO ACCESS DIRECTLY? NO - BETTER FUNCTION TRY/CATCH

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
            <li><Link to={ShortTermLink}>{ShortTermTitle}</Link></li>
            <li><Link to={LongTermLink}>{LongTermTitle}</Link></li>
            <li><Link to={KidsFamLink}>{KidsFamTitle}</Link></li>
            <li><Link to={BusinessLink}>{BusinessTitle}</Link></li>
            <li><Link to={TeachCertLink}>{TeachCertTitle}</Link></li>
            <li><Link to={ExamLink}>{ExamCertTitle}</Link></li>
        </ul>
    );
}