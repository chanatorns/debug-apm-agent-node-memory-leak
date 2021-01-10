const apm = require('../apm-agent-node-fork').start({
    active: true,
    serviceName: 'nah it doest real',
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:3001',
    transactionSampleRate: 1,
    // asyncHooks: false,
    logLevel: 'debug'
});

const fallBackSpan = {
    end: () => {},
    name: ''
};
apm.startSpan = () => fallBackSpan;

module.exports = apm
