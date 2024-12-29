import { Select, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'


function About() {
    const [age, setAge] = useState(''); // State hook to manage age

    // Function to handle the change event
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <p>About</p>
            <Select
                native
                value={age}
                onChange={handleChange}
                name="age"
                displayEmpty
                inputProps={{
                    id: 'age-native-required',
                }}
            >
                <option value="" disabled>No Selection</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </Select>
        </div>
    )
}

export default About
