import React from 'react';
import { Progress } from 'antd';
import Continue from './buttons/Continue.js'

//Purpose of this component is to explain what Raheem is to new users
function Landing() {

    return(
        <div>
            <div>
            <div>
                <h2>Your story can end police violence.</h2>
                <p>Report and track police to build safer communities for people of color.</p>
            </div>

            <div>
                <h2>About Raheem</h2>
                <h3>Raheem is an independent service for reporting police conduct in the United States.</h3>
                    <p>Being killed by police is the 6th leading cause of death for young Black men in America. Yet, there is limited information about the 63 million police interactions every year that shape our lives or the lives of our loved ones—until it's too late.  </p>
                    <p>
                    Raheem uses data to identify places with the highest rates of police violence in the country. Then we partner with community oversight structures in these areas to collect firsthand reports of police conduct and help people file formal complaints that can lead to officers being held accountable. 
                    </p>
            </div>
                <Next />
                
            </div>

            <div>
            <Progress
                strokeColor={{
                    '0%': '#FFF600',
                    '100%': '#111111',
                }}
                percent={5}
                />
            </div>
        </div>
    )
}

export default Landing