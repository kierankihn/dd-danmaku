const uiTimerKey = '_ui_watcher';

function start() {
    if (!window.ddd) {
        throw locales.exception.not_init;
    }
    if (!window.ddd.timers[uiTimerKey]) {
        window.ddd.timers[uiTimerKey] = setInterval(() => {
            window.ddd.client.initUI();
        }, check_interval);
    }
}

function stop() {
    if (!window.ddd) {
        throw locales.exception.not_init;
    }
    if (window.ddd.timers[uiTimerKey]) {
        clearInterval(ddd.timers[uiTimerKey]);
    }
}
