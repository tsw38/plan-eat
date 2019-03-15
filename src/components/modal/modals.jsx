import React from 'react';
import objectPath from 'object-path';
import Config from 'config/ModalsConfig';

import Modal from 'components/common/modal';

export default ({modals}) => {
    const DangerBody = !!objectPath.get(modals, `${Config.GLOBAL.danger.id}.content.Body`) ? modals[Config.GLOBAL.danger.id].content.Body : null;
    const PassiveBody= !!objectPath.get(modals, `${Config.GLOBAL.passive.id}.content.Body`) ? modals[Config.GLOBAL.passive.id].content.Body : null;
    const DangerPassiveBody = !!objectPath.get(modals, `${Config.GLOBAL.dangerPassive.id}.content.Body`) ? modals[Config.GLOBAL.dangerPassive.id].content.Body : null;
    const TransactionalBody = !!objectPath.get(modals, `${Config.GLOBAL.transactional.id}.content.Body`) ? modals[Config.GLOBAL.transactional.id].content.Body : null;

    return (
        <React.Fragment>
            {!!objectPath.get(modals, `${Config.GLOBAL.passive.id}`) &&
                <Modal
                    modalId={Config.GLOBAL.passive.id}
                    type={Config.GLOBAL.passive.type}
                    isOpen={objectPath.get(modals, `${Config.GLOBAL.passive.id}.isOpen`)}
                    heading={objectPath.get(modals, `${Config.GLOBAL.passive.id}.content.heading`)}
                    label={objectPath.get(modals, `${Config.GLOBAL.passive.id}.content.label`)}>
                    {PassiveBody}
                </Modal>
            }

            {!!objectPath.get(modals, `${Config.GLOBAL.transactional.id}`) &&
                <Modal
                    modalId={Config.GLOBAL.transactional.id}
                    type={Config.GLOBAL.transactional.type}
                    isOpen={objectPath.get(modals, `${Config.GLOBAL.transactional.id}.isOpen`)}
                    heading={objectPath.get(modals, `${Config.GLOBAL.transactional.id}.content.heading`)}
                    label={objectPath.get(modals, `${Config.GLOBAL.transactional.id}.content.label`)}
                    buttons={objectPath.get(modals, `${Config.GLOBAL.transactional.id}.content.buttons`)}>
                    {TransactionalBody}
                </Modal>
            }

            {!!objectPath.get(modals, `${Config.GLOBAL.danger.id}`) &&
                <Modal
                    modalId={Config.GLOBAL.danger.id}
                    type={Config.GLOBAL.danger.type}
                    isOpen={objectPath.get(modals, `${Config.GLOBAL.danger.id}.isOpen`)}
                    heading={objectPath.get(modals, `${Config.GLOBAL.danger.id}.content.heading`)}
                    label={objectPath.get(modals, `${Config.GLOBAL.danger.id}.content.label`)}
                    buttons={objectPath.get(modals, `${Config.GLOBAL.danger.id}.content.buttons`)}>
                    {DangerBody}
                </Modal>
            }

            {!!objectPath.get(modals, `${Config.GLOBAL.dangerPassive.id}`) &&
                <Modal
                    modalId={Config.GLOBAL.dangerPassive.id}
                    type={Config.GLOBAL.dangerPassive.type}
                    isOpen={objectPath.get(modals, `${Config.GLOBAL.dangerPassive.id}.isOpen`)}
                    heading={objectPath.get(modals, `${Config.GLOBAL.dangerPassive.id}.content.heading`)}
                    label={objectPath.get(modals, `${Config.GLOBAL.dangerPassive.id}.content.label`)}
                    buttons={objectPath.get(modals, `${Config.GLOBAL.dangerPassive.id}.content.buttons`)}>
                    {DangerPassiveBody}
                </Modal>
            }

            {/* <Modal type="full" render={isLoading} /> */}
        </React.Fragment>
    );
}
