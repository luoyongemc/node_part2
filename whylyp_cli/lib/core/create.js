const {program} = require('commander');

const {
    createProjectAction,
    addCpnAction,
    addPageAndRouteAction,
    addStoreAction
} = require('./actions')


const createCommands = () => {
    program
     .command('create <project> [others...]')
     .description('clone a repository into a folder')
     .action(createProjectAction);

    program
    .command('addcpn <name>')
    .description('add vue component,例如:why addcpn HelloWorld [-d src/components]')
    .action((name) => {
        addCpnAction(name,program.opts().dest || 'src/components');
    });

    program
    .command('addPage <page>')
    .description('add vue page and router,例如:why addPage Home [-d src/pages]')
    .action((page) => {
        addPageAndRouteAction(page,program.opts().dest || 'src/pages');
    });

    program
    .command('addstore <store>')
    .description('add store,例如:why addPage Home [-d src/pages]')
    .action((store) => {
        addStoreAction(store,program.opts().dest || 'src/store');
    });
}

module.exports = createCommands;