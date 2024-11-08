const findSubsequences = (nums) => {
    const res = [];
    const len = nums.length;
    // 用一个 set 存储每个合格的 path，下次遇到重复的，不让它加入解集即可
    const set = new Set();

    const dfs = (start, path) => {
        if (path.length >= 2) {
            const str = path.toString(); // path数组 转成字符串
            if (!set.has(str)) {         // set中没有存有当前path
                res.push(path.slice());    // 推入一份path的拷贝
                set.add(str);              // 存入set，记录一下
            }
        }
        for (let i = start; i < len; i++) {      // 枚举出当前所有的选项，从start到末尾
            const prev = path[path.length - 1];    // 上一个选择，即path数组的末尾元素
            const cur = nums[i];                   // 当前选择
            if (path.length === 0 || prev <= cur) { // 如果path为空，或满足递增关系，则可选择
                path.push(cur);                      // 选择当前的数字
                dfs(i + 1, path);                    // 继续往下递归，注意传的是i+1
                path.pop();                          // 撤销选择当前数字，选择别的数字
            }
        }
    };
    dfs(0, []); //递归的入口，从下标0到末尾的数组中选择合适的数加入path，组成解集。初始path是空数组
    return res;
};