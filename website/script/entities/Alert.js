/*
different types :
    - fin       : alert de fin de partie
    - demarque  : informe qu'il faut demarquer
 */

export class Alert{
    message;
    labelButton;
    link;
    type;

    constructor(message, labelButton, link, type) {
        this.message = message;
        this.labelButton = labelButton;
        this.link = link;
        this.type = type;
    }

    customAlert(){
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);

        const alertCustom = document.createElement('div');

        alertCustom.className = 'custom-alert';

        switch (this.type){
            case 'fin':
                this.alertFin(alertCustom, overlay);
                break;
            case 'demarque':
                this.alertDemarque(alertCustom, overlay);
                break;
            default:
                console.log('Aucun cas ne correspond pour cette Alert !');
        }

        alertCustom.style.display = 'block';
        overlay.style.display = 'block';
    }


    alertFin(alertCustom, overlay){
        // css :
        alertCustom.style.background = '#6ea5ef';
        alertCustom.style.color = '#ffffff';
        alertCustom.style.border = '1px solid #d9323';

        const closeButton = document.createElement('button');
        closeButton.id = 'closeAlert';
        closeButton.innerText = 'X';
        alertCustom.appendChild(closeButton);

        // css :
        closeButton.style.background = '#0048ff';
        closeButton.style.color = '#ffffff';


        const pMessage = document.createElement('p');
        pMessage.innerText = this.message;
        pMessage.id = 'pMessage';
        alertCustom.appendChild(pMessage);

        const actionbutton = document.createElement('button');
        actionbutton.id = 'buttonAlert';
        actionbutton.innerHTML = this.labelButton;

        // css :
        actionbutton.style.background = '#0048ff';
        actionbutton.style.color = '#ffffff';

        closeButton.addEventListener('click', () => {
            alertCustom.style.display = 'none';
            overlay.style.display ='none';
        });

        actionbutton.addEventListener('click', () => {

            alertCustom.style.display = 'none';
            overlay.style.display ='none';

            if (this.link !== null){
                document.location.href = this.link;
            }
        });

        alertCustom.appendChild(actionbutton);
        document.body.appendChild(alertCustom);
    }

    alertDemarque(alertCustom, overlay){
        // css :
        alertCustom.style.background = '#6ea5ef';
        alertCustom.style.color = '#ffffff';
        alertCustom.style.border = '1px solid #d9323';

        const closeButton = document.createElement('button');
        closeButton.id = 'closeAlert';
        closeButton.innerText = 'X';
        alertCustom.appendChild(closeButton);

        // css :
        closeButton.style.background = '#0048ff';
        closeButton.style.color = '#ffffff';


        const pMessage = document.createElement('p');
        pMessage.innerText = this.message;
        pMessage.id = 'pMessage';
        alertCustom.appendChild(pMessage);

        const actionbutton = document.createElement('button');
        actionbutton.id = 'buttonAlert';
        actionbutton.innerHTML = this.labelButton;

        // css :
        actionbutton.style.background = '#0048ff';
        actionbutton.style.color = '#ffffff';

        closeButton.addEventListener('click', () => {
            alertCustom.style.display = 'none';
            overlay.style.display ='none';
        });

        actionbutton.addEventListener('click', () => {

            alertCustom.style.display = 'none';
            overlay.style.display ='none';

            const continueEvent = new CustomEvent('continueAfterDemarquage');
            document.dispatchEvent(continueEvent);

            if (this.link !== null){
                document.location.href = this.link;
            }
        });

        alertCustom.appendChild(actionbutton);
        document.body.appendChild(alertCustom);
    }
}