
export default {
    printLog() {
        console.log('--- 第一课: base type 开始 ---');
        let isDone: boolean = false;
        isDone = true; // 可行
        // isDone = 1; // 报错

        let num: number = 0;
        let str: string = '';

        // 数据类型后接 []
        let arr1: number[] = [1, 2, 3];
        // 泛型方式
        let arr2: Array<number> = [1, 2, 3];
        // 对应二维数组的声明是下面这样：
        let arr3: number[][] = [[1], [2]];;
        let arr4: Array<Array<number>> = [[1], [2]];

        let tuple: [number, string] = [0, 'name'];
        // tuple = ['name', 0]; // 报错

        enum Color {Red, Green, Blue};
        let c: Color = Color.Green;
        // c 的值是 1
        console.log(c);

        console.log('--- 第一课: base type 结束 ---');
    }
}
