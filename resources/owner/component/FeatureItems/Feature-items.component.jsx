import React from 'react'

const FeatureItem = ({children,hr,img,className1,className2,className3,...otherProps}) => (
    <div>
          <div className={`row gap-y ${className1}`}>
            <div className={`col-md-6 ${className2}`}>
              {children}
            </div>

            <div className={`col-md-5 ${className3}`}>
              <img src={img} alt="..."/>
            </div>
          </div>

         {hr ? (<hr className="my-8"/>) : null}
          
    </div>
);

export default FeatureItem;