// Сделаем функции Enzyme доступными во всех файлах тестов без необходимости импорта importing
import { shallow, render, mount } from 'enzyme';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Обрушим тест при любой ошибке
console.error = message => {
    throw new Error(message);
};