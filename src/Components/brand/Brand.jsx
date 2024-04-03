import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import  './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
  <div>
    <img src={google} alt='load' />
  </div>
  <div>
    <img src={slack}  alt='load'/>
  </div>
  <div>
    <img src={atlassian}  alt='load'/>
  </div>
  <div>
    <img src={dropbox}  alt='load'/>
  </div>
  <div>
    <img src={shopify}  alt='load'/>
  </div>
</div>
)



export default Brand
