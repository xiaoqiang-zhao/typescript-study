/**
 * @file Demo 集入口
 * 
 * @author xiaoqiang-zhao
 */

import basicTypeDemo from './ts-demo/1-basic-types.ts';
import interfaceDemo from './ts-demo/2-interface.ts';

document.getElementById('app').innerHTML = '请打开控制台查看';

basicTypeDemo.printLog();
interfaceDemo.printLog();
