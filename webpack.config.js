const chalk = require('chalk');

const chalkProcessing = chalk.green.bold;

module.exports = (env) => {
  switch (env) {
    case 'production':
      console.log(chalkProcessing('=================================='));
      console.log(chalkProcessing('=  Axon Bridge Production Build  ='));
      console.log(chalkProcessing('==================================\n'));
      console.log(
        chalkProcessing(`🎬  ${env} build started, Please wait...\n`)
      );
      console.log(chalkProcessing('===============================\n\n'));
      return require('./config/webpack.prod');
      break;

    case 'staging':
      console.log(chalkProcessing('==============================='));
      console.log(chalkProcessing('=  Axon Bridge Staging Build  ='));
      console.log(chalkProcessing('===============================\n'));
      console.log(chalkProcessing(`📽  ${env} build started, Please wait...\n`));
      console.log(chalkProcessing('===============================\n\n'));
      return require('./config/webpack.staging');
      break;

    case 'development':
    default:
      console.log(chalkProcessing('==================================='));
      console.log(chalkProcessing('=  Axon Bridge Development Build  ='));
      console.log(chalkProcessing('===================================\n'));
      console.log(
        chalkProcessing(`🎨  ${env} build started, Please wait...\n`)
      );
      console.log(chalkProcessing('===============================\n\n'));
      return require('./config/webpack.dev');
      break;
  }
};
