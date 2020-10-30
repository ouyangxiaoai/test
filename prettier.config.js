module.exports = {
	printWidth: 200,
	tabWidth: 2,
	useTabs: true, // tab缩进
	singleQuote: true, // 单引号
	semi: false, // 去掉分号
	trailingComma: 'all', // 尾逗号
	bracketSpacing: true, // 对象空格
	endOfLine: 'auto',
	eslintIntegration: false,
	// 禁止行尾空格
	'no-trailing-spaces': 'error',
	// 禁止出现多行空行
	'no-multiple-empty-lines': 'error',
	// 禁止在单行内非缩进情况出现多个空格
	'no-multi-spaces': 'error',
	//  使用'==='来代替'=='
	eqeqeq: 'error',
}
