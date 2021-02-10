"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandRegister = exports.CommandHandler = void 0;
const CMD_EXECUTORS = new Map();
let moduleN = 0;
function CommandHandler(cmdName) {
    return function handlerFactory(target, propertyKey, descriptor) {
        if (descriptor.value) {
            const exec = descriptor.value;
            if (!CMD_EXECUTORS.has(target.registerId)) {
                // eslint-disable-next-line no-param-reassign
                target.registerId = moduleN;
                moduleN += 1;
                CMD_EXECUTORS.set(target.registerId, []);
            }
            const execs = CMD_EXECUTORS.get(target.registerId);
            execs.push([{
                    name: cmdName,
                }, exec]);
        }
    };
}
exports.CommandHandler = CommandHandler;
function CommandRegister(Constructor) {
    return class CommandModule extends Constructor {
        constructor(...args) {
            super(...args);
            const execs = CMD_EXECUTORS.get(Constructor.prototype.registerId);
            const oldEnable = Constructor.prototype.onEnable;
            // eslint-disable-next-line no-param-reassign
            Constructor.prototype.onEnable = function onEnable(...args2) {
                for (const [info, exec] of execs) {
                    const cmd = this.plugin.newCommand(info.name);
                    cmd.setExecutor(exec.bind(this));
                    this.plugin.registerCommand(cmd);
                }
                oldEnable.apply(this, args2);
            };
        }
    };
}
exports.CommandRegister = CommandRegister;
