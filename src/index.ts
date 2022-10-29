import { Component } from './component';
import { Counter } from './components/counter';
import './state';
import { State } from './state';

const app = document.getElementById('app') as HTMLElement;

const state = new State();
const counter = new Counter(state);

app.append(counter.node);
