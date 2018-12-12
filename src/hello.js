import styles from './main.css'
export default {
    component() {
        var element = document.createElement('div');
        element.innerHTML = `<h1 class="${styles.hello}">hello component</h1>`;

        return element;
    }
}