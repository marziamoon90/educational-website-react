import React from 'react';
import { useEffect } from 'react';
import useData from '../../Hooks/useData';
import Class from '../Class/Class'



const Classes = () => {
    const [allData] = useData();
    return (
        <div className="px-5">
            <h1>Learn A Variety of Dance Styles</h1>
            {
                allData.map(data => <Class
                    key={data.id}
                    data={data}></Class>,
                )
            }

        </div>

    );
};

export default Classes;