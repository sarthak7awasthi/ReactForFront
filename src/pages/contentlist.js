import React from 'react';
import { Link } from 'react-router-dom';
import content from './content';

const Contentlist = () => (
    <>
    <h1>Articles</h1>
    <contentlist articles={content} />
    </>
);

export default Contentlist;