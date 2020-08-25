import React from 'react';
import {API} from '../config';

const ShowImage = ({item, url}) => (
    <div>
    <img src={`${API}/${url}/photo/${item._id}`}
              className="img-fluid"
              alt={item.name}
              style={{ maxHeight: '100%', maxWidth:'100%'}}
              
            />
    </div>
);

export default ShowImage;