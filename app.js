if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function (reg) {

        if (reg.installing) {
            console.log('Service worker installing');
        } else if (reg.waiting) {
            console.log('Service worker installed');
        } else if (reg.active) {
            console.log('Service worker active');
        }

    }).catch(function (error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
            console.log('service worker registration succeeded:', registration);
        },
        function (error) {
            console.log('service worker registration failed:', error);
        });
} else {
    console.log('service workers are not supported.');
}