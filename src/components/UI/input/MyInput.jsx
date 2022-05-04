import React from 'react';
import '../../../styles/InputAndLabelStyles.scss';

const MyInput = React.forwardRef((props, ref) => {
    return (
            <input ref={ref} placeholder=' ' className='formInput' {...props}/>
    );
});

export default MyInput;