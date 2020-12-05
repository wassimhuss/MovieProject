import React, { Suspense } from 'react';
import ItemMovies from './ItemMovies';

const Row = (props) => {
    return (     
        <div> 
            <Suspense fallback={<h1> loading data..</h1>}>
            <ItemMovies itemData={props.data} title={props.title}></ItemMovies>
            </Suspense>
        </div>
    );
};

export default Row;