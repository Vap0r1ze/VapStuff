import CommandExecutor from '../../lib/org/bukkit/command/CommandExecutor.js'
import Module from '../types/Module.js'

type Executor = CommandExecutor['onCommand']

interface ExecutorInfo {
  name: string;
}

const CMD_EXECUTORS: Map<number, [ExecutorInfo, Executor][]> = new Map()
let moduleN = 0

export function CommandHandler(cmdName: string) {
  return function handlerFactory(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor & { value?: Executor },
  ) {
    if (descriptor.value) {
      const exec = descriptor.value as Executor
      if (!CMD_EXECUTORS.has(target.registerId)) {
        // eslint-disable-next-line no-param-reassign
        target.registerId = moduleN
        moduleN += 1
        CMD_EXECUTORS.set(target.registerId, [])
      }
      const execs = CMD_EXECUTORS.get(target.registerId)
      execs.push([{
        name: cmdName,
      }, exec])
    }
  }
}

export function CommandRegister<T extends new (...args: any[]) => Module>(Constructor: T) {
  return class CommandModule extends Constructor {
    constructor(...args: any[]) {
      super(...args)

      const execs = CMD_EXECUTORS.get(Constructor.prototype.registerId)
      const oldEnable = Constructor.prototype.onEnable
      // eslint-disable-next-line no-param-reassign
      Constructor.prototype.onEnable = function onEnable(this: Module, ...args2: any[]) {
        for (const [info, exec] of execs) {
          const cmd = this.plugin.newCommand(info.name)
          cmd.setExecutor(exec.bind(this))
          this.plugin.registerCommand(cmd)
        }
        oldEnable.apply(this, args2)
      }
    }
  }
}
