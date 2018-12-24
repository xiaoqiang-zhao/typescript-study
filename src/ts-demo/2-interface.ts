
export default {
    printLog() {
        console.log('--- 第二课: interface 开始 ---');
        interface ClockInterface {
            currentTime: Date;
            setTime(d: Date): void;
        }
        class Clock implements ClockInterface {
            currentTime: Date;
            setTime(d: Date) {
                this.currentTime = d;
            }
            constructor(h: number, m: number) {
                // ...
            }
        }

        const clockNow = new Clock(0, 0);
        clockNow.setTime(new Date());
        console.log(clockNow.currentTime);

        // -------------------------------------------

        interface Counter {
            (start: number): string;
            interval: number;
            reset(): void;
        }
        
        function getCounter(): Counter {
            let counter = <Counter>function (start: number) {
                return 'str';
            };
            counter.interval = 123;
            counter.reset = function () { };
            return counter;
        }
        
        let c = getCounter();
        console.log('c(10):', c(10));
        c.reset();
        c.interval = 5.0;
        console.log('c:', c);

        // -----------------------------------------

        class Control {
            private state: any;
        }
        
        interface SelectableControl extends Control {
            select(): void;
        }
        
        class Button extends Control implements SelectableControl {
            select() { }
        }
        
        class TextBox extends Control {
            select() { }
        }
        
        // 错误：“Image”类型缺少“state”属性。
        // class Image implements SelectableControl {
        //     select() { }
        // }
        // console.log(Image);

        // -----------------------------------------

        console.log('--- 第二课: interface 结束 ---');
    }
}
