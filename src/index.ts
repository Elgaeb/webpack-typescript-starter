import * as _ from 'lodash-es';
import printMe from './print';

import './style.css';

// import Icon from './icon.png';
// import Data from './data.xml';
// import Notes from './data.csv';
// import toml from './data.toml';
// import yaml from './data.yaml';
// import json from './data.json5';

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`

/*
function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}
*/

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
