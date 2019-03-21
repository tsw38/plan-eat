import React from 'react';

import {AlertConstants as AC} from 'constants';
import Notification from "components/common/notification";

export default ({toast}) => {
    return (
        <div className="ToastContainer">
            {toast && toast.map(({body, scale, subtitle, title}, index) => {
                return (
                    <Notification
                        key={`toast-notification-${index}`}
                        type={AC.TOAST}
                        scale={scale.toUpperCase()}
                        title={title}
                        subtitle={subtitle}
                        // disableTimeout={true}
                        theme="dark"
                    >
                        {body ? <p>{body}</p> : null}
                    </Notification>
                )
            })}

        </div>
    );
}
