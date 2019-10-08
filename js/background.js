function playNext() {
    chrome.tabs.query(
        {
            url: [
                '*://music.yandex.ru/*'
            ]
        }, function (tabs) {

            if (!tabs.length) {
                return;
            }

            chrome.tabs.executeScript(tabs[0].id, {
                code: '(' + function () {
                    document.getElementsByClassName('player-controls_radio')[0]
                      .getElementsByClassName('player-controls__btn_next')[0].click();                } + ')();'
            });
        }
    );
}

function playPause(){
    chrome.tabs.query(
        {
            url: [
                '*://music.yandex.ru/*'
            ]
        }, function (tabs) {
          console.log(tabs);
            if (!tabs.length) {
                return;
            }

          chrome.tabs.executeScript(tabs[0].id, {
              code: '(' + function () {
                  document.getElementsByClassName('player-controls_radio')[0]
                    .getElementsByClassName('player-controls__btn_play')[0].click();                } + ')();'
          });
        }
    );
}

function likeSong(){
    chrome.tabs.query(
        {
            url: [
                '*://music.yandex.ru/*'
            ]
        }, function (tabs) {
          console.log(tabs);
            if (!tabs.length) {
                return;
            }

          chrome.tabs.executeScript(tabs[0].id, {
              code: '(' + function () {
                  document.getElementsByClassName('player-controls_radio')[0]
                    .getElementsByClassName('d-like_theme-player')[0].click();                } + ')();'
          });
        }
    );
}

chrome.browserAction.onClicked.addListener(function () {
    playPause();
});

chrome.runtime.onMessage.addListener(function (msg) {
    if ((msg.type === 'setIcon')) {
        if (msg.icon === "pause") {
            chrome.browserAction.setIcon({
                path: "img/pause.svg"
            });
        } else {
            chrome.browserAction.setIcon({
                path: "img/play.svg"
            });
        }
    }
});

chrome.commands.onCommand.addListener(function (command) {
    console.log('Command: ' + command);
    if (command === 'next-track') {
        playNext();
    }
    if (command === 'play-pause') {
        playPause();
    }
    if (command === 'like-song') {
        likeSong();
    }
});

console.log('Yamu inited');