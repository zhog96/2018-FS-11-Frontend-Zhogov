import '../utils/style.css';

const say = function (name) {
    const div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = `Hello, ${name}`;
    document.body.appendChild(div);
};

export default say;
