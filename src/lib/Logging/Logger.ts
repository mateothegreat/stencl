import * as chalk from 'chalk';
import { cyan } from 'chalk';
import { LogLevel } from './LogLevel';

/**
 * Global log messaging.
 */
export class Logger {
    /**
     * List of colors mapped by log level value.
     *
     * @type {chalk.Chalk[]}
     */
    public static LOG_LEVEL_COLORS = [ cyan.redBright, cyan.yellowBright, cyan.magenta, cyan.gray ];

    public static pad(str: string, padLeft = ' '): string {
        const pad = '                   ';

        return (pad + str).slice(-pad.length) + ' ';
    }

    /**
     * console.log log messages.
     *
     * @param {LogLevel} logLevel Level to output.
     * @param {string} message Message to emit.
     * @param {string} emoji (optional) Emojis make life better.
     * @param {string?} context (optional) context to prepend to message.
     */
    public static log(logLevel: LogLevel, message: string, emoji?: string, context?: string): string {
        if (!process.env.LOG_LEVEL || Number.parseInt(process.env.LOG_LEVEL) >= logLevel) {
            let str = `[${ chalk.cyan('stencl') }] ${ chalk.gray(new Date().toLocaleString()) } `;

            if (context) {
                str += `${ chalk.bgGrey(Logger.pad(context)) } `;
            }

            str += `${ Logger.LOG_LEVEL_COLORS[logLevel](LogLevel[logLevel]) }: `;

            if (emoji) {
                str += `${ emoji }`;
            }

            console.log(`${ str } ${ message }`);

            return `${ str } ${ message }`;
        }
    }

    /**
     * Wrapper method.
     *
     * @param {string} message Message to emit.
     * @param {string} emoji (optional) Emojis make life better.
     * @param {string?} context (optional) context to prepend to message.
     */
    public static error(message: string, emoji?: string, context?: string): string {
        return this.log(LogLevel.ERROR, message, emoji, context);
    }

    /**
     * Wrapper method.
     *
     * @param {string} message Message to emit.
     * @param {string} emoji (optional) Emojis make life better.
     * @param {string?} context (optional) context to prepend to message.
     */
    public static info(message: string, emoji?: string, context?: string): string {
        return this.log(LogLevel.INFO, message, emoji, context);
    }

    /**
     * Wrapper method.
     *
     * @param {string} message Message to emit.
     * @param {string} emoji Emojis make life better.
     * @param {string?} context Optional context to prepend to message.
     */
    public static debug(message: string, emoji?: string, context?: string): string {
        return this.log(LogLevel.DEBUG, message, emoji, context);
    }

    /**
     * Wrapper method.
     *
     * @param {string} message Message to emit.
     * @param {string} emoji (optional) Emojis make life better.
     * @param {string?} context (optional) context to prepend to message.
     */
    public static trace(message: string, emoji?: string, context?: string): string {
        return this.log(LogLevel.TRACE, message, emoji, context);
    }
}
