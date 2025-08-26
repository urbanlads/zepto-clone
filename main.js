import './style.css'
import { setupCounter } from './counter.js'
import { Model } from './model/model.js';
import { ContainerView } from './view/containerView.js';
import { HeaderView } from './view/headerView.js';

console.log(Model);
const container = new ContainerView(Model)
container.init();

const headerView = new HeaderView(Model);

