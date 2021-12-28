module.exports={
    "plugins": ['prettier', 'vue'],
    "extends": ["plugin:vue/essential", "plugin:prettier/recommended"],
    "rules": {
      "prettier/prettier": "error",
        // 禁止行尾空格
      'no-trailing-spaces': 'error',
        // 禁止出现多行空行
      'no-multiple-empty-lines': 'error',
      // 禁止在单行内非缩进情况出现多个空格
      'no-multi-spaces': 'error',
      //  使用'==='来代替'=='
      'eqeqeq': 'error',
      // 禁止重复导入
      'no-duplicate-imports': 'error',
      // 函数名后不需要空格
      'space-before-function-paren': ["error", {"anonymous": "never", "named": "never", "asyncArrow": "never"}],
      // 禁止在生产环境出现alert
      'no-alert':  process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unused-vars': false,
    }
}