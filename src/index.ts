import { Component } from './component';
import { App } from './components/app';
import { Counter } from './components/counter';
import { AppState } from './state/app-state';
import './state/counter-state';

const appElement = document.getElementById('app') as HTMLElement;

const state = new AppState();
const app = new App(state);
// const counter = new Counter(state);

appElement.append(app.node);
