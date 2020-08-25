import React , {useState, useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckBox = ({categories}) => {

    const [checked, setChecked] = useState([]);

    const handleToggle = c => {
        const currentCategoryId = checked.indexOf(c);
        const newCheckedCategoryId = [...checked];
 
        if(currentCategoryId === -1){
            newCheckedCategoryId.push(c)
        }else {
            newCheckedCategoryId.splice(currentCategoryId)
        }
        console.log(newCheckedCategoryId);
        setChecked(newCheckedCategoryId);
    }

    return categories.map((c,i) => (
        <li key={i} className='list-unstyled'>
        <FormControlLabel
        control={
          <Checkbox
          onChange={() => handleToggle(c._id)}
           value={checked.indexOf(c._id === -1)}
            name="checkedB"
            color="primary"
          />
        }
        label={c.name}
      />
        </li>
    ));
};

export default CheckBox;