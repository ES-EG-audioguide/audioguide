'use strict';

const AUDIOPATH = './res/audio/';

const model = {

    audioMap: new Map(
        [[1234, [
            {
                title: 'Info Codesonne',
                path: 'Codesonne_Info1.mp3',
                type: 'audio/mp3'
            },
            {
                title: 'Hinweis 1',
                path: 'Codesonne_Tipp1.mp3',
                type: 'audio/mp3'
            },
            {
                title: 'Hinweis 2',
                path: 'Codesonne_Tipp2.mp3',
                type: 'audio/mp3'
            }]
        ],
            [666, [
                {
                    title: '666',
                    path: 'test.aac',
                    type: 'audio/aac'
                }]
            ],

        ]
    ),

    getAudioObj(id, callback) {
        callback(this.audioMap.get(id));
    },
};

const presenter = {

    init() {
        presenter.initSearchbar();
    },

    initSearchbar() {
        document.getElementById("search").addEventListener("keyup", onSearchInputChar, false);
    },

    createAudioObj(audioObjId) {
        model.getAudioObj(audioObjId, function (result) {
            let page = view.renderAudioObj(result);
            helper.replace(page);
        })
    },

    clear() {
        let main = document.getElementById('content');
        let content = main.firstElementChild;
        if (content) {
            content.remove();
        }
    },

};

const view = {

    renderAudioObj(audioObj) {

        let handleEvent = function (event) {
            let target = event.target;
            if (target.tagName === "BUTTON") {
                let article = target.closest('ARTICLE');
                let views = article.querySelector('.views');
                let num = views.innerHTML.match(/\d+/);
                num++;
                views.innerHTML = views.innerHTML.replace(/\d+/, num);
                presenter.showModal(parseInt(article.id), num);
            }
        };

        let page = document.createElement('div');
        for (let sample of audioObj) {
            let sampleTemp = document.getElementById('audiosample').cloneNode(true);
            sampleTemp.removeAttribute('id');
            helper.fillInfos(sampleTemp, sample);
            page.append(sampleTemp);
        }

        page.addEventListener("click", handleEvent);
        return page;
    }

};


const helper = {

    replace(page) {
        let main = document.getElementById('content');
        let content = main.firstElementChild;
        if (content) {
            content.remove();
        }
        main.append(page);
    },

    fillInfos(temp, sample) {
        for (let sampleAttr in sample) {
            temp.innerHTML = temp.innerHTML.replace("%" + sampleAttr, sample[sampleAttr]);
        }
        temp.getElementsByTagName('audio')[0].getElementsByTagName('source')[0].src = AUDIOPATH + sample.path;
    },

};

(function () {
    window.addEventListener('DOMContentLoaded', presenter.init, false);
})();

function onSearchInputChar() {
    let searchBar = document.getElementById("search");
    let userInput = parseInt(searchBar.value);

    if (model.audioMap.has(userInput)) {
        presenter.createAudioObj(userInput);
        searchBar.classList.add("correctSearch");
        searchBar.classList.remove("wrongSearch");
    } else {
        presenter.clear();
        searchBar.classList.add("wrongSearch");
        searchBar.classList.remove("correctSearch");
    }
};